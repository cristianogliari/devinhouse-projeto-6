import axios from 'axios';

import { BASE_URL } from '../services/BASE_URL';

class AxiosLogin {
  async function autenticarUsuario(data) {
    try {
      const response = await axios.post(`${BASE_URL.BASE_KEYCLOAK}`, {
        'grant_type' : 'password',
        'client_id' : 'projeto6-back',
        'client_secret' : 'e227f271-398d-49de-bbeb-2fc27b632f02',
        'username' : `${data.username}`,
        'password' : `${data.password}`
      }, {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      });
      console.log(response);
    }
    catch (error) {
      console.log('erro no try catch axios login');
      console.log(error);
    }
  }
}