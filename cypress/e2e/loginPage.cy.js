/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import loginPage from "../support/loginPageCommands";
import userData from "../fixtures/users.json";

describe("Login Page Authentication", () => {
  beforeEach("Acess login page", () => {
    loginPage.accessLoginPage();
  });

  context("Login with Valid Data", () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    it("Login with Success", () => {
      loginPage.fillEmail(email);
      loginPage.fillPassword(password);

      loginPage.markAndVerifyCheckbox();

      loginPage.login();

      loginPage.checkSuccessLogin(email);
    });
  });

  context("Testing E-mail Field", () => {
    it("Loging using empty E-mail", () => {
      loginPage.fillPassword(userData.valid.password);

      loginPage.login();

      loginPage.checkMessage("E-mail inválido.");
    });

    it("Loging using an invalid E-mail", () => {
      loginPage.fillEmail(userData.invalid.email);
      loginPage.fillPassword(userData.valid.password);

      loginPage.login();

      loginPage.checkMessage("E-mail inválido.");
    });

    it("Login with just space characters (eml)", () => {
      loginPage.fillEmail("         ");
      loginPage.fillPassword(userData.valid.password);

      loginPage.login();

      loginPage.checkMessage("E-mail inválido.");
    });
  });

  context("Testing password field", () => {
    it("Using an invalid password", () => {
      loginPage.fillEmail(userData.valid.email);
      loginPage.fillPassword(userData.invalid.password);

      loginPage.login();

      loginPage.checkMessage("Senha inválida.");
    });

    it("Login with just space characters (pwd)", () => {
      loginPage.fillEmail(userData.valid.email);
      loginPage.fillPassword(userData.invalid.password);

      loginPage.login();

      loginPage.checkMessage("Senha inválida.");
    });
  });
});
