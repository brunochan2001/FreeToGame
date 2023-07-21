import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@mui/material/styles';

const options: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      dark: '#424242',
      main: '#4799eb',
      contrastText: '#fff'
    }
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: 'none'
    }
  }
};

export const theme = responsiveFontSizes(createTheme(options));
