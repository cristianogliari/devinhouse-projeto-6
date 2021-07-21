import Keycloak from "keycloak-js";

export const keycloak = Keycloak({
	clientId: "frontend",
  url: "https://training.dev.delivery/auth/",
	realm: "Grupo01",
})