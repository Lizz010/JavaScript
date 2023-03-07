// ARRAYS EN JAVASCRIPT
// Agregando valores e imprimiendo posiciones
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[0]); // -> Monday
console.log(days[2]); // -> Wednesday
console.log(days[5]); // -> Saturday

days[0] = "Monday";
console.log(days[0]); // -> Monday

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

// --------------------------------------
// Ejemplo imprimiendo posiciones
let animals = [];
console.log(animals[0]); // -> undefined

animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat

// --------------------------------------
// Modificando arreglos dentro de un arreglo
let names = [["Liz", "Evan", "Asa", "Emma"], ["Cole", "Amme", "Erick"]];
console.log(names[0]); // -> ["Liz", "Evan", "Asa", "Emma"]
console.log(names[0][1]); // -> Evan
console.log(names[1][1]); // -> Emma

let femaleNames = names[0];
console.log(femaleNames[0]); // -> Liz
console.log(femaleNames[2]); // -> Asa

// --------------------------------------
// Agregando nuevo usuario al arreglo
let users =[ 
    {
        name: "Liz",
        surname: "Pemberthy",
        age: 100,
        email: "lizpemberthy@teleworm.us"
    },
    {
        name: "Ross",
        surname: "Lynch",
        age: 110,
        email: "rosslynch@dayrep.com"
    },
    {
        name: "Evan",
        surname: "Peters",
        age: 200,
        email:"evanpeters@rhyta.com"
        }
];
console.log(users[0].name); // -> Liz
console.log(users[1].age); // -> 21
console.log(users[2].name) // -> Evan

// --------------------------------------
// Verificando que tipo de dato es el array con typeof
// El operador instanceof es un operador de dos argumentos, que requiere 
// ue se especifique la variable probada (o literal) y la clase de objeto.
// En nuestro caso, la clase Array. El operador devuelve verdadero (true)
// o falso (false), según el resultado de la prueba.
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = "Sunday";

console.log(typeof days); // -> object
console.log(typeof day); // -> string

console.log(days instanceof Array); // -> true
console.log(day instanceof Array); // -> false
