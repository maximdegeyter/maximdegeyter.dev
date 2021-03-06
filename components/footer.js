import { Flex, Box, Text, useColorMode } from '@chakra-ui/core';

import Socials from './socials';

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box
      as='footer'
      backgroundColor={colorMode === 'light' ? 'red.300' : '#6D3A40'}
      h='192px'
      w='100vw'
      px={['2', '3', '4', '0']}
    >
      <Flex
        flexDirection={['column-reverse', 'column-reverse', 'row']}
        justifyContent={['center', 'center', 'space-between']}
        alignItems='center'
        maxWidth='960px'
        width='100%'
        h='100%'
        m='auto'
      >
        <Text>Made with ❤️ by Maxim.</Text>
        <Socials />
      </Flex>
    </Box>
  );
}
