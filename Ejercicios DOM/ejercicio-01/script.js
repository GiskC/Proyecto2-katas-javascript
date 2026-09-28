// 1.1
// Mostrar por consola el botón con la clase .showme

const button = document.querySelector(".showme");

console.log(button);


// 1.2
// Mostrar por consola el h1 con el id #pillado

const title = document.querySelector("#pillado");

console.log(title);


// 1.3
// Mostrar por consola todos los elementos p

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);


// 1.4
// Mostrar por consola todos los elementos con la clase .pokemon

const pokemons = document.querySelectorAll(".pokemon");

console.log(pokemons);


// 1.5
// Mostrar por consola todos los elementos
// con el atributo data-function="testMe"

const characters = document.querySelectorAll('[data-function="testMe"]');

console.log(characters);


// 1.6
// Mostrar por consola el tercer personaje
// con el atributo data-function="testMe"

const thirdCharacter = document.querySelectorAll(
    '[data-function="testMe"]'
)[2];

console.log(thirdCharacter);