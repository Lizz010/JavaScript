//CYCLE DO WHILE
//Imprimiendo numeros -----------------------------------
let result = ""; //Declarando variable result
let x = 0;  //Declarando variable "x" e inicializando en "0"
do {    //Apertura de ciclo do while
    x = x + 1;  //Sentencia a cumplir
    result = result + x;    //Sentencia a cumplir
} while (x < 5);    //Mientras x sea menor que 5, se repite el ciclo
console.log(result);    //Imprimiendo resultado
//--------------------------------------------------------
i = 0;  //Inicializando variable "i"
do {    //Apertura del ciclo do while
    i += 1; //Acumulador i
    document.write(i + "<br>"); //Imprimiendo i 
} while (i < 10);   //Mientras i sea menor que 10, se repite el ciclo

//Imprimiendo numeros con array----------------------------
var numeros = [];   //array numeros
var i = 10; //Inicializando variable i en 10
do {    //Apertura del ciclo do while
    numeros.push(i);    //Agregando elementos al array con metodo "push"
    i++;    //Contador
} while (i <= 10);  //Mientras que i sea menor o igual a 10
console.log(numeros);   //Imprimiendo array "numeros"

//Imprimiendo numeros con array----------------------------
var i = 0;  //Inicializando variable i en 0
var num;    //Declarando variable "num"
do {    //Apertura del ciclo do while
    num = parseInt(prompt("Ingrese un numero: "));  //Ingresando numero a variable "num"
    document.write("El numero es: " + num + "<br>");    //Imprimiendo numeros
    i++;    //Contador
} while (num != 0); //Mientras num sea diferente de 0 se repite el ciclo
document.write("<br>La cantidad de numeros es: " + i);  //Se imprime cantidad de numeros

//--------------------------------------------------------
var color   //Declarando var "color"
do {    //Apertura de ciclo do while   
    color = prompt("Dame un color(escribe verde para salir)");//Agregando valores mediante el prompt a var color
} while (color != "verde"); //Mientras color sea diferente de verde, se repite el ciclo