import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Heading, Flex, Link, IconButton, Box } from '@chakra-ui/core';

export default function Header() {
  const router = useRouter();

  return (
    <Box
      as='header'
      h='64px'
      w='100vw'
      borderBottom='1px solid'
      borderBottomColor='text.600'
      px={['2', '3', '4', '0']}
      fontFamily='lato'
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
            <Heading as='h1' size={['md', 'lg']} fontFamily='lato' fontWeight='700'>
              &lt;Maxim&gt;
            </Heading>
          </Link>
        </NextLink>
        <Box>
          <NextLink href='/about' passHref>
            <Link
              as='a'
              px={['1','3', '4']}
              color={router.pathname == '/about' ? 'brand.900' : 'text.900'}
              fontWeight={router.pathname == '/about' ? 'bold' : 'regular'}
            >
              About
            </Link>
          </NextLink>
          <NextLink href='/projects' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={router.pathname == '/projects' ? 'brand.900' : 'text.900'}
              fontWeight={router.pathname == '/projects' ? 'bold' : 'regular'}
            >
              Projects
            </Link>
          </NextLink>
          <NextLink href='/contact' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={router.pathname == '/contact' ? 'brand.900' : 'text.900'}
              fontWeight={router.pathname == '/contact' ? 'bold' : 'regular'}
            >
              Contact
            </Link>
          </NextLink>
          <NextLink href='/blog' passHref>
            <Link
              as='a'
              px={['1', '3', '4']}
              color={router.pathname == '/blog' ? 'brand.900' : 'text.900'}
              fontWeight={router.pathname == '/blog' ? 'bold' : 'regular'}
            >
              Blog
            </Link>
          </NextLink>
        </Box>
        <IconButton
          aria-label='Toggle dark mode'
          icon={'moon'}
          variant='link'
        />
      </Flex>
    </Box>
  );
}
