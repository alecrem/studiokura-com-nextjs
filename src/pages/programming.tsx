import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { LiaCheckCircle } from 'react-icons/lia';
import Iframe from 'react-iframe';

import { LinkButton, PhoneButton, TrialButton } from '@/components/Buttons';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { PricingBox } from '@/components/Pricing';
import { HeaderSketch } from '@/components/Programming/HeaderSketch';

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const ClassPlaceLinkButton = (props: { name: string; href: string }) => (
  <Box px={['50px', '40px', '50px']} py={'20px'}>
    <Button
      as={NextLink}
      fontWeight={600}
      color={'white'}
      bg={'orange.500'}
      href={props.href}
      borderRadius={20}
      _hover={{
        bg: 'orange.400',
      }}
    >
      {props.name}
    </Button>
  </Box>
);

const ProgrammingClass = () => (
  <Layout title="Studio Kura 電子工作教室 | Studio Kura 絵画美術教室（福岡県 糸島市 二丈 西新 武雄 橋本 久留米）">
    <Navigation />
    <Container height={'300px'} minW={'100%'}>
      <HeaderSketch />
      <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
        電子工作教室
      </Heading>
    </Container>
    <Stack direction={'column'} alignItems={'center'} bg="gray.50">
      <Container maxW={['95%', '95%', '70%']}>
        {/* Top section */}
        <Heading mt={'1em'} mb={'1em'} size={['2xl', '4xl', '4xl']}>
          電子工作教室
        </Heading>
        <Stack direction={['column', 'column', 'row']} my={16}>
          <Box minW={'40vw'}>
            <Tag
              size={'lg'}
              key={'lg'}
              borderRadius="full"
              variant="solid"
              colorScheme="yellow"
            >
              <LiaCheckCircle />
              &nbsp;<TagLabel>10年以上の実績 </TagLabel>
            </Tag>
            <Heading mt={'1em'} mb={'1em'}>
              プログラミングをはじめよう
            </Heading>
            <Text mt={'1em'} mb={'1em'}>
              キーボードがまだ打てない方からアプリやウェブサイトを既にリリースされている方まで
            </Text>
            <Stack direction={['column', 'row']}>
              <TrialButton
                color={'white'}
                bg={'blue.500'}
                hoverbg={'blue.400'}
              />{' '}
              <PhoneButton />{' '}
            </Stack>
          </Box>
          <Box minW={'40vw'}>
            <AspectRatio ratio={16 / 9}>
              <Iframe
                url={'https://www.youtube.com/embed/Ph9gzC7ytsM'}
                width="640"
                height="360"
              />
            </AspectRatio>
          </Box>
        </Stack>
        {/* Links to places doing programming classes */}
        <Box mt={16} mb={8}>
          近くの教室で授業を受けましょう。
          <br />
          時間割、アクセスは各教室のリンク先をご確認ください。
        </Box>
        <Stack direction={['column', 'column', 'row']} mb={16}>
          <ClassPlaceLinkButton name={'糸島校'} href={'/itoshima'} />
          <ClassPlaceLinkButton name={'西新校'} href={'/nishijin'} />
          <ClassPlaceLinkButton name={'久留米校'} href={'/kurume'} />
        </Stack>
        {/* Languages section */}
        <Stack direction={['column', 'column', 'row']} my={'16'}>
          <Box w={['100%', '530px', '530px']}>
            <Iframe
              url="https://scratch.mit.edu/projects/645939820/embed"
              width="485"
              height="402"
            />
          </Box>
          <Box>
            <Heading>
              学べる言語や
              <br />
              フレームワーク
            </Heading>
            <Text>
              わかりやすさ、楽しさ、また役に立つことを考慮してカリキュラムを作成しています。楽しみながらプログラミング能力が身につきます。
            </Text>
            <Stack direction={'column'}>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-scratch.png`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>Scratch</Heading>
                    <Text>
                      MITで開発されて、世界中で使われている
                      ドラッグ&ドロッププログラミング環境
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-p5js.png`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>p5.js</Heading>
                    <Text>
                      ゲームからNFTアートまで作ることができる
                      JavaScriptで書くフレームワーク
                    </Text>
                  </Box>
                </Stack>
              </Box>
              <Box mt={'1em'}>
                <Stack direction={'row'}>
                  <Image
                    src={`https://${cdnDomain}/${cdnDirectory}programming-logo-arduino.jpg`}
                    w={'64px'}
                    h={'64px'}
                  ></Image>
                  <Box>
                    <Heading size={'l'}>Arduino</Heading>
                    <Text>
                      電子回路をコンピューターで制御できる
                      C言語を駆使したフレームワーク
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
        {/* Devices section */}
        <Stack
          direction={['column', 'column', 'row']}
          mt={'1em'}
          maxW={['100%', '80%', '80%']}
          my={16}
        >
          <Heading minW={'50%'} py={'40px'}>
            どの端末でも学べる
          </Heading>
          <Text
            minW={'50%'}
            borderLeft={'1px'}
            borderColor={'#ccc'}
            paddingLeft={'1em'}
            py={'40px'}
          >
            特に新しくないパソコン、タブレットなどでも、ブラウザーだけあれば使えるプログラミング環境を教えておりますので、練習・制作・オンライン授業はどこでもできます。
          </Text>
        </Stack>
        {/* Details section */}
        <Stack
          direction={['column', 'column', 'row']}
          mt={'1em'}
          maxW={['100%', '80%', '80%']}
          justifyContent="flex-start"
          gap={16}
        >
          <Stack
            direction={['column']}
            mt={'1em'}
            maxW={['100%', '80%', '80%']}
          >
            <Image
              src={`https://${cdnDomain}/${cdnDirectory}programming-clipart-1.jpg`}
              w={'96px'}
              h={'96px'}
            ></Image>
            <Box>
              <Heading py={4} size={'sm'}>
                作品を簡単に共有
              </Heading>
              <Text>
                Scratchやp5.jsは、作品へのリンクを共有することでスマートフォーンを含めてどの端末でも再生・プレイできますので、できたものの共有を通じてモチベーションを保ちましょう。
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={['column']}
            mt={'1em'}
            maxW={['100%', '80%', '80%']}
          >
            <Image
              src={`https://${cdnDomain}/${cdnDirectory}programming-clipart-2.jpg`}
              w={'96px'}
              h={'96px'}
            ></Image>
            <Box>
              <Heading py={4} size={'sm'}>
                復習のときもサポート
              </Heading>
              <Text>
                小学校高学年からの方が多いp5.jsの場合は、講師が用意したドキュメントや動画を見ながらプログラミングできる自社開発の環境も提供いたします。
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={['column']}
            mt={'1em'}
            maxW={['100%', '80%', '80%']}
          >
            <Image
              src={`https://${cdnDomain}/${cdnDirectory}programming-clipart-3.jpg`}
              w={'96px'}
              h={'96px'}
            ></Image>
            <Box>
              <Heading py={4} size={'sm'}>
                素材・サンプル豊富
              </Heading>
              <Text>
                Scratchは提供されている素材を使うとすぐプログラミングに取り掛かることができるし、インスピレーションももらえます。両環境は、暖かいコミュニティーによるサンプルもいっぱい。
              </Text>
            </Box>
          </Stack>
        </Stack>
        {/* Pricing section */}
        <Heading mt={16} mb={8}>
          Studio Kura絵画教室料金表
        </Heading>
        <Text mb={8}>
          絵画教室から電子工作室までどの教室も同一料金です。
          <br />
          入会金は4400円です（
          <LinkButton text={'受講料詳細'} href={'/pricing'} />
          ）。
        </Text>
        <PricingBox />
        {/* Teachers section */}
        <Stack
          direction={['column', 'column', 'row']}
          mt={'1em'}
          maxW={['100%', '40%', '80%']}
          my={16}
          gap={8}
        >
          <Box
            w={['100%', '530px', '530px']}
            minW={['90%', '30vw', '30vw']}
            minH={320}
          >
            <AspectRatio ratio={1}>
              <Iframe
                width={'100%'}
                height={'100%'}
                url={'https://editor.p5js.org/alecrem/full/n4DEIJP55'}
              />
            </AspectRatio>
          </Box>
          <Box>
            <Heading>講師紹介</Heading>
            <Text my={8}>Studio Kura電子工作教室のチームをご紹介します！</Text>
            <Stack gap={4}>
              <Card minW={240} maxW={640} p={4}>
                <CardBody>
                  <Text mb={8}>
                    1979年福岡県糸島市生まれ。広島市立大学芸術学部油絵科
                    卒業後、ドイツハノーバー専科大学で学ぶ。ヨーロッパを中心に世界各地で展示を行う。糸島から世界へ文
                    化発信をモットーに2009年アート カンパニー（株）Studio
                    Kuraを設立。糸島芸術祭「糸島芸農」実行委員長
                  </Text>
                  <Stack direction={'row'}>
                    <Avatar
                      name={'松崎 宏史'}
                      size={'lg'}
                      src={`https://${cdnDomain}/${cdnDirectory}programming-teachers-1.jpg`}
                    />
                    <Box>
                      <Heading size={'m'}>松崎 宏史</Heading>
                      <Text>代表取締役</Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
              <Card minW={240} maxW={640} p={4}>
                <CardBody>
                  <Text mb={8}>
                    1980年、スペイン出身。 2002年にMiguel Hernández大学
                    工学部電気通信工学科卒業。
                    <br />
                    2004年にゲームボーイの音源を使ったバンド「pepino」を結成。ヨーロッパの諸国、アメリカ、日本でライブ。
                    <br />
                    2012年度のNHK「テレビでスペイン語」に定期的出演。
                    <br />
                    2012年9月〜 Studio Kura 電子工作教室を担当。
                  </Text>
                  <Stack direction={'row'}>
                    <Avatar
                      name={'アレハンドロ・クレマデス'}
                      size={'lg'}
                      src={`https://${cdnDomain}/${cdnDirectory}programming-teachers-2.jpg`}
                    />
                    <Box>
                      <Heading size={'m'}>Alejandro Cremades</Heading>
                      <Text>アレハンドロ・クレマデス</Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
              <Card minW={240} maxW={640} p={4}>
                <CardBody>
                  <Text mb={8}>
                    福岡市出身 Studio
                    <br />
                    Kura電子工作教室卒業生！コンピュータ大好き高校生です！
                    <br />
                    よろしくお願いします！ 　
                  </Text>
                  <Stack direction={'row'}>
                    <Avatar
                      name={'小関 英斗'}
                      size={'lg'}
                      src={`https://${cdnDomain}/${cdnDirectory}programming-teachers-3.jpg`}
                    />
                    <Box>
                      <Heading size={'m'}>小関 英斗</Heading>
                      <Text>教室 卒業生</Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
          </Box>
        </Stack>
        {/* FAQ section */}
        <Stack direction={'column'} w={'100%'} maxW={800} my={16}>
          <Heading>FAQ: よくあるご質問</Heading>
          <Accordion defaultIndex={[0]} w={'100%'}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight={'bold'}>
                    キーボード入力に慣れていない人でも大丈夫でしょうか？
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                キーボードに慣れるのにも目標があると早くなるかもしれません。さらに、キーボード入力せずにできるプログラミング環境Scratchを導入していますので、小学校低学年でもすぐ入り込むことができます。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight={'bold'}>
                    英語が全くわからない人でも大丈夫でしょうか？
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                プログラミング言語のキーワードは確かに英単語ですが、Scratchの場合はキーボード入力が不要なだけではなく、インターフェースが完全に日本語に対応しています。それも、ひらがなのみという設定もありますので未就学のお子様も使われています。
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left" fontWeight={'bold'}>
                    教えている技術ではスマートフォン向けアプリが作られるでしょうか？
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                p5.jsの場合は、可能です（Scratchはウェブ上でスマートフォンで使えるに限ります）。p5.jsでできたものをPWAやApp
                Store/Google
                Playで配信できるハイブリッドアプリケーションにすることが可能です。
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        {/* CTA section */}
      </Container>
      <Container minW={'100%'}>
        <Box
          minW={'100%'}
          bgImage={`linear-gradient(0deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.7) 30%), url(https://${cdnDomain}/${cdnDirectory}programming-cta-bg.jpg)`}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
        >
          <Stack
            direction={'column'}
            w={'100%'}
            maxW={600}
            my={16}
            alignItems={'center'}
          >
            <Heading my={8}>是非体験レッスンを</Heading>
            <Text my={8}>
              どちらの言語にご興味あるでしょうか？ぜひご相談ください。体験教室を受けていただきましたら、プログラミングとは何か想像がつくと思います。
            </Text>
            <Stack direction={['column', 'row']}>
              <TrialButton
                color={'white'}
                bg={'blue.500'}
                hoverbg={'blue.400'}
              />{' '}
              <PhoneButton />{' '}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Stack>
    <Container>
      <Footer />
    </Container>
  </Layout>
);

export default ProgrammingClass;
