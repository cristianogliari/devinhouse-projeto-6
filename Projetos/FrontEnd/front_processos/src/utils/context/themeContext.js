import { createContext, useContext, useEffect, useState } from 'react'

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { getTheme } from '../../theme'

const ContextTheme = createContext({})

const CustomThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState();

  const changeTheme = () => {
    setDarkMode((prev) => !prev)
  };

  useEffect(() => {
    const storagedTheme = localStorage.getItem("darkMode")

    if (storagedTheme) {
      setDarkMode(storagedTheme === 'true' ? true : false)
    }
  }, []);

  useEffect(() => {
    setTheme(getTheme(darkMode))
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode]);

  return (
    <ContextTheme.Provider value={{ changeTheme, darkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        {children}
      </ThemeProvider>
    </ContextTheme.Provider>
  )
}

function useCustomTheme() {
  const context = useContext(ContextTheme)

  if (!context) {
    throw new Error('Custom Error: Problems in Theme Context.')
  }

  return context
}

export { CustomThemeProvider, useCustomTheme };