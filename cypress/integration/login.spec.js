/// <reference types="cypress" />
import LoginPage from '../pageObjects/LoginPage'

describe('User login tests', () => {
  beforeEach('Visits saucedemo website.', () => {
    cy.visit('/index.html')
  })
  it('Login with valid credentials successfully', () => {
    LoginPage.fillForm('standard_user', 'secret_sauce').submitForm()
    cy.url().should('includes', '/inventory.html')
  })
  it('Login with blank username and password', () => {
    LoginPage.submitForm()
    cy.get('[data-test="error"]').should('be.visible')
  })
  it('Login with invalid username and valid password', () => {
    LoginPage.fillForm('test', 'secret_sauce').submitForm()
    cy.get('[data-test="error"]').should('be.visible')
  })
  it('Login with valid username and invalid password', () => {
    LoginPage.fillForm('standard_user', 'public_sauce').submitForm()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
