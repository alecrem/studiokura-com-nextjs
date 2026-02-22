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

const NISHIJIN_SLUG = 'nishijin';
const NISHIJIN_MEMO_FALLBACK = null;

export const getServerSideProps: GetServerSideProps<{
  topMemo: string | null;
}> = async (context) => {
  context.res.setHeader('Cache-Control', 'no-store, max-age=0');
  const result = await fetchTopMemoFromBff(context.req, NISHIJIN_SLUG);
  if (result.topMemo) {
    return {
      props: {
        topMemo: result.topMemo,
      },
    };
  }

  return {
    props: {
      topMemo: NISHIJIN_MEMO_FALLBACK,
    },
  };
};


const NishijinPlace = ({
  topMemo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Layout title="Studio Kura 絵画教室 西新校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide1-nishijin.jpg"
    >
      {topMemo}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide2-nishijin.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/nishijin"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 西新校"
      tagline="大人の絵画教室・子ども絵画造形教室・電子工作教室"
      bgImageUrl="placeslide3-nishijin.jpg"
      mapImageUrl="place-map-nishijin-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E6%96%B01%E4%B8%81%E7%9B%AE11-27+"
      address="福岡県福岡市西新1丁目11-27　ロフティ西新903号室"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideOtona />
    <ClassPlaceSlideKodomo />
    <ClassPlaceSlideDenshi />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default NishijinPlace;
