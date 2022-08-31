// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get("a[data-test-id='LinkToUrl'] span").each(($el, index, $list) => {
    if ($el.text().trim() == productName) {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("selectCategory", (CategoryName) => {
  cy.get("a[data-test-id='LinkToUrl'] span").each(($el, index, $list) => {
    if ($el.text().trim() == CategoryName) {
      cy.wrap($el).click();
    }
  });
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
