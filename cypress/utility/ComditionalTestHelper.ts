export default function ConditionalHelper(availableElement = 'body') {
    return cy.get(availableElement)
}



export function clickElementIfFound(selector: string) {
    cy.get('body').then((el) => {
        if (el.find(selector).length > 0) {
            console.log("This is element", el.find('.some'));
            cy.get(selector).click()
            cy.log('**Conditional Element found and can be asserted 😄**')
        } else {
            cy.log('No Element found but no error is there 😄 ')
        }
    })
}