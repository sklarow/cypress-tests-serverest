describe("Login Test", () => {   
    before(() => {
        cy.createTestUserViaUI();
      })

    beforeEach(() => {
        cy.visit("https://front.serverest.dev/")
      })

    it("Login successfully", () => {
      const user = Cypress.env("testUser");

      if (!user || !user.email || !user.password) {
        throw new Error("testUser credentials are missing in Cypress.env()");
      }

      cy.loginViaUI(user.email, user.password);
      cy.getByDataTestId("logout").contains("Logout");
    });

    it("Login failed - Invalid email and/or password", () => {
        cy.loginViaUI("invalidemail@ipromisse.com", "WrongPass");
        cy.contains("Email e/ou senha inválidos");
      });

    it("Login failed - Empty email", () => {
        cy.loginViaUI("", "WrongPass");
        cy.contains("Email é obrigatório");
      });
    
      it("Login failed - Empty password", () => {
        cy.loginViaUI("email@email.com", "");
        cy.contains("Password é obrigatório");
      });

      it("Login failed - Empty password and email", () => {
        cy.loginViaUI("", "");
        cy.contains("Password é obrigatório");
        cy.contains("Email é obrigatório");
      });
  });
