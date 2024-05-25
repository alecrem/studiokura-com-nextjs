import { Heading, Center } from '@chakra-ui/react'
import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { KindergartenForm } from '@/components/KindergartenForm'

const RequestDocs = () => {
  return (
    <Layout title="園内レッスン 資料請求フォーム｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          園内レッスン 資料請求フォーム
        </Heading>
      </Container>
      <Center w={'100%'}>
        <Container w={'100%'}>
          <KindergartenForm variant="request-docs" />
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  )
}

export default RequestDocs
