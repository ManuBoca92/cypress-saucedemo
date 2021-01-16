import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../pageObjects/LoginPage'

Given('I open cypress saucedemo login page', () => {
  cy.visit('/index.html')
})

When('I enter in {string} and {string}', (username, password) => {
  LoginPage.fillForm(username, password)
})

And('I click on login button', () => {
  LoginPage.submitForm()
})

Then('I should be redirected to the correct {string} page', (url) => {
  cy.url().should('includes', url)
})

And('I should see login {string}', (status) => {
  if (status == true) {
    cy.get('[data-test="error"]').should('be.visible')
  }
})
