import { Container } from '@/components/Container';
import { Box, Center, Stack } from '@chakra-ui/react';
import { type ReactNode } from 'react';
import { PhoneButton, TrialButton } from '../Buttons';
import { Hero, ShadowText } from './';

type ClassPlaceSlide1Props = {
  placeName: string;
  tagline: string;
  bgImageUrl: string;
  children?: ReactNode;
};

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const ClassPlaceSlide1 = (props: ClassPlaceSlide1Props) => {
  const { placeName, tagline, bgImageUrl, children } = props;
  const memoText = typeof children === 'string' ? children : '';
  return (
    <Container
      bgImage={`https://${cdnDomain}/${cdnDirectory}${bgImageUrl}`}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      py={['4em', '6em', '10em', '16em']}
    >
      <Center py={6} px={[0, 4]}>
        <Box w={'full'} rounded={'xl'} p={0} pb={2} textAlign={'center'}>
          <Hero title={placeName} />
          <ShadowText text={tagline} />
          {memoText ? (
            <ShadowText text={memoText} color="white" hasShadow />
          ) : null}
          <Center>
            <Stack direction={['column', 'row']}>
              <TrialButton mr={1} />
              <PhoneButton />
            </Stack>
          </Center>
        </Box>
      </Center>
    </Container>
  );
};

export { ClassPlaceSlide1 };
