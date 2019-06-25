$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/new_account.feature");
formatter.feature({
  "line": 1,
  "name": "New Account",
  "description": "As a user I want a New Account page in order to create accounts.",
  "id": "new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User would be able to add new account",
  "description": "",
  "id": "new-account;user-would-be-able-to-add-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a user already logged-in as \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Bank Cash -\u003e New Accunt",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "new accounts page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user submits \"\u003ctitle\u003e\" and \"\u003cdescription\u003e\" and \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Account Created Successfully message should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "new-account;user-would-be-able-to-add-new-account;",
  "rows": [
    {
      "cells": [
        "title",
        "description",
        "balance",
        "username",
        "password"
      ],
      "line": 11,
      "id": "new-account;user-would-be-able-to-add-new-account;;1"
    },
    {
      "cells": [
        "John99",
        "Golf",
        "1000",
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 12,
      "id": "new-account;user-would-be-able-to-add-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4498095683,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User would be able to add new account",
  "description": "",
  "id": "new-account;user-would-be-able-to-add-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "a user already logged-in as \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user navigates to Bank Cash -\u003e New Accunt",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "new accounts page should display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user submits \"John99\" and \"Golf\" and \"1000\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Account Created Successfully message should display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 29
    },
    {
      "val": "abc123",
      "offset": 58
    }
  ],
  "location": "NewAccountSteps.a_user_already_logged_in(String,String)"
});
formatter.result({
  "duration": 9313882335,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.user_navigates_to_Bank_Cash_New_Accunt()"
});
formatter.result({
  "duration": 835362976,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.new_accounts_page_should_display()"
});
formatter.result({
  "duration": 46236402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John99",
      "offset": 14
    },
    {
      "val": "Golf",
      "offset": 27
    },
    {
      "val": "1000",
      "offset": 38
    }
  ],
  "location": "NewAccountSteps.user_submits_Account_Title_Description_and_Initial_Balance(String,String,String)"
});
formatter.result({
  "duration": 1269177919,
  "status": "passed"
});
formatter.match({
  "location": "NewAccountSteps.account_Created_Successfully_message_should_display()"
});
formatter.result({
  "duration": 73664,
  "status": "passed"
});
formatter.after({
  "duration": 701531987,
  "status": "passed"
});
});