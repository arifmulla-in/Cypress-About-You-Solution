class LandingPage {
  
    getCategoryLink() {
    return cy.get("a[data-test-id='LinkToUrl'] span");
  }

  getWomenCategoryLink() {
    return cy.get("a[title='Women']");
  }

  getMenCategoryLink() {
    return cy.get("a[title='Men']");
  }

  getKidsCategoryLink() {
    return cy.get("a[title='Kids']");
  }

  getHeaderNavigationLink() {
    return cy.get("li[data-test-id*='Header_navigation_list_item']");
  }

  getTitle() {
    return cy.get("div[data-testid='HeaderAboutYouLogo']");
  }
}
export default LandingPage;
