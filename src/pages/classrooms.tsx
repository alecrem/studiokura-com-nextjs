import {
  BefuCard,
  HakozakiCard,
  Hakozaki2Card,
  HashimotoCard,
  ItoshimaCard,
  KaratsuCard,
  KashiiCard,
  KurumeCard,
  MeinohamaCard,
  MomochiCard,
  MotookaCard,
  NagazumiCard,
  NishijinCard,
  OnlineCard,
  OnojyoCard,
  SarayamaCard,
  TakeoCard,
  TomariCard
} from '@/components/ClassPlaces';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { CardStack, Layout, ScrollLink } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Box, Heading } from '@chakra-ui/react';

const Classrooms = () => (
  <Layout title="教室一覧｜Studio Kura 絵画美術教室（福岡県）">
    <Navigation />
    <Container height={'300px'} minW={'100%'}>
      <Heading mt={'1em'} size={['2xl', '4xl', '4xl']}>
        Studio Kura 教室一覧
      </Heading>
    </Container>
    <Container>
      <Heading size={'xl'}>地域で探す</Heading>
      <Box mt={8} maxW={['100%', '80%', '60%']}>
        <ScrollLink className={'btn'} href={'#itoshima'}>
          糸島市
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#higashiku'}>
          福岡市東区
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#minamiku'}>
          福岡市南区
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#sawaraku'}>
          福岡市早良区
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#nishiku'}>
          福岡市西区
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#jonanku'}>
          福岡市城南区
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#onojyo'}>
          福岡県大野城市
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#kurume'}>
          福岡県久留米市
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#karatsu'}>
          佐賀県唐津市
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#takeo'}>
          佐賀県武雄市
        </ScrollLink>
        <ScrollLink className={'btn'} href={'#online'}>
          オンライン
        </ScrollLink>
      </Box>
      <Heading mt={16} size={'xl'} id={'itoshima'}>
        糸島市
      </Heading>
      <CardStack>
        <ItoshimaCard />
        <TomariCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'higashiku'}>
        福岡市東区
      </Heading>
      <CardStack>
        <KashiiCard />
        <HakozakiCard />
        <Hakozaki2Card />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'minamiku'}>
        福岡市南区
      </Heading>
      <CardStack>
        <SarayamaCard />
        <NagazumiCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'sawaraku'}>
        福岡市早良区
      </Heading>
      <CardStack>
        <NishijinCard />
        <MomochiCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'nishiku'}>
        福岡市西区
      </Heading>
      <CardStack>
        <MotookaCard />
        <MeinohamaCard />
        <HashimotoCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'jonanku'}>
        福岡市城南区
      </Heading>
      <CardStack>
        <BefuCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'onojyo'}>
        福岡県大野城市
      </Heading>
      <CardStack>
        <OnojyoCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'kurume'}>
        福岡県久留米市
      </Heading>
      <CardStack>
        <KurumeCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'karatsu'}>
        佐賀県唐津市
      </Heading>
      <CardStack>
        <KaratsuCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'takeo'}>
        佐賀県武雄市
      </Heading>
      <CardStack>
        <TakeoCard />
      </CardStack>
      <Heading mt={16} size={'xl'} id={'online'}>
        オンライン
      </Heading>
      <CardStack>
        <OnlineCard />
      </CardStack>
      <Footer />
    </Container>
  </Layout>
);

export default Classrooms;
