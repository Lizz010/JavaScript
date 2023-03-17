// METHOD REVERSE
/*El método reverse invierte el orden de los elementos de un arreglo.
El método devuelve un arreglo con los elementos en orden inverso.*/
let names = ["Lizz", "Evan", "Amme", "Asa"];
names.reverse();
console.log(names); // -> ["Asa", "Amme", "Evan", "Lizz"]

// METHOD SLICE
/*Te permite crear un nuevo arreglo a partir de elementos seleccionados
del arreglo original. Llamar al método no afecta el arreglo original.
El método toma uno o dos valores enteros como argumentos.
Las combinaciones básicas son:

Un argumento mayor que cero: se copian todos los elementos del índice
dado como argumento hasta el final del arreglo.

Dos argumentos mayores que cero: se copia el elemento del índice
especificado como primer argumento al elemento especificado como segundo
argumento.

Dos argumentos, el primero positivo, el segundo negativo: se copian
todos los elementos desde el índice especificado hasta el final del
arreglo, excepto el número especificado de los últimos elementos
(por ejemplo, el argumento -3 significa que no copiamos los últimos tres
elementos).

Un argumento negativo: el número especificado de los últimos elementos
se copian al final del arreglo (por ejemplo, -2 significa que se copian
los dos últimos elementos).*/
let names = ["Lizz", "Evan", "Amme", "Otis"];

let n1 = names.slice(2);
console.log(n1); // -> ["Amme", "Otis"]

let n2 = names.slice(1,3);
console.log(n2); // -> ["Evan", "Amme"]

let n3 = names.slice(0, -1);
console.log(n3); // -> ["Lizz", "Evan", "Amme"]

let n4 = names.slice(-1);
console.log(n4); // -> ["Otis"]

console.log(names); // -> ["Lizz", "Evan", "Amme", "Otis"]

// METHOD CONCAT
/*Crea un nuevo arreglo adjuntando elementos del arreglo dado como
argumento a los elementos originales del arreglo. El método no cambia
ni el arreglo original ni el arreglo especificado como argumento.*/
let names = ["Lizz", "Evan", "Amme", "Otis"];
let names1 = ["Ross", "Maeve"];
let allNames = names.concat(names1);

console.log(names); // -> ["Lizz", "Evan", "Amme", "Otis"]
console.log(names1); // -> ["Ross", "Maeve"]
console.log(allNames); // -> ["Lizz", "Evan", "Amme", "Otis", "Ross", "Maeve"]
