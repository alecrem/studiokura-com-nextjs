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

const NAGAZUMI_SLUG = 'nagazumi';
const NAGAZUMI_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, NAGAZUMI_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: NAGAZUMI_MEMO_FALLBACK,
    },
  };
};


const NagazumiPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 長住校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 長住校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-nagazumi.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 長住校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-nagazumi.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/nagazumi"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 長住校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-nagazumi.jpg"
      mapImageUrl="place-map-nagazumi-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E3%80%92815-0075+%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%97%E5%8C%BA%E9%95%B7%E4%B8%98%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%91%EF%BC%93%E2%88%92%EF%BC%91%E3%80%80%E3%82%A4%E3%83%88%E3%83%9E%E3%83%B3%E3%82%B9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E9%95%B7%E4%BD%8F"
      address="〒815-0075 福岡県福岡市南区長丘１丁目１３−１ イトマンスイミングスクール長住校　内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default NagazumiPlace;
