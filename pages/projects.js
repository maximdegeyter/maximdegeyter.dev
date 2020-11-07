import Head from 'next/head';
import { Flex, Heading, Text, Box } from '@chakra-ui/core';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Maxim De Geyter | Projects</title>
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
          Projects.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          <Text>This is still being developed with Contentful CMS.</Text>
        </Box>
      </Flex>
    </div>
  );
}
