
Feature: verify home page flows

  @dev
  @smoke
Scenario:  As A user I expect to view account list and selection page
  Given I am on the "home" page
  And the "contacts header" should contain the text "Contacts"
  Then the "header logo" should be displayed
