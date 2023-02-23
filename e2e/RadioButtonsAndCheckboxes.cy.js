/// <reference types="Cypress" />
describe("Check IU elements", () => {
    it("Checking radio buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        //visibility of radio buttons

        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        //selecting radio buttons
        cy.get("input#male").check().should("be.checked");
        cy.get("input#female").should("not.be.checked");

        cy.get("input#female").check().should("be.checked");
        cy.get("input#male").should("not.be.checked");
    });
    it("Checking the checkboxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input#wednesday").should("be.visible");

        //selecting single check box
        cy.get("input#wednesday").check().should("be.checked");

        //unselecting single check box
        cy.get("input#wednesday").uncheck().should("not.be.checked");
    });
    it("Selecting multiple checkboxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input.form-check-input[type='checkbox']")
            .check()
            .should("be.checked");

        //unselecting all the checkboxes

        cy.get("input.form-check-input[type='checkbox']")
            .uncheck()
            .should("not.be.checked");
    });
    it("Selecting first and last check box", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.get("input.form-check-input[type='checkbox']")
            .first()
            .check()
            .should("be.checked");
        cy.get("input.form-check-input[type='checkbox']")
            .last()
            .check()
            .should("be.checked");
    });
});
