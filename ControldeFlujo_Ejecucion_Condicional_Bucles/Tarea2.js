/*Tarea 2
Reescribe el código anterior, reemplazando el if con un operador condicional ternario.*/

let num = prompt('Write a number: ');
if (num > 90 && num < 110 ? alert('Bingooo!!!') : alert('Fallaste!! :(('));

/**Other Solution */
let number = prompt("Introduce un número aleatorio: ");
let message = (number > 90 && number < 110) ? "¡Bingo!" : "¡Fallaste!";
alert(message);

