/// <reference types="cypress" />

describe("User login tests with invalid username and valid password", () => {
  it("Visits swag labs website.", () => {
    cy.visit("/index.html");
  });

  it("types in users username.", () => {
    cy.get('[data-test="username"]').type("test");
  });

  it("types in users password.", () => {
    cy.get('[data-test="password"]').type("secret_sauce");
  });

  it("clicks on login button.", () => {
    cy.get("#login-button").click();
  });

  it("Checks error message is displayed.", () => {
    cy.get('[data-test="error"]').should("be.visible");
  });
});

describe("User login tests with valid username and invalid password", () => {
  it("Visits swag labs website.", () => {
    cy.visit("/index.html");
  });

  it("types in users username.", () => {
    cy.get('[data-test="username"]').type("standard_user");
  });

  it("types in users password.", () => {
    cy.get('[data-test="password"]').type("public_sauce");
  });

  it("clicks on login button.", () => {
    cy.get("#login-button").click();
  });

  it("Checks error message is displayed.", () => {
    cy.get('[data-test="error"]').should("be.visible");
  });
});
