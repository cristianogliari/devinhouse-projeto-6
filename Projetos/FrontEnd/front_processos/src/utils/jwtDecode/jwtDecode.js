import jwt_decode from "jwt-decode";

const token = localStorage.getItem('keycloak-token');

const decodeToken = jwt_decode(token);

export const userData = {
  'primeiroNome' : {},
  'ultimoNome' : {},
  'nomeCompleto' : {},
  'email' : {}
};