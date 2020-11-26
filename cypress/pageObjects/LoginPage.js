import { USERNAME, PASSWORD, LOGIN_BUTTON } from '../identifiers/loginPage'

class LoginPage {
  getUsername() {
    return cy.get(USERNAME)
  }
  getPassword() {
    return cy.get(PASSWORD)
  }
  getLogingButton() {
    return cy.get(LOGIN_BUTTON)
  }

  fillForm(username, password) {
    this.getUsername().clear().type(username)
    this.getPassword().clear().type(password)
  }

  submitForm() {
    this.getLogingButton().click()
  }
}

export default new LoginPage()
