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


// EJERCICIO 2

/*
Ejercicio 2: Pila de Tareas Pendientes (LIFO)
Inicias con la siguiente pila de tareas: let tareas = ["Revisar emails"];

Tareas:

Llega una tarea nueva: "Llamar al cliente". Ponla ENCIMA de la pila (al inicio).
Llega otra tarea: "Preparar reporte". Ponla ENCIMA de la pila (al inicio).
Completaste la última tarea que entró ("Preparar reporte"). Retírala de la pila.
Completaste la siguiente tarea ("Llamar al cliente"). Retírala.
*/

let tareas = ["Revisar emails"];

tareas.unshift("Llamar al cliente");
tareas.unshift("Preparar reporte");

tareas.shift();
tareas.shift();

console.log(tareas)