import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
    error: {
      main: red.A400,
    },
  },
});

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

export default theme;