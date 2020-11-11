import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  Link,
  useColorMode,
  Text,
} from '@chakra-ui/core';
import { MdCheckCircle, MdCode } from 'react-icons/md';
import { textColor, bgColor, borderColor, iconColor } from '../styles/theme';

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
              25 years old 📈
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Ghent, Belgium 🇧🇪
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color='red.500' />
              Digital design &amp; development 🎓
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
          w={['100%', '100%', '100%', '720px']}
          py='3'
          borderBottom='solid 1px'
          borderColor={borderColor[colorMode]}
          pb='6'
          mx='auto'
          mb='6'
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
          <Text
            color={iconColor[colorMode]}
            lineHeight='170%'
            letterSpacing='.005rem'
            fontSize='lg'
            mb='2'
          >
            I ❤️ JavaScript! And thus I have 2 stacks I frequently use but{' '}
            <Text as='strong' color={textColor[colorMode]}>
              Jamstack
            </Text>{' '}
            is what I’m focusing on these days (f.e.: this website). Outside of
            this, I also use{' '}
            <Text as='strong' color={textColor[colorMode]}>
              MERN-stack
            </Text>{' '}
            .
          </Text>
          <Text
            color={iconColor[colorMode]}
            lineHeight='170%'
            letterSpacing='.005rem'
            fontSize='lg'
          >
            Of course I've also created websites with an actual backend. I know
            the basics of{' '}
            <Text as='strong' color={textColor[colorMode]}>
              PHP
            </Text>{' '}
            and I've also dipped into the realm of iOS development, by creating
            an app with{' '}
            <Text as='strong' color={textColor[colorMode]}>
              Swift
            </Text>
            .
          </Text>
          <Heading as='h4' size='md' mb='2' mt='8' color={textColor[colorMode]}>
            Current Jamstack:
          </Heading>
          <List
            spacing={1}
            color={iconColor[colorMode]}
            lineHeight='170%'
            letterSpacing='.005rem'
            fontSize='lg'
            ml='4'
          >
            <ListItem>
              <ListIcon as={MdCode} color='red.500' />
              <Link
                color='red.500'
                href='https://nextjs.org/'
                isExternal
                _hover={{ textDecoration: 'underline' }}
              >
                NextJS
              </Link>{' '}
              as framework
            </ListItem>
            <ListItem>
              <ListIcon as={MdCode} color='red.500' />
              <Link
                color='red.500'
                href='https://www.contentful.com/'
                isExternal
                _hover={{ textDecoration: 'underline' }}
              >
                Contentful
              </Link>{' '}
              for CMS
            </ListItem>
            <ListItem>
              <ListIcon as={MdCode} color='red.500' />
              <Link
                color='red.500'
                href='https://vercel.com/home?'
                isExternal
                _hover={{ textDecoration: 'underline' }}
              >
                Vercel
              </Link>{' '}
              as cloud platform
            </ListItem>
          </List>
        </Box>
      </Flex>
    </div>
  );
}
