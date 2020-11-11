import Image from 'next/image';
import { Heading, Flex, Box } from '@chakra-ui/core';

import Socials from './socials';
import { textColor } from '../styles/theme';

export default function Intro({ colorMode }) {
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
          mt={['6', '6', '6', '0']}
          w={['100%', '100%', '100%', '50%']}
        >
          <Heading
            as='h1'
            fontSize={['2rem', '2rem', '3rem', '4rem']}
            mb='2'
            color={textColor[colorMode]}
            fontWeight='900'
          >
            Hi, I'm Maxim.
          </Heading>
          <Heading as='h2' size='xl' color='red.500' fontWeight='700'>
            Full Stack JS developer
          </Heading>
        </Flex>
        <Box w={['240px', '240px', '360px']} h={['240px', '240px', '360px']}>
          <Image
            src='/maxim.png'
            alt='Maxim De Geyter'
            width='1000'
            height='1000'
            layout='responsive'
          />
        </Box>
      </Flex>
      <Socials colorMode={colorMode} />
    </Flex>
  );
}
