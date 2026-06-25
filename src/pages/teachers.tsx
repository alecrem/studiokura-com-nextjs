import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import type { TeacherData } from '@/pages/api/get-teacher-info';
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const dummyTeacher: TeacherData = {
  slug: '読み込み中・・・',
};
const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const getTeacherThumbnailSrc = (teacher: TeacherData) =>
  teacher.thumbnailImage ??
  `https://${cdnDomain}/${cdnDirectory}teachers-${teacher.slug}-thumbnail.jpg`;

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
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          講師一覧
        </Heading>
      </Container>
      <Container>
        {teachersData[0].name == undefined ? (
          <Spinner />
        ) : (
          <SimpleGrid columns={{ sm: 3, md: 4 }}>
            {teachersData.map((teacher) => (
              <NextLink href={`/teachers/${teacher.slug}`}>
                <Card maxW={150} m={4}>
                  <CardHeader p={0}>
                    <Image
                      src={getTeacherThumbnailSrc(teacher)}
                      alt={`${teacher.name}の写真`}
                      mb={4}
                    />
                  </CardHeader>
                  <CardBody>{teacher.name}</CardBody>
                </Card>
              </NextLink>
            ))}
          </SimpleGrid>
        )}
        <Footer />
      </Container>
    </Layout>
  );
};

export default TeacherList;
