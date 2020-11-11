import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  breakpoints: ['30em', '48em', '62em', '80em'],
  fonts: {
    ...theme.fonts,
    body: `'Lato', sans-serif`,
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

export const textColor = { light: 'text.900', dark: 'gray.200' };
export const iconColor = { light: 'text.800', dark: 'gray.400' };
export const tertiaryColor = { light: 'text.700', dark: 'gray.500' };
export const borderColor = { light: 'text.600', dark: 'gray.600' };
export const bgColor = { light: 'red.50', dark: '#432D36' };
export const tagBgColor = { light: 'red.100', dark: '#6D3A40' };
