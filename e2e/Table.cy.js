describe('Handle tables', () => {
    beforeEach('Login', () => {
        cy.visit(
            'https://demo.opencart.com/admin/index.php?route=common/login'
        );
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();

        cy.get('.btn-close').click();
        //go to Customers--> Customers

        cy.get('#menu-customer>a').click(); //customers main menu
        cy.get('#menu-customer>ul>li:first-child').click(); // customers sub/child item
    });

    it('Check number rows and columns', () => {});
});
