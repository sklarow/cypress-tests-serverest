describe("Test endpoint /usuarios/", () => {
    it("Deve criar um novo usuário com sucesso", () => {
      cy.request("POST", Cypress.env("apiBaseUrl") + "/usuarios", {
        nome: "Teste QA",
        email: `teste${Date.now()}@teste.com`,
        password: Cypress.env('defaultPassword'),
        administrador: "true",
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("message", "Cadastro realizado com sucesso");
      });
    });
  });
  