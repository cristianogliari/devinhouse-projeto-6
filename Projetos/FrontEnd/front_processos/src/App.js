import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { Home } from "./pages";

import { CustomThemeProvider } from "./utils/context/themeContext";
import { LoginProvider } from "./utils/context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Home />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </LoginProvider>
  );
}

export default App;
