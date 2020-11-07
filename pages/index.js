import Head from 'next/head';
import { Flex } from '@chakra-ui/core';

import Intro from '../components/intro';
import AboutSection from '../components/aboutSection';
import Experience from '../components/experience';
import ContactSection from '../components/contactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxim De Geyter</title>
        <meta
          name='description'
          content="Hi, I'm Maxim De Geyter. Welcome to my website!"
        />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Flex
        as='main'
        direction='column'
        maxWidth='960px'
        width='100%'
        mx='auto'
        my='16'
      >
        <Intro />
        <AboutSection />
        <Experience />
        <ContactSection />
      </Flex>
    </>
  );
}
