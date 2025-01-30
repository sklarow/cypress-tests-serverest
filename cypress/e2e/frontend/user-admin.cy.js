describe("Admin User Test", () => {
    before(() => {
        cy.createTestUserViaUI({admin: true}).then((user) => {
            Cypress.env({
                adminEmail: user.email,
                adminPassword: user.password,
            })
          });
    })

    beforeEach(() => {
        cy.visit("/")
        cy.loginViaUI(Cypress.env('adminEmail'), Cypress.env('adminPassword'));
      })

    it.only("Add a new product", () => {     
        cy.visit("/admin/cadastrarprodutos");
        
        cy.intercept('POST', '**/produtos').as('postProduct');

        cy.getByDataTestId("preco").type("10");
        cy.getByDataTestId("nome").type(`Produto ${Date.now()}`);
        cy.getByDataTestId("descricao").type("Este é um produto de testes");
        cy.getByDataTestId("quantity").type("3");
        cy.getByDataTestId("imagem").selectFile('cypress/fixtures/product_sample_image.jpg');
        //There's a typo on the DataTestId "cadastar" instead of "cadastrar"
        cy.getByDataTestId("cadastarProdutos").click();

        cy.wait('@postProduct').its('response.statusCode').should('eq', 201);
      });

})
