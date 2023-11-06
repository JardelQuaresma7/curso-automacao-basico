Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Jardel')
    cy.get('#lastName').type('Quaresma')
    cy.get('#email').type('jardelquaresma7@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})