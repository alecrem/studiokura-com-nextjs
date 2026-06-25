import {
  ContactButton,
  EstimateCalculatorButton,
  LinkButton,
  PhoneButton,
} from '@/components/Buttons';
import { Footer } from '@/components/Footer';
import {
  KindergartenBoxSlide,
  KindergartenTitleSlide,
  KindergartenVideoSlide,
} from '@/components/KindergartenSlides';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import {
  Box,
  Td as ChakraTd,
  Container,
  Heading,
  List,
  ListItem,
  Stack,
  Table,
  Tbody,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';
import { type ReactNode } from 'react';

type TdProps = {
  children?: ReactNode;
};
const Td = (props: TdProps) => (
  <ChakraTd p={'8px'}>
    <Box>
      <Text fontSize={'12px'}>{props.children}</Text>
    </Box>
  </ChakraTd>
);

const Kindergartens = () => {
  return (
    <Layout title="Studio Kura絵画造形教室 幼稚園・保育園 課内・課外教室">
      <Navigation />

      <KindergartenTitleSlide
        title="Studio Kura 絵画造形教室"
        tagline="幼稚園・保育園向けの絵画造形出張レッスン"
        bgImageUrl="kindergartens-slide-1.jpg"
      />

      <KindergartenBoxSlide
        title="カリキュラム導入のご案内"
        bgImageUrl="kindergartens-slide-2.jpg"
      >
        <Box>
          <Heading size={'md'} my={'1em'}>
            正課 絵画造形教室
          </Heading>
          <p>
            園の方針に従いカリキュラムを開発します。画材等の準備もスタジオ
            クラが行います。 現在５０以上の園でStudio
            Kuraのカリキュラムが導入されています。
          </p>
          <List listStyleType={'default'} pl={'2em'} py={'1em'}>
            <ListItem>対象 3歳～5歳児</ListItem>
            <ListItem>レッスン時間 60分</ListItem>
          </List>
          <EstimateCalculatorButton />
          <Heading size={'md'} my={'1em'}>
            課外 絵画造形教室
          </Heading>
          <p>
            月曜日～金曜日の決まった曜日に年間40回(もしくは24回)開講します。
          </p>
          <List listStyleType={'default'} pl={'2em'} py={'1em'}>
            <ListItem>対象 幼児～卒業生</ListItem>
            <ListItem>レッスン時間 60分</ListItem>
            <ListItem>貴園の費用負担は一切ありません。</ListItem>
          </List>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="Studio Kura絵画造形教室の方針"
        bgImageUrl="kindergartens-slide-3.jpg"
      >
        <Box>
          <dl>
            <dt style={{ marginTop: '0.5em' }}>自主性：</dt>
            <dd>
              こどもらしい伸び伸びした感性を大切にします。子どもたちの自主を尊重し、自ら選び取り発展させていく力を育てることを目的に、絵画指導を行います。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>プロセス：</dt>
            <dd>
              完成作品を作ることに自体に重きをおくのではなく、様々な制作の過程で子どもの感性が輝き、揺さぶられ、豊かに育つことを目的としています。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>手触り：</dt>
            <dd>
              表現と認識の強い関係性に注目し、フィンガーペインティング、土粘土、木片など感覚的認識を高める素材を使った活動を豊富にカリキュラムに取り入れています。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>発見：</dt>
            <dd>
              子どもの表現活動を芸術的なものとして捉え、そこに美的なものの発芽と生の表出をすくいとり、育てます。そのために、講師である私たちは芸術に対する広い視野と曇の無い目を持つ努力をしていきます。
            </dd>
          </dl>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="Studio Kura絵画教室の特色"
        bgImageUrl="kindergartens-slide-4.jpg"
      >
        <Box>
          <dl>
            <dt style={{ marginTop: '0.5em' }}>創造力：</dt>
            <dd>
              様々な道具や素材を使った多彩な創作活動が子どもの想像力を高めます。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>豊かな心：</dt>
            <dd>
              感情や情緒を育み、創造的で、個性的な心の働きを豊かにします。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>コラボ力：</dt>
            <dd>
              グループで話し合い作っていく中で、現代社会で大事な単独では不可能なことを可能にし乗り越えていく（力ラボレーション力）を養います。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>国際交流：</dt>
            <dd>
              Studio
              Kuraが招聘している海外の作家が授業に参加することがあります。国際交流の貴重な機会になっています。
            </dd>
          </dl>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenVideoSlide
        title="制作例"
        bgImageUrl="kindergartens-slide-5.jpg"
        iframeUrls={[
          'https://www.youtube.com/embed/PhoKEZPiVO4?list=PLPXP4x-4k9UI7ftxWK4NHvYZRsmPga45S&amp;controls=0&amp;showinfo=0',
          'https://www.youtube.com/embed/YrAsSjsRoEc?list=PLPXP4x-4k9UI7ftxWK4NHvYZRsmPga45S&amp;controls=0&amp;showinfo=0',
          'https://www.youtube.com/embed/PaxQnw6RXJQ?list=PLPXP4x-4k9UI7ftxWK4NHvYZRsmPga45S&amp;controls=0&amp;showinfo=0',
          'https://www.youtube.com/embed/eAE5OIA_BvY?list=PLPXP4x-4k9UI7ftxWK4NHvYZRsmPga45S&amp;controls=0&amp;showinfo=0',
        ]}
      />

      <KindergartenBoxSlide
        title="経験豊富な講師陣"
        bgImageUrl="kindergartens-slide-6.jpg"
      >
        <Box>
          専門の美術教育を受けた、幼児造形教育の経験豊富な講師陣が多数在籍しています。幼児に絵画や造形を教える熱意や姿勢を重視して採用を行なっております。
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="レッスンが行われている幼稚園・保育園を一部ご紹介します"
        bgImageUrl="kindergartens-slide-7.jpg"
      >
        <Box>
          <Table variant={'striped'} bgColor={'#ccc8'}>
            <Tbody>
              <Tr>
                <Td>
                  <strong>福岡県</strong>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>
                  <strong>福岡市</strong>
                </Td>
                <Td>あけぼの保育園（中央区）</Td>
                <Td>春陽保育園(中央区)</Td>
                <Td>堅粕保育園（博多区）</Td>
              </Tr>
              <Tr>
                <Td>五十川保育園（博多区）</Td>
                <Td>わかな保育園（博多区）</Td>
                <Td>第三ポケット保育園（博多区）</Td>
                <Td>福岡デザイン＆テクノロジー専門学校(博多区)</Td>
              </Tr>
              <Tr>
                <Td>香住ヶ丘保育園（東区）</Td>
                <Td>御幸保育園（東区）</Td>
                <Td>第二ポケット保育園（東区）</Td>
                <Td>城浜保育園（東区）</Td>
              </Tr>
              <Tr>
                <Td>紅葉幼稚園（早良区）</Td>
                <Td>ここは保育園（早良区）</Td>
                <Td>発達子どもアカデミー西新校（早良区）</Td>
                <Td>原西保育園（早良区）</Td>
              </Tr>
              <Tr>
                <Td>こじか保育園（福岡市西区）</Td>
                <Td>大塚第一保育園（福岡市西区）</Td>
                <Td>大塚第二保育園（福岡市西区）</Td>
                <Td>もみじの森保育園（福岡市西区）</Td>
              </Tr>
              <Tr>
                <Td>姪浜もみじの森保育園（福岡市西区）</Td>
                <Td>内浜保育園（福岡市西区）</Td>
                <Td>いき保育園（西区）</Td>
                <Td>
                  <strong>福岡県その他の市</strong>
                </Td>
              </Tr>
              <Tr>
                <Td>前原中央保育園（糸島市）</Td>
                <Td>笹山幼稚園（糸島市）</Td>
                <Td>雷山保育園（糸島）</Td>
                <Td>雷山保育園分園（糸島）</Td>
              </Tr>
              <Tr>
                <Td>ひじり保育園（大野城市）</Td>
                <Td>平等寺保育園（宗像市）</Td>
                <Td>三葉幼稚園(宇美町)</Td>
                <Td>味坂保育園（小郡市）</Td>
              </Tr>
              <Tr>
                <Td>立石保育園（朝倉市）</Td>
                <Td>日の里東保育園（宗像市）</Td>
                <Td>潤野保育園(飯塚市)</Td>
                <Td>横田保育園(飯塚市)</Td>
              </Tr>
              <Tr>
                <Td>遠賀中央幼稚園(遠賀町)</Td>
                <Td>ポケット保育園（粕屋町）</Td>
                <Td>かよいちょう保育園（粕屋町）</Td>
                <Td>
                  <strong>佐賀県</strong>
                </Td>
              </Tr>
              <Tr>
                <Td>尚賢保育園（佐賀市）</Td>
                <Td>あけぼの保育園（唐津市）</Td>
                <Td>昭和幼稚園（唐津市）</Td>
                <Td>唐房保育園（唐津市）</Td>
              </Tr>
              <Tr>
                <Td>西唐津保育園（唐津市）</Td>
                <Td>湊保育園（唐津市）</Td>
                <Td>青い鳥保育園（多久市）</Td>
                <Td>南波多保育園（伊万里市）</Td>
              </Tr>
              <Tr>
                <Td>立花保育園（伊万里市）</Td>
                <Td>ひまわり保育園（武雄）</Td>
              </Tr>
              <Tr>
                <Td>みなみ保育園（伊万里市）</Td>
                <Td>大川内保育園（伊万里市）</Td>
                <Td>波多津保育園（伊万里市）</Td>
                <Td>
                  <strong>大分県</strong>
                </Td>
              </Tr>
              <Tr>
                <Td>ひかり保育園（日田市）</Td>
                <Td>日隈こども園（日田市）</Td>
                <Td>
                  <strong>山口県</strong>
                </Td>
                <Td>稗田保育園（下関市）</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title="さらに"
        bgImageUrl="kindergartens-slide-8.jpg"
      >
        <Box>
          <dl>
            <dt style={{ marginTop: '0.5em' }}>先生への研修：</dt>
            <dd>
              造形教育に必要な様々なカリキュラム、指導方法をワークショップ形式でお伝えしていきます。
            </dd>
            <dt style={{ marginTop: '0.5em' }}>作品展の充実：</dt>
            <dd>
              作品展の飾り付けのアドバイスやお手伝いも行っています。これまでにないアートフルな作品展になります！
            </dd>
            <dt style={{ marginTop: '0.5em' }}>Studio Kuraへの社会科見学：</dt>
            <dd>
              糸島にあるStudio
              Kuraには毎月6名の海外の芸術家が滞在制作を行いに来ています。彼らの制作風景や展示作品を見ること、彼らが何を考え作品を作っているかを実際に会って話すことは子どもたちにとっても非常に貴重な経験になります。
            </dd>
          </dl>
        </Box>
      </KindergartenBoxSlide>

      <KindergartenBoxSlide
        title={''}
        addButtons={false}
        bgImageUrl="kindergartens-slide-9.jpg"
      >
        <Box>
          <Heading mb={'1em'}>Studio Kura 絵画造形教室</Heading>
          <Table>
            <Tbody>
              <Tr>
                <Th>社名</Th>
                <Td>株式会社 Studio Kura</Td>
              </Tr>
              <Tr>
                <Th>創業</Th>
                <Td>2010年3月</Td>
              </Tr>
              <Tr>
                <Th>代表者</Th>
                <Td>代表取締役 松崎 宏史</Td>
              </Tr>
              <Tr>
                <Th>従業員数</Th>
                <Td>14名</Td>
              </Tr>
              <Tr>
                <Th>所在地</Th>
                <Td>〒819-1613 福岡県糸島市二丈松末586</Td>
              </Tr>
            </Tbody>
          </Table>
          <Text mt={'1em'}>お問い合わせをお待ちしております。</Text>
          <Stack direction={['column', 'row']} mt={'1em'}>
            <ContactButton href={'/kindergartens/contact'} mr={1} />
            <PhoneButton />
          </Stack>
          <Box mt={'1em'}>
            <LinkButton
              text={'体験教室'}
              href={'/kindergartens/trial'}
              mr={2}
            />
            |
            <LinkButton
              text={'見積もりシミュレーション'}
              href={'/kindergartens/estimate-calculator'}
              mr={2}
              ml={2}
            />
            |
            <LinkButton
              text={'見積もり依頼'}
              href={'/kindergartens/request-estimate'}
              mr={2}
              ml={2}
            />
            |
            <LinkButton
              text={'資料請求'}
              href={'/kindergartens/request-docs'}
              ml={2}
            />
          </Box>
        </Box>
      </KindergartenBoxSlide>

      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Kindergartens;
