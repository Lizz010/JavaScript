/*Tarea 2
Modifica el código del ejemplo anterior. Supón que los
precios de las flores serán constantes (no cambiarán).
Declara e inicializa las variables restantes de la misma
manera que en el ejemplo anterior. Muestra toda la
información recopilada en la consola. Ahora disminuye el
número de rosas en 20 y el de lirios en 30. Vuelve a
mostrar toda la información recopilada en la consola.*/

/*Inicializando variables con su valor*/
const valrosa = 8;
const vallirio = 10;
const valtulipan = 2;

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

/*Disminuyendo valor de varibles rosas y lirios*/
numrosas = numrosas - 20;
numlirios = numlirios - 30;

/*Operaciones para hallar valor total de cada tipo de flor*/
totrosas = valrosa * numrosas;
totlirios = vallirio * numlirios;
tottulipanes = valtulipan * numtulipanes;

/*Variable para hallar valor total de todas las flores*/
totflores = totrosas + totlirios + tottulipanes;

/*Imprimiendo informacion*/
console.log("Rosa: Precio Unitario:", valrosa, ", Cantidad:", numrosas, ", Valor:", totrosas);
console.log("Lirio: Precio Unitario:", vallirio, ", Cantidad:", numlirios, ", Valor:", totlirios);
console.log("Tulipan: Precio Unitario:", valtulipan, ", Cantidad:", numtulipanes, ", Valor:", tottulipanes);
console.log("Total: ", totflores);