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
    };

  const recarregarProcessos = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
        .then((res) => setlistaProcesso(res.data))
        .catch((error) => alert(error));
   }

   const buscarProcessosPorAssuntoID = (assuntoid) => {
    new BackendApi(localStorage.getItem("keycloak-token"))
    .consultaPrcocessoPorAssunto(assuntoid)
      .then((res) => setlistaProcesso(res.data))
      .catch((error) => alert(error));
   }
   
  return (
    <DataContext.Provider value={{ stateLoading, setStateLoading, listaAssunto, listaProcesso, listaInteressado, carregarData, recarregarProcessos, buscarProcessosPorAssuntoID}}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export { useDataContext, DataProvider };
