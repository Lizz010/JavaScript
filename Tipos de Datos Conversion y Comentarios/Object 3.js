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
console.log(tickect.from);
console.log(tickect.to);
console.log(tickect.price);
/*Declara un objeto vacío y guárdalo en la variable person. Usando
la notación de punto, agrega los campos firstName y lastName al
objeto ingresando tus datos como valores. Intenta mostrar los
campos individuales en la consola.*/
var person = {
    firstName: "Lizz",
    lastName: "Pemberthy"
}
console.log(person.firstName);
console.log(person.lastNames);
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
Libros = [{
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