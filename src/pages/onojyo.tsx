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

const ONOJYO_SLUG = 'onojyo';
const ONOJYO_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, ONOJYO_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: ONOJYO_MEMO_FALLBACK,
    },
  };
};


const OnojyoPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 大野城校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-onojyo.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-onojyo.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/onojyo"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 大野城校"
      tagline="子ども絵画造形教室"
      mapImageUrl="place-map-onojyo-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92816-0935+%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%A4%A7%E9%87%8E%E5%9F%8E%E5%B8%82%E9%8C%A6%E7%94%BA%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%91"
      address="〒816-0935 福岡県大野城市錦町４丁目１−１ イオン大野城ショッピングセンター カルチャータウン イオン大野城校内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default OnojyoPlace;
