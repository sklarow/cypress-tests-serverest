describe("Test endpoint /produtos/", () => {

    it("Should return the products list", () => {
        cy.request("GET", Cypress.env("apiBaseUrl") + "/produtos").then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("quantidade");
          expect(response.body).to.have.property("produtos");
        });
      });
  });
  