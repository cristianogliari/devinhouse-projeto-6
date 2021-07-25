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

    // Verificar se redirecionou para a /inicio novamente
    cy.url().should("include", "/inicio");
  });

  it("efetuar logout", () => {
    //Acessar a página
    cy.visit("/inicio");

    //Clicar no botão sair
    cy.get('button').contains('Jeff Bezos').click().as('dropDrownMenu');
    cy.wait(6000);
    cy.get('button').contains('Sair').click();

    // Verificar se redirecionou para a /inicio novamente
    cy.url().should("include", "/inicio");
  });
});