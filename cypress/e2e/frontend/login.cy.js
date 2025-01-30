describe("Login Test", () => {   
    beforeEach(() => {
        cy.visit("https://front.serverest.dev/")
      })

    it("Login successfully", () => {
      cy.loginByUI();
      cy.getByDataTestId("logout").contains("Logout");
    });

    it("Login failed - Invalid email and/or password", () => {
        cy.loginByUI("invalidemail@ipromisse.com", "WrongPass");
        cy.contains("Email e/ou senha inválidos");
      });

    it("Login failed - Empty email", () => {
        cy.loginByUI("", "WrongPass");
        cy.contains("Email é obrigatório");
      });
    
      it("Login failed - Empty password", () => {
        cy.loginByUI("email@email.com", "");
        cy.contains("Password é obrigatório");
      });

      it("Login failed - Empty password and email", () => {
        cy.loginByUI("", "");
        cy.contains("Password é obrigatório");
        cy.contains("Email é obrigatório");
      });
  });
