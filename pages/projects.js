import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Flex, Heading, Box } from '@chakra-ui/core';
import Project from '../components/project';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Projects() {
  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

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
        <Heading as='h2' size='xl' mb='8' color='text.900'>
          Projects.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          {posts.length > 0
            ? posts.map((p) => (
                <Project
                  title={p.fields.title}
                  desc={p.fields.description}
                  tags={p.fields.tags}
                  img={p.fields.image}
                  url={p.fields.url}
                />
              ))
            : null}
        </Box>
      </Flex>
    </div>
  );
}
