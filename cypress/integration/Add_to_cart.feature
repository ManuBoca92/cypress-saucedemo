Feature: Add to cart functionality

    This feature covers test for add to cart functionality,
    which includes add to cart from catalog page and product page.

    Scenario Outline: Add to cart tests
        Given I am in "<page>"
        When I click on ADD TO CART button
        Then I should see the product in shopping cart

        Examples:
            | page                      |
            | /inventory.html           |
            | /inventory-item.html?id=4 |
