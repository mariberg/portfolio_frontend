const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: "https://x9yxbl5ntc.execute-api.eu-west-2.amazonaws.com/prod/",
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  },
  video: false,
  screenshotOnRunFailure: false
});
