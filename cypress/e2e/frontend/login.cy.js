describe("Login Test", () => {    
    it("Login successfully", () => {
      cy.visit("https://front.serverest.dev/");
      cy.loginByUI();
      cy.getByDataTestId("logout").contains("Logout");
    });
  });
