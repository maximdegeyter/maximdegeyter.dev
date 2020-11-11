import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Flex, Heading, Box, useColorMode } from '@chakra-ui/core';

import Project from '../components/project';
import { fetchEntries } from '../lib/contentful';
import { textColor } from '../styles/theme';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const { colorMode } = useColorMode();

  useEffect(() => {
    async function getProjects() {
      const allProjects = await fetchEntries();
      setProjects([...allProjects]);
    }
    getProjects();
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
        px={['2', '3', '4', '0']}
        mx='auto'
        my='16'
      >
        <Heading as='h2' size='xl' mb='8' color={textColor[colorMode]}>
          Projects.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          {projects.length > 0
            ? projects.map((project) => (
                <Project
                  title={project.fields.title}
                  desc={project.fields.description}
                  tags={project.fields.tags}
                  img={project.fields.image}
                  url={project.fields.url}
                  colorMode={colorMode}
                />
              ))
            : null}
        </Box>
      </Flex>
    </div>
  );
}
