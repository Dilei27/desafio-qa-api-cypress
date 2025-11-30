const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,

    // === REPORTER CONFIG ===
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: true,
      html: true,
      json: true,
      timestamp: "dd-mm-yyyy_HH-MM-ss",
      charts: true
    },

    // === NECESSÁRIO PARA CYPRESS >=10 ===
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",

    setupNodeEvents(on, config) {
      // plugins futuros se precisar
    },
  },
});
