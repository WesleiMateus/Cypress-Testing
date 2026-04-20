/// <reference types="cypress" />

const formElements = {
  form: ".account_form",
  buttons: {
    register: "#btnRegister",
    login: "#btnLogin",
  },
  fields: {
    email: "#user",
    password: "#password",
    checkbox: "#materialUnchecked",
  },
  messages: {
    successTitle: "#swal2-title",
    successSubTitle: "#swal2-html-container",
  },
};

export default {
  accessLoginPage() {
    cy.visit("/login");
  },

  login() {
    cy.get(formElements.buttons.login).click();
  },

  checkMessage(message) {
    cy.get(formElements.form).should("be.visible").contains(message);
  },

  checkSuccessLogin(email) {
    cy.get(formElements.messages.successTitle)
      .should("be.visible")
      .contains("Login realizado");

    cy.get(formElements.messages.successSubTitle).should(
      "have.text",
      `Olá, ${email}`,
    );
  },

  markAndVerifyCheckbox() {
    cy.get("#materialUnchecked").check();

    cy.get("#materialUnchecked").should("be.checked");
  },

  fillEmail(email) {
    cy.get(formElements.fields.email).type(email);
  },

  fillPassword(password) {
    cy.get(formElements.fields.password).type(password);
  },
};
