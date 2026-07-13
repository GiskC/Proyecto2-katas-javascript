function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

// Ejemplos
console.log(rollDice(6));
console.log(rollDice(10));
console.log(rollDice(20));