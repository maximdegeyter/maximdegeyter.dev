import { Heading, Flex, Box } from '@chakra-ui/core';
import ExperienceItem from './experienceItem';
import { textColor, borderColor, tertiaryColor } from '../styles/theme';

export default function Experience({ colorMode }) {
  return (
    <Flex
      w={['100%', '100%', '100%', '720px']}
      px={['2', '3', '4', '0']}
      direction='column'
      mx='auto'
      mb='16'
    >
      <Heading
        as='h3'
        size='lg'
        mb={2}
        color={textColor[colorMode]}
        fontWeight='900'
      >
        Experience & Education.
      </Heading>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor={borderColor[colorMode]}>
        <Heading as='h4' size='sm' color={tertiaryColor[colorMode]} mb='6' fontWeight='700'>
          2020
        </Heading>
        <ExperienceItem
          colorMode={colorMode}
          title='Started my first job! 🚀'
          desc='Started working at Capgemini as an AEM developer.'
        />
        <ExperienceItem
          colorMode={colorMode}
          title='Full-stack development summerjob'
          desc='Worked as a developer with MERN-stack, for MediAVentures.'
        />
        <ExperienceItem
          colorMode={colorMode}
          title='Graduated from Devine Kask 🎓'
          desc='Ended my studies in digital design and development succesfully!'
        />
        <ExperienceItem
          colorMode={colorMode}
          title='Internship at Studio Hyperdive'
          desc='Worked at Studio Hyperdrive as an intern. Main technologies: React and NuxtJS'
        />
      </Box>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor={borderColor[colorMode]}>
        <Heading as='h4' size='sm' color={tertiaryColor[colorMode]} mb='6' mt='2'>
          2019
        </Heading>
        <ExperienceItem
          colorMode={colorMode}
          title='Summerjob as React-developer ⚛'
          desc='My first summerjob in development at Open Summer of Code 2019, for the Gentlestudent project.'
        />
      </Box>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor={borderColor[colorMode]}>
        <Heading as='h4' size='sm' color={tertiaryColor[colorMode]} mb='6' mt='2'>
          2016
        </Heading>
        <ExperienceItem
          colorMode={colorMode}
          title='Started studies at Devine'
          desc='Started studying digital design and development at Howest.'
        />
      </Box>
    </Flex>
  );
}
