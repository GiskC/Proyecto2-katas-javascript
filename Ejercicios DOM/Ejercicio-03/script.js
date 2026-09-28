// ==========================================
// EJERCICIO 3
// ==========================================


// 1.2
// Elimina el elemento que tenga la clase
// .fn-remove-me

const elementToRemove = document.querySelector(".fn-remove-me");

elementToRemove.remove();


// 1.3
// Crea una lista ul > li con los elementos
// del array dentro del div
// data-function="printHere"

const cars = [
    "Mazda 6",
    "Ford fiesta",
    "Audi A4",
    "Toyota corola"
];

const printHere = document.querySelector(
    '[data-function="printHere"]'
);

const ul = document.createElement("ul");

for (const car of cars) {
    const li = document.createElement("li");

    li.textContent = car;

    ul.appendChild(li);
}

printHere.appendChild(ul);


// 1.4
// Crea dinámicamente una serie de divs
// con un h4 para el título y un img
// para la imagen

const countries = [
    {
        title: "Japón",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcP2o4x7JJHVC9FIFxr4O9g1oGn3UjBqft_1asl-K8-Q&s=10"
    },
    {
        title: "Nicaragua",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVtiXqsIrukJxD6x796gxfoob9SCabYoH1QXuSB1zmg&s=10"
    },
    {
        title: "Suiza",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ389WJ3aWwE_3p7IfrbpXRuch_OdjEqf_XdGnAvpKJTQ&s=10"
    },
    {
        title: "Australia",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFRB735IzE8lJ0U0onAvOaUQNbcQWBV_lc0473abK6Q&s=10"
    },
    {
        title: "Venezuela",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEdhy41ueBDBRDKpYrS_WjyxirHl6obeBG-aPdMUxyg&s=10"
    }
];

const countryDivs = [];

for (const country of countries) {

    const div = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = country.title;

    const img = document.createElement("img");
    img.src = country.imgUrl;
    img.alt = country.title;

    div.appendChild(h4);
    div.appendChild(img);

    document.body.appendChild(div);

    countryDivs.push(div);
}


// 1.5
// Crea un botón que elimine el último
// elemento de la serie de divs

const buttonLast = document.createElement("button");

buttonLast.textContent = "Eliminar último";

document.body.appendChild(buttonLast);

buttonLast.addEventListener("click", function () {

    if (countryDivs.length > 0) {

        const lastDiv = countryDivs[countryDivs.length - 1];

        lastDiv.remove();

        countryDivs.pop();
    }
});


// 1.6
// Crea un botón para cada uno de los divs
// que elimine ese mismo elemento del HTML

for (const div of countryDivs) {

    const button = document.createElement("button");

    button.textContent = "Eliminar";

    div.appendChild(button);

    button.addEventListener("click", function () {
        div.remove();
    });
}