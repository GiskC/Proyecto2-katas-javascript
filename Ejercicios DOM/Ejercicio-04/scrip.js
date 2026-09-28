// ==========================================
// EJERCICIO 4
// ==========================================


// 1.1
// Añadir un evento click al botón
// y mostrar por consola la información
// del evento

const button = document.querySelector("#btnToClick");

button.addEventListener("click", function(event) {
    console.log(event);
});


// 1.2
// Añadir un evento focus al input
// y mostrar por consola su valor

const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", function(event) {
    console.log(event.target.value);
});


// 1.3
// Añadir un evento input al input
// y mostrar por consola su valor

const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", function(event) {
    console.log(event.target.value);
});