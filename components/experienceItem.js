import { Heading, Flex, Box, Text } from '@chakra-ui/core';

import { textColor, borderColor, iconColor } from '../styles/theme';

export default function ExperienceItem({ colorMode, title, desc }) {
  return (
    <Flex direction='row' ml='8' mb='6'>
      <Box
        w='16px'
        h='16px'
        borderRadius='32px'
        backgroundColor='red.500'
        mr='4'
        mt='5'
      ></Box>
      <Box
        borderWidth='1px'
        borderRadius='8px'
        borderColor={borderColor[colorMode]}
        p='4'
        w={['100%', '100%', '75%', '60%']}
      >
        <Heading
          as='h5'
          size='md'
          mb='2'
          color={textColor[colorMode]}
          fontWeight='900'
        >
          {title}
        </Heading>
        <Text color={iconColor[colorMode]}>{desc}</Text>
      </Box>
    </Flex>
  );
}
