// ------------------------------------------
// 2.1
// Copiar un array usando spread operator
// ------------------------------------------

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

console.log(pointsListCopy);


// ------------------------------------------
// 2.2
// Copiar un objeto usando spread operator
// ------------------------------------------

const toy = {
    name: "Bus laiyiar",
    date: "20-30-1995",
    color: "multicolor"
};

const toyCopy = { ...toy };

console.log(toyCopy);


// ------------------------------------------
// 2.3
// Unir dos arrays usando spread operator
// ------------------------------------------

const pointsList2 = [54, 87, 99, 65, 32];

const pointsListCombined = [...pointsList, ...pointsList2];

console.log(pointsListCombined);


// ------------------------------------------
// 2.4
// Fusionar dos objetos usando spread operator
// ------------------------------------------

const toyUpdate = {
    lights: "rgb",
    power: ["Volar like a dragon", "MoonWalk"]
};

const completeToy = {
    ...toy,
    ...toyUpdate
};

console.log(completeToy);


// ------------------------------------------
// 2.5
// Copiar un array eliminando la posición 2
// sin modificar el array original
// ------------------------------------------

const colors = [
    "rojo",
    "azul",
    "amarillo",
    "verde",
    "naranja"
];

const colorsCopy = [
    ...colors.slice(0, 2),
    ...colors.slice(3)
];

console.log(colorsCopy);

console.log(colors);