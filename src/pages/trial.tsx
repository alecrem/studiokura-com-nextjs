import { Container } from '@/components/Container';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import Iframe from 'react-iframe';

const Trial = () => (
  <Layout title="体験レッスン｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height={'100vh'} width={'100vw'} px={'0'}>
      <Iframe
        url={
          'https://app.studiokura.com/forms/class_reservations/taiken'
        }
        width={'100%'}
        height={'100%'}
        display={'block'}
        position={'relative'}
      />
    </Container>
  </Layout>
);

export default Trial;
