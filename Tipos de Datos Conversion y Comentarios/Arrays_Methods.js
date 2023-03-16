// METHOD indexOf IN ARRAYS
/*El método indexOf se utiliza para buscar en el arreglo y localizar
un valor dado. Si se encuentra el valor (el elemento está en el
arreglo), se devolverá su índice (posición). El método
devuelve -1 si no se encuentra el elemento. Si hay más de un
elemento con el mismo valor en el arreglo, se devuelve el índice
del primer elemento encontrado.*/
let names = ["Liz", "Asa", "Emma", "Evan"];
console.log(names.indexOf("Asa")); // -> 1
console.log(names.indexOf("Victor")); // -> -1

// METHOD PUSH
/*El método push coloca el elemento dado como su argumento al final
del arreglo. La longitud del arreglo aumenta en 1 y el nuevo
elemento se inserta a la derecha (tiene el índice más grande de
todos los elementos).*/
let names = ["Liz", "Asa", "Emma", "Evan"];
console.log(names.length); // -> 4

names.push("Ross");
console.log(names.length); // -> 5
console.log(names); // - > ["Liz", "Asa", "Emma","Evan", "Ross"]

// METHOD UNSHIFT
/*El método unshift funciona de manera similar a push, con la
diferencia de que se agrega un nuevo elemento al inicio del
arreglo. La longitud de arreglo aumenta en 1, todos los elementos
antiguos se mueven hacia la derecha y el nuevo elemento se coloca
en el espacio vacío que se ha creado al inicio del arreglo.
El índice del nuevo elemento es 0.*/
let names = ["Liz", "Evan", "Amme", "Asa"];
console.log(names);
console.log(names.indexOf("Amme")); // -> 2
console.log(names.indexOf("Victor")); // -> -1 -> No existe
names.unshift("Emma");
console.log(names.indexOf("Emma")); // -> 0
console.log(names);

// METHOD POP
/*El método pop te permite eliminar el último elemento del arreglo.
Como resultado de su ejecución, se devuelve el elemento con mayor
índice, mientras que al mismo tiempo se elimina del arreglo
original. La longitud del arreglo obviamente se reduce en 1.*/
let names= ["Liz", "Evan", "Emma", "Ruby"];
console.log(names.length); // -> 4

let name = names.pop();
console.log(names.length); // -> 3
console.log(name); // -> Ruby
console.log(names); // -> ["Liz", "Evan", "Emma"]

//METHOD SHIFT
/*El método shift funciona de manera similar a pop, solo que esta
vez eliminamos el elemento del inicio del arreglo (con el índice 0).
El método devuelve el elemento eliminado y todos los demás
elementos se desplazan hacia la izquierda, llenando el espacio
vacío. La longitud del arreglo original se reduce en 1.*/
let names = ["Lizz", "Evan", "Amme", "Asa"];
console.log(names.length); // -> 4

let name = names.shift();
console.log(names.length); // -> 3
console.log(name); // -> Lizz
console.log(names); // -> ["Evan", "Amme", "Asa"]

