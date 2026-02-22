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

const MOTOOKA_SLUG = 'motooka';
const MOTOOKA_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, MOTOOKA_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: MOTOOKA_MEMO_FALLBACK,
    },
  };
};


const MotookaPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 元岡校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 元岡校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-motooka.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 元岡校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-motooka.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/motooka"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 元岡校"
      tagline="子ども絵画造形教室"
      mapImageUrl="place-map-motooka-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E5%8C%BA%E5%85%83%E5%B2%A1%EF%BC%91%EF%BC%95%EF%BC%99%EF%BC%97"
      address="〒819-0385 福岡県福岡市西区元岡１５９７ がやがや門内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default MotookaPlace;
