// ==========================================
// EJERCICIO 6 - REDUCE
// ==========================================

const exams = [
    { name: "Yuyu Cabeza Crack", score: 5 },
    { name: "Maria Aranda Jimenez", score: 1 },
    { name: "Cristóbal Martínez Lorenzo", score: 6 },
    { name: "Mercedez Regrera Brito", score: 7 },
    { name: "Pamela Anderson", score: 3 },
    { name: "Enrique Perez Lijó", score: 6 },
    { name: "Pedro Benitez Pacheco", score: 8 },
    { name: "Ayumi Hamasaki", score: 4 },
    { name: "Robert Kiyosaki", score: 2 },
    { name: "Keanu Reeves", score: 10 }
];


// ------------------------------------------
// 6.1
// Sumar todas las notas
// ------------------------------------------

const totalScores = exams.reduce((total, exam) => {
    return total + exam.score;
}, 0);

console.log("Suma de todas las notas:", totalScores);


// ------------------------------------------
// 6.2
// Sumar las notas de los alumnos aprobados
// ------------------------------------------

const approvedScores = exams.reduce((total, exam) => {
    if (exam.score >= 5) {
        return total + exam.score;
    }

    return total;
}, 0);

console.log("Suma de las notas de los aprobados:", approvedScores);


// ------------------------------------------
// 6.3
// Calcular la media de todas las notas
// ------------------------------------------

const averageScore = exams.reduce((total, exam) => {
    return total + exam.score;
}, 0) / exams.length;

console.log("Media de las notas:", averageScore);