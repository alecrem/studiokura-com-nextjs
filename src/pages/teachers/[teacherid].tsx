import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import type { TeacherData } from '@/pages/api/get-teacher-info';
import { Box, Button, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const dummyTeacher: TeacherData = {
  slug: '読み込み中・・・',
};
const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const getTeacherImageSrc = (imageSrc: string) =>
  imageSrc.startsWith('/')
    ? imageSrc
    : `https://${cdnDomain}/${cdnDirectory}${imageSrc}`;

const TeacherProfilePage = () => {
  const router = useRouter();
  const [teacherData, setTeacherData] = useState<TeacherData>(dummyTeacher);
  const [teacherId, setTeacherId] = useState<string>();
  const fetchTeacher = async (teacherid: string) => {
    const teacherReq = await fetch(
      `/api/get-teacher-info?teacherid=${teacherid}`
    );
    setTeacherData(await teacherReq.json());
  };
  useEffect(() => {
    if (router.query.teacherid == undefined) return;
    const teacherid = router.query.teacherid as string;
    setTeacherId(teacherid);
    if (teacherData.slug == dummyTeacher.slug) {
      fetchTeacher(teacherid);
    }
  }, [router]);

  return (
    <Layout title={`${teacherId}｜Studio Kura 絵画美術教室（福岡県）`}>
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          講師紹介: {teacherData.name}
        </Heading>
      </Container>
      <Container>
        <Button
          as={NextLink}
          href="/teachers"
          mb={6}
          size="sm"
          variant="outline"
        >
          ← 講師一覧へ戻る
        </Button>
        {teacherData?.images?.length && teacherData.images.length < 2 ? (
          /* 写真が一つだけの場合、その写真だけを表示 */
          <Image
            src={getTeacherImageSrc(teacherData.images[0])}
            alt={`${teacherData.name}の写真`}
            maxW={['100%', '420px']}
            mb={8}
          />
        ) : (
          /* 写真が二つ以上の場合、グリッドに並べる */
          <SimpleGrid columns={[1, 2]} mb={8}>
            {teacherData.images?.map((imageSrc: string) => (
              <Image
                src={getTeacherImageSrc(imageSrc)}
                alt={`${teacherData.name}の写真`}
                p={4}
              />
            ))}
          </SimpleGrid>
        )}
        <Box
          dangerouslySetInnerHTML={{ __html: teacherData.content ?? '' }}
          maxW={['100%', '80%', '70%', '60%', '800px']}
          px={8}
        />
        <Footer />
      </Container>
    </Layout>
  );
};

export default TeacherProfilePage;
