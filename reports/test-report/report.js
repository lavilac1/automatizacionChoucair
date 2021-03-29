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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]\u003e but was:\u003c[There are no listings matching your search.]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Pasos.StepDefinitions.result_should_be(StepDefinitions.java:60)\r\n\tat ✽.El resultado debe ser There are no listings matching your search.(file:///C:/Users/Luisa%20Avila/IdeaProjects/automatizacionChoucair/src/test/resources/org.example/Choucair.feature:8)\r\n",
  "status": "failed"
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
  "name": "CP_007- CP_008- CP_009 ingreso de datos en el formulario",
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
  "name": "CP_007- CP_008- CP_009 ingreso de datos en el formulario",
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
  "status": "passed"
});
formatter.step({
  "name": "Ingresar nombre Luisa Fernanda Avila",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar correo luisalanana@hotmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar celular 3015156687",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar estudios No",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar tiempo 1 año",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar conocimiento No",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar aspiracion 2360000",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar disponibilidad 1 mes",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar mensaje ninguno",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007- CP_008- CP_009 ingreso de datos en el formulario",
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
  "status": "passed"
});
formatter.step({
  "name": "Ingresar nombre ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar correo ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar celular ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar estudios ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar tiempo ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar conocimiento ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar aspiracion ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar disponibilidad ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar mensaje ",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007- CP_008- CP_009 ingreso de datos en el formulario",
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
  "status": "passed"
});
formatter.step({
  "name": "Ingresar nombre 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar correo luisalanana",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar celular hola",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar estudios 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar tiempo 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar conocimiento 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar aspiracion hola",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar disponibilidad 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar mensaje 48555668",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CP_007- CP_008- CP_009 ingreso de datos en el formulario",
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
  "status": "passed"
});
formatter.step({
  "name": "Ingresar nombre /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar correo /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_correo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar celular /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_celular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar estudios /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_estudios(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar tiempo /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_tiempo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar conocimiento /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_conocimiento(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar aspiracion /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_aspiracion(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar disponibilidad /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_disponibilidad(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresar mensaje /*-¡”#$$%%\u0026",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.llenar_formulario_mensaje(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clic en enviar aplicacion",
  "keyword": "And "
});
formatter.match({
  "location": "Pasos.StepDefinitions.dar_clic_enviar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});