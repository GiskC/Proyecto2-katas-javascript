
// ------------------------------------------
// 4.1
// Valores mayores que 18
// ------------------------------------------

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesOver18 = ages.filter(age => age > 18);

console.log(agesOver18);


// ------------------------------------------
// 4.2
// Valores pares
// ------------------------------------------

const evenAges = ages.filter(age => age % 2 === 0);

console.log(evenAges);


// ------------------------------------------
// 4.3
// Streamers que juegan a
// League of Legends
// ------------------------------------------

const streamers = [
    {
        name: "Rubius",
        age: 32,
        gameMorePlayed: "Minecraft"
    },
    {
        name: "Ibai",
        age: 25,
        gameMorePlayed: "League of Legends"
    },
    {
        name: "Reven",
        age: 43,
        gameMorePlayed: "League of Legends"
    },
    {
        name: "AuronPlay",
        age: 33,
        gameMorePlayed: "Among Us"
    }
];

const leagueStreamers = streamers.filter(
    streamer => streamer.gameMorePlayed === "League of Legends"
);

console.log(leagueStreamers);


// ------------------------------------------
// 4.4
// Streamers cuyo nombre contiene la letra "u"
// ------------------------------------------

const streamersWithU = streamers.filter(
    streamer => streamer.name.toLowerCase().includes("u")
);

console.log(streamersWithU);


// ------------------------------------------
// 4.5
// Streamers cuyo juego contiene "Legends"
// y poner el juego en mayúsculas
// si la edad es mayor de 35
// ------------------------------------------

const legendsStreamers = streamers
    .filter(streamer => streamer.gameMorePlayed.includes("Legends"))
    .map(streamer => {
        if (streamer.age > 35) {
            return {
                ...streamer,
                gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
            };
        }

        return {
            ...streamer
        };
    });

console.log(legendsStreamers);