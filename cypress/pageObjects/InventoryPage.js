import {
  ADD_TO_CART_BUTTON,
  REMOVE_CART_BUTTON,
  SHOPPING_CART_BADGE,
  SHOPPING_CART_BUTTON
} from '../identifiers/inventoryPage'

class InventoryPage {
  get addToCartButton() {
    return cy.get(ADD_TO_CART_BUTTON)
  }

  get removeButton() {
    return cy.get(REMOVE_CART_BUTTON)
  }

  get shoppingCartBadge() {
    return cy.get(SHOPPING_CART_BADGE)
  }

  get shoppingCartButton() {
    return cy.get(SHOPPING_CART_BUTTON)
  }

  selectRandomItem(item) {
    return item[Math.floor(Math.random() * item.length)]
  }
  clickAddToCartBtn() {
    this.addToCartButton.then((element) =>
      this.selectRandomItem(element).click()
    )
  }

  clickShoppingCartButton() {
    this.shoppingCartButton.click()
  }
}

export default new InventoryPage()
