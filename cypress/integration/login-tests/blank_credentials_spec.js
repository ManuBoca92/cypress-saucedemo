/// <reference types="cypress" />

describe('User login test with blank username and password', ()=> {
    it("Visits swag labs website.", () => {
        cy.visit("/index.html");
    });
    
    it("clicks on login button.", () => {
        cy.get("#login-button").click();
    });

    it("Checks error message is displayed.", () => {
        cy.get('[data-test="error"]').should("be.visible");
    });
});

describe('User login test with blank username and valid password', ()=> {
    it("Visits swag labs website.", () => {
        cy.visit("/index.html");
    });

    it("types in user password", ()=> {
        cy.get('[data-test="password"]').type("secret_sauce");
    })
    
    it("clicks on login button.", () => {
        cy.get("#login-button").click();
    });

    it("Checks error message is displayed.", () => {
        cy.get('[data-test="error"]').should("be.visible");
    });
});

describe('User login test with valid username and blank password', ()=> {
    it("Visits swag labs website.", () => {
        cy.visit("/index.html");
    });

    it("types in user password", ()=> {
        cy.get('[data-test="username"]').type("standerd_user");
    })
    
    it("clicks on login button.", () => {
        cy.get("#login-button").click();
    });

    it("Checks error message is displayed.", () => {
        cy.get('[data-test="error"]').should("be.visible");
    });
});
