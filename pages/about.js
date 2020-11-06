import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/core';

export default function About() {
  return (
    <div>
      <Head>
        <title>Maxim De Geyter | About</title>
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
          About.
        </Heading>
        <Text>Coming soon. under construction..</Text>
      </Flex>
    </div>
  );
}
