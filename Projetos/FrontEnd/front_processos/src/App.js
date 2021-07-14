import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { Home } from './pages';

function App() {
  return (
    <ThemeProvider>
    {/* <ThemeProvider theme={theme}> */}

      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Home />
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
