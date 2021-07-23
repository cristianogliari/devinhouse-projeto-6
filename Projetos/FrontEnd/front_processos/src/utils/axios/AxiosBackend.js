import axios from 'axios';

import { BASE_URL } from '../services/BASE_URL';

export default class BackendApi {
  constructor(access_token) {
    this.access_token = access_token;
  }

  async cadastrarProcesso(data) {
    try {
      const response = await axios.post(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/cadastrar`, data, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async consultarTodosOsProcessos() {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/buscar`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })
    
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async consultaProcessoPorId(data) {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/buscar/id/${data}`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async consultaProcessoPorChaveProcesso(data) {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/buscar/chaveprocesso?value=${data}`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async consultaPrcocessoPorAssunto(data) {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/buscar/assunto/id/${data.assunto.id}`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }

  }

  async atualizaProcessoPorId(data) {
    try {
      const response = await axios.put(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/atualizar/id/${data.id}`, data, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }

  }

  async removerProcessoPorId(data) {
    try {
      const response = await axios.delete(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/processos/v1/remover/id/${data.id}`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })

      return response;
    }
    catch (error) {
      console.log(error);
    }

  }

  async consultarTodosOsAssuntos() {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/assuntos/v1/buscar`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })
    
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }

  async consultarTodosOsInteressados() {
    try {
      const response = await axios.get(`${BASE_URL.BASE_PROCESSOS_BACKEND}/backend/interessados/v1/buscar`, {
        headers: {
          'Content-Type' : 'application/json',
          'api-version' : 'v1',
          'Authorization' : `Bearer ${this.access_token}`
        }    
      })
    
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }
}