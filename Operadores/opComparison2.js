/*COMPARISON OPERATORS*/
/*Los operadores de comparación se utilizan para verificar la
igualdad o desigualdad de valores. Todos los operadores de
comparación son binarios y todos devuelven un valor lógico que
representa el resultado de la comparación, true o false.

Al igual que con otros operadores, JavaScript intentará convertir
los valores que se comparan si son de diferentes tipos. Tiene sentido
verificar la igualdad, o cuál es mayor, usando la representación numérica, y
JavaScript en la mayoría de los casos convertirá los tipos a Number antes de
la comparación. Hay dos excepciones a esto, las cadenas y el operador de identidad(igualdad estricta).
Las cadenas se comparan char por char (especificamente carácter Unicode por carácter
Unicode usando sus valores).

Para verificar si los operandos son iguales, podemos usar el operador de identidad(igualdad estricta) ===
o el operador de igualdad ==.

El primero es más restrictivo y, para devolver verdadero, los operandos deben ser
idénticos (es decir, deben ser iguales y del mismo tipo). */

//Igualdad Extricta Example:
console.log(10 === 5); // -> false
console.log(10 === 10); // -> true
console.log(10 === 10n); // -> false
console.log(10 === "10"); // -> false
console.log("10" === "10"); // -> true
console.log("Lizz" === "Bob"); // -> false
console.log(0 === false); // -> false
console.log(undefined === false); // -> false

/*El operador de igualdad requiere que solo los valores sean iguales y sus tipos no se comparan.
Entonces, si los operandos son de diferentes tipos, el intérprete intentará convertirlos en números,
por ejemplo, true se convertirá en 0, true a 1, indefinido a NaN, null a 0, 10n  a 10 y "123" a 123, etc

Toma en cuenta que si alguno de los operandos tiene un valor NaN (o se ha convertido a NaN, por ejemplo,
con undefined), el operador de igualdad devolverá false
.*/

//Igualdad Example:
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Lizz" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false

/*¡Recuerda! Utiliza el operador de identidad a menos que permitas intencionalmente una comparación positiva
entre los diferentes tipos de datos.

También hay operadores complementarios a los que acabamos de demostrar: el operador de no identidad !== y
el operador de desigualdad !=. El primero devuelve true si los operandos no son idénticos, es decir, son iguales
pero de diferente tipo, o simplemente son diferentes. El segundo devuelve true si los operandos son
diferentes. */

//Desigualdad Extricta Example:
console.log(10 !== 5); // -> true
console.log(10 !== 10); // -> false
console.log(10 !== 10n); // -> true
console.log(10 !== "10"); // -> true
console.log("10" !== "10"); // -> false
console.log("Lizz" !== "Bob"); // -> true
console.log(0 !== false); // -> true
console.log(undefined !== false); // -> true

//Igualdad Extricta Example:
console.log(10 != 5); // -> true
console.log(10 != 10); // -> false
console.log(10 != 10n); // -> false
console.log(10 != "10"); // -> false
console.log("10" != "10"); // -> false
console.log("Lizz" != "Bob"); // -> true
console.log(0 != false); // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN); // -> true

/*También tenemos operadores que nos permiten comprobar si uno de los operandos es mayor que >,
menor que <, mayor o igual que  >=, y menor o igual que <=. Estos operadores funcionan en cualquier tipo de
operando, pero tiene sentido usarlos solo en números o valores que se convertirán correctamente en números.*/

console.log(10 > 100); // -> false
console.log(101 > 100); // -> true
console.log(101 > "100"); // -> true

console.log(101 < 100); // -> false
console.log(100n < 102); // -> true
console.log("10" < 20n); // -> true

console.log(101 <= 100); // -> false
console.log(10 >= 10n); // -> true
console.log("10" <= 20); // -> true

//OTHERS OPERATORS
//typeof = Saber el tipo de dato de una variable EX:
let year = 10000;
console.log(typeof year); // -> number
console.log(typeof false); // -> boolean

//intanceof = Saber si un objeto instancia de una clase en particular o de alguna clase heredada EX:
class Vehiculo {
  conducir() {
    console.log("Conduciendo el vehículo...");
  }
}

class Coche extends Vehiculo {
  frenar() {
    console.log("Frenando el coche...");
  }
}

class Moto extends Vehiculo {
  acelerar() {
    console.log("Acelerando la moto...");
  }
}

const miCoche = new Coche();
const miMoto = new Moto();

console.log(miCoche instanceof Vehiculo);  // Salida: true
console.log(miCoche instanceof Coche);     // Salida: true
console.log(miCoche instanceof Moto);      // Salida: false

console.log(miMoto instanceof Vehiculo);   // Salida: true
console.log(miMoto instanceof Coche);      // Salida: false
console.log(miMoto instanceof Moto);       // Salida: true

//delete = Eliminar propiedad o elemento de un objeto o array EX:
let user = {
  name: "Evan",
  age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

//ternary = Forma concisa de escribir una declaracion condicional EX:
const edad = 20;
const esMayorDeEdad = edad >= 18 ? "Sí" : "No";
//Se lee "si la edad es mayor o igual a 18, entonces "Sí" de lo contrario "No"











