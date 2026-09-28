// ==========================================
// EJERCICIO 7 - FILTER + REDUCE
// ==========================================

const videogames = [
    {
        name: "Final Fantasy VII",
        genders: ["RPG"],
        score: 9.5
    },
    {
        name: "Assasins Creed Valhalla",
        genders: ["Aventura", "RPG"],
        score: 4.5
    },
    {
        name: "The Last of Us 2",
        genders: ["Acción", "Aventura"],
        score: 9.8
    },
    {
        name: "Super Mario Bros",
        genders: ["Plataforma"],
        score: 8.5
    },
    {
        name: "Genshin Impact",
        genders: ["RPG", "Aventura"],
        score: 7.5
    },
    {
        name: "Legend of Zelda: Breath of the wild",
        genders: ["RPG"],
        score: 10
    }
];


// ------------------------------------------
// 7.1
// Filtrar videojuegos del género RPG
// ------------------------------------------

const rpgGames = videogames.filter(videogame =>
    videogame.genders.includes("RPG")
);

console.log("Videojuegos RPG:", rpgGames);


// ------------------------------------------
// Calcular la media de los scores de RPG
// usando reduce()
// ------------------------------------------

const totalScore = rpgGames.reduce((total, videogame) => {
    return total + videogame.score;
}, 0);

const averageScore = totalScore / rpgGames.length;

console.log("Media de los videojuegos RPG:", averageScore);