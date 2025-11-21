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


// EJERCICIO 5

/*
Ejercicio 5: Fila del Banco (Splice)
Inicias con la siguiente fila: let fila = ["Ana", "Luis", "Carlos", "Maria"];

Tareas:

"Luis" (posición 1) se cansa y se va. Elimínalo.
"Jorge" se cuela en la fila y se pone justo después de "Ana" (en la nueva posición 1). Insértalo sin eliminar a nadie.
*/

let fila = ["Ana", "Luis", "Carlos", "Maria"];

fila.splice(1,1)
fila.splice(1, 0, "Jorge");


console.log(fila);


// EJERCICIO 6

/*
Ejercicio 6: Mazo de Cartas
Inicias con un pequeño mazo: let mazo = ["As", "Rey", "Reina", "Jota"];

Tareas:

Barajas el mazo invirtiendo el orden de las cartas.
Sacas la carta de arriba (el primer elemento).
*/

let mazo = ["As", "Rey", "Reina", "Jota"];

mazo.reverse();
mazo.shift();


console.log(mazo);


// EJERCICIO 7

/*
Ejercicio 7: Gestión de Asientos de Cine
Inicias con el estado de una fila de asientos: let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

Tareas:

Las tres personas en los asientos "Libre" (posiciones 1, 2 y 3) deben moverse. Cambia esos tres asientos a "Reservado". (Pista: fill puede usar un índice de inicio y fin).
*/

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];


