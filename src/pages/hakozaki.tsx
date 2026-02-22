import { Container } from '@chakra-ui/react';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
  // ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { fetchTopMemoFromBff } from '@/utils/classPlacePage';

const HAKOZAKI_SLUG = 'hakozaki';
const HAKOZAKI_MEMO_FALLBACK = null;

const HakozakiPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 箱崎校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-hakozaki.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-hakozaki.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/hakozaki"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 箱崎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-hakozaki.jpg"
      mapImageUrl="place-map-hakozaki-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%9D%B1%E5%8C%BA%E7%AE%B1%E5%B4%8E1-45-25"
      address="812-0053 福岡市東区箱崎1-45-25（筥崎宮参道沿い）"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  // Always render with the latest memo via Next.js BFF route.
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, HAKOZAKI_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  console.error('[hakozaki-page] class place api unavailable', {
    slug: HAKOZAKI_SLUG,
    requestId: result.requestId,
    endpoint: result.endpoint,
    status: result.status,
    error: result.error,
  });
  return {
    props: {
      topMemo: HAKOZAKI_MEMO_FALLBACK,
    },
  };
};

export default HakozakiPlace;
