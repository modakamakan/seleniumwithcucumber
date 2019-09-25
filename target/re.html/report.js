$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/demo_3.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "mesage displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "Password456"
      ],
      "line": 12,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"lalitha\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "mesage displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "testmeapp1demo.user_is_open_the_application()"
});
formatter.result({
  "duration": 11692917900,
  "status": "passed"
});
formatter.match({
  "location": "testmeapp1demo.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 706547400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 27
    }
  ],
  "location": "testmeapp1demo.user_enters_and(String,String)"
});
formatter.result({
  "duration": 709958100,
  "status": "passed"
});
formatter.match({
  "location": "testmeapp1demo.mesage_displayed_login_successfully()"
});
formatter.result({
  "duration": 81400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"admin\" and \"Password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "mesage displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "testmeapp1demo.user_is_open_the_application()"
});
formatter.result({
  "duration": 9060112100,
  "status": "passed"
});
formatter.match({
  "location": "testmeapp1demo.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 1319962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Password456",
      "offset": 25
    }
  ],
  "location": "testmeapp1demo.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1294440100,
  "status": "passed"
});
formatter.match({
  "location": "testmeapp1demo.mesage_displayed_login_successfully()"
});
formatter.result({
  "duration": 80100,
  "status": "passed"
});
});