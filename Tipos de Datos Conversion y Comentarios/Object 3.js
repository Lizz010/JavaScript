// Tareas
// Objetos
/*Crea un objeto que describa un boleto de tren y guárdalo en la
variable ticket. El objeto debe tener tres campos:
*estación inicial (el nombre clave es 'from', y como valor,
proporciona el nombre de la estación más cercana en tu área)

*estación final (el nombre clave es 'to', y como valor, dar
cualquier otra estación dentro de 100 km)

*el precio del boleto (el nombre clave es 'price', y como valor,
proporciona la cantidad que te gustaría pagar por este boleto)

El objeto debe crearse usando llaves {}, en los que todos los
campos se enumerarán inmediatamente. Luego muestra los valores de
todos los campos del ticket en la consola.*/
let tickect = {
    from: "San Antonio",
    to: "Las Nubes",
    price: 1500
};
console.log(`Tickect from: ${tickect.from}`);
console.log(`Tickect to: ${tickect.to}`);
console.log(`Tickect price: ${tickect.price}`);
/*Declara un objeto vacío y guárdalo en la variable person. Usando
la notación de punto, agrega los campos firstName y lastName al
objeto ingresando tus datos como valores. Intenta mostrar los
campos individuales en la consola.*/
let person = {};
person.name = "Liz";
person.surname = "Pemberthy";
console.log(`${person.name} ${person.surname}`);
//Arrays
/*Estamos creando una pequeña biblioteca de libros sobre
programación en JavaScript. Tenemos tres libros y queremos
preparar una lista de ellos. Almacenaremos tres datos de cada
libro: el título, el autor y el número de páginas:
1.Speaking JavaScript, Axel Rauschmayer, 460.
2.Programming JavaScript Applications, Eric Elliott, 254.
3.Understanding ECMAScript 6, Nicholas C. Zakas, 352.*/
/*Crea un arreglo de tres objetos que representen los libros.
Cada objeto debe tener las siguientes propiedades: título,
autor, páginas.*/
 let Libros = [{
    titulo: "Speaking JavaScript",
    autor: "Axel Rauschmayer",
    paginas: 460
}, {
    titulo: "Programming JavaScript Applications",
    autor: "Eric Elliott",
    paginas: 254
}, {
    titulo: "Understanding ECMAScript 6",
    autor: "Nicholas C. Zakas",
    paginas: 352
}];
/*Hemos agregado un nuevo libro a nuestra colección:
Learning JavaScript Design Patterns, por Addy Osmani,
254 páginas. Usa el método apropiado para adjuntar el libro
al final del arreglo. Muestra la longitud del arreglo y, a su vez,
todos los nombres de los libros en la colección.*/
let newlib = {
    titulo: "Learning JavaScript Design Patterns",
    autor: "Addy Osmani",
    paginas: 254
}
Libros.push(newlib);
console.log(Libros.length);
console.log(Libros[0].titulo);
console.log(Libros[1].titulo);
console.log(Libros[2].titulo);
console.log(Libros[3].titulo);
/*Utiliza el comando slice para copiar los dos últimos libros al
nuevo arreglo.*/
let newbks = Libros.slice(-2);
/*El primer libro de la colección se pierde en circunstancias inexplicables.
Ya has aceptado la pérdida, así que ahora elimínalo del arreglo.
¿Cuál método usarás para este propósito? Muestra la longitud del arreglo
y todos los nombres de los libros de la colección a su vez.*/
Libros.shift();
console.log(Libros.length);
console.log(Libros[0].titulo);
console.log(Libros[1].titulo);
console.log(Libros[2].titulo);
/*Muestra la suma de las páginas de todos los libros de la colección.*/
let sum = (Libros[0].paginas + Libros[1].paginas + Libros[2].paginas);
console.log(`Paginas: ${sum}`);