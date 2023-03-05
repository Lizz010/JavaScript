// Tareas
// Datos Primitivos

//Punto 1
/*Escribe un fragmento de código que creará variables y las
inicializará con valores Boolean, Number, BigInt, String y
tipos undefined utilizando (siempre que sea posible) literales
y funciones constructoras.  */
let Bool = true;
let Bool1 = Boolean(true);

let Num = 10;
let Num1 = Number(100);

let Bgn = 10 n;
let Bgn1 = (100);

let Str = "Hello Dev";
let Str1 = String("Hello");

let Und = undefined;

// Punto 2
/*Imprime todos los valores y todos los tipos de esos valores
usando console.log. Intenta usar la interpolación de cadenas
para mostrar el valor y el tipo al mismo tiempo con una sola
llamada a console.log, por ejemplo, en el siguiente
formato: 1000 [número].  */
console.log(`${typeof Bool} : ${Bool}`);
console.log(`${typeof Bool1} : ${Bool1}`);
console.log(`${typeof Num} : ${Num}`);
console.log(`${typeof Num1} : ${Num1}`);
console.log(`${typeof Bgn} : ${Bgn}`);
console.log(`${typeof Bgn1} : ${Bgn1}`);
console.log(`${typeof Str} : ${Str}`);
console.log(`${typeof Str1} : ${Str1}`);
console.log(`${typeof Und} : ${Und}`); 

// Punto 3
/*Realiza una cadena de conversiones: crea un Boolean a partir
de un BigInt creado a partir de un Number que se creó a partir
de un String. Comienza con el valor "1234". ¿Es posible?  */
let Cadena = "1234";
let Numero = Number(Cadena); 
let Bigint = BigInt(Numero);
let Booleano = Boolean(Bigint);
console.log(`${typeof Booleano} : ${Booleano}`);
// Or
let Booleano = Boolean(BigInt(Number("1234")));
console.log(`${typeof Booleano} : ${Booleano}`);

// Punto 4
/*Intenta agregar dos valores del mismo tipo y verifica el tipo de
resultado. Pruébalo para todos los tipos de datos primitivos.  */
let Num = 10 + 10;
let Cadena = "Ho" + "la";
let Bigint = 123n + 123n;
let Booleano = true + false;
let Und = undefined + undefined;

console.log(`${typeof Num} : ${Num}`);
console.log(`${typeof Cadena} : ${Cadena}`);
console.log(`${typeof Bigint} : ${Bigint}`);
console.log(`${typeof Booleano} : ${Booleano}`);
console.log(`${typeof Und} : ${Und}`);

// Punto 5
/*Intenta sumar dos valores de diferentes tipos y verifica los
resultados.  */
let bool = true + 100; 
// let bool2 = true + 100n; // -> error!
let bool3 = true + "100"; 
// let num = 100 + 200n; // -> error!
let num2 = 100 + true;
let num3 = 100 + "200";
// let bigin = 100n + 200;  // -> error!
// let bigin1 = 100n + true  // -> error!
let bigin2 = 100n + "200"; 
let str = "100" + 200;
let str1 = "100" + 200n;
let str2 = "100" + true;
let str3 = "abc" + 200;
let str4 = "abc" + 200n;
let str5= "abc" + true;

console.log(`[${typeof bool}] ${bool} `);    // -> 101 [number]
// console.log(`${bool2} [${typeof bool2}]`);
console.log(`[${typeof bool3}] ${bool3}`);    // -> true100 [string]
// console.log(`${num} [${typeof num}]`);
console.log(`[${typeof num2}] ${num2}`);    // -> 101 [number]
console.log(`[${typeof num3}] ${num3}`);    // -> 100200 [string]
// console.log(`${bigin} [${typeof bigin}]`);
// console.log(`${bigin1} [${typeof bigin1}]`);
console.log(`[${typeof bigin2}] ${bigin2}`);  // -> 100200 [string]
console.log(`[${typeof str}] ${str}`);    // -> 100200 [string]
console.log(`[${typeof str1}] ${str1}`);    // -> 100200 [string]
console.log(`[${typeof str2}] ${str2}`);    // -> 100true [string]
console.log(`[${typeof str3}] ${str3}`);    // -> abc200 [string]
console.log(`[${typeof str4}] ${str4}`);    // -> abc200 [string]
console.log(`[${typeof str5}] ${str5}`);    // -> abctrue [string]
// Or
let Num = 10;
let Cadena = "Liz";
let res = Num + Cadena;
console.log(res); 

// Punto 6
/*Intenta modificar la línea const str1 = 42 + "1"; para obtener
el resultado 43 (sin eliminar las comillas alrededor del 1) */
const str1 = 44 - "1";
const res = Number(str1);
console.log(res);
// Or
const str1 = 42 + +"1";
console.log(str1);