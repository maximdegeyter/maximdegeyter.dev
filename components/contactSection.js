import NextLink from 'next/link';
import { Flex, Heading, Box, Button, Text } from '@chakra-ui/core';
import { MdSend } from 'react-icons/md';
import { textColor, iconColor, bgColor } from '../styles/theme';

export default function ContactSection({ colorMode }) {
  return (
    <Box
      w={['100%', '100%', '100%', '720px']}
      px={['2', '3', '4', '0']}
      mx='auto'
      mt='5'
      mb='16'
    >
      <Flex
        w='100%'
        p='6'
        bg={bgColor[colorMode]}
        borderWidth='1px'
        borderRadius='8px'
        borderColor='brand.900'
        direction={['column', 'column', 'row', 'row']}
        justify='space-between'
        align='center'
      >
        <Box>
          <Heading as='h3' size='lg' color={textColor[colorMode]}>
            Interested in a collaboration or chat?
          </Heading>
          <Text color={iconColor[colorMode]}>
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
          _hover={{ backgroundColor: 'red.600' }}
        >
          <NextLink href='/contact' passHref>
            Let's talk
          </NextLink>
        </Button>
      </Flex>
    </Box>
  );
}
