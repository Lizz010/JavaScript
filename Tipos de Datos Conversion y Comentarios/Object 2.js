var user = "Lizz"
var MiObjeto = { //Creando el objeto
    // Clave : valor
    nombre: "Lizz",
    edad: 2020,
    importante: true,
    texto: 'Usuario ${user}',
    miFuncion: (a, b) => a + b, //Creando una funcion dentro del objeto
    otroObjeto: { //Creando un objeto dentro de otro objeto	
        nombre: "Lizz",
        sexo: "Femenino"
    }
}
// console.log(MiObjeto.miFuncion(4,8))//Pasando parametros a la funcion mediante console.log
console.log(MiObjeto.otroObjeto) //Accediendo al objeto dentro del otro objeto
console.log(MiObjeto.otroObjeto.nombre) //Accediendo a clave de dicho objecto
/////////////////////////////////////////////////////////////////////////////

var user = "Lizz"
var Persona = { //Creando el objeto
    nombre: "Lizz",
    sexo: "Femenino"
}
var MiObjeto = { //Creando el objeto
    // Clave : valor
    nombre: "Lizz",
    edad: 2020,
    importante: true,
    texto: 'Usuario ${user}',
    miFuncion: (a, b) => a + b, //Creando una funcion dentro del objeto
    otroObjeto: Persona //Llamando el objeto persona
    fecha: new Date()
}
console.log(MiObjeto.otroObjeto.nombre) //Accediendo a clave de dicho objecto
console.log(MiObjeto.fecha.getFullYear()) //Accediendo al año actual
/////////////////////////////////////////////////////////////////////////////

// Otras forma de acceder a los valores de un objeto
var{nombre} = MiObjeto() //Desestructuracion de un objeto
console.log(nombre)

// --------------------------------
var {nombre} = MiObjeto()

var otraFuncion({edad},{otroObjeto}) => { //Creando una funcion donde se llaman valores de objetos
    console.log(otroObjeto.texto) //Imprimiendo valores de objetos 
    console.log(edad) //Imprimiendo valores de objetos
}

otraFuncion(miObjeto,miObjeto) //Llamando la funcion

// --------------------------------
var {nombre} = MiObjeto()

var otraFuncion(edad,{otroObjeto}) => { //Creando una funcion donde se llaman valores de objetos
    console.log(otroObjeto.texto) //Imprimiendo valores de objetos
    console.log(edad) //Imprimiendo valores de objetos
}

otraFuncion(miObjeto.edad,miObjeto) //Accediendo a la clave del objeto atravez de la funcion