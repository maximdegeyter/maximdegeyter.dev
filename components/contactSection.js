import Head from 'next/head';
import NextLink from 'next/link';
import { Flex, Heading, Box, Button, Text } from '@chakra-ui/core';
import { MdSend } from 'react-icons/md';

export default function ContactSection() {
  return (
    <Flex
      w={['100%', '100%', '100%', '720px']}
      p='3'
      bg='brand.600'
      borderWidth='1px'
      borderRadius='8px'
      borderColor='brand.900'
      direction={['column', 'column', 'row', 'row']}
      justify='space-between'
      align='center'
      mx='auto'
      mt='5'
      mb='16'
    >
      <Box>
        <Heading as='h3' size='lg' color='text.900'>
          Interested in a collaboration or chat?
        </Heading>
        <Text color='text.800'>
          I like to work on cool stuff, so hit me up!
        </Text>
      </Box>
      <Button
        h='48px'
        w={['45%', '40%', '30%', '25%']}
        borderRadius='8px'
        backgroundColor='brand.900'
        color='white'
        rightIcon={MdSend}
        variantColor='white'
        mt={['3', '3', '0']}
        _hover={{ backgroundColor: 'red.700' }}
      >
        <NextLink href='/contact' passHref>
          Let's talk
        </NextLink>
      </Button>
    </Flex>
  );
}
