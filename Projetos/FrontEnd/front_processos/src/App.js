import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";
import { Home } from "./pages";

import { CustomThemeProvider } from "./utils/context/themeContext";

function App() {

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Home />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
