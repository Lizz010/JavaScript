// FOR IN
/*También existe una versión del bucle for que nos permite recorrer campos de objetos. 
La sintaxis es for ... in. Itera a través de todos los campos del objeto indicado, colocando
los nombres de estos campos (o claves) en la variable. En el ejemplo, usamos un objeto que 
contiene datos sobre un usuario:*/

let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

/*En cada iteración del bucle, los nombres de los campos sucesivos del objeto de usuario se asignan a la
variable key, es decir: nombre, apellido, edad, correo electrónico.
Luego los escribimos en la consola. Pero, ¿y si queremos recuperar los valores almacenados en los campos
con estos nombres? Para obtener acceso al campo especificado, usamos la notación de puntos
(la parte del curso dedicada a los tipos de datos), es decir, después del nombre del objeto, escribimos
un punto y el nombre del campo (key). La clave dada en esta notación siempre se trata como un literal.
En el bucle for... in, este enfoque no funcionará porque el nombre del campo (key) se coloca en una variable.
Afortunadamente, tenemos una solución alternativa, la notación entre paréntesis.
Te permite referirte al campo del objeto seleccionado usando corchetes (como en los arreglos).
En el corchete detrás del nombre del objeto, colocamos el nombre del campo, que puede ser un literal o
una variable que contenga ese nombre.*/

console.log(user.name); // -> Calvin
console.log(user[name]); // -> Calvin

/*Usando la notación de corchetes, mejoramos nuestro ejemplo al mostrar no solo las claves,
sino también sus valores asignados.*/

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};
