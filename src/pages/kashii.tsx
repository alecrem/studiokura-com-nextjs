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

const KASHII_SLUG = 'kashii';
const KASHII_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, KASHII_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: KASHII_MEMO_FALLBACK,
    },
  };
};


const KashiiPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 香椎校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 香椎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-kashii.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 香椎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-kashii.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/kashi"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 香椎校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-kashii.jpg"
      mapImageUrl="place-map-kashii-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92813-0016+%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%9D%B1%E5%8C%BA%E9%A6%99%E6%A4%8E%E6%B5%9C%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%92%E2%88%92%EF%BC%91"
      address="〒813-0016 福岡県福岡市東区香椎浜３丁目１２−１ イオン香椎浜店"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default KashiiPlace;
