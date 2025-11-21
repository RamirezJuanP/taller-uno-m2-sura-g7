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


/*  ### Ejercicio 7: Gestión de Asientos de Cine

Inicias con el estado de una fila de asientos:
let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];


1.  Las tres personas en los asientos "Libre" (posiciones 1, 2 y 3) deben moverse. Cambia esos tres asientos a "Reservado".
    (Pista: fill puede usar un índice de inicio y fin).

---
   */

let asientos = ["Ocupado", "Libre", "Libre", "Libre", "Ocupado"];

// Cambiar asientos libres a reservados

asientos.fill("Reservado", 1, 4)

console.log(asientos);




/*   Ejercicio 8: Reemplazar Elemento

Inicias con una lista de productos:
let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

1.  El "Mouse Roto" (posición 2) debe ser reemplazado. Cámbialo por "Mouse Nuevo" usando splice.

---
   */

let productos = ["Monitor", "Teclado", "Mouse Roto", "Webcam"];

// Reemplazar mause roto con uno nuevo (splice)

productos.splice(2, 1, "Mouse nuevo")

console.log(productos);



/*   Ejercicio 9: Orden Alfabético (Sort)

Inicias con una lista de estudiantes desordenada:
let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];


1.  Ordena la lista de estudiantes alfabéticamente.

---
   */

let estudiantes = ["Zapata", "Alvarez", "Gomez", "Bernal"];

// Ordenar alfabeticamente

estudiantes.sort()

console.log(estudiantes);







/*    Ejercicio 10: Vaciar un Arreglo (Fill)

Inicias con una lista de puntuaciones:
let puntuaciones = [100, 85, 92, 78];


1.  El juego se resetea. Cambia *TODOS* los elementos del arreglo a 0 usando fill.

---
   */

let puntuaciones = [100, 85, 92, 78];

// Cambiar puntuacion a cero

puntuaciones.fill(0)

console.log(puntuaciones);






/*    Ejercicio 11: Carrito de Compras (Combinado)

Inicias con un carrito vacío:
let carrito = [];

1.  Añade "Camisa" y "Pantalón" al final.
2.  Añade "Zapatos" al inicio.
3.  Revisas el carrito y decides no comprar la "Camisa" (ahora en posición 1). Elimínala.

---
   */
let carrito = [];

// Añadir al final camisa y pantalon

carrito.push("Camisa", "Pantalon")

// Añadir zapatos al inicio

carrito.unshift("Zapatos")

// Eliminar camisa

carrito.splice(1, 1)

console.log(carrito);





/*  Ejercicio 12: Control de Versiones (Simple)

Inicias con los cambios guardados:
let commits = ["v1.0", "v1.1"];


1.  Haces un nuevo guardado: "v1.2". Añádelo al final.
2.  Te das cuenta de que "v1.2" tiene un error. Deshaz el último commit (elimínalo del final).
3.  Haces un nuevo guardado corregido: "v1.2-corregido". Añádelo al final.

---   
*/

let commits = ["v1.0", "v1.1"];

// Hacer nuevo guardado v1.2 al final

commits.push("v1.2")

// Eliminar el v1.2}

commits.pop()

// Añadir v1.2-corregido al final

commits.push("v1.2-corregido")

console.log(commits);




/*   Ejercicio 13: Receta de Cocina

Inicias con los pasos de una receta:
let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];


1.  Olvidaste el primer paso. Añade "Paso 1: Pre-calentar horno" al *INICIO*.
2.  Olvidaste el último paso. Añade "Paso 4: Servir" al *FINAL*.

---

   */

let receta = ["Paso 2: Mezclar ingredientes", "Paso 3: Hornear"];

// Añadir el paso uno "pre-calentar horno al inicio"

receta.unshift("Paso 1: Pre-calentar horno")

// Añadir ultimo paso "servir" al final

receta.push("Paso 4: Servir")

console.log(receta);





/*    Ejercicio 14: Invertir y Reemplazar

Inicias con una lista de palabras:
let palabras = ["uno", "dos", "cuatro"];


1.  Invierte el orden del arreglo.
2.  Te das cuenta de que "cuatro" (ahora en pos 0) es incorrecto. Reemplázalo por "tres" usando splice.

---
   */

let palabras = ["uno", "dos", "cuatro"];

// Invertir el orden

palabras.reverse()

// Reemplazar cuatro por tres con splice

palabras.splice(0, 1, "Tres")


console.log(palabras);






/*   Ejercicio 15: Equipo de Proyecto

Inicias con un equipo:
let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];


1.  "Juan (Dev)" (posición 1) renuncia. Elimínalo.
2.  Se contratan dos nuevos desarrolladores: "Pedro (Dev)" y "Luisa (Dev)". Añádelos al *FINAL*.

---
 */


let equipo = ["Ana (Líder)", "Juan (Dev)", "Maria (Diseñadora)"];

// Eliminar a juan dev

equipo.splice(1, 1)

// Añadir al final a pedro y a luisa

equipo.push("Luisa (Dev)", "Pedro ()Dev")


console.log(equipo);