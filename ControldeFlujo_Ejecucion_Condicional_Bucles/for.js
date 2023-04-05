// CYCLE FOR
// Ejecutando ciclo for
for (i = 0; i <= 10; i++) {
    console.log("Hola" + i + "veces");
}
// Ejecutando ciclo for con condicionales --------------------
for (i = 0; i <= 10; i++) {
    if (i == 1) {
        console.log("Hola" + i + "Vez");
    } else {
        console.log("Hola" + i + "Veces");
    }
}
// Ejecutando ciclo for con arrays --------------------------
var frutas = ["Manzana", "Sandia", "Naranja"];
for (i = 0; i < frutas.length; i++) {
    const frut = frutas.length[i];
    console.log(frut);
}
// Ejecutando ciclo for con objetos -------------------------
// Objetos
var persona1 = {
    codigo: 100,
    nombre: Evan,
    profesion: Actor
}
var persona2 = {
    codigo: 101,
    nombre: Maeve,
    profesion: Escritora
}
var persona3 = {
    codigo: 102,
    nombre: Cole,
    profesion: Estudiante
}
// Llenando array con objetos
var personas = [persona1, persona2, persona3];
for (i = 0; personas.length; i++) {
    const pers = personas[i].nombre; //Guardando nombres en variable pers
    console.log(pers); //Imprimiendo pers
}
// Usando "break" para romper un ciclo for ----------------------
var persona1 = {
    codigo: 100,
    nombre: Evan,
    profesion: Actor
}
var persona2 = {
    codigo: 101,
    nombre: Maeve,
    profesion: Escritora
}
var persona3 = {
    codigo: 102,
    nombre: Cole,
    profesion: Estudiante
}
// Llenando array con objetos
var personas = [persona1, persona2, persona3];
for (i = 0; personas.length; i++) {
    if (personas[i].codigo > 100) {
        break; //Rompiendo el ciclo si se cumple la condicion
    }
    const pers = personas[i].nombre; //Guardando nombres en variable pers
    console.log(pers); //Imprimiendo pers
}
//Los forEach son especiales para los arrays
//Usando forEach en arrays
personas.forEach(pers => console.log(pers.profesion));
//Usando forEach mostrando indices de arrays
personas.forEach((pers, i) => {
    console.log(i)
})