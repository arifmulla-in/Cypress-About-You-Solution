Feature: End to end About You Ecommerce validation

    application Regression
    @Regression
    Scenario Outline: About You products selection for checkout
    Given I open About You ECommerce Page
    When I navigate to "<Category>" Category
    And I navigate to "<Product>" Product
    And I select the "<Product>" of Size "<Size>" for Country "<Country>" 
    Then I see selected "<Product>" in Add to Basket List
    
    Examples:
    | Category | Product   | Size | Country |
    | Women    | Shoes     | 36   | EU Size |
    | Women    | Shoes     | 8    | UK Size |





