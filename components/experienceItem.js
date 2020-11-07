import { Heading, Flex, Box, Text } from '@chakra-ui/core';

export default function ExperienceItem({ title, desc }) {
  return (
    <Flex direction='row' ml='8' mb='6'>
      <Box
        w='16px'
        h='16px'
        borderRadius='32px'
        backgroundColor='brand.900'
        mr='4'
      ></Box>
      <Box
        borderWidth='1px'
        borderRadius='8px'
        p='6'
        w={['100%', '100%', '75%', '60%']}
      >
        <Heading
          as='h5'
          size='md'
          mb='2'
          color='text.900'
          fontFamily='lato'
          fontWeight='900'
        >
          {title}
        </Heading>
        <Text color='text.800'>{desc}</Text>
      </Box>
    </Flex>
  );
}
