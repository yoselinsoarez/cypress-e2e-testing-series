describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    //should and
    //cy.url().should("include", "orangehrmlive.com");
    /*cy.url().should("eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      
    ); */
    //cy.url().should("contain", "orangehrmlive");

    //The same way to write assertions

    /*cy.url()
      .should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrmlive"); */

    //Another way with and (these are positive assertions)
    cy.url()
      .should("include", "orangehrmlive.com")
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .and("contain", "orangehrmlive")
      .and("not.contain", "redhrmlive"); //negative assertion

    cy.title()
      .should("include", "Orange")
      .and("eq", "OrangeHRM")
      .and("contain", "HRM");
    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist"); //Logo visible and exist

    //Capture all the links present on the web page
    cy.xpath("//a").should("have.length", "5");

    cy.get("input[placeholder='Username']").type("Admin"); //Provide a value into input box
    cy.get("input[placeholder='Username']").should("have.value", "Admin");

    it("Explicit assertions", () => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      cy.get("input[placeholder='Username']").type("Admin");
      cy.get("input[placeholder='Password']").type("admin123");
      cy.get("button[type='submit']").click();
    });
  });
});
