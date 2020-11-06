import { theme } from '@chakra-ui/core';

const customTheme = {
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    ...theme.fonts,
    body: 'system-ui, sans-serif',
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
      800: '#fcefef',
      700: '#2a69ac',
    },
    text: {
      900: '#16102f',
      800: '#514c63',
      700: '#8a8797',
      600: '#b8b8cb',
    },
  },
  icons: {
    ...theme.icons,
  },
};

export default customTheme;
