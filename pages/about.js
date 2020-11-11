import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/core';
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
        minHeight='55vh'
        maxWidth='960px'
        width='100%'
        mx='auto'
        my='16'
        px={['2', '3', '4', '0']}
      >
        <Heading as='h2' size='xl' mb='8' color='text.900' fontWeight='900'>
          About.
        </Heading>
        <Box
          w={['100%', '100%', '100%', '720px']}
          p='6'
          bg='brand.600'
          borderWidth='1px'
          borderRadius='8px'
          borderColor='brand.900'
          mx='auto'
          mb='12'
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
              LA Lakers fan 🏀
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='brand.900' />
              Jamstack enthousiast 👨‍💻
            </ListItem>
          </List>
        </Box>
        <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
          <Heading as='h3' size='lg' mb='2' color='text.900' fontWeight='900'>
            Tech Stack
          </Heading>
        </Box>
      </Flex>
    </div>
  );
}
