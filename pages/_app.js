import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import customTheme from '../styles/theme';
import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value='light'>
        <CSSReset />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
