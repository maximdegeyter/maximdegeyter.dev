import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    ...theme.fonts,
    body: 'Lato',
    lato: 'Lato',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  colors: {
    ...theme.colors,
    brand: {
      900: '#ea625f',
      800: '#FCB1AA',
      700: '#FFE4DF',
      600: '#FEFAFA',
    },
    text: {
      900: '#1B2738',
      800: '#717780',
      700: '#8a8797',
      600: '#e2e8f0',
    },
  },
  icons: {
    ...theme.icons,
  },
};

export default customTheme;
