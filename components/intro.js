import { Heading, Flex, Image, Box } from '@chakra-ui/core';
import Socials from './socials';

export default function Intro() {
  return (
    <Flex
      direction='column'
      align={['center', 'center', 'center', 'flex-start']}
      width='100%'
      mx='auto'
      mb={4}
    >
      <Flex
        direction={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
        ]}
        justify='space-between'
        align='center'
      >
        <Flex
          direction='column'
          align={['center', 'center', 'center', 'flex-start']}
          mr={['0', '0', '0', '6']}
          w='100%'
        >
          <Heading as='h1' size='2xl' mb='2' color='text.900'>
            Hi, I'm Maxim.
          </Heading>
          <Heading as='h2' size='xl' color='brand.900'>
            Full-stack developer
          </Heading>
        </Flex>
        <Image
          src='/maxim.png'
          alt='Maxim De Geyter'
          size={['240px', '240px', '360px']}
        ></Image>
      </Flex>
      <Socials />
    </Flex>
  );
}
