import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode } from 'react';

const siteUrl = 'https://www.studiokura.com';
const defaultTitle =
  'Studio Kura絵画教室 | 大人から子どもまで、絵画教室ならStudio Kura';
const defaultDescription =
  '福岡県糸島市・福岡市・久留米市・佐賀県武雄市などで開講している絵画造形教室 Studio Kura。子ども絵画造形教室、大人の絵画教室、電子工作教室、幼稚園・保育園向けレッスンを行っています。';
const defaultOgImage = '/images/og-image.jpg';

interface Props {
  title?: string;
  // 指定したページだけ meta description を出す（全ページ同じ説明文になるのを避けるため）
  description?: string;
  ogImage?: string;
  children: ReactElement | ReactNode;
}

const Layout = ({
  children,
  title = defaultTitle,
  description,
  ogImage = defaultOgImage,
}: Props) => {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0];
  const url = `${siteUrl}${path === '/' ? '' : path}`;
  const imageUrl = ogImage.startsWith('/') ? `${siteUrl}${ogImage}` : ogImage;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {description && <meta name="description" content={description} />}
        <meta property="og:site_name" content="Studio Kura絵画教室" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description ?? defaultDescription}
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box
        bg="gray.50"
        color="black"
        _dark={{
          bg: 'gray.900',
          color: 'white',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export { Layout };
