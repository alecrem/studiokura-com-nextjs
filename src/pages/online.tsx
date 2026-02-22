import { Container } from '@chakra-ui/react';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  // ClassPlaceSlideKodomo,
  ClassPlaceSlideDenshi,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { fetchTopMemoFromBff } from '@/utils/classPlacePage';

const ONLINE_SLUG = 'online';
const ONLINE_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, ONLINE_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: ONLINE_MEMO_FALLBACK,
    },
  };
};


const OnlinePlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 オンライン校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide1-online.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide2-online.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/online"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura オンライン校"
      tagline="電子工作教室"
      bgImageUrl="placeslide3-online.jpg"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default OnlinePlace;
