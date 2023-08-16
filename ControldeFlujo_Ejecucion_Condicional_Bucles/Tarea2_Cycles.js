// BUCLES - CYCLES

// Tarea 2
// Modifica el programa anterior para que le pida al usuario el primer y último
// número a usar en lugar de 100 y 0 (pista: use el cuadro de diálogo prompt).
// Comprueba si los valores introducidos son correctos (que el valor inicial sea
// mayor que el valor final).

let upperLimit = Number(prompt("Ingresa limite superior"));
let lowerLimit = Number(prompt("Ingresa limite inferior"));

if (!Number.isNaN(upperLimit) && !Number.isNaN(lowerLimit) && upperLimit > lowerLimit) {
    for (i = upperLimit; i >= lowerLimit; i -= 10) {
        console.log(i);
    }
}

