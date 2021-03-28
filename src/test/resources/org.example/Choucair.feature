Feature: Ejecucion caso de prueba CP_008


Scenario Outline: Prueba formulario de aplicacion con campos vacios
Given Open choucair.com
When Entering texto <keyswords>
  And Press enter 

Examples:
| keyswords   |
| analista    |
