import { Container } from '@chakra-ui/react';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { fetchTopMemoFromBff } from '@/utils/classPlacePage';

const HAKOZAKI2_SLUG = 'hakozaki2';
const HAKOZAKI2_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, HAKOZAKI2_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: HAKOZAKI2_MEMO_FALLBACK,
    },
  };
};


const Hakozaki2Place = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 箱崎第二校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 箱崎第二校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-hakozaki2.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 箱崎第二校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-hakozaki2.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/hakozaki2"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 箱崎第二校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-hakozaki2.jpg"
      mapImageUrl="place-map-hakozaki2-big.jpg"
      mapUrl="http://www.google.co.jp/maps/place/%E3%80%92812-0053%20%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%9D%B1%E5%8C%BA%E7%AE%B1%E5%B4%8E%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%90%E2%88%92%EF%BC%93%EF%BC%95"
      address="福岡県福岡市東区箱崎２丁目１０−３５"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default Hakozaki2Place;
