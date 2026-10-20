import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import type { TeacherData } from '@/pages/api/get-teacher-info';
import {
  AspectRatio,
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const dummyTeacher: TeacherData = {
  slug: '読み込み中・・・',
};
const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const resolveImageSrc = (imageSrc: string) =>
  imageSrc.startsWith('/')
    ? imageSrc
    : `https://${cdnDomain}/${cdnDirectory}${imageSrc}`;

// 一覧では大きく表示するため、サムネイル（正方形・小さめ）ではなくプロフィール写真を使う
const getTeacherPhotoSrc = (teacher: TeacherData) =>
  teacher.images?.length
    ? resolveImageSrc(teacher.images[0])
    : (teacher.thumbnailImage ??
      `https://${cdnDomain}/${cdnDirectory}teachers-${teacher.slug}-thumbnail.jpg`);

// 紹介文の最初の一文（出身地など）を名前の下に添える
const getTeacherTagline = (teacher: TeacherData) => {
  const text = (teacher.content ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
  return text.split(/[\n。]/)[0].trim();
};

const TeacherCard = ({ teacher }: { teacher: TeacherData }) => (
  <LinkBox
    as="article"
    role="group"
    bg="white"
    _dark={{ bg: 'gray.800' }}
    borderRadius="xl"
    overflow="hidden"
    boxShadow="md"
    transition="box-shadow 0.2s ease, transform 0.2s ease"
    _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
  >
    <AspectRatio ratio={3 / 4} overflow="hidden">
      <Image
        src={getTeacherPhotoSrc(teacher)}
        alt={`${teacher.name}の写真`}
        objectFit="cover"
        objectPosition="center top"
        transition="transform 0.4s ease"
        _groupHover={{ transform: 'scale(1.05)' }}
      />
    </AspectRatio>
    <Box px={[3, 4]} py={[3, 4]}>
      <Heading as="h2" size={['sm', 'md']} letterSpacing="0.04em">
        <LinkOverlay as={NextLink} href={`/teachers/${teacher.slug}`}>
          {teacher.name}
        </LinkOverlay>
      </Heading>
      <Text
        mt={1}
        fontSize={['xs', 'sm']}
        color="gray.600"
        _dark={{ color: 'gray.400' }}
        noOfLines={1}
      >
        {getTeacherTagline(teacher)}
      </Text>
    </Box>
  </LinkBox>
);

const TeacherList = () => {
  const [teachersData, setTeachersData] = useState<TeacherData[]>([
    dummyTeacher,
  ]);
  const fetchTeachers = async () => {
    const teacherReq = await fetch('/api/get-teachers-info');
    setTeachersData(await teacherReq.json());
  };
  useEffect(() => {
    if (teachersData[0].slug == dummyTeacher.slug) {
      fetchTeachers();
    }
  }, []);

  return (
    <Layout title="講師の紹介｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container>
        <Box mt={[6, 8]} mb={[6, 8]} w="full" maxW="1080px">
          <Text
            color="gray.700"
            _dark={{ color: 'gray.300' }}
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="0.06em"
            mb={2}
          >
            Studio Kura絵画教室
          </Text>
          <Heading size={['lg', 'xl']} mb={2}>
            講師一覧
          </Heading>
          <Text color="gray.700" _dark={{ color: 'gray.300' }}>
            美術を学び、作品をつくり続けている講師が、一人ひとりの表現に寄り添ってレッスンを行います。
          </Text>
        </Box>
        <Box w="full" maxW="1080px" mb={[10, 12]}>
          {teachersData[0].name == undefined ? (
            <Spinner />
          ) : (
            <SimpleGrid columns={[2, 2, 3, 4]} spacing={[4, 5, 6]}>
              {teachersData.map((teacher) => (
                <TeacherCard key={teacher.slug} teacher={teacher} />
              ))}
            </SimpleGrid>
          )}
        </Box>
        <Footer />
      </Container>
    </Layout>
  );
};

export default TeacherList;
