// ==========================================
// EJERCICIO 8 - API GAME OF THRONES
// ==========================================

const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

const apiUrl = "https://thronesapi.com/api/v2/Characters";


// ------------------------------------------
// Obtener los personajes de la API
// ------------------------------------------

fetch(apiUrl)
    .then(response => response.json())
    .then(characters => {

        // Crear una opción para cada personaje
        characters.forEach(character => {
            const option = document.createElement("option");

            option.value = character.imageUrl;
            option.textContent = character.fullName;

            characterList.appendChild(option);
        });

        // Mostrar la imagen del primer personaje
        if (characters.length > 0) {
            characterImage.src = characters[0].imageUrl;
            characterImage.alt = characters[0].fullName;
        }
    })
    .catch(error => {
        console.error("Error al obtener los personajes:", error);
    });


// ------------------------------------------
// Cambiar la imagen cuando seleccionamos
// otro personaje
// ------------------------------------------

characterList.addEventListener("change", () => {
    characterImage.src = characterList.value;

    const selectedOption =
        characterList.options[characterList.selectedIndex];

    characterImage.alt = selectedOption.textContent;
});