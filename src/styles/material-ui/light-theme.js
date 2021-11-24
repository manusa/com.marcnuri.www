import {createTheme} from '@mui/material';

const lightTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {main: '#78bcda'},
    secondary: {main: '#7ea896'},
    text: {
      primary: 'rgba(51, 51, 51, 1)'
    }
  }
});

export default lightTheme;
