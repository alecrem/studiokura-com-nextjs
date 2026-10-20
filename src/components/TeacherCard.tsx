import type { TeacherData } from '@/pages/api/get-teacher-info';
import {
  AspectRatio,
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const cdnDomain = process.env.NEXT_PUBLIC_CDN_DOMAIN ?? '';
const cdnDirectory = process.env.NEXT_PUBLIC_CDN_DIRECTORY ?? '';

const resolveImageSrc = (imageSrc: string) =>
  imageSrc.startsWith('/')
    ? imageSrc
    : `https://${cdnDomain}/${cdnDirectory}${imageSrc}`;

// 一覧では大きく表示するため、サムネイル（正方形・小さめ）ではなくプロフィール写真を使う
const getTeacherPhotoSrc = (teacher: TeacherData) =>
  teacher.images?.length
    ? resolveImageSrc(teacher.images[0])
    : (teacher.thumbnailImage ??
      `https://${cdnDomain}/${cdnDirectory}teachers-${teacher.slug}-thumbnail.jpg`);

// 名前の下に添える一言。tagline がなければ紹介文の最初の一文（出身地など）
const getTeacherTagline = (teacher: TeacherData) => {
  if (teacher.tagline) return teacher.tagline;
  const text = (teacher.content ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .trim();
  return text.split(/[\n。]/)[0].trim();
};

export const TeacherCard = ({
  teacher,
  headingAs = 'h2',
}: {
  teacher: TeacherData;
  headingAs?: 'h2' | 'h3';
}) => (
  <LinkBox
    as="article"
    role="group"
    bg="white"
    _dark={{ bg: 'gray.800' }}
    borderRadius="xl"
    overflow="hidden"
    boxShadow="md"
    transition="box-shadow 0.2s ease, transform 0.2s ease"
    _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
  >
    <AspectRatio ratio={3 / 4} overflow="hidden">
      <Image
        src={getTeacherPhotoSrc(teacher)}
        alt={`${teacher.name}の写真`}
        objectFit="cover"
        objectPosition="center top"
        transition="transform 0.4s ease"
        _groupHover={{ transform: 'scale(1.05)' }}
      />
    </AspectRatio>
    <Box px={[3, 4]} py={[3, 4]}>
      <Heading as={headingAs} size={['sm', 'md']} letterSpacing="0.04em">
        <LinkOverlay as={NextLink} href={`/teachers/${teacher.slug}`}>
          {teacher.name}
        </LinkOverlay>
      </Heading>
      <Text
        mt={1}
        fontSize={['xs', 'sm']}
        color="gray.600"
        _dark={{ color: 'gray.400' }}
        noOfLines={1}
      >
        {getTeacherTagline(teacher)}
      </Text>
    </Box>
  </LinkBox>
);
