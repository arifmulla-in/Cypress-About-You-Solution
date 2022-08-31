beforeEach(() => {
  cy.fixture("shopping").then(function (data) {
    this.data = data;
  });
});
