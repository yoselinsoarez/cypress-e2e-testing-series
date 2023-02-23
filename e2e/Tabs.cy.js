describe("Handle tabs", () => {
    it.skip("approach 1", () => {
        //removing the target attribute from the element
        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab or window
        cy.get(".example >a").invoke("removeAttr", "target").click(); //clicking on link
        cy.url("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(4000);
        //operations
        cy.go("back"); //back to parent tab
    });

    it("approach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get(".example >a").then((e) => {
            let url = e.prop("href");
            cy.visit(url);
        });
        cy.url("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(4000);
        cy.go("back");
    });
});
