
describe('should not throw error if not find the element', { baseUrl: "https://www.gooogle.com" }, () => {
    it('test my own errorhandler', () => {
        cy.visit('/')
        cy.get('body').then((el) => {

            if (el.find("#L2AGLbe > div").length > 0) {
                console.log("This is element", el.find('.some'));
                cy.get('#L2AGLb > div').click()
                cy.log('some found and can be asserted')
            }
            else {
                cy.log('No some found but no error ')
            }
        })
    });
})