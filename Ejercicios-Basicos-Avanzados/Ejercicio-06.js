// 1.1 Crea un bucle for que vaya desde 0 a 9
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// 1.2 Muestra solo los números pares
for (let i = 0; i <= 9; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 1.3 Contar ovejas para dormir
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        console.log("¡Dormido!");
    } else {
        console.log("Intentando dormir 🐑");
    }
}
