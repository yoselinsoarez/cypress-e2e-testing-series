describe("XPath locators", () => {
  it("find number of products", () => {
    cy.visit("https://shop.govegan.com.uy/");
    cy.xpath("//ul[@class='carousel-inner']/li").should("have.length", 1);
  });

  //another way
  it("find number of products", () => {
    cy.visit("https://shop.govegan.com.uy/");
    cy.xpath("//ul[@class='carousel-inner']")
      .xpath("./li")
      .should("have.length", 1);
  });
});
