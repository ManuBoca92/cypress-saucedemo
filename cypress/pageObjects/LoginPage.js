import { USERNAME, PASSWORD, LOGIN_BUTTON } from '../identifiers/loginPage'

class LoginPage {
  get inputUsername() {
    return cy.get(USERNAME)
  }
  get inputPassword() {
    return cy.get(PASSWORD)
  }
  get logingButton() {
    return cy.get(LOGIN_BUTTON)
  }

  fillForm(username, password) {
    this.inputUsername.clear().type(username)
    this.inputPassword.clear().type(password)
    return this
  }

  submitForm() {
    this.logingButton.click()
  }
}

export default new LoginPage()
