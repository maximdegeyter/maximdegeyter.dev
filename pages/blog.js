import Head from 'next/head';
import {
  Flex,
  Heading,
  Text,
  Button,
  Box,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import { FaMedium } from 'react-icons/fa';
import { textColor, iconColor } from '../styles/theme';

export default function Blog() {
  const { colorMode } = useColorMode();

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
        <Heading as='h1' size='xl' mb='8' color={textColor[colorMode]}>
          Blog.
        </Heading>
        <Box w={['100%', '100%', '100%', '720px']} mx='auto'>
          <Text
            color={iconColor[colorMode]}
            fontSize='lg'
            lineHeight='170%'
            letterSpacing='.005rem'
          >
            I might start writing my own blog soon. For now you can check out my
            blog on Medium about{' '}
            <Text as='strong' color={textColor[colorMode]}>
              machine learning in iOS development!
            </Text>
          </Text>
          <Link
            href='https://medium.com/maxims-passion-project'
            title='Medium'
            _hover={{ textDecoration: 'none' }}
            isExternal
          >
            <Button
              w={['45%', '40%', '30%', '25%']}
              borderRadius='8px'
              backgroundColor='black'
              color='white'
              leftIcon={FaMedium}
              _hover={{ backgroundColor: 'gray.600' }}
              mt='8'
            >
              Medium
            </Button>
          </Link>
        </Box>
      </Flex>
    </div>
  );
}
