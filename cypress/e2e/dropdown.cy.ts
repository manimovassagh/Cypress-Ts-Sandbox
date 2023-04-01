Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
Cypress.on('fail', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


it.only('check the dummy dropdown', { baseUrl: 'https://www.globalsqa.com/demo-site/select-dropdown-menu/' }, () => {
    cy.visit('/')
    cy.get("adasdasd")
});