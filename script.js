// --- EJERCICIO 1: Selectores ---

// 1. Obtener todos los párrafos que están dentro del div 'lipsum'
const todosLosParrafos = document.querySelectorAll('#lipsum p');

// 2. Mostrar en la consola el primero de ellos para verificar
console.log("El primer párrafo es:", todosLosParrafos[0]);

// 1.2 El segundo párrafo de 'lipsum'
console.log("El segundo párrafo es:", todosLosParrafos[1]);

// 1.3 El último item de la lista
const ultimoItem = document.querySelector('ul li:last-child');
console.log("El último ítem es:", ultimoItem);


// --- EJERCICIO 2: Atributos ---

// 2.1 Añadir un id único a cada párrafo usando un bucle
// Usamos tu variable 'todosLosParrafos' para que Susana vea que la reutilizas
todosLosParrafos.forEach((parrafo, indice) => {
    parrafo.id = `parrafo-${indice + 1}`;
    console.log(`Párrafo ${indice + 1} actualizado con ID: ${parrafo.id}`);
});

// 2.2 Cambiar el texto de los botones (Aceptar y Cancelar)
// IMPORTANTE: Asegúrate de que en tu HTML los botones tengan id="btn1" y id="btn2"
document.getElementById('btn1').innerText = "Aceptar";
document.getElementById('btn2').innerText = "Cancelar";

// 2.3 Cambiar el color de la label del input2 a azul
const labelNombre = document.getElementById('input2');
if (labelNombre) {
    labelNombre.style.color = "blue";
}

// --- EJERCICIO 3: CLASES ---

// 3.1 Añadimos la clase 'importante' al primer párrafo
todosLosParrafos[0].classList.add('important');

// 3.2 Añadir clase 'listado' a todos los <li>
const todosLosLi = document.querySelectorAll('ul li');
todosLosLi.forEach(li => li.classList.add('listado'));

// 3.3 Modificar el H1: quitar una clase y poner otra
const h1Principal = document.querySelector('h1');
h1Principal.classList.remove('important');
h1Principal.classList.add('titulo');

console.log("Ejercicio 3: Clases y nodos completado.");