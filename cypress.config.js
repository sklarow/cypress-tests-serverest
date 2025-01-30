const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev/",
    env: {
      defaultPassword: "teste",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
