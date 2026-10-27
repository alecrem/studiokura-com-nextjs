import { Container } from '@chakra-ui/react';
import { type InferGetServerSidePropsType } from 'next';

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
import { getClassPlaceServerSideProps } from '@/utils/classPlacePage';

const ONLINE_SLUG = 'online';
const ONLINE_MEMO_FALLBACK = null;

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
      calendarUrl="https://app.studiokura.com/widgets/class_places/calendarwidget/online"
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

export const getServerSideProps = getClassPlaceServerSideProps(
  ONLINE_SLUG,
  ONLINE_MEMO_FALLBACK
);

export default OnlinePlace;
