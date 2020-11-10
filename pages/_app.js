import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import customTheme from '../styles/theme';
import Header from '../components/header';
import Footer from '../components/footer';


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
