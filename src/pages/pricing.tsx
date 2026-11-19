import { TrialButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { PricingBox } from '@/components/Pricing';
import { pricing } from '@/data/pricing';
import { Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { LuChevronRight } from 'react-icons/lu';

const Pricing = () => (
  <Layout title="受講料｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
    <Navigation />
    <Container height={'300px'} minW={'100%'}>
      <Heading mt={'1em'} size={['2xl', '4xl', '4xl']}>
        Studio Kura絵画教室 料金表
      </Heading>
    </Container>
    <Container>
      <Text>絵画教室から電子工作室までどの教室も同一料金です。</Text>
      <PricingBox />
      <Text>入会金はお一人{pricing.nyukai.toLocaleString()}円です。</Text>
      <Text>体験レッスンは{pricing.taiken.toLocaleString()}円です。</Text>
      <Heading size={'md'} my={'1em'}>
        お支払い方法
      </Heading>
      <List>
        <ListItem mb={4}>
          <ListIcon>
            <LuChevronRight />
          </ListIcon>
          受講料は口座振替にてお支払ください。
        </ListItem>
      </List>
      <Heading size={'md'} my={'1em'}>
        受講振替
      </Heading>
      <Text>
        急な都合で受講が出来なくなった場合は受講時間3時間前までにご連絡いただければ受講の振替が出来ます。
      </Text>
      <TrialButton text={'体験レッスンのお申し込み'} mt={4} />
      <Footer />
    </Container>
  </Layout>
);

export default Pricing;
