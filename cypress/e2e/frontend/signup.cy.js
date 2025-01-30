describe("Signup Test", () => {
    it("Create a new user successfully", () => {      
      cy.createTestUserViaUI();
    });

    it("Create a new admin user successfully", () => {      
      cy.createTestUserViaUI({admin: true});
    });
  });
  