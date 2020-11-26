/// <reference types="cypress" />
import LoginPage from '../pageObjects/LoginPage'

before('Visits saucedemo website.', () => {
  cy.visit('/index.html')
})

describe('Login with invalid username and valid password', () => {
  it('Should fill login form.', () => {
    LoginPage.fillForm('test', 'secret_sauce')
  })

  it('Should submit login form.', () => {
    LoginPage.submitForm()
  })

  it('Should display error message.', () => {
    cy.get('[data-test="error"]').should('be.visible')
  })
})

describe('Login with valid username and invalid password', () => {
  it('Should fill login form.', () => {
    LoginPage.fillForm('standard_user', 'public_sauce')
  })

  it('Should submit login form.', () => {
    LoginPage.submitForm()
  })

  it('Should display error message.', () => {
    cy.get('[data-test="error"]').should('be.visible')
  })
})
