//CONFIRMATION DIALOGS 
let decision = window.confirm("¿Está bien?");
console.log(decision);

//Another example
let remove = confirm("¿Eliminar todos los datos?");
let message = remove ? "Eliminando Datos" : "Cancelado"

console.log(message);

//PROMPT DIALOGS
let name = window.prompt("¿Cuál es tu nombre?", "");
name = name ? name : "anónimo";

let age = prompt("Hola " + name + " ¿Cuántos años tienes?");
alert(name + " tiene " + age + " años");

//ALERT DIALOGS
alert("¡Hola, Mundo!")
window.alert("¡Hola, Mundo!, por segunda ocasión");

alert(4 * 7);
alert(true);

alert("texto 1", "texto 2"); // solo "texto 1" será mostrado




