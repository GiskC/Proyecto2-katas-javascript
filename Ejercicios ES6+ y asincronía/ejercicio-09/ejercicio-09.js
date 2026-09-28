// ==========================================
// EJERCICIO 9 - POKEAPI
// ==========================================

// Generar un número aleatorio entre 1 y 151
const randomPokemon = Math.floor(Math.random() * 151) + 1;

// Crear la URL del Pokémon
const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`;

// Seleccionar la imagen
const pokemonImage = document.querySelector(".random-image");

// Hacer la petición a la PokeAPI
fetch(apiUrl)
    .then(response => response.json())
    .then(pokemon => {

        // Mostrar la imagen del Pokémon
        pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;

        // Añadir el nombre como texto alternativo
        pokemonImage.alt = pokemon.name;
    })
    .catch(error => {
        console.error("Error al obtener el Pokémon:", error);
    });