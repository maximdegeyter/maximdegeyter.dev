import { Heading, Flex, Box, Text } from '@chakra-ui/core';

export default function ExperienceItem({ title, desc }) {
  return (
      <Flex direction='row' ml='4' mb='3'>
        <Box
          w='16px'
          h='16px'
          borderRadius='32px'
          backgroundColor='brand.900'
          mr='3'
        ></Box>
        <Box
          borderWidth='1px'
          borderRadius='8px'
          p='3'
          w={['100%', '100%', '75%', '60%']}
        >
          <Heading as='h5' size='md' mb='1' color='text.900'>
            {title}
          </Heading>
  <Text color='text.800'>{desc}</Text>
        </Box>
      </Flex>
  );
}
