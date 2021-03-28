$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/org.example/Choucair.feature");
formatter.feature({
  "name": "Ejecucion caso de prueba CP_008",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Prueba formulario de aplicacion con campos vacios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open choucair.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Entering texto \u003ckeyswords\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyswords"
      ]
    },
    {
      "cells": [
        "analista"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Prueba formulario de aplicacion con campos vacios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.open_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Entering texto analista",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});