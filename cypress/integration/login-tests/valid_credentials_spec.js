/// <reference types="cypress" />
import LoginPage from '../../pageObjects/LoginPage'

describe('Login with valid credentials', () => {
  before('Visits saucedemo website.', () => {
    cy.visit('/index.html')
  })
  it('Should fill login form.', () => {
    LoginPage.fillForm('standard_user', 'secret_sauce')
  })

  it('Should submit login form.', () => {
    LoginPage.submitForm()
  })

  it('Should check user is logged in and redirected inventory page.', () => {
    cy.url().should('includes', '/inventory.html')
  })
})
