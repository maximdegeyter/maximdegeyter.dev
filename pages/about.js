import Head from 'next/head';
import { Box, Flex, Heading, List, ListItem, ListIcon } from '@chakra-ui/core';
import { MdCheckCircle } from 'react-icons/md';

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
        my='5'
      >
        <Heading
          as='h2'
          size='xl'
          mb='3'
          color='text.900'
          fontFamily='lato'
          fontWeight='900'
        >
          About.
        </Heading>
        <Box
          w={['100%', '100%', '100%', '720px']}
          p='3'
          bg='brand.600'
          borderWidth='1px'
          borderRadius='8px'
          borderColor='brand.900'
          mx='auto'
          mb='5'
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              25 years old
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Ghent, Belgium 🇧🇪
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Devine Kask graduate
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Huge Star Wars geek 🤖
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Laker fan
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Jamstack
            </ListItem>
          </List>
        </Box>
        <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
          <Heading
            as='h3'
            size='lg'
            mb='2'
            color='text.900'
            fontFamily='lato'
            fontWeight='900'
          >
            Tech Stack
          </Heading>
        </Box>
        <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
          <Heading
            as='h3'
            size='lg'
            mb='2'
            color='text.900'
            fontFamily='lato'
            fontWeight='900'
          >
            Comic Books
          </Heading>
        </Box>
      </Flex>
    </div>
  );
}
