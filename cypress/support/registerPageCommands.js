/// <reference types="cypress" />

const formElements = {
  form: ".account_form",
  buttons: {
    register: "#btnRegister",
    login: "#btnLogin",
  },
  fields: {
    name: "#user",
    email: "#email",
    password: "#password",
  },
  messages: {
    successTitle: "#swal2-title",
    successSubTitle: "#swal2-html-container"
  }
}

export default {
  accessRegisterPage() {
    cy.visit("/register")
  },

  confirmUserRegister() {
    cy.get(formElements.buttons.register).click()
  },

  checkMessage(message) {
    cy.get(formElements.form).contains(message)
  },

  checkSuccessRegister(name) {
    cy.get(formElements.messages.successTitle).should("be.visible").contains("Cadastro realizado");

    cy.get(formElements.messages.successSubTitle).should("have.text", `Bem-vindo ${name}`)
  },

  fillName(name) {
    cy.get(formElements.fields.name).type(name);
  },

  fillEmail(email) {
    cy.get(formElements.fields.email).type(email);
  },

  fillPassword(password) {
    cy.get(formElements.fields.password).type(password);
  },


}