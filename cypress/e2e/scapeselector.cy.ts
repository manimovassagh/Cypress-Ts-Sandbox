

it('use scapeselector to make easier', () => {
    
    cy.get('#' + Cypress.$.escapeSelector('person:age'))
});
