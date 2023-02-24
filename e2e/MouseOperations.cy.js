import "cypress-iframe";
require("@4tw/cypress-drag-drop");

describe("Mouse operations", () => {
    it("Mouse hover", () => {
        cy.visit("https://demo.opencart.com");
        cy.get(
            ":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link"
        ).should("not.be.visible");
        cy.get(".nav > :nth-child(1) > .dropdown-toggle")
            .trigger("mouseover")
            .click();
        cy.get(
            ":nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link"
        ).should("be.visible");
    });

    it("Right click", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
        cy.get(".context-menu-icon-delete > span").should("be.visible");
    });
});

describe("Mouse operations", () => {
    it("Double click", () => {
        cy.visit(
            "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3"
        );
        cy.frameLoaded("#iframeResult"); //Load the frame

        //Approach1 - trigger ()
        cy.iframe("#iframeResult")
            .find("button[ondblclick='myFunction()']")
            .trigger("dblclick");
        cy.iframe("#iframeResult")
            .find("#field2")
            .should("have.value", "Hello World!");

        //Approach2 - dblclick ()
        cy.iframe("#iframeResult")
            .find("button[ondblclick='myFunction()']")
            .dblclick();
        cy.iframe("#iframeResult")
            .find("#field2")
            .should("have.value", "Hello World!");
    });

    //for this chunk of code we need to install de plugin before require("@4tw/cypress-drag-drop");
    it("Drag and drop using plugin", () => {
        cy.visit(
            "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
        );
        cy.get("#box4").should("be.visible");
        cy.get("#box102").should("be.visible");
        cy.wait(3000);
        cy.get("#box4").drag("#box102", { force: true });
    });
    it.only("Scrolling page", () => {
        cy.visit(
            "https://www.countries-ofthe-world.com/flags-of-the-world.html"
        );

        //Australia flag
        cy.get(
            ":nth-child(1) > tbody > :nth-child(10) > :nth-child(1) > img"
        ).scrollIntoView({ duration: 3000 });
        cy.get(
            ":nth-child(1) > tbody > :nth-child(10) > :nth-child(1) > img"
        ).should("be.visible");
        cy.get(
            ":nth-child(1) > tbody > :nth-child(39) > :nth-child(1) > img"
        ).scrollIntoView({ duration: 3000 });
        cy.get(
            ":nth-child(1) > tbody > :nth-child(39) > :nth-child(1) > img"
        ).should("be.visible");
        cy.get("#footer").scrollIntoView();
    });
});
