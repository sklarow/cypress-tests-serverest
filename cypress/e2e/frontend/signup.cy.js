describe("Signup Test", () => {
    it("Create a new user successfully", () => {      
      cy.createTestUserViaUI();
    });
  });
  