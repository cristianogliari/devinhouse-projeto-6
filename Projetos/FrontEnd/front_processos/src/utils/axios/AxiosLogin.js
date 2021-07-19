import axios from 'axios';

import { BASE_URL } from '../services/BASE_URL';

class AxiosLogin {
  async autenticarUsuario(data) {
    try {
      console.log(data);
      const response = await axios.post(`${BASE_URL.BASE_KEYCLOAK}`, {
        'grant_type' : 'password',
        'client_id' : 'projeto6-front',
        'client_secret' : '8988e5ba-666a-4aa9-910d-377a4c67ca07',
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

export default new AxiosLogin();