import { Container, Text } from '@chakra-ui/react'
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

const BefuPlace = () => (
  <>
    <Navigation />
    <ClassPlaceSlide1
      placeName="Studio Kura 別府校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide1-befu.jpg"
    >
      若干名の体験受付を再開中。人気教室の為、定員になり次第締め切りです。
    </ClassPlaceSlide1>
    <ClassPlaceSlide2
      placeName="Studio Kura 別府校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide2-befu.jpg"
      calendarUrl="https://online.studiokura.com/cake/class_places/calendarwidget/befu"
    ></ClassPlaceSlide2>
    <ClassPlaceSlide3
      placeName="Studio Kura 別府校"
      tagline="子ども絵画造形教室"
      bgImageUrl="placeslide3-befu.jpg"
      mapImageUrl="place-map-befu-big.jpg"
      mapUrl="https://www.google.co.jp/maps/place/%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E5%9F%8E%E5%8D%97%E5%8C%BA%E5%88%A5%E5%BA%9C%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%99%E2%88%92%EF%BC%93%EF%BC%96+%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%AA%E3%83%BC%E3%83%8D%E5%9F%8E%E5%8D%972F"
      address="〒814-0104 福岡県福岡市城南区別府３丁目９−３６ アイコリーネ城南2F　コミュニティルーム パナシェ内"
    ></ClassPlaceSlide3>
    <ClassPlaceSlideKodomo />
    <Container>
      <Footer>
        <Text>© 2009-2023 Studio Kura 絵画教室 All rights reserved</Text>
      </Footer>
    </Container>
  </>
)

export default BefuPlace
