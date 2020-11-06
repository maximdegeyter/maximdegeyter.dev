import { Flex, Link, IconButton } from '@chakra-ui/core';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { FaBehance } from 'react-icons/fa';

export default function Socials() {
  return (
    <Flex my={4} direction='row'>
      <Link
        href='https://twitter.com/maximdegeyter'
        title='Twitter'
        isExternal
        mr={3}
      >
        <IconButton
          w='48px'
          h='48px'
          aria-label='Twitter'
          icon={IoLogoTwitter}
          fontSize='36px'
          color='text.800'
          variant='outline'
          _hover={{ color: 'text.900' }}
        />
      </Link>
      <Link
        href='https://www.linkedin.com/in/maximdegeyter'
        title='LinkedIn'
        isExternal
        mr={3}
      >
        <IconButton
          w='48px'
          h='48px'
          aria-label='LinkedIn'
          icon={IoLogoLinkedin}
          fontSize='36px'
          color='text.800'
          variant='outline'
          _hover={{ color: 'text.900' }}
        />
      </Link>
      <Link
        href='https://github.com/maximdegeyter'
        title='GitHub'
        isExternal
        mr={3}
      >
        <IconButton
          w='48px'
          h='48px'
          aria-label='GitHub'
          icon={IoLogoGithub}
          fontSize='36px'
          color='text.800'
          variant='link'
          _hover={{ color: 'text.900' }}
        />
      </Link>
      <Link
        href='https://www.behance.net/maximdegeyter'
        title='Behance'
        isExternal
        mr={3}
      >
        <IconButton
          w='48px'
          h='48px'
          aria-label='GitHub'
          icon={FaBehance}
          fontSize='36px'
          color='text.800'
          variant='link'
          _hover={{ color: 'text.900' }}
        />
      </Link>
    </Flex>
  );
}
