/// <reference types="cypress" />
import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  })
  cy.login()
})

Given('I am in {string}', (url) => {
  cy.visit(url)
  Cypress.log({
    message: `Loading page ${url}`
  })
})

When('I click on ADD TO CART button', () => {
  Cypress.log({
    message: 'Adding product to cart'
  })
  cy.addProductToCart()
})

Then('I should see the product in shopping cart', () => {
  // check product is in shopping cart.
  cy.get('div[class="cart_item"]').should('exist')
})
