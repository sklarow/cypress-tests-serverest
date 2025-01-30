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

Cypress.Commands.add("loginViaUI", (email, password) => {
    if (email != ""){
        cy.getByDataTestId("email").type(email);
    }
    if (password != ""){
        cy.getByDataTestId("senha").type(password);
    }
    cy.getByDataTestId("entrar").click();
  });

Cypress.Commands.add("createTestUserViaUI", (admin = false) => {
    const userEmail = `user${Date.now()}@testing.com`;
    const password = Cypress.env('defaultPassword')

    cy.visit("/cadastrarusuarios");

    cy.intercept('POST', '**/usuarios').as('postUser');

    cy.getByDataTestId("nome").type("Usuário de Teste");
    cy.getByDataTestId("email").type(userEmail);
    cy.getByDataTestId("password").type(password);
    if (admin){
        cy.getByDataTestId("checkbox").check();
    }
    cy.getByDataTestId("cadastrar").click();
    cy.contains("Cadastro realizado com sucesso").should("be.visible");

    cy.wait('@postUser').then((interception) => {
        // Assert the status code
        expect(interception.response.statusCode).to.eq(201);
        
        // Assert the `administrador` field in the request body
        if (admin){
            expect(interception.request.body.administrador).to.eq('true'); 
        } else {
            expect(interception.request.body.administrador).to.eq('false'); 
        }  
      });

    return cy.wrap({
        email: userEmail,
        password: password
      });
  });
  