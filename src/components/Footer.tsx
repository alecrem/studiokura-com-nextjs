import NextLink from 'next/link'
import { Flex, FlexProps, Text } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="8rem" {...props}>
    <Text>
      © 2009-{new Date().getFullYear()} Studio Kura 絵画教室 All rights reserved
      | <NextLink href="/contact">お問い合わせ</NextLink>
    </Text>
  </Flex>
)
