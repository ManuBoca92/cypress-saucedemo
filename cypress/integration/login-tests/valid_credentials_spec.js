/// <reference types="cypress" />

describe('User login tests with valid credentials', () => {
  it('Visits swag labs website.', () => {
    cy.visit('/index.html')
  })

  it('Types in users username.', () => {
    cy.get('[data-test="username"]').type('standard_user')
  })

  it('Types in users password.', () => {
    cy.get('[data-test="password"]').type('secret_sauce')
  })

  it('Clicks on login button.', () => {
    cy.get('#login-button').click()
  })

  it('Checks user is logged in and is on inventory page.', () => {
    cy.url().should('includes', '/inventory.html')
  })
})
