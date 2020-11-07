import { Heading, Flex, Image, Box } from '@chakra-ui/core';
import Socials from './socials';

export default function Intro() {
  return (
    <Flex
      direction='column'
      align={['center', 'center', 'center', 'flex-start']}
      width='100%'
      mx='auto'
      mb={12}
    >
      <Flex
        w='100%'
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
          <Heading
            as='h1'
            fontSize={['2rem', '2rem', '3rem', '4rem']}
            mb='2'
            color='text.900'
            fontFamily='lato'
            fontWeight='900'
          >
            Hi, I'm Maxim.
          </Heading>
          <Heading
            as='h2'
            size='xl'
            color='brand.900'
            fontFamily='lato'
            fontWeight='700'
          >
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
