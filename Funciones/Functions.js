// FUNCTIONS -------------------------------------
// Conjunto de sentencias que realizan una tarea 
function saludo() {
    console.log("Hola a todos");
}
var Suma = function(a, b, c) {
    return a + b + c
}
saludo()
console.log(Suma(2, 2, 2));

// ARROW FUNCTIONS --------------------------------
var acceso = true;
// var accesoU = a => a //retorna un valor
// var accesoU = () => false no pasamos parametros a nuestra función y retornamos un valor
// var accesoU = (a,n) => console.log('Usuario ${n} Acceso ${a}') Cuando pasamos mas de un parametro
var accesoU = (a, nombre) => {
    console.log('Usuario ${nombre} en ejecución')
    return a
}
acessoU(acesso, "Lizz") == true 
? console.log("Usuario Permitido")
: console.log("Usuario Denegado")

// NUMERICAL FUNCTIONS
var numero = 50
var res = Number.isInteger(numero)//Metodo para mostrar si el numero es entero
console.log(res)

var numero = 50.345
var res = Number.parseInt(numero)//Metodo para mostrar si el numero es decimal
console.log(res)

var numero = 50.233
var res = Number.parseFloat(numero).toFixed(2)//Aqui aclara que solo muestre 2 decimales
console.log(res)