class SelectedItemPage {
  getSelectSizeDropdown() {
    return cy.get("button[data-testid='sizeFlyoutOpener']");
  }

  getSizeTabCountryOptions() {
    return cy.get("button[data-testid*='tabs_tab']");
  }

  getSizeNumberOptions() {
    return cy.get("div[data-testid='optionContentLabel']");
  }

  getSizeRadioButton() {
    return cy.get("input[type='radio']");
  }

  getProductName() {
    return cy.get("h1[data-testid='productName']");
  }

  getProductColorSelectedName() {
    return cy.get("span[data-testid='productColorInfoSelectedOptionName']");
  }
  
  getFinalPrice() {
    return cy.get("span[data-testid='finalPrice']");
  }

  getSizeSelectedTextLabel() {
    return cy.get("div[data-testid='sizeSelectorSizeSelectedTextLabel']");
  }

  getAddToBasketButton() {
    return cy.get("button[data-testid='addToBasketButton']");
  }

  getCheckOutButton() {
    return cy.get("button[data-test-id='CheckoutButton']");
  }
  
  getProductNameButton() {
    return cy.get("h1[data-testid='productName']");
  }
}
export default SelectedItemPage;
