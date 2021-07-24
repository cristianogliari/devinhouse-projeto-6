import React, { createContext, useContext, useState } from "react";

import BackendApi from "../axios/AxiosBackend";
import { toastError } from "../alert/toast";

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
      .catch((error) => toastError('Erro de conexão, tente novamente'));

    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsAssuntos()
      .then((res) => setListaAssunto(res.data))
      .catch((error) => toastError('Erro de conexão, tente novamente'));

    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
        .then((res) => setlistaProcesso(res.data))
        .catch((error) => toastError('Erro de conexão, tente novamente'));
    };

  const recarregarProcessos = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsProcessos()
        .then((res) => setlistaProcesso(res.data))
        .catch((error) => toastError('Erro de conexão, tente novamente'));
   }

   const buscarProcessosPorNumeroProcesso = (processoid) => {
     new BackendApi(localStorage.getItem("keycloak-token"))
      .consultaProcessoPorId(processoid)
        .then((res) => setlistaProcesso(res.data))
        .catch((error) => toastError('Erro de conexão, tente novamente'));
   }

   const buscarProcessosPorAssuntoID = (assuntoid) => {
    new BackendApi(localStorage.getItem("keycloak-token"))
    .consultaPrcocessoPorAssunto(assuntoid)
      .then((res) => setlistaProcesso(res.data))
      .catch((error) => toastError('Erro de conexão, tente novamente'));
   }

   const recarregarAssunto = () => {
    new BackendApi(localStorage.getItem("keycloak-token"))
      .consultarTodosOsAssuntos()
      .then((res) => setListaAssunto(res.data))
      .catch((error) => toastError('Erro de conexão, tente novamente'));
  }
   
  return (
    <DataContext.Provider value={{ stateLoading, setStateLoading, listaAssunto, listaProcesso, listaInteressado, carregarData, recarregarProcessos, recarregarAssunto, buscarProcessosPorAssuntoID, buscarProcessosPorNumeroProcesso }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  return context;
};

export { useDataContext, DataProvider };
