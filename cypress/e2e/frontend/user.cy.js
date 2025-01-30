describe("Regular User Test", () => {
    before(() => {
        cy.createTestUserViaUI({admin: false}).then((user) => {
            Cypress.env({
                userEmail: user.email,
                userPassword: user.password,
            })
          });
    })

    beforeEach(() => {
        cy.visit("/")
        cy.loginViaUI(Cypress.env('userEmail'), Cypress.env('userPassword'));
      })

    it.only("Search an inexistent product", () => {     
        cy.visit("/home");
        cy.getByDataTestId("pesquisar").type(`Produto inexistente ${Date.now()}`);
        cy.getByDataTestId("botaoPesquisar").click();
        cy.contains("Nenhum produto foi encontrado")
      });
})
