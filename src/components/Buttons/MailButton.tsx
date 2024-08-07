import { EmailIcon } from '@chakra-ui/icons';
import { Button, ResponsiveValue } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  text?: string;
  mr?: number;
  mt?: number;
  size?: string;
  color?: string;
  bg?: string;
  hoverbg?: string;
  borderRadius?: number;
  hasIcon?: boolean;
  variant?:
    | ResponsiveValue<
        'link' | 'outline' | (string & {}) | 'ghost' | 'solid' | 'unstyled'
      >
    | undefined;
}

const MailButton: React.FC<Props> = ({
  text,
  mr,
  mt,
  size,
  color,
  bg,
  hoverbg,
  borderRadius,
  hasIcon,
  variant,
}) => {
  return (
    <Button
      mr={mr}
      mt={mt}
      size={size}
      as={NextLink}
      href={'/contact'}
      borderRadius={borderRadius}
      fontWeight={600}
      color={color}
      bg={variant === 'solid' ? bg : undefined}
      _hover={{ bg: hoverbg }}
      variant={variant}
    >
      {hasIcon && (
        <>
          <EmailIcon />
          &nbsp;
        </>
      )}
      {text}
    </Button>
  );
};
export { MailButton };

MailButton.defaultProps = {
  text: 'info@studiokura.com',
  mr: 0,
  mt: 0,
  size: 'md',
  color: 'text',
  bg: 'gray.100',
  hoverbg: 'gray.200',
  borderRadius: 4,
  hasIcon: true,
  variant: 'solid',
};
