import React, { createContext, useContext, useState } from "react";

import { AxiosLogin } from "../axios/AxiosLogin";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState({
    state: "waiting",
  });

  const logar = (payload) => {
    setLogin({ payload, state: "ready" });
  };
  const conectar = async () => {
    const resultado = await AxiosLogin.placholder();
    logar(resultado);
  };
  const desconectar = () => {
    setLogin({
      state: "waiting",
    });
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
