describe("Login Test", () => {
    it("Login successfully", () => {
      cy.visit("https://front.serverest.dev/");
      cy.get("[data-testid=email]").type("allansk@qa.com.br");
      cy.get("[data-testid=senha]").type("teste");
      cy.get("[data-testid=entrar]").click();
      cy.get("[data-testid=logout]").contains("Logout");
    });
  });
