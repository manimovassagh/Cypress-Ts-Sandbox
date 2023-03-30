import {
    ConditionalHelper,
    clickElementIfFound
}
    from "../utility/ComditionalTestHelper";

describe('should not throw error if not find the element', { baseUrl: "https://www.gooogle.com" }, () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('test my own errorhandler', () => {

        // without function
        // cy.get('body').then((el) => {
        //     if (el.find("#L2AGLb > div").length > 0) {
        //         console.log("This is element", el.find('.some'));
        //         cy.get('#L2AGLb > div').click()
        //         cy.log('**Conditional Element found and can be asserted 😄**')
        //     }
        //     else {
        //         cy.log('No Element found but no error is there 😄 ')
        //     }
        // })

        // clickElementIfFound("#L2AGLb > div")

        //with function
        // ConditionalHelper().then((el) => {
        //     if (el.find("#L2AGLb > div").length > 0) {
        //         console.log("This is element", el.find('.some'));
        //         cy.get('#L2AGLb > div').click()
        //         cy.log('**Conditional Element found and can be asserted 😄**')
        //     }
        //     else {
        //         cy.log('No Element found but no error is there 😄 ')
        //     }
        // })


        //with function
        ConditionalHelper().then((el) => {

            el.find("#L2AGLb > div").length > 0
                ?
                cy.get('#L2AGLb > div').click()
                :
                cy.log('No Element found but no error is there 😄 ')

        })



    });




})