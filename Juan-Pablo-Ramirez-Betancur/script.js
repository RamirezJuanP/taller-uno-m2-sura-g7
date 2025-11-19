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


// EJERCICIO 3

/*
Ejercicio 3: Pila de Historial (LIFO)
Inicias con el historial: let historial = ["google.com", "youtube.com", "facebook.com"];

Tareas:

Se requiere deshacer la última acción. Elimina el ÚLTIMO elemento del historial.
Se requiere deshacer la acción anterior. Elimina el ÚLTIMO elemento restante.
*/

let historial = ["google.com", "youtube.com", "facebook.com"];

historial.pop();
historial.pop();

console.log(historial)


// EJERCICIO 4

/*
Ejercicio 4: Cola de Impresión (FIFO)
Inicias con los siguientes trabajos en cola: let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

Tareas:

Se imprimió el primer documento. Retíralo de la cola.
Llega un nuevo trabajo: "doc4.txt". Añádelo al FINAL de la cola.
Se imprimió el siguiente documento. Retíralo de la cola.
*/

let colaImpresion = ["doc1.pdf", "doc2.png", "doc3.jpg"];

colaImpresion.shift();
colaImpresion.push("doc4.txt");
colaImpresion.shift();

console.log(colaImpresion);