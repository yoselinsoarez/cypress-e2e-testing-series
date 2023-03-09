/**To test uploaded files first we need to import the package
 * and then import cypress-file-upload
 */

import "cypress-file-upload";
describe("File Upload", () => {
    it("Single file upload", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("cypress.PNG");
        cy.get("#file-submit").click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });
    it("File upload-rename", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({
            filePath: "cypress.PNG",
            fileName: "myfile.PNG",
        });
        cy.get("#file-submit").click();
        cy.wait(4000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });
    it("File upload-Drag and drop", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("haim.png", {
            subjectType: "drag-n-drop",
        });
        cy.wait(4000);
        cy.get(
            "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
        ).contains("haim.png");
    });

    it("Multiple files upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(["cypress.png", "haim.png"]);
        cy.wait(4000);
        cy.get(":nth-child(6) > strong").should(
            "contain.text",
            "Files You Selected:"
        );
    });

    //SHADOW-DOM It's basically a shadow of an element.
    it.only("File upload-shadow DOM", () => {
        cy.visit(
            "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
        );
        cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile(
            "cypress.PNG"
        );
        cy.wait(4000);
        cy.get(".smart-item-name", { includeShadowDom: true }).contains(
            "cypress.PNG"
        );
    });
});
