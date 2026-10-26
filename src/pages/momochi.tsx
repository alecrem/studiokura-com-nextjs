import { Container } from '@chakra-ui/react';

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

const MomochiPlace = () => (
  <Layout title="Studio Kura 絵画教室 百道校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 百道校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-momochi.jpg"
    >
      
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 百道校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-momochi.jpg"
      calendarUrl="https://app.studiokura.com/widgets/class_places/calendarwidget/momochi"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 百道校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-momochi.jpg"
      mapImageUrl="place-map-momochi-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E6%97%A9%E8%89%AF%E5%8C%BA%E7%99%BE%E9%81%93%E6%B5%9C%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%97%EF%BC%90+%E3%82%A4%E3%83%88%E3%83%9E%E3%83%B3%E3%82%B9%E3%82%A4%E3%83%9F%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB%E7%99%BE%E9%81%93%E6%B5%9C"
      address="福岡県福岡市早良区百道浜１丁目３−７０ イトマンスイミングスクール百道浜内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default MomochiPlace;
