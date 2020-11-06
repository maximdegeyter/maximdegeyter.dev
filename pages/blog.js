import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/core';

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
        maxWidth='960px'
        width='100%'
        mx='auto'
        my='6'
      >
        <Heading as='h1' size='xl' mb='2' color='text.900'>
          Blog.
        </Heading>
        <Text>Coming soon. under construction..</Text>
      </Flex>
    </div>
  );
}
