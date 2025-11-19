// EJERCICIO 1

/*
Ejercicio 1: Lista del Súpermercado
Inicias con la siguiente lista: let compras = ["Manzanas"];

Tareas:

Añade "Leche" y "Pan" al FINAL de la lista.
Añade "Huevos" al INICIO de la lista.
Vendiste las "Manzanas" (el segundo elemento). Elimínalo.
*/

let compras = ["Manzanas"];

compras.push("Leche", "Pan")
compras.unshift("Huevos");

console.log(compras)