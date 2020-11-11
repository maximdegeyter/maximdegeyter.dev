import NextLink from 'next/link';
import { Heading, Flex, Link, Button, Text } from '@chakra-ui/core';
import { textColor, iconColor } from '../styles/theme';

export default function AboutSection({ colorMode }) {
  return (
    <Flex
      w={['100%', '100%', '100%', '720px']}
      px={['2', '3', '4', '0']}
      direction='column'
      mx='auto'
      mb='16'
    >
      <Heading
        as='h3'
        size='lg'
        mb={4}
        color={textColor[colorMode]}
        fontWeight='900'
      >
        About me.
      </Heading>
      <Text
        color={iconColor[colorMode]}
        lineHeight='170%'
        letterSpacing='.005rem'
        fontSize='lg'
      >
        Hi 👋, I’m Maxim, welcome to my place on the web! I’m a Full Stack JS
        developer 👨‍💻, who likes to create creative digital products. I graduated
        in{' '}
        <Link
          color='red.500'
          href='https://www.devine.be/en/'
          isExternal
          _hover={{ textDecoration: 'underline' }}
        >
          Digital Design &amp; Development
        </Link>{' '}
        🎓 in 2020 and currently work at{' '}
        <Link
          color='red.500'
          href='https://www.capgemini.com/'
          isExternal
          _hover={{ textDecoration: 'underline' }}
        >
          Capgemini
        </Link>{' '}
        as an AEM developer! I have a passion for new technologies
        and everything creative, currently focusing on{' '}
        <Text as='strong' color={textColor[colorMode]}>
          Jamstack ⚡️
        </Text>{' '}
        and{' '}
        <Text as='strong' color={textColor[colorMode]}>
          Mern-stack ⚛️
        </Text>{' '}
        applications.
      </Text>
      <Button
        h='48px'
        w={['50%', '40%', '30%', '25%']}
        borderRadius='8px'
        backgroundColor='red.500'
        color='white'
        mt='6'
        _hover={{ backgroundColor: 'red.600' }}
      >
        <NextLink href='/about' passHref>
          More about me
        </NextLink>
      </Button>
    </Flex>
  );
}
