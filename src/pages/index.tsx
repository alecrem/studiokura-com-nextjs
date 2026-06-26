import { Box, Button, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

import {
  BefuCard,
  Hakozaki2Card,
  HakozakiCard,
  HashimotoCard,
  ItoshimaCard,
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
  TomariCard,
} from '@/components/ClassPlaces';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { CardStack, Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';

const courseCards = [
  {
    title: '子ども絵画造形教室',
    description:
      '年齢や発達段階に合わせたレッスンをご案内します。描くこと、つくることを通じて表現する楽しさを育てます。',
    href: '/kids',
    buttonText: '子ども教室を見る',
    imageSrc: '/images/card-kodomo.png',
    localImage: true,
  },
  {
    title: '大人の絵画教室',
    description:
      '初心者から経験者まで、自分のペースで学べます。落ち着いた環境で絵を描く時間を楽しみたい方におすすめです。',
    href: '/adults',
    buttonText: '大人教室を見る',
    imageSrc: '/images/card-otona.jpg',
    localImage: true,
  },
  {
    title: '園・施設向けレッスン',
    description:
      '幼稚園・保育園・施設向けの導入案内はこちらです。現場に合わせた造形レッスンの導入をご相談いただけます。',
    href: '/kindergartens',
    buttonText: '園・施設向け案内を見る',
    imageSrc: '/images/card-kindergartens.png',
    localImage: true,
  },
  {
    title: '電子工作教室',
    description:
      'プログラミングとものづくりを楽しく学べます。手を動かしながら発想をかたちにしたい方におすすめです。',
    href: '/programming',
    buttonText: '電子工作教室を見る',
    imageSrc: '/images/card-denshi.png',
    localImage: true,
  },
];

const TopCourseCard = ({
  title,
  description,
  href,
  buttonText,
  imageSrc,
  localImage,
}: (typeof courseCards)[number]) => {
  const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
  const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';
  const resolvedImageSrc = localImage
    ? imageSrc
    : `https://${cdnDomain}/${cdnDirectory}${imageSrc}`;

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow="xl"
      borderRadius="xl"
      overflow="hidden"
    >
      <Image
        src={resolvedImageSrc}
        alt={`${title}の写真`}
        w="full"
        h="230px"
        objectFit="cover"
      />
      <Box p={[4, 5]}>
        <Heading size="md" mb={3}>
          {title}
        </Heading>
        <Text color="gray.700" mb={5} minH={['auto', '72px']}>
          {description}
        </Text>
        <Button
          as={NextLink}
          href={href}
          w="full"
          variant="outline"
          colorScheme={title === '子ども絵画造形教室' ? 'blue' : undefined}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

const Index = () => (
  <Layout>
    <Navigation />
    <Container zIndex={0}>
      <Box mt={[6, 8]} mb={[8, 10]}>
        <Text
          color="gray.700"
          fontSize="sm"
          fontWeight="bold"
          letterSpacing="0.06em"
          mb={2}
        >
          Studio Kura絵画教室
        </Text>
        <Heading size={['md', 'lg']} mb={2}>
          創造力を育てたい方も、絵を楽しみたい方も
        </Heading>
        <Text color="gray.700" mb={5}>
          Studio Kura絵画教室は、子どもから大人まで通える絵画・造形教室です。目的や興味に合わせて、ぴったりのコースをお選びいただけます。
        </Text>
        <SimpleGrid columns={[1, 1, 2]} spacing={[5, 6]}>
          {courseCards.map((card) => (
            <TopCourseCard key={card.title} {...card} />
          ))}
        </SimpleGrid>

        <Box mt={6} pt={5} borderTopWidth="1px" borderTopColor="gray.200">
          <Text color="gray.700" fontSize="sm" mb={3} fontWeight="bold">
            まず確認したい方はこちら
          </Text>
          <Stack direction={['column', 'column', 'row']} spacing={3}>
            <Button
              as={NextLink}
              href="/trial"
              colorScheme="blue"
              size="lg"
              minH="52px"
              flex={1}
            >
              体験レッスン
            </Button>
            <Button
              as={NextLink}
              href="/pricing"
              variant="outline"
              size="lg"
              minH="52px"
              flex={1}
            >
              料金
            </Button>
            <Button
              as={NextLink}
              href="/classrooms"
              variant="outline"
              size="lg"
              minH="52px"
              flex={1}
            >
              教室一覧
            </Button>
          </Stack>
        </Box>
      </Box>

      <Heading mt="2em">教室一覧</Heading>
      <CardStack>
        <ItoshimaCard />
        <NishijinCard />
        <TakeoCard />
      </CardStack>
      <CardStack>
        <HakozakiCard />
        <Hakozaki2Card />
        <HashimotoCard />
      </CardStack>
      <CardStack>
        <MeinohamaCard />
        <SarayamaCard />
        <MomochiCard />
      </CardStack>
      <CardStack>
        <KashiiCard />
        <MotookaCard />
        <BefuCard />
      </CardStack>
      <CardStack>
        <OnojyoCard />
        <NagazumiCard />
        <TomariCard />
      </CardStack>
      <CardStack>
        <KurumeCard />
        <OnlineCard />
      </CardStack>
      <Footer />
    </Container>
  </Layout>
);

export default Index;
