import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider
} from '@mui/material/styles';

const options: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7A8288',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Poppins',
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
