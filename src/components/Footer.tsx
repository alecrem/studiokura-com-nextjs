import { Flex, FlexProps, Icon, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuInstagram } from 'react-icons/lu';

const instagramUrl = 'https://www.instagram.com/kurartschool/';

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    py="8rem"
    direction="column"
    align="center"
    gap={4}
    {...props}
  >
    <Link
      href={instagramUrl}
      isExternal
      display="inline-flex"
      alignItems="center"
      gap={2}
      fontWeight="bold"
    >
      <Icon as={LuInstagram} boxSize={5} />
      Instagramで教室の様子を発信中
    </Link>
    <Text>
      © 2009-{new Date().getFullYear()} Studio Kura 絵画教室 All rights reserved
      | <NextLink href="/contact">お問い合わせ</NextLink>
    </Text>
  </Flex>
);
