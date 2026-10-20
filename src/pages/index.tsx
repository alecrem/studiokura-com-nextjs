import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { type ComponentType, type ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { LuCalendarClock, LuGlobe, LuMapPin, LuPalette } from 'react-icons/lu';

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
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { TeacherCard } from '@/components/TeacherCard';
import { visibleTeachers } from '@/data/teachers';

type CourseCard = {
  title: string;
  description: string;
  href: string;
  buttonText: string;
  imageSrc: string;
  localImage: boolean;
  objectPosition: string;
};

const courseCards: CourseCard[] = [
  {
    title: '子ども絵画造形教室',
    description:
      '年齢や発達段階に合わせたレッスンをご案内します。描くこと、つくることを通じて表現する楽しさを育てます。',
    href: '/kids',
    buttonText: '子ども教室を見る',
    imageSrc: '/images/card-kodomo.png',
    localImage: true,
    objectPosition: 'center 30%',
  },
  {
    title: '大人の絵画教室',
    description:
      '初心者から経験者まで、自分のペースで学べます。落ち着いた環境で絵を描く時間を楽しみたい方におすすめです。',
    href: '/adults',
    buttonText: '大人教室を見る',
    imageSrc: '/images/card-otona.jpg',
    localImage: true,
    objectPosition: 'center 38%',
  },
  {
    title: '園・施設向けレッスン',
    description:
      '幼稚園・保育園・施設向けの導入案内はこちらです。現場に合わせた造形レッスンの導入をご相談いただけます。',
    href: '/kindergartens',
    buttonText: '園・施設向け案内を見る',
    imageSrc: '/images/card-kindergartens.png',
    localImage: true,
    objectPosition: 'center 48%',
  },
  {
    title: '電子工作教室',
    description:
      'プログラミングとものづくりを楽しく学べます。手を動かしながら発想をかたちにしたい方におすすめです。',
    href: '/programming',
    buttonText: '電子工作教室を見る',
    imageSrc: '/images/card-denshi.png',
    localImage: true,
    objectPosition: 'center 40%',
  },
];

type Reason = {
  icon: IconType;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: LuCalendarClock,
    title: '2009年から続く教室',
    description:
      '糸島市二丈を拠点に、2009年から地域の子どもから大人までアートの時間を届けています。',
  },
  {
    icon: LuPalette,
    title: '作家として活動する講師',
    description:
      '美術大学などで学び、今も作品を制作・発表している講師が、一人ひとりの表現に寄り添います。',
  },
  {
    icon: LuGlobe,
    title: '世界とつながるアトリエ',
    description:
      '国内外のアーティストが滞在して制作する、アーティスト・イン・レジデンスも運営しています。',
  },
  {
    icon: LuMapPin,
    title: '通いやすい16教室',
    description:
      '糸島市・福岡市・大野城市・久留米市・佐賀県武雄市の16教室と、オンラインで開講しています。',
  },
];

type ClassPlaceArea = {
  label: string;
  places: ComponentType[];
};

// 教室一覧ページ（/classrooms）の地域分けに合わせる
const classPlaceAreas: ClassPlaceArea[] = [
  { label: '糸島市', places: [ItoshimaCard, TomariCard] },
  {
    label: '福岡市',
    places: [
      NishijinCard,
      MomochiCard,
      HakozakiCard,
      Hakozaki2Card,
      KashiiCard,
      SarayamaCard,
      NagazumiCard,
      HashimotoCard,
      MeinohamaCard,
      MotookaCard,
      BefuCard,
    ],
  },
  { label: '大野城市・久留米市', places: [OnojyoCard, KurumeCard] },
  { label: '佐賀県武雄市', places: [TakeoCard] },
  { label: 'オンライン', places: [OnlineCard] },
];

const SectionHeading = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) => (
  <Box mb={[5, 6]}>
    <Text
      color="gray.700"
      _dark={{ color: 'gray.300' }}
      fontSize="sm"
      fontWeight="bold"
      letterSpacing="0.06em"
      mb={2}
    >
      {eyebrow}
    </Text>
    <Heading as="h2" size={['md', 'lg']} mb={children ? 2 : 0}>
      {title}
    </Heading>
    {children && (
      <Text color="gray.700" _dark={{ color: 'gray.300' }}>
        {children}
      </Text>
    )}
  </Box>
);

const TopCourseCard = ({
  title,
  description,
  href,
  buttonText,
  imageSrc,
  localImage,
  objectPosition,
}: CourseCard) => {
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
      <AspectRatio ratio={16 / 9}>
        <Image
          src={resolvedImageSrc}
          alt={`${title}の写真`}
          w="full"
          h="full"
          objectFit="cover"
          objectPosition={objectPosition}
        />
      </AspectRatio>
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
  <Layout description="福岡県糸島市・福岡市・大野城市・久留米市・佐賀県武雄市の16教室とオンラインで開講する絵画造形教室 Studio Kura。子ども絵画造形教室、大人の絵画教室、電子工作教室、幼稚園・保育園向けレッスンを、作家として活動する講師が担当しています。">
    <Navigation />
    <Container zIndex={0}>
      <Box mt={[6, 8]} mb={[8, 10]} w="full" maxW="1080px">
        <Heading
          as="h1"
          color="gray.700"
          _dark={{ color: 'gray.300' }}
          fontSize="sm"
          fontWeight="bold"
          letterSpacing="0.06em"
          mb={2}
        >
          福岡・糸島の絵画造形教室 Studio Kura
        </Heading>
        <Heading as="h2" size={['md', 'lg']} mb={2}>
          創造力を育てたい方も、絵を楽しみたい方も
        </Heading>
        <Text color="gray.700" mb={5}>
          Studio
          Kura絵画教室は、子どもから大人まで通える絵画・造形教室です。目的や興味に合わせて、ぴったりのコースをお選びいただけます。
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

      <Box w="full" maxW="1080px" mb={[12, 16]}>
        <SectionHeading
          eyebrow="Studio Kuraが選ばれる理由"
          title="アートを、もっと身近に"
        >
          描く楽しさを入り口に、見る力・考える力・表現する力を育てます。
        </SectionHeading>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing={[4, 5]}>
          {reasons.map((reason) => (
            <Box
              key={reason.title}
              bg="white"
              _dark={{ bg: 'gray.800' }}
              borderRadius="xl"
              boxShadow="md"
              p={[5, 6]}
            >
              <Flex
                w={12}
                h={12}
                mb={4}
                align="center"
                justify="center"
                borderRadius="full"
                bg="blue.50"
                color="blue.600"
                _dark={{ bg: 'blue.900', color: 'blue.200' }}
              >
                <Icon as={reason.icon} boxSize={6} />
              </Flex>
              <Heading as="h3" size="sm" mb={2}>
                {reason.title}
              </Heading>
              <Text
                fontSize="sm"
                color="gray.700"
                _dark={{ color: 'gray.300' }}
              >
                {reason.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box w="full" maxW="1080px" mb={[12, 16]}>
        <SectionHeading eyebrow="講師紹介" title="講師たち">
          作家として制作を続ける講師が、レッスンを担当しています。
        </SectionHeading>
        <SimpleGrid columns={[2, 2, 4]} spacing={[4, 5, 6]}>
          {visibleTeachers.slice(0, 4).map((teacher) => (
            <TeacherCard key={teacher.slug} teacher={teacher} headingAs="h3" />
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={[6, 8]}>
          <Button as={NextLink} href="/teachers" variant="outline" size="lg">
            講師一覧を見る（{visibleTeachers.length}名）
          </Button>
        </Flex>
      </Box>

      <Box w="full" maxW="1080px">
        <SectionHeading eyebrow="教室一覧" title="お近くの教室を探す" />
        <Tabs variant="soft-rounded" colorScheme="blue" isFitted={false}>
          <TabList flexWrap="wrap" gap={2}>
            {classPlaceAreas.map((area) => (
              <Tab key={area.label} fontSize={['sm', 'md']}>
                {area.label}（{area.places.length}）
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {classPlaceAreas.map((area) => (
              <TabPanel key={area.label} px={0}>
                <SimpleGrid
                  columns={[1, 1, 2, 3]}
                  justifyItems="center"
                  spacingX={2}
                >
                  {area.places.map((Place, i) => (
                    <Place key={i} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Flex justify="center" mt={4}>
          <Button as={NextLink} href="/classrooms" variant="outline" size="lg">
            すべての教室を地域別に見る
          </Button>
        </Flex>
      </Box>
      <Footer />
    </Container>
  </Layout>
);

export default Index;
