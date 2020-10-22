# cypress-swaglabs

In this project I used [cypress](https://www.cypress.io/) to perform E2E tests on [Sauce Demo](https://www.saucedemo.com/). Sauce Demo is a free eCommerce site provided by **Saucelabs** and it is used for practising test automation.

### Lists of test scenarios
Since it is an eCommerce application, the test scenarios will be the following:
* Check Login Functionality.
* Check product can be added to cart.
* Check added product can be removed to cart.
* Check user can checkout successfuly.

## Setup
* make sure you have `Google chrome` and the latest `node` and `npm` nstalled on your computer.
* Open terminal.
* Create a `directory` and clone this project into the created directory.
* `cd` into `cypress-swaglabs` directory and run `yarn` command to install needed packages.
* Run `yarn cypress:open` command to open cypress desktop application.
* Run tests by clicking on `Run all specs` button.
