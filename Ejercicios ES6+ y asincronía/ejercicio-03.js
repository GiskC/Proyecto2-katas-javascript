// ------------------------------------------
// 3.1
// Obtener los nombres de los usuarios
// utilizando map()
// ------------------------------------------

const users = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" }
];

const userNames = users.map(user => user.name);

console.log(userNames);


// ------------------------------------------
// 3.2
// Cambiar el nombre a "Anacleto"
// si empieza por "A"
// ------------------------------------------

const usersUpdated = users.map(user => {
    if (user.name.startsWith("A")) {
        return "Anacleto";
    }

    return user.name;
});

console.log(usersUpdated);


// ------------------------------------------
// 3.3
// Añadir "(Visitado)" si isVisited es true
// ------------------------------------------

const cities = [
    { isVisited: true, name: "Tokyo" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" }
];

const visitedCities = cities.map(city => {
    if (city.isVisited === true) {
        return city.name + " (Visitado)";
    }

    return city.name;
});

console.log(visitedCities);