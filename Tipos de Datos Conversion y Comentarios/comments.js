// Este es un comentario de una sola línea
let name = "Lizz"; // Este también es un comentario de una sola línea, aunque la parte anterior a la doble diagonal es un código que se ejecutará.
// Esta línea y la siguiente serán ignoradas
// x = 8;
console.log(name); // -> Lizz
// ------------------------------------------------------------

// Comentarios de varias líneas
// Los comentarios de varias líneas, también conocidos como comentarios de bloque,
// permiten que los comentarios abarquen varias líneas, pero también te permiten colocar 
// comentarios dentro de una línea, lo que no es posible con los comentarios de una sola línea.Se 
// crean con una diagonal y un asterisco al principio del comentario y un asterisco y una diagonal 
// al final.
/*
    Este es un bloque
    de comentarios y puede
    abarcar varias líneas

    Entonces este código no se ejecutará
    console.log("¡Hola, Mundo!");
*/
let y /* porque no hay mejor nombre */ = 100;
console.log(y);
// ------------------------------------------------------------

// inicializar HelloText con Hola
const HelloText = "Hola";

angle = angle + 90; // girar 90 grados para compensar la pantalla vertical

// comprobar que 0 no sea el divisor
let result = a / b;

// no hay necesidad de comprobar el divisor
let result1 = a / b;

// dividir a entre b
let result2 = a / b;
// ------------------------------------------------------------

/*Tarea
Hay un código que actualmente no funciona. Intenta arreglarlo usando solo comentarios. Intenta, si es posible,
usar los atajos de teclado en tu editor para este propósito.*/

"use strict"; 
const prefix = "username_"; 
let userName = "Jack"; 
const userName = "Adam"; 
let prefixedUserName; 
const prefixedUserName; 
userName = "John"; 
prefixedUserName = prefix + userName; 
 
console.log(prefixedUserName + prefixedUserName2); 
console.log(prefixedUserName2); 

// Solution

"use strict"; 
const prefix = "username_"; 
let userName = "Jack"; 
// const userName = "Adam"; 
let prefixedUserName; 
// const prefixedUserName; 
userName = "John"; 
prefixedUserName = prefix + userName; 
 
console.log(prefixedUserName /*+ prefixedUserName2*/); 
// console.log(prefixedUserName2); 




