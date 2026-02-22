import { Container } from '@chakra-ui/react';
import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  ClassPlaceSlideDenshi,
  ClassPlaceSlideKodomo,
  ClassPlaceSlideOtona,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { fetchTopMemoFromBff } from '@/utils/classPlacePage';

const ITOSHIMA_SLUG = 'itoshima';
const ITOSHIMA_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, ITOSHIMA_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: ITOSHIMA_MEMO_FALLBACK,
    },
  };
};


const ItoshimaPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 糸島校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide1-itoshima.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide2-itoshima.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/itoshima"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 糸島校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide3-itoshima.jpg"
      mapImageUrl="place-map-itoshima-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%B3%B8%E5%B3%B6%E5%B8%82%E4%BA%8C%E4%B8%88%E6%9D%BE%E6%9C%AB586"
      address="〒819-1613 福岡県糸島市二丈松末586（一貴山駅からの送迎しております）"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default ItoshimaPlace;
