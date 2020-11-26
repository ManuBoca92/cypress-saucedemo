/// <reference types="cypress" />

import LoginPage from '../../pageObjects/LoginPage'

describe('Login test with blank username and password', () => {
  before('Visits saucedemo website.', () => {
    cy.visit('/index.html')
  })
  it('should click on login button.', () => {
    LoginPage.submitForm()
  })

  it('Should display error message.', () => {
    cy.get('[data-test="error"]').should('be.visible')
  })
})
