/// <reference types="cypress" />

import LoginPage from '../pageObjects/LoginPage'

before('Visits saucedemo website.', () => {
  cy.visit('/index.html')
})

describe('Login test with blank username and password', () => {
  it('should click on login button.', () => {
    LoginPage.submitForm()
  })

  it('Should display error message.', () => {
    cy.get('[data-test="error"]').should('be.visible')
  })
})
