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

//Example:
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

//Example:
console.log(10 == 5); // -> false
console.log(10 == 10); // -> true
console.log(10 == 10n); // -> true
console.log(10 == "10"); // -> true
console.log("10" == "10"); // -> true
console.log("Lizz" == "Bob"); // -> false
console.log(0 == false); // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN); // -> false
    







