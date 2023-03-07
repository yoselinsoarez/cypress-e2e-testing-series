import "cypress-file-upload";
describe("File Upload", () => {
    it("Single file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("cypress.PNG");
        cy.get("#file-submit").click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });
    it.only("File upload-rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({
            filePath: "cypress.PNG",
            fileName: "myfile.PNG",
        });
        cy.get("#file-submit").click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });
});
