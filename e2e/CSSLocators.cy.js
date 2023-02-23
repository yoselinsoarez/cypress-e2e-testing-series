describe("CSS locators", () => {
    it("css locators", () => {
        cy.visit("https://jpetstore.aspectran.com/");
        cy.get("#Search").type("fish"); //accessing by id
        cy.get(".input-group-button").contains("Search").click(); //accessing by class
        cy.get("h3").should("be.visible");
    });
});
