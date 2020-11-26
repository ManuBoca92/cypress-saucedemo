/// <reference types="cypress" />

import InventoryPage from '../../pageObjects/InventoryPage'

describe('Product page - add product to cart', () => {
  before('clears seesion and logs in  user', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.login()
    cy.visit('/inventory-item.html?id=4')
  })
  it('click on add to cart button.', () => {
    InventoryPage.clickAddToCartBtn()
  })

  it('check "ADD TO CART" button has changed to "REMOVE" button.', () => {
    InventoryPage.removeButton.should('contain', 'REMOVE')
  })

  it('check shopping cart badge exists and is displayed.', () => {
    InventoryPage.shoppingCartBadge.should('exist').and('be.visible')
  })

  it('click on shopping cart button.', () => {
    InventoryPage.clickShoppingCartButton()
  })

  it('check user is redirected to shopping cart page.', () => {
    cy.url().should('include', '/cart.html')
  })

  it('check product is in shopping cart.', () => {
    cy.get('div[class="cart_item"]').should('exist')
  })
})
