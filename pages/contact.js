import { useState } from 'react';
import Head from 'next/head';
import {
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Box,
  Textarea,
} from '@chakra-ui/core';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <div>
      <Head>
        <title>Maxim De Geyter | Contact</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <Flex
        as='main'
        direction='column'
        minHeight='55vh'
        maxWidth='960px'
        width='100%'
        mx='auto'
        my='16'
      >
        <Heading as='h1' size='xl' mb='8' color='text.900'>
          Contact.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          <form
            onSubmit={submitForm}
            action='https://formspree.io/f/mpzorejd'
            method='POST'
          >
            <FormControl>
              <Stack spacing='8'>
                <Box>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    name='email'
                    placeholder='darthvader@empire.com'
                    size='md'
                  />
                </Box>
                <Box>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    type='text'
                    name='message'
                    placeholder='Join the dark side.'
                    size='md'
                  />
                </Box>
                {status === 'SUCCESS' ? (
                  <FormHelperText>Thanks!</FormHelperText>
                ) : (
                  <Input
                    type='submit'
                    h='48px'
                    w={['50%', '40%', '30%', '25%']}
                    borderRadius='8px'
                    borderColor='none'
                    backgroundColor='brand.900'
                    color='white'
                    mt='3'
                    _hover={{ backgroundColor: 'red.700' }}
                  />
                )}
                {status === 'ERROR' && (
                  <FormErrorMessage>
                    Ooops! There was an error.
                  </FormErrorMessage>
                )}
              </Stack>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </div>
  );
}
