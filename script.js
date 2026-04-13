// --- EJERCICIO 1: Selectores ---

// 1. Obtener todos los párrafos que están dentro del div 'lipsum'
const todosLosParrafos = document.querySelectorAll('#lipsum p');

// 2. Mostrar en la consola para verificar
console.log("Párrafos capturados:", todosLosParrafos.length);

// 1.3 El último item de la lista
const ultimoItem = document.querySelector('ul li:last-child');
console.log("El último ítem es:", ultimoItem.innerText);


// --- EJERCICIO 2: Atributos y Modificaciones ---

// 2.1 Añadir un id único a cada párrafo usando un bucle
todosLosParrafos.forEach((parrafo, indice) => {
    parrafo.id = `parrafo-${indice + 1}`;
});

// 2.2 Cambiar el texto de los botones
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

if (btn1) btn1.innerText = "Aceptar";
if (btn2) btn2.innerText = "Cancelar";

// 2.3 Cambiar el color de la label del nombre a azul
const labelNombre = document.getElementById('input2');
if (labelNombre) {
    labelNombre.style.color = "blue";
}


// --- EJERCICIO 3: Clases ---

// 3.1 Añadimos la clase 'important' al primer párrafo
if (todosLosParrafos[0]) {
    todosLosParrafos[0].classList.add('important');
}

// 3.2 Añadir clase 'listado' a todos los <li>
const todosLosLi = document.querySelectorAll('ul li');
todosLosLi.forEach(li => li.classList.add('listado'));


// --- FUNCIONALIDAD: Interacción con el Formulario ---

// Escuchamos el click en el botón "Aceptar" para que "haga algo"
if (btn1) {
    btn1.addEventListener('click', (evento) => {
        // Evitamos que la página se recargue (comportamiento por defecto del form)
        evento.preventDefault(); 
        
        // Capturamos el valor del nombre
        const nombreInput = document.querySelector('input[type="text"]').value;
        
        // Capturamos el sexo seleccionado
        const sexoSeleccionado = document.querySelector('input[name="sexo"]:checked');
        const genero = sexoSeleccionado ? (sexoSeleccionado.value === 'h' ? 'Hombre' : 'Mujer') : 'No especificado';

        // Lanzamos la alerta si hay nombre
        if (nombreInput.trim() !== "") {
            alert(`¡Hola ${nombreInput}!\n\nEl DOM ha detectado que eres: ${genero}.\n\nEjercicio completado con éxito.`);
        } else {
            alert("Por favor, introduce tu nombre en el campo de texto.");
        }
    });
}

console.log("Script cargado y listo para interactuar.");