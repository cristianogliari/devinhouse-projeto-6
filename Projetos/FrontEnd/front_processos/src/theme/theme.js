import { createTheme } from "@material-ui/core";
import { deepPurple, indigo, lightBlue, pink } from '@material-ui/core/colors'

export const getTheme = (themeMode) =>
  createTheme({
    ...(themeMode ? darkTheme : lightTheme),
  });

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: pink,
    secondary: deepPurple,
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: indigo,
    secondary: lightBlue,
  },
});