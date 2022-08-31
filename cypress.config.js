const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 30000,
  env: {
    url: 'https://en.aboutyou.de/your-shop',
  },
  retries: {
    runMode: 1,
  },
  projectId: "34o8kh",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/aboutyou/BDD/*.feature',
  },
})
