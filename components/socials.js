import { Flex, Link, IconButton } from '@chakra-ui/core';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { FaBehance } from 'react-icons/fa';

import { iconColor, textColor } from '../styles/theme';

export default function Socials({ colorMode }) {
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
          color={iconColor[colorMode]}
          variant='link'
          _hover={{ color: textColor[colorMode] }}
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
          color={iconColor[colorMode]}
          variant='link'
          _hover={{ color: textColor[colorMode] }}
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
          color={iconColor[colorMode]}
          variant='link'
          _hover={{ color: textColor[colorMode] }}
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
          color={iconColor[colorMode]}
          variant='link'
          _hover={{ color: textColor[colorMode] }}
        />
      </Link>
    </Flex>
  );
}
