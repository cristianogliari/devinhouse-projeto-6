import React, { createContext, useContext, useState } from "react";

import BackendApi from "../axios/AxiosBackend";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [stateLoading, setStateLoading] = useState("skeleton");
  const [listaAssunto, setListaAssunto] = useState([]);
  const [listaProcesso, setlistaProcesso] = useState([]);
  const [listaInteressado, setListaInteressado] = useState([]);

  const carregarData = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsInteressados() 
        .then((res) => setListaInteressado(res.data))
        .catch((error) => alert(error));

    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsAssuntos() 
        .then((res) => setListaAssunto(res.data))
        .catch((error) => alert(error));

    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
        .then((res) => setlistaProcesso(res.data))
        .catch((error) => alert(error));
    setStateLoading("ready")
  };

  // const recarregarProcessos = () => {
  //   let listaProcesso;
  //   setData({...data, state:"skeleton"})
  //   BackendApi(localStorage.getItem("keycloak-token"))
  //     .consultarTodosOsProcessos()
  //       .then((res => {listaProcesso = res.data}))
  //       .catch((error) => alert(error));
  //   setData({ ...data, listaProcesso, state: "ready", });
  // }
  /* const conectar = (data) => {
    AxiosLogin.autenticarUsuario(data)
      .then((res) => logar(res))
      .catch((error) => alert(error));
  }; */
  // const removerData = () => {
  //   setData({state: "waiting",});
  // };

  return (
    <DataContext.Provider value={{ stateLoading, listaAssunto, listaProcesso, listaInteressado, carregarData, }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export { useDataContext, DataProvider };
