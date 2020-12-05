/// <reference types="cypress" />

describe('Add product to cart tests', () => {
  beforeEach('clears seesion and logs in  user', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.login()
  })
  it('Add product to cart from catalog page', () => {
    cy.addProductToCart()
  })
  it('Add product to cart from product page', () => {
    cy.visit('/inventory-item.html?id=4')
    cy.addProductToCart()
  })
})
