import { Container, Text } from '@chakra-ui/react'

import { Layout } from '@/components/Layout'
import { Navigation } from '@/components/Navigation'
import {
  ClassPlaceSlide1,
  ClassPlaceSlide2,
  ClassPlaceSlide3,
  // ClassPlaceSlideOtona,
  ClassPlaceSlideKodomo
  // ClassPlaceSlideDenshi
} from '@/components/ClassPlaceSlides/'
import { Footer } from '@/components/Footer'

const KaratsuPlace = () => (
  <Layout title="Studio Kura 絵画教室 唐津校">
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 唐津校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-karatsu.jpg"
    ></ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 唐津校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-karatsu.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/karatsu"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 唐津校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-karatsu.jpg"
      mapImageUrl="place-map-karatsu-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E4%BD%90%E8%B3%80%E7%9C%8C%E5%94%90%E6%B4%A5%E5%B8%82%E4%B8%AD%E7%94%BA1868%E7%95%AA%E5%9C%B0"
      address="〒847-0051 佐賀県唐津市中町1868番地 中町Casa内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </Layout>
)

export default KaratsuPlace
