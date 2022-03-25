Feature: Login functionality

  I want to test login by user with different credentials on saucedemo website

  Background: User visits login page
    Given I open cypress saucedemo login page

  Scenario Outline: Login by user "<username>"
    When I enter in "<username>" and "<password>"
    And I click on login button
    Then I should be redirected to the correct "<url>" page
    And I should see login "<status>"

    Examples:
      | username      | password     | url             | status |
      | standard_user | secret_sauce | /inventory.html | sucess |
      | test          | secret_sauce | /               | fail   |
      | standard_user | public_sauce | /               | fail   |
