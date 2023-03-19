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
console.log(MiObjeto.fecha.getFullYear()) //Axcediendo al año actual