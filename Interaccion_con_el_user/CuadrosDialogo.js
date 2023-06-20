//CONFIRMATION DIALOGS 
let decision = window.confirm("¿Está bien?");
console.log(decision);

//Another example
let remove = confirm("¿Eliminar todos los datos?");
let message = remove ? "Eliminando Datos" : "Cancelado"

console.log(message);

//PROMPT DIALOG
let name = window.prompt("¿Cuál es tu nombre?", "");
name = name ? name : "anónimo";

let age = prompt("Hola " + name + " ¿Cuántos años tienes?");
alert(name + " tiene " + age + " años");

    


