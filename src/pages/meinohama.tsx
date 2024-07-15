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

const meinohamaPlace = () => (
  <Layout title="Studio Kura 絵画教室 姪浜校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 姪浜校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-meinohama.jpg"
    >
      現在定員の為、キャンセル待ちからのご案内です
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 姪浜校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-meinohama.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/meinohama"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 姪浜校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-meinohama.jpg"
      mapImageUrl="place-map-meinohama-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E8%A5%BF%E5%8C%BA%E5%A7%AA%E3%81%AE%E6%B5%9C%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%93%EF%BC%95"
      address="〒819-0002 福岡県福岡市西区姪の浜３丁目３−３５ ハイツ千峰"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default meinohamaPlace;
