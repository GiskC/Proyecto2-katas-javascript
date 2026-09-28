// ==========================================
// EJERCICIO 2 - MANIPULACIÓN DEL DOM
// ==========================================


// ------------------------------------------
// 2.1
// Inserta dinámicamente en HTML
// un div vacío con JavaScript
// ------------------------------------------

const emptyDiv = document.createElement("div");

document.body.appendChild(emptyDiv);


// ------------------------------------------
// 2.2
// Inserta dinámicamente un div que contenga
// una p con JavaScript
// ------------------------------------------

const div = document.createElement("div");
const paragraph = document.createElement("p");

paragraph.textContent = "Soy un párrafo dinámico";

div.appendChild(paragraph);

document.body.appendChild(div);


// ------------------------------------------
// 2.3
// Inserta dinámicamente un div que contenga
// 6 p utilizando un loop
// ------------------------------------------

const divWithParagraphs = document.createElement("div");

for (let i = 1; i <= 6; i++) {
    const paragraph = document.createElement("p");

    paragraph.textContent = "Párrafo número " + i;

    divWithParagraphs.appendChild(paragraph);
}

document.body.appendChild(divWithParagraphs);


// ------------------------------------------
// 2.4
// Inserta dinámicamente una p con el texto
// "Soy dinámico!"
// ------------------------------------------

const dynamicParagraph = document.createElement("p");

dynamicParagraph.textContent = "Soy dinámico!";

document.body.appendChild(dynamicParagraph);


// ------------------------------------------
// 2.5
// Inserta en el h2 con la clase
// .fn-insert-here el texto:
// "Wubba Lubba dub dub"
// ------------------------------------------

const title = document.querySelector("h2.fn-insert-here");

title.textContent = "Wubba Lubba dub dub";


// ------------------------------------------
// 2.6
// Crear una lista ul > li utilizando
// el array de aplicaciones
// ------------------------------------------

const apps = [
    "Facebook",
    "Netflix",
    "Instagram",
    "Snapchat",
    "Twitter"
];

const list = document.createElement("ul");

for (const app of apps) {
    const listItem = document.createElement("li");

    listItem.textContent = app;

    list.appendChild(listItem);
}

document.body.appendChild(list);


// ------------------------------------------
// 2.7
// Elimina todos los nodos que tengan
// la clase .fn-remove-me
// ------------------------------------------

const elementsToRemove = document.querySelectorAll(".fn-remove-me");

for (const element of elementsToRemove) {
    element.remove();
}


// ------------------------------------------
// 2.8
// Inserta una p con el texto
// "Voy en medio!" entre los dos primeros div
// ------------------------------------------

const divs = document.querySelectorAll("body > div");

const middleParagraph = document.createElement("p");

middleParagraph.textContent = "Voy en medio!";

divs[0].after(middleParagraph);


// ------------------------------------------
// 2.9
// Inserta una p con el texto
// "Voy dentro!" dentro de todos los div
// con la clase .fn-insert-here
// ------------------------------------------

const insertHereDivs = document.querySelectorAll(".fn-insert-here");

for (const div of insertHereDivs) {
    const paragraphInside = document.createElement("p");

    paragraphInside.textContent = "Voy dentro!";

    div.appendChild(paragraphInside);
}