import React, { createContext, useContext, useState } from "react";

import BackendApi from "../axios/AxiosBackend";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState({state: "",});

  const carregarData = (payload) => {
    let listaInteressado;
    let listaAssunto;
    let listaProcesso;
    setData({payload, state: "loading",});
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsInteressados() 
      .then((res => {listaInteressado = res}))
      .catch((error) => alert(error));
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsAssuntos() 
      .then((res => {listaAssunto = res}))
      .catch((error) => alert(error));
    setData({...data, listaInteressado, listaAssunto, state:"skeleton"})
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
      .then((res => {listaProcesso = res}))
      .catch((error) => alert(error));
    setData({ ...data, listaProcesso, state: "ready", });
  };

  const recarregarProcessos = () => {
    let listaProcesso;
    setData({...data, state:"skeleton"})
    BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
      .then((res => {listaProcesso = res}))
      .catch((error) => alert(error));
    setData({ ...data, listaProcesso, state: "ready", });
  }
  /* const conectar = (data) => {
    AxiosLogin.autenticarUsuario(data)
      .then((res) => logar(res))
      .catch((error) => alert(error));
  }; */
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
