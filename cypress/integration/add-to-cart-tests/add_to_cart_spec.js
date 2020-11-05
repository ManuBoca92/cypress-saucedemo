/// <reference types="cypress" />

function selectRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog page - add product to cart', () => {
  before('clears seesion and logs in  user', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.login()
  })

  it('Click on "ADD TO CART" button.', () => {
    cy.get('button[class="btn_primary btn_inventory"]').first().click()
  })

  it('Check "ADD TO CART" button has changed to "REMOVE" button.', () => {
    cy.get('button[class="btn_secondary btn_inventory"]').should(
      'contain',
      'REMOVE'
    )
  })

  it('Check shopping cart badge exists and is displayed.', () => {
    cy.get('span[class="fa-layers-counter shopping_cart_badge"]')
      .should('exist')
      .and('be.visible')
  })

  it('Click on shopping cart button.', () => {
    cy.get('[data-icon="shopping-cart"]').click()
    cy.url().should('include', '/cart.html')
  })

  it('Check user is redirected to shopping cart page.', () => {
    cy.url().should('include', '/cart.html')
  })

  it('Check added product is in shopping cart.', () => {
    cy.get('div[class="cart_item"]').should('exist')
  })
})

describe('Product page - add product to cart', () => {
  before('clears seesion and logs in  user', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.login()
  })

  it('Click on a random product.', () => {
    cy.get('div[class="inventory_item_name"]').then((element) => {
      selectRandomItem(element).click()
    })
  })

  it('Check user is redireced to product page', () => {
    cy.url().should('include', '/inventory-item.html?id=')
  })

  it('Click on "ADD TO CART" button.', () => {
    cy.get('button[class="btn_primary btn_inventory"]').click()
  })

  it('Check "ADD TO CART" button has changed to "REMOVE" button.', () => {
    cy.get('button[class="btn_secondary btn_inventory"]').should(
      'contain',
      'REMOVE'
    )
  })

  it('Check shopping cart badge exists and is displayed.', () => {
    cy.get('span[class="fa-layers-counter shopping_cart_badge"]')
      .should('exist')
      .and('be.visible')
  })

  it('Click on shopping cart button.', () => {
    cy.get('[data-icon="shopping-cart"]').click()
    cy.url().should('include', '/cart.html')
  })

  it('Check user is redirected to shopping cart page.', () => {
    cy.url().should('include', '/cart.html')
  })

  it('Check added product is in shopping cart.', () => {
    cy.get('div[class="cart_item"]').should('exist')
  })
})
