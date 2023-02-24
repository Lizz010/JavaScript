/*Tarea 1
Juguemos a la floristería. Declara seis variables,
recordando nombrarlas según su propósito:
el precio de una sola rosa (8) y el número de rosas que tienes(70)
el precio de un solo lirio (10) y el número de lirios que tienes(50)
el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes(120)
Ahora declara tres variables, una para cada una de las rosas, lirios y
tulipanes que tienes, en las que colocas su precio total. Inserta los
valores correspondientes en las variables utilizando las variables declaradas
en el paso anterior. Finalmente, declara una variable en la que almacenes el
precio de todas tus flores (nuevamente, usa las variables anteriores para la
inicialización).
Muestra toda la información del inventario en la consola de la siguiente forma:*/

/*Inicializando variables con su valor*/
let valrosa = 8;
let vallirio = 10;
let valtulipan = 2;

/*Asignando el num total de cada flor*/
let numrosas = 70;
let numlirios = 50;
let numtulipanes = 120;

/*Operaciones para hallar valor total de cada tipo de flor*/
let totrosas = valrosa * numrosas;
let totlirios = vallirio * numlirios;
let tottulipanes = valtulipan * numtulipanes;

/*Variable para hallar valor total de todas las flores*/
let totflores = totrosas + totlirios + tottulipanes;

/*Imprimiendo informacion*/
console.log("Rosa: Precio Unitario:", valrosa, ", Cantidad:", numrosas, ", Valor:", totrosas);
console.log("Lirio: Precio Unitario:", vallirio, ", Cantidad:", numlirios, ", Valor:", totlirios);
console.log("Tulipan: Precio Unitario:", valtulipan, ", Cantidad:", numtulipanes, ", Valor:", tottulipanes);
console.log("Total: ", totflores);
