import React, { createContext, useContext, useState } from "react";

import AxiosLogin from "../axios/AxiosLogin";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState({state: "waiting",});

  const logar = (payload) => {
    setLogin({payload, state:"skeleton"})
    //AxiosBackend. listaProcesso 
    //AxiosBackend. listaInteressado
    //AxiosBackend. listaAssunto
    //setLogin({ payload, listaProcesso, listaAssunto, listaInteressado, state: "ready", });
  };
  const conectar = (data) => {
    setLogin({state: "loading",});
    AxiosLogin.autenticarUsuario(data)
      .then((res) => logar(res))
      .catch((error) => alert(error));
  };
  const desconectar = () => {
    setLogin({state: "waiting",});
  };

  return (
    <LoginContext.Provider value={{ login, logar, conectar, desconectar }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = useContext(LoginContext);
  return context;
};

export { useLoginContext, LoginProvider };
