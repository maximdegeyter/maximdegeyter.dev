import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Heading,
  Flex,
  Link,
  IconButton,
  Box,
  useColorMode,
} from '@chakra-ui/core';

import { textColor, borderColor } from '../styles/theme';

export default function Header() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as='header'
      h='64px'
      w='100vw'
      borderBottom='1px solid'
      borderBottomColor={borderColor[colorMode]}
      px={['2', '3', '4', '0']}
    >
      <Flex
        py='16px'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        maxWidth='960px'
        width='100%'
        mx='auto'
      >
        <NextLink href='/' passHref>
          <Link as='a'>
            <Heading
              as='h1'
              size={['md', 'lg']}
              fontWeight='700'
              color={textColor[colorMode]}
            >
              &lt;Maxim&gt;
            </Heading>
          </Link>
        </NextLink>
        <Box>
          <NextLink href='/about' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={
                router.pathname == '/about' ? 'red.500' : textColor[colorMode]
              }
              fontWeight={router.pathname == '/about' ? 'bold' : 'regular'}
            >
              About
            </Link>
          </NextLink>
          <NextLink href='/projects' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={
                router.pathname == '/projects'
                  ? 'red.500'
                  : textColor[colorMode]
              }
              fontWeight={router.pathname == '/projects' ? 'bold' : 'regular'}
            >
              Projects
            </Link>
          </NextLink>
          <NextLink href='/contact' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={
                router.pathname == '/contact' ? 'red.500' : textColor[colorMode]
              }
              fontWeight={router.pathname == '/contact' ? 'bold' : 'regular'}
            >
              Contact
            </Link>
          </NextLink>
          <NextLink href='/blog' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={
                router.pathname == '/blog' ? 'red.500' : textColor[colorMode]
              }
              fontWeight={router.pathname == '/blog' ? 'bold' : 'regular'}
            >
              Blog
            </Link>
          </NextLink>
        </Box>
        <IconButton
          aria-label='Toggle dark mode'
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          variant='link'
          onClick={toggleColorMode}
        />
      </Flex>
    </Box>
  );
}
