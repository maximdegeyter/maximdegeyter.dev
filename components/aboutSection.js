import { Heading, Flex, Link, Button, Text } from '@chakra-ui/core';

export default function AboutSection() {
  return (
    <Flex
      w={['100%', '100%', '100%', '720px']}
      px={['2', '3', '4', '0']}
      direction='column'
      mx='auto'
      mb='5'
    >
      <Heading as='h3' size='lg' mb={2} color='text.900'>
        About me.
      </Heading>
      <Text color='text.800'>
        I'm a 25 year old{' '}
        <Text as='span' fontWeight='bold' color='text.900'>
          Devine (Digital design & development) alumni
        </Text>{' '}
        from Ghent, Belgium 🇧🇪. Recently, I started my first job as an AEM
        developer for{' '}
        <Link
          color='blue.400'
          textDecoration='underline'
          href='https://www.capgemini.com/'
          isExternal
        >
          Capgemini ♠️
        </Link>
        . If I'm not busy programming or designing, then you'll probably find me
        near a comic book, something Star Wars related, or a basketball!
      </Text>
      <Button
        h='48px'
        w={['50%', '40%', '30%', '25%']}
        borderRadius='8px'
        border='solid 1px'
        borderColor='brand.900'
        backgroundColor='brand.800'
        color='text.900'
        mt='3'
        _hover={{ backgroundColor: 'brand.900', color: 'white' }}
      >
        More about me
      </Button>
    </Flex>
  );
}
