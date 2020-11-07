import { Heading, Flex, Box } from '@chakra-ui/core';
import ExperienceItem from './experienceItem';

export default function Experience() {
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
        color='text.900'
        fontFamily='lato'
        fontWeight='900'
      >
        Experience & Education.
      </Heading>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
        <Heading
          as='h4'
          size='sm'
          color='text.700'
          mb='6'
          fontFamily='lato'
          fontWeight='700'
        >
          2020
        </Heading>
        <ExperienceItem
          title='Started my first job! 🚀'
          desc='Started working at Capgemini as an AEM developer.'
        />
        <ExperienceItem
          title='Full-stack development summerjob'
          desc='Worked as a developer with MERN-stack, for MediAVentures.'
        />
        <ExperienceItem
          title='Graduated from Devine Kask 🎓'
          desc='Ended my studies in digital design and development succesfully!'
        />
        <ExperienceItem
          title='Internship at Studio Hyperdive'
          desc='Worked at Studio Hyperdrive as an intern. Main technologies: React and NuxtJS'
        />
      </Box>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
        <Heading as='h4' size='sm' color='text.700' mb='6' mt='2'>
          2019
        </Heading>
        <ExperienceItem
          title='Summerjob as React-developer ⚛'
          desc='My first summerjob in development at Open Summer of Code 2019, for the Gentlestudent project.'
        />
      </Box>
      <Box w='100%' py='3' borderBottom='solid 1px' borderColor='text.600'>
        <Heading as='h4' size='sm' color='text.700' mb='6' mt='2'>
          2016
        </Heading>
        <ExperienceItem
          title='Started studies at Devine'
          desc='Started studying digital design and development at Howest.'
        />
      </Box>
    </Flex>
  );
}
