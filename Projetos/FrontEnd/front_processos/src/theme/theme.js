import { createTheme } from "@material-ui/core";

export const getTheme = (themeMode) =>
  createTheme({
    ...(themeMode ? darkTheme : lightTheme),
  });

const darkTheme = createTheme({
  palette: {
    type: "dark",
    //#5C5CFF
    primary: {
      main: "#35067a",
    },
    background: {
      default: "#2c2c2c"
    } 
  },
});

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#5C5CFF"
    },
  },
});