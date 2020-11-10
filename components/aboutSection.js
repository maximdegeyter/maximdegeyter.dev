import NextLink from 'next/link';
import { Heading, Flex, Link, Button, Text } from '@chakra-ui/core';

export default function AboutSection() {
  return (
    <Flex
      w={['100%', '100%', '100%', '720px']}
      px={['2', '3', '4', '0']}
      direction='column'
      mx='auto'
      mb='16'
    >
      <Heading as='h3' size='lg' mb={4} color='text.900' fontWeight='900'>
        About me.
      </Heading>
      <Text color='text.800' lineHeight='170%' letterSpacing='.005rem'>
        I'm a 25 year old{' '}
        <Text as='span' fontWeight='bold' color='text.900'>
          Devine (Digital design & development) alumni
        </Text>{' '}
        from Ghent, Belgium 🇧🇪. Recently, I started my first job as an AEM
        developer for{' '}
        <Link
          color='blue.400'
          textDecoration='underline'
          href='https://www.capgemini.com/'
          isExternal
        >
          Capgemini ♠️
        </Link>
        . If I'm not busy programming or designing, then you'll probably find me
        near a comic book, something Star Wars related, or a basketball!
      </Text>
      <Button
        h='48px'
        w={['50%', '40%', '30%', '25%']}
        borderRadius='8px'
        backgroundColor='brand.900'
        color='white'
        mt='6'
        _hover={{ backgroundColor: 'red.700' }}
      >
        <NextLink href='/about' passHref>
          More about me
        </NextLink>
      </Button>
    </Flex>
  );
}
