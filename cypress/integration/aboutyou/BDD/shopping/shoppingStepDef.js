/// <reference types="Cypress" />
import LandingPage from "../../../../support/pageObjects/LandingPage";
import AddToBasketPage from "../../../../support/pageObjects/AddToBasketPage";
import SelectedItemPage from "../../../../support/pageObjects/SelectedItemPage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const landingPage = new LandingPage();
const selectedItemPage = new SelectedItemPage();
const addToBasketPage = new AddToBasketPage();

Given("I open About You ECommerce Page", () => {
  cy.visit(Cypress.env("url"));
  cy.contains("Ok").click();
  landingPage.getTitle().should("have.text", "ABOUTYOU")
});

When("I navigate to {string} Category", (category) => {
  cy.selectCategory(category);
});

When("I navigate to {string} Product", (product) => {
  cy.selectProduct(product);
});

When(
  "I select the {string} of Size {string} for Country {string}",
  (item, sizeToSelect, country) => {

    // Note: There is recent change in the webpage, where Coutry type is not visible while size selection
    // like EU Size and UK Size, this change in behaviour on the webpage can cause testcase to fail.

    landingPage.getListOfShoesLink().eq(1).click();

    selectedItemPage.getSelectSizeDropdown().click();
    selectedItemPage.getSizeTabCountryOptions().each(($el, index, $list) => {
      const tabName = $el.text();
      if (tabName.includes(country)) {
        cy.wrap($el).click();
      }
    });

    selectedItemPage.getSizeNumberOptions().each(($el, index, $list) => {
      const size = $el.text();
      if (size == sizeToSelect) {
        cy.wrap($el).click();
      }
    });

    selectedItemPage.getSizeSelectedTextLabel().then(function (element) {
      expect(sizeToSelect).to.equal(element.text());
    });

    // TODO -- Add to Basket Operation - Currently is it throwing Security Issue
    // selectedItemPage.getAddToBasketButton().click();
  }
);

Then("I see selected {string} in Add to Basket List", (item) => {
  cy.log("########### Feature parameter : " + item);

  // TODO
  // Verify Points
  // 1. items added in to the basket list
  // 2. Verify Total Price value of all items before checkout

  cy.log(
      addToBasketPage.getSavingsBarValue().then(function (element) {
        cy.log(element.text());
      })
  );

  cy.log(
      addToBasketPage.getTotalBasketPrice().then(function (element) {
        cy.log(element.text());
      })
  );

  cy.log(
      addToBasketPage.getProductSalePrice().then(function (element) {
        cy.log(element.text());
      })
  );

  cy.log(
      addToBasketPage.getAddedItemsInBasket().then(function (element) {
        cy.log(element.text());
      })
  );

});
