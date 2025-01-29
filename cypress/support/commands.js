// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("getByDataTestId", (selector) => {
    return cy.get(`[data-testid=${selector}]`)
  })

Cypress.Commands.add("loginByUI", (email = "allansk@qa.com.br", senha = "teste") => {
    cy.getByDataTestId("email").type(email);
    cy.getByDataTestId("senha").type(senha);
    cy.getByDataTestId("entrar").click();
  });
  