// CICLE WHILE
//Se ejecuta siempre y cuando la condicion sea cierta
// Ejecutando ciclo while
//Programa que imprima numeros del 1 al 10
var num = 0; //Declaracion de var "num"
while (num <= 10) { //Mientras num sea menor o igual a 10
	document.write(num + " " + "Hola <br>");//Imprimir num + "Hola" con salto de linea
	num = num + 1;//Incrementando var "num"
}

//Programa ingresa la palabra correcta ----------------------------
var cont = 0;
while (palabra != "Fresa") {
	var palabra = prompt("Adivina mi fruta favorita!!");
	cont++;
} alert("¡Has ingresado la fruta correcta!");

// Ejecutando ciclo while con array ----------------------------
var lista = new Array(10); //Asignando array longitud de 10 a var "lista"
var i = 0; //Inicializando var "i"
while (i < lista.length) { //Mientras i sea menor que lista[]
	lista[i] = '0'; //Se le asigna "0" a cada elemento del array
	i++;//Se incrementa
} console.log(i);//Se imprime

//Numeros del 1 al 10 en orden creciente y decreciente
var num = 1;
while (num < 11) {
	console.log(num + "-" + (11 - num));
	num++;
}
//Enumerando lista
var frase = ""
        var n = 1
        while (n<10) {
            frase += "El valor de n es: " + n + "<br>" 
            n++}
        document.write(frase);
