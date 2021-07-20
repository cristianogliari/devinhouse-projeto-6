import React, { createContext, useContext, useState } from "react";

import AxiosLogin from "../axios/AxiosLogin";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState({state: "waiting",});

  const carregarData = (payload) => {
    setData({payload, state: "loading",});
    BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsInteressados() 
      .then((res => {const listaInteressado = res}))
      .catch((error) => alert(error));
    BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsAssuntos() 
      .then((res => {const listaAssunto = res}))
      .catch((error) => alert(error));
    setData({...state, listaInteressado, listaAssunto, state:"skeleton"})
    BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
      .then((res => {const listaProcesso = res}))
      .catch((error) => alert(error));
    setData({ ...state, listaProcesso, state: "ready", });
  };

  const recarregarProcessos = () => {
    setData({...state, state:"skeleton"})
    BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
      .then((res => {const listaProcesso = res}))
      .catch((error) => alert(error));
    setData({ ...state, listaProcesso, state: "ready", });
  }
  const conectar = (data) => {
    AxiosLogin.autenticarUsuario(data)
      .then((res) => logar(res))
      .catch((error) => alert(error));
  };
  const removerData = () => {
    setData({state: "waiting",});
  };

  return (
    <DataContext.Provider value={{ data, carregarData, recarregarProcessos, removerData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export { useDataContext, DataProvider };
