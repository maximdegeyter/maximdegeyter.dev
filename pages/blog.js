import Head from 'next/head';
import NextLink from 'next/link';
import { Flex, Heading, Text, Button, Box } from '@chakra-ui/core';
import { FaMedium } from 'react-icons/fa';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Maxim De Geyter | Blog</title>
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
          Blog.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          <Text>
            I might start writing my own blog soon. For now you can check out my
            blog on Medium about{' '}
            <Text fontWeight='700'>machine learning in iOS development!</Text>
          </Text>
          <Button
            w={['45%', '40%', '30%', '25%']}
            borderRadius='8px'
            backgroundColor='black'
            color='white'
            leftIcon={FaMedium}
            _hover={{ backgroundColor: 'gray.600' }}
            mt='8'
          >
            <NextLink
              href='https://medium.com/maxims-passion-project'
              title='Medium'
              isExternal
            >
              Medium
            </NextLink>
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
