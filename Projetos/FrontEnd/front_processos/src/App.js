import { BrowserRouter } from "react-router-dom";

import { LinearProgress } from "@material-ui/core";

import { Routes } from "./routes";
import { Home } from "./pages";

import { CustomThemeProvider } from "./utils/context/themeContext";
import { DataProvider } from "./utils/context/DataContext";
import { useKeycloak } from "@react-keycloak/web";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { initialized } = useKeycloak();
  const { keycloak } = useKeycloak();

  localStorage.setItem('keycloak-token', keycloak.token);

  return (
    <DataProvider>
      <ToastContainer />
      <CustomThemeProvider>
        <BrowserRouter>    
            {!initialized ? (
              <LinearProgress style={{ width: '100%' }}/>
            ) : (
              <Routes>
                <Home />
              </Routes>
            )}
        </BrowserRouter>
      </CustomThemeProvider>
    </DataProvider>
  );
}

export default App;
