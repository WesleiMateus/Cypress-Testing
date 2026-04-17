/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import registerPage from "../support/registerPageCommands";
import userData from "../fixtures/users.json";

describe("Register page Authentication", () => {
  beforeEach(() => {
    registerPage.accessRegisterPage();
  });

  context("Test auth - Valid Data", () => {
    it("User registration successful", () => {
      const name = faker.person.fullName();
      const email = faker.internet.email();
      const password = faker.internet.password();

      registerPage.fillName(name);
      registerPage.fillEmail(email);
      registerPage.fillPassword(password);

      registerPage.confirmUserRegister();

      registerPage.checkSuccessRegister(name);
    });
  });

  context("Test Auth - Name Field", () => {
    it("Register with an empty name", () => {
      registerPage.fillEmail(userData.valid.email);
      registerPage.fillPassword(userData.valid.password);

      registerPage.confirmUserRegister();

      registerPage.checkMessage("O campo nome deve ser prenchido");
    });

    it("Registring with just space characters", () => {
      registerPage.fillName("         ");
      registerPage.fillEmail(userData.valid.email);
      registerPage.fillPassword(userData.valid.password);

      registerPage.confirmUserRegister();

      registerPage.checkMessage("O campo nome deve ser prenchido");
    });
  });

  context("Test Aurh - E-mail Field", () => {
    it("Regitring with an empty e-mail", () => {
      registerPage.fillName(userData.valid.name);
      registerPage.fillPassword(userData.valid.password);

      registerPage.confirmUserRegister();

      registerPage.checkMessage(
        "O campo e-mail deve ser prenchido corretamente",
      );
    });

    it("Regitring with an invalid e-mail", () => {
      registerPage.fillName(userData.valid.name);
      registerPage.fillEmail(userData.invalid.email);
      registerPage.fillPassword(userData.valid.password);

      registerPage.confirmUserRegister();

      registerPage.checkMessage(
        "O campo e-mail deve ser prenchido corretamente",
      );
    });

    it.only("Registring with just space characters - Field E-mail", () => {
      registerPage.fillName(userData.valid.name);
      registerPage.fillEmail("         ");
      registerPage.fillPassword(userData.valid.password);

      registerPage.confirmUserRegister();

      registerPage.checkMessage(
        "O campo e-mail deve ser prenchido corretamente",
      );
    });
  });

  context("Test Auth - Password Field", () => {
    
  })
});
