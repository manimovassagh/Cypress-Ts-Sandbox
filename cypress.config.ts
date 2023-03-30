const { defineConfig } = require("cypress");
import { ordering } from "./cypress/orderring/ordeing";
module.exports = defineConfig({

  e2e: {

    baseUrl: 'http://localhost:3000/',

    setupNodeEvents(on:any, config:any) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      config.specPattern = ordering
      return config;
    },
  },
});
