import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { type FormData } from '@/utils';
import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { ChangeEventHandler, useState } from 'react';
import { LiaCheckCircle, LiaExclamationCircleSolid } from 'react-icons/lia';

const formWidth = ['90%', '90%', '80%', '60%'];
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const Contact = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');
  const formData: FormData = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };
  const nameIsValid = nameInput.length > 0;
  const emailIsValid = emailPattern.test(emailInput);
  const messageIsValid = messageInput.length > 0;
  const formSubmittable =
    emailIsValid &&
    nameIsValid &&
    messageIsValid &&
    (submitStatus === 'idle' || submitStatus === 'error');

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameInput(event.target.value);
  };
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const email = event.target.value;
    setEmailInput(email);
  };
  const handleMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessageInput(event.target.value);
  };
  const handleSubmit = async () => {
    setSubmitStatus('sending');
    try {
      const apiRequest = await fetch('/api/post-contact-form', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setSubmitStatus(apiRequest.ok ? 'sent' : 'error');
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <Layout title="お問い合わせ｜Studio Kura 絵画美術教室（福岡県　糸島市　二丈）">
      <Navigation />
      <Container height={'200px'} minW={'100%'}>
        <Heading mt={'1em'} size={['2xl', '2xl', '2xl']}>
          お問い合わせ
        </Heading>
      </Container>
      <Center minW={'100%'}>
        <Container minW={'100%'} paddingX={'0px'} marginX={'0px'}>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お名前</FormLabel>
            <Input type={'text'} onChange={handleNameChange} />
            <FormHelperText>
              {nameIsValid ? (
                <>
                  <LiaCheckCircle color={'green.500'} />{' '}
                  個人情報は誰とも共有しません。
                </>
              ) : (
                <>
                  <Icon as={LiaExclamationCircleSolid} />
                  必須項目です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>メールアドレス</FormLabel>
            <Input type={'email'} onChange={handleEmailChange} />
            <FormHelperText>
              {emailIsValid ? (
                <>
                  <LiaCheckCircle color={'green.500'} />{' '}
                  メールアドレスは誰とも共有しません。
                </>
              ) : (
                <>
                  <Icon as={LiaExclamationCircleSolid} />
                  正しいメールアドレスが必要です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} as={'fieldset'} w={formWidth} isRequired>
            <FormLabel as={'legend'}>お問い合わせ内容</FormLabel>
            <Textarea rows={5} onChange={handleMessageChange} />
            <FormHelperText>
              {!messageIsValid && (
                <>
                  <Icon as={LiaExclamationCircleSolid} />
                  必須項目です。
                </>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl mt={'2rem'} w={formWidth}>
            <Button
              color={'white'}
              bg={'blue.500'}
              _hover={{
                bg: 'blue.400',
              }}
              onClick={handleSubmit}
              isDisabled={!formSubmittable}
            >
              {submitStatus === 'sent'
                ? '送信されました'
                : submitStatus === 'sending'
                ? '送信中…'
                : '送信する'}
            </Button>
            {submitStatus === 'error' && (
              <Text mt={'0.5rem'} color={'red.500'}>
                送信できませんでした。お手数ですが、もう一度お試しください。
              </Text>
            )}
          </FormControl>
        </Container>
      </Center>
      <Container>
        <Footer />
      </Container>
    </Layout>
  );
};

export default Contact;
