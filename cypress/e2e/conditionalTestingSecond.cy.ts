
it('Second way for conditional testing', () => {

    cy.visit('/').wait(100)

    cy.get('.todo')
        .should('have.length.gte', 0)
        .then(function ($todos) {
            if (!$todos.length) {
                cy.log('nothing to delete')
                return
            }
            cy.wrap($todos)
                .find('.destroy')
                .click({ force: true, multiple: true })
        })

    
});
