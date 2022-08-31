class AddToBasketPage {
  getAddToBasketContainer() {
    return cy.get("div[data-test-id='AddToBasketFlyInContainer']");
  }

  getAddedItemsInBasket() {
    return cy.get("li[data-info-text='More items in your basket']");
  }

  getProductImage() {
    return cy.get("div[data-test-id='ProductImage']");
  }

  getProductPrices() {
    return cy.get("div[data-testid='productPrices']");
  }

  getProductSalePrice() {
    return cy.get("div[data-testid='productSalePrice']");
  }

  getProductStrikePrice() {
    return cy.get("div[data-testid='productStrikePrice']");
  }

  getSavingsBarValue() {
    return cy.get("div[data-test-id='savingsBarValue']");
  }

  getTotalBasketPrice() {
    return cy.get("div[data-test-id='totalBasketPrice']");
  }

  getCheckOutButton() {
    return cy.get("button[data-test-id='CheckoutButton']");
  }
}
export default AddToBasketPage;
