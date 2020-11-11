import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from '@chakra-ui/core';
import { MdCheckCircle } from 'react-icons/md';
import { textColor, bgColor, borderColor } from '../styles/theme';

export default function About() {
  const { colorMode } = useColorMode();

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
        <Heading
          as='h2'
          size='xl'
          mb='8'
          color={textColor[colorMode]}
          fontWeight='900'
        >
          About.
        </Heading>
        <Box
          w={['100%', '100%', '100%', '720px']}
          p='6'
          bg={bgColor[colorMode]}
          borderWidth='1px'
          borderRadius='8px'
          borderColor='red.500'
          mx='auto'
          mb='12'
        >
          <List spacing={3}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              25 years old
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Ghent, Belgium 🇧🇪
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Devine Kask graduate
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Huge Star Wars geek 🤖
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              LA Lakers fan 🏀
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Jamstack enthousiast 👨‍💻
            </ListItem>
          </List>
        </Box>
        <Box
          w='100%'
          py='3'
          borderBottom='solid 1px'
          borderColor={borderColor[colorMode]}
        >
          <Heading
            as='h3'
            size='lg'
            mb='2'
            color={textColor[colorMode]}
            fontWeight='900'
          >
            Tech Stack
          </Heading>
        </Box>
      </Flex>
    </div>
  );
}
