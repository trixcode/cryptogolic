import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    palette: {
      primary: {
        light: indigo[300],
        main: indigo[500],
        dark: indigo[700],
      },
      secondary: {
        light: teal[300],
        main: teal[500],
        dark: teal[700],
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

export default theme;
