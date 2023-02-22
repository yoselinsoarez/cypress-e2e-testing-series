describe('Alerts', () => {
    //	1. JavaScript alert: It will have some text and ok button
    it('JavaScript alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        });

        //alert window automatically closed by cypress
        cy.get('#result').should(
            'have.text',
            'You successfully clicked an alert'
        );
    });

    /*	2. JavaScript confirm alert: It will have some text with ok and cancel buttons
  it.only  run just this chunk of code */
    it('JS confirm alert ok button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        });
        //cypress automatically closed alert window by using ok button-default
        cy.get('#result').should('have.text', 'You clicked: Ok');
    });
    it('JS confirm alert button cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        });
        cy.on('window:confirm', () => false); //cypress closes alert window using cancel button
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    });
    //	3. JavaScript Prompt Alert: It will have some text with a text user along with ok
    it('JS prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('hello world');
        });
        cy.get("button[onclick='jsPrompt()']").click();
        //cypress will automatically close prompted alert(it will use OK button by default)
        cy.on('window:prompt', () => false);
        cy.get('#result').should('have.text', 'You entered: hello world');
    });
    //Authenticated alert
    it.only('JS Authenticated alert', () => {
        //approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: { username: 'admin', password: 'admin' },
        });
        cy.get("div[class='example'] p").should(
            'have.contain',
            'Congratulations!'
        );
        //approach 2, pass inside the URL the password and username values
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get("div[class='example'] p").should(
            'have.contain',
            'Congratulations!'
        );
    });
});
