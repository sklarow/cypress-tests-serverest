const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      defaultPassword: "teste",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
