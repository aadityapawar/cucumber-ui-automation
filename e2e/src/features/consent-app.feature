
Feature: verify consent app flows

  @dev
  @smoke
Scenario:  As A user I expect to view account list and selection page
  Given I am on the "consent" app page
  And "Account" list ans selection details should be displayed
  Then the "header" should be displayed
