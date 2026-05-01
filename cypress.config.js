const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "egbjir",
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 2000,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportTitle: "Testing using BDD, Gherkin and Cucumber",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
