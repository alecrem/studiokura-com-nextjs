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

const SARAYAMA_SLUG = 'sarayama';
const SARAYAMA_MEMO_FALLBACK = null;

const SarayamaPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 皿山校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-sarayama.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-sarayama.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/sarayama"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 皿山校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-sarayama.jpg"
      mapImageUrl="place-map-sarayama-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%8D%97%E5%8C%BA%E7%9A%BF%E5%B1%B1%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%91%E2%88%92%EF%BC%95%EF%BC%97+"
      address="福岡県福岡市南区皿山２丁目１−５７ ＹＯＧＩＮＩ"
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
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, SARAYAMA_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  console.error('[sarayama-page] class place api unavailable', {
    slug: SARAYAMA_SLUG,
    requestId: result.requestId,
    endpoint: result.endpoint,
    status: result.status,
    error: result.error,
  });
  return {
    props: {
      topMemo: SARAYAMA_MEMO_FALLBACK,
    },
  };
};

export default SarayamaPlace;
