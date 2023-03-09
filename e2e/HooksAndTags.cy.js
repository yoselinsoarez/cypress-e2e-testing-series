/** Hooks:
 * before
 * after
 * beforeEach
 * AfterEach
 */
/**Tags:
 * skip
 * only
 */
describe("My Test Suite", () => {
    before(() => {
        cy.log("*** Launch app ***");
    });

    after(() => {
        cy.log("*** Close App ***");
    });

    beforeEach(() => {
        cy.log("*** Login ***");
    });
    afterEach(() => {
        cy.log("*** Logout ***");
    });

    it("search", () => {});

    it.only("advanced search", () => {});

    it("listing products", () => {});
});
