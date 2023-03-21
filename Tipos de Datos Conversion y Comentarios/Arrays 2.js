// ARRAYS
// Creando un array dentro de otro
var array = ["Udemy", 2020, 10.28, true, ["Otro Array", "Array", 2022]]
// Imprimiendo posicion 1 de posicion 4
console.log(array[4][1])
// -----------------------------------------

// Creando un array insertando una funcion
var permitido = "Usuario permitido"
var miFuncion = acceso => acceso //Creando funcion de acceso
// Insertando funcion en array posicion 5
var array = ["Udemy", 2020, 10.28, true, ["Otro Array", "Array", 2022], miFuncion(permitido)]

console.log(array[5]) //Imprimiendo posicion 5 
// -----------------------------------------

// Creando un array insertando un objeto
var permitido = "Usuario permitido"
var mi Function = acceso => acceso
// Creando objeto
var persona = {
	nombre : "Santiago"
}
// Insertando Objeto en posicion 6
var array = ["Udemy", 2020, 1028, true, ["Otro Array", "Array", 2022], miFuncion(permitido), persona]

console.log(array[6]) //Imprimiendo posicion 6
console.log(array[6].nombre) //Imprimiendo valor del objeto
// -----------------------------------------

// Creando objetos dentro de un array dentro de un objeto
var permitido = "Usuario permitido"
var mi Function = acceso => acceso
// Creando objeto
var persona = {
	nombre : "Santiago"
	miAutomovil : [
		Pintura = {
			marca : "Pintuco",
			precio : 1000,
			color : negro
		},
		Vendedor = {
			nombre : "Santiago",
			edad : 2020
		}
	]
}
// Insertando Objeto en posicion 6
var array = ["Udemy", 2020, 1028, true, ["Otro Array", "Array", 2022], miFuncion(permitido), persona]

console.log(array[6]) //Imprimiendo posicion 6
console.log(array[6].miAutomovil) //Accediendo a objeto "miAutomovil"
// Accediendo a obj "persona" que accede a array "miAutomovil" que accede a
// objeto "Pintura" que accede a valor "color"
console.log(array[6].miAutomovil[0].color)
// -----------------------------------------

var permitido = "Usuario permitido"
var mi Function = acceso => acceso
// Creando objeto
var persona = { 
	nombre : "Santiago"
	miAutomovil : [
		Pintura = {
			marca : "Pintuco",
			precio : 1000,
			color : negro
		},
		Vendedor = {
			nombre : "Santiago",
			edad : 2020,
			ayudante : {
				nombre : "Julio"
			}
		}
	]
}
// Insertando Objeto en posicion 6
var array = ["Udemy", 2020, 1028, true, ["Otro Array", "Array", 2022], miFuncion(permitido), persona]
// Accediendo a obj "persona" que accede a array "miAutomovil" que accede a
// posicion 1 "Vendedor" que accede a obj "ayudante" que accede a valor "nombre"
console.log(array[6].miAutomovil[1].ayudante.nombre)