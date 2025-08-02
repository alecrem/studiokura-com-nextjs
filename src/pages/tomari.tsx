import { Container } from '@chakra-ui/react';

import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo,
} from '@/components/ClassPlaceSlides/';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const TomariPlace = () => (
  <Layout title="Studio Kura 絵画教室 泊校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 泊校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-tomari.jpg"
    >
      {/* メモ（トップスライドに反映） */}
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 泊校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-tomari.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/tomari"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 泊校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-tomari.jpg"
      mapImageUrl="place-map-tomari-big.jpg"
      mapUrl="https://www.google.com/maps/place/%E6%B3%8A%E4%B8%80%E5%85%AC%E6%B0%91%E9%A4%A8/@33.5473741,130.1354197,13z/data=!4m10!1m2!2m1!1z5rOK5YWs5rCR6aSo!3m6!1s0x3541e9d80d66c8db:0x654e3c719518bac8!8m2!3d33.5769699!4d130.2088542!15sCgzms4rlhazmsJHppKiSARBjb21tdW5pdHlfY2VudGVyqgFJEAEqESIN5rOKIOWFrOawkemkqCgIMh8QASIbN_5HvZwp8kCHuD72dzF9dXafQczZer1DboNjMhEQAiIN5rOKIOWFrOawkemkqOABAA!16s%2Fg%2F11trfk1ypj?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
      address="〒819-1111 福岡県糸島市泊１２１６−２"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default TomariPlace;
