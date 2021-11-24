import {createTheme} from '@mui/material';

const darkTheme = createTheme({
  spacing: 4,
  components: {
    MuiFormControl: {
      defaultProps: {
        variant: 'standard'
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard'
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard'
      }
    }
  },
  palette: {
    mode: 'dark',
    primary: {main: '#78bcda'},
    secondary: {main: '#7ea896'},
    background: {
      paper: '#424242'
    }
  }
});

export default darkTheme;
