$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user I want a login page in order to validate authentic user access.",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User can login with proper credentials",
  "description": "",
  "id": "login;user-can-login-with-proper-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is TechFios",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Dashboard Page will display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4407283959,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.title_of_the_login_page_is_TechFios()"
});
formatter.result({
  "duration": 21924447,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 298360799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 1862098177,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.dashboard_Page_will_display()"
});
formatter.result({
  "duration": 722914897,
  "status": "passed"
});
});