import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { LuChevronDown, LuChevronRight, LuMenu, LuX } from 'react-icons/lu';

function Navigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            size={'md'}
            icon={isOpen ? <LuX /> : <LuMenu />}
            variant={'ghost'}
            aria-label={'メニュー開閉'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          >
            <Link as={NextLink} passHref href={'/'}>
              <Image src="/images/studio-kura-logo.png" height="2em" />
            </Link>
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={NextLink}
            size={{ base: 'xs', md: 'sm' }}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/reschedule'}
          >
            生徒様予約
          </Button>
          <Button
            as={NextLink}
            size={{ base: 'xs', md: 'sm' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            href={'/trial'}
            _hover={{
              bg: 'green.400',
            }}
          >
            体験レッスン
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack zIndex={100} position={'relative'} direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            {navItem.children ? (
              <PopoverTrigger>
                <Box
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
            ) : (
              <Link
                as={NextLink}
                href={navItem.href ?? '#'}
                color={linkColor}
                fontSize={'sm'}
                fontWeight={500}
                _hover={{
                  color: linkHoverColor,
                }}
              >
                <Box p={2}>{navItem.label}</Box>
              </Link>
            )}

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink passHref href={href ?? '/'}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={LuChevronRight} />
        </Flex>
      </Stack>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      zIndex={100}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={NextLink}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={LuChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href ?? '/'}>
                <Box py={2}>{child.label}</Box>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'お知らせ',
    href: 'https://blog.studiokura.com/category/%E3%81%8A%E3%81%97%E3%82%89%E3%81%9B/',
  },
  {
    label: '美術教室',
    children: [
      {
        label: '大人のための絵画教室',
        href: '/adults',
      },
      {
        label: '子ども絵画造形教室',
        href: '/kids',
      },
      {
        label: '電子工作教室',
        href: '/programming',
      },
      {
        label: '講師紹介',
        href: '/teachers',
      },
    ],
  },
  {
    label: '幼稚園・保育園',
    href: '/kindergartens',
  },
  {
    label: '受講料',
    href: '/pricing',
  },
  {
    label: '教室一覧',
    href: '/classrooms',
  },
];

export { Navigation };
