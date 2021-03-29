$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/org.example/Choucair.feature");
formatter.feature({
  "name": "Ejecucion casos de prueba",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "CP_004 - CP_005 Prueba busqueda de empleos disponibles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Abrir choucair.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Ingresar texto \u003ckeyswords\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Presionar search jobs",
  "keyword": "And "
});
formatter.step({
  "name": "El resultado debe ser \u003cresultado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "keyswords",
        "resultado"
      ]
    },
    {
      "cells": [
        "Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos).",
        "There are no listings matching your search."
      ]
    },
    {
      "cells": [
        "4589552233655422334443",
        "There are no listings matching your search."
      ]
    },
    {
      "cells": [
        "/*-+°!”#$%\u0026//",
        "There are no listings matching your search."
      ]
    }
  ]
});
formatter.scenario({
  "name": "CP_004 - CP_005 Prueba busqueda de empleos disponibles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.open_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar texto Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos).",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.entering_texto(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presionar search jobs",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El resultado debe ser There are no listings matching your search.",
  "keyword": "Then "
});
formatter.match({
  "location": "Pasos.StepDefinitions.result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_004 - CP_005 Prueba busqueda de empleos disponibles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.open_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar texto 4589552233655422334443",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.entering_texto(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presionar search jobs",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El resultado debe ser There are no listings matching your search.",
  "keyword": "Then "
});
formatter.match({
  "location": "Pasos.StepDefinitions.result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_004 - CP_005 Prueba busqueda de empleos disponibles",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.open_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar texto /*-+°!”#$%\u0026//",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.entering_texto(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Presionar search jobs",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "El resultado debe ser There are no listings matching your search.",
  "keyword": "Then "
});
formatter.match({
  "location": "Pasos.StepDefinitions.result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CP_007",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Abrir pagina choucair.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Buscar \u003coferta\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Seleccionar oferta",
  "keyword": "And "
});
formatter.step({
  "name": "Clic en Aplicar",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar nombre \u003cnombre\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar correo \u003ccorreo\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar celular \u003ccelular\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar estudios \u003cestudios\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar tiempo \u003ctiempo\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar conocimiento \u003cconocimiento\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar aspiracion \u003caspiracion\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar disponibilidad \u003cdisponibilidad\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar mensaje \u003cmensaje\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "oferta",
        "nombre",
        "correo",
        "celular",
        "estudios",
        "tiempo",
        "conocimiento",
        "aspiracion",
        "disponibilidad",
        "mensaje"
      ]
    },
    {
      "cells": [
        "Analista",
        "Luisa Fernanda Avila",
        "luisalanana@hotmail.com",
        "3015156687",
        "No",
        "1 año",
        "No",
        "2360000",
        "1 mes",
        "ninguno"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "Analista",
        "48555668",
        "luisalanana",
        "hola",
        "48555668",
        "48555668",
        "48555668",
        "hola",
        "48555668",
        "48555668"
      ]
    },
    {
      "cells": [
        "Analista",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026",
        "/*-¡”#$$%%\u0026"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CP_007",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir pagina choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.abrir_pag_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buscar Analista",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.buscar_oferta(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seleccionar oferta",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clic en Aplicar",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_aplicar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"button\" class\u003d\"application_button button\" value\u003d\"Apply for job\"\u003e is not clickable at point (218, 591). Other element would receive the click: \u003cdiv id\u003d\"cookie-law-info-bar\" data-nosnippet\u003d\"true\" style\u003d\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: inherit; bottom: 0px; position: fixed; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5M4603C\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\LUISAA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58059}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ac4d3eb09ea2a4f160bc4739b1402951\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Pasos.StepDefinitions.dar_clic_aplicar(StepDefinitions.java:89)\r\n\tat ✽.Clic en Aplicar(file:///C:/Users/Luisa%20Avila/IdeaProjects/automatizacionChoucair/src/test/resources/org.example/Choucair.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar nombre Luisa Fernanda Avila",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar correo luisalanana@hotmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar celular 3015156687",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar estudios No",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar tiempo 1 año",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar conocimiento No",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar aspiracion 2360000",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar disponibilidad 1 mes",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar mensaje ninguno",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir pagina choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.abrir_pag_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buscar ",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.buscar_oferta(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seleccionar oferta",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clic en Aplicar",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_aplicar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"button\" class\u003d\"application_button button\" value\u003d\"Apply for job\"\u003e is not clickable at point (218, 591). Other element would receive the click: \u003cdiv id\u003d\"cookie-law-info-bar\" data-nosnippet\u003d\"true\" style\u003d\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: inherit; bottom: 0px; position: fixed; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5M4603C\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\LUISAA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6ef6e947f13a9d55ce92579efcfbadb7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Pasos.StepDefinitions.dar_clic_aplicar(StepDefinitions.java:89)\r\n\tat ✽.Clic en Aplicar(file:///C:/Users/Luisa%20Avila/IdeaProjects/automatizacionChoucair/src/test/resources/org.example/Choucair.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar nombre ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar correo ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar celular ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar estudios ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar tiempo ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar conocimiento ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar aspiracion ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar disponibilidad ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar mensaje ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir pagina choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.abrir_pag_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buscar Analista",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.buscar_oferta(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seleccionar oferta",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clic en Aplicar",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_aplicar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"button\" class\u003d\"application_button button\" value\u003d\"Apply for job\"\u003e is not clickable at point (218, 591). Other element would receive the click: \u003cdiv id\u003d\"cookie-law-info-bar\" data-nosnippet\u003d\"true\" style\u003d\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: inherit; bottom: 0px; position: fixed; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5M4603C\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\LUISAA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58472}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5ca765c249f237f8015f953258031505\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Pasos.StepDefinitions.dar_clic_aplicar(StepDefinitions.java:89)\r\n\tat ✽.Clic en Aplicar(file:///C:/Users/Luisa%20Avila/IdeaProjects/automatizacionChoucair/src/test/resources/org.example/Choucair.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar nombre 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar correo luisalanana",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar celular hola",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar estudios 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar tiempo 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar conocimiento 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar aspiracion hola",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar disponibilidad 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar mensaje 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Abrir pagina choucair.com",
  "keyword": "Given "
});
formatter.match({
  "location": "Pasos.StepDefinitions.abrir_pag_choucair_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Buscar Analista",
  "keyword": "When "
});
formatter.match({
  "location": "Pasos.StepDefinitions.buscar_oferta(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seleccionar oferta",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clic en Aplicar",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_aplicar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"button\" class\u003d\"application_button button\" value\u003d\"Apply for job\"\u003e is not clickable at point (218, 591). Other element would receive the click: \u003cdiv id\u003d\"cookie-law-info-bar\" data-nosnippet\u003d\"true\" style\u003d\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); font-family: inherit; bottom: 0px; position: fixed; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d89.0.4389.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-T5M4603C\u0027, ip: \u0027192.168.195.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\LUISAA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58634}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 34dda2147eeaff0ab452f7db03317df2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Pasos.StepDefinitions.dar_clic_aplicar(StepDefinitions.java:89)\r\n\tat ✽.Clic en Aplicar(file:///C:/Users/Luisa%20Avila/IdeaProjects/automatizacionChoucair/src/test/resources/org.example/Choucair.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar nombre /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar correo /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar celular /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar estudios /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar tiempo /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar conocimiento /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar aspiracion /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar disponibilidad /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar mensaje /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});