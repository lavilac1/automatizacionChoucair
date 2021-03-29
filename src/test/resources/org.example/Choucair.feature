Feature: Ejecucion casos de prueba


Scenario Outline: CP_004 - CP_005 Prueba busqueda de empleos disponibles
Given Abrir choucair.com
When Ingresar texto <keyswords>
  And Presionar search jobs
  Then El resultado debe ser <resultado>


Examples:
| keyswords   | resultado|
| Una carta es un medio de comunicación escrita por un emisor (remitente) y enviado a un receptor (destinatario).Normalmente, el nombre y la dirección del destinatario aparecen en el frente del sobre, el nombre y la dirección del remitente aparecen en el reverso del mismo (en el caso de sobres manuscritos) o en el anverso (en los sobres preimpresos).|There are no listings matching your search.|
|4589552233655422334443                                                                                                                                                                                                                                                                                                                                         |There are no listings matching your search.|
| /*-+°!”#$%&//                                                                                                                                                                                                                                                                                                                                                 |There are no listings matching your search.|


Scenario Outline: CP_007- CP_008- CP_009 ingreso de datos en el formulario
  Given Abrir pagina choucair.com
  When Buscar <oferta>
  And Seleccionar oferta
  And Clic en Aplicar
  And Ingresar nombre <nombre>
  And clic en enviar aplicacion
  And Ingresar correo <correo>
  And clic en enviar aplicacion
  And Ingresar celular <celular>
  And clic en enviar aplicacion
  And Ingresar estudios <estudios>
  And clic en enviar aplicacion
  And Ingresar tiempo <tiempo>
  And clic en enviar aplicacion
  And Ingresar conocimiento <conocimiento>
  And clic en enviar aplicacion
  And Ingresar aspiracion <aspiracion>
  And clic en enviar aplicacion
  And Ingresar disponibilidad <disponibilidad>
  And clic en enviar aplicacion
  And Ingresar mensaje <mensaje>
  And clic en enviar aplicacion


Examples:
| oferta | nombre | correo | celular | estudios | tiempo | conocimiento | aspiracion | disponibilidad | mensaje |
| Analista | Luisa Fernanda Avila | luisalanana@hotmail.com | 3015156687 | No | 1 año | No | 2360000 | 1 mes | ninguno |
|          |                      |                         |            |    |       |    |         |       |         |
| Analista | 48555668 | luisalanana | hola | 48555668 | 48555668 | 48555668 | hola | 48555668 | 48555668 |
| Analista | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& | /*-¡”#$$%%& |
