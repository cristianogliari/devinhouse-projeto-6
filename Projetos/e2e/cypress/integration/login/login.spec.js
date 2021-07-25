/// <reference types="cypress" />

describe("Login", () => {
  it("efetuar login", () => {
    //Acessar a página
    cy.visit("/inicio");

    //Informar login senha
    cy.get("input[name=username]").type("bezos");
    cy.get("input[name=password]").type("123456");

    //Clicar no botão enviar
    cy.get("input[type=submit]").click();

    // Verificar se redirecionou para a /home novamente
    cy.url().should("include", "/inicio");
  });

  it("efetuar logout", () => {
    //Acessar a página
    cy.visit("/inicio");

    //Clicar no botão sair
    // cy.get("button").find("Sair").click();
    // cy.get("button").contains("Sair").click();
    cy.get("button").find('Jeff Bezos').click();
    cy.get("span").contains('Sair').click();
    // cy.get("button#logout").find('logout').click();
    // cy.get("button").find("span").contains('Sair').click();

    // Verificar se redirecionou para a /home novamente
    cy.url().should("include", "/inicio");
  });
});