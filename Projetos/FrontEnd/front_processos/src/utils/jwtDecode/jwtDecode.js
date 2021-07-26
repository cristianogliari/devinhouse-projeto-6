import jwt_decode from "jwt-decode";

export const decodeTokenFunction = () => {
  const token = localStorage.getItem('keycloak-token');

  let userDataObj;

  if(token === null) {
    userDataObj = {
      'primeiroNome' : '',
      'ultimoNome' : '',
      'nomeCompleto' : '',
      'email' : ''
    }
  } else {
    let decodeToken = jwt_decode(token);

    userDataObj = {
      'primeiroNome' : `${decodeToken.given_name}`,
      'ultimoNome' : `${decodeToken.family_name}`,
      'nomeCompleto' : `${decodeToken.given_name} ${decodeToken.family_name}`,
      'email' : decodeToken.email    
    }
  }

  return userDataObj;
}