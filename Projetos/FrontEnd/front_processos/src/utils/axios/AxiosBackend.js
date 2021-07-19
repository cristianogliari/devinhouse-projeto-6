import axios from 'axios';

import { BASE_URL } from '../services/BASE_URL';

class BackendApi {
  constructor(access_token) {
    this.access_token = access_token;
  }

  async function cadastrarProcesso(data) {
    try {
      const response = await axios.post(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/cadastrar`, data, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'access_token' : this.access_token
        }    
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  async function consultarTodosOsAssuntos() {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }

  async function consultaProcessoPorId() {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }

  async function consultaProcessoPorChaveProcesso() {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }

  async function consultaPrcocessoPorAssunto() {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }

  async function atualizaProcessoPorId(data) {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }

  async function removerProcessoPorId(data) {
    try {
      const response = await axios.
    }
    catch (error) {
      console.log(error);
    }

  }
}