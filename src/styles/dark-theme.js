import {createMuiTheme} from '@material-ui/core';

const darkTheme = createMuiTheme({
  spacing: 4,
  palette: {
    type: 'dark',
    primary: {main: '#78bcda'},
    secondary: {main: '#7ea896'}
  }
});

export default darkTheme;
