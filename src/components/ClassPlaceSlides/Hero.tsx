import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({
  title,
  color,
  hasShadow,
}: {
  title: string;
  color?: string;
  hasShadow?: boolean;
}) => (
  <Flex justifyContent="center" alignItems="center" bgClip="text" my={'2em'}>
    <Heading
      fontSize={['2em', '3em', '6vw']}
      color={color}
      {...(hasShadow && {
        textShadow: 'black 0.03em 0.03em 0.03em;',
      })}
    >
      {title}
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
  color: 'white',
  hasShadow: true,
};
