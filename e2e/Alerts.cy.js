describe("Alerts", () => {
  //	1. JavaScript alert: It will have some text and ok button
  it("JavaScript alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });

    //alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });
});
