// TAREA 3
/*Escribe una aplicación de calculadora simple. Solicite al usuario la siguiente entrada, uno por uno: dos números
y un carácter que representa una operación matemática de "+", "-", " *", o "/". Si la entrada del usuario es
válida, calcula el resultado y muéstralo al usuario. Si la entrada del usuario no es válida, muestra un mensaje
que informa al usuario que se ha producido un error. Recuerda que el valor devuelto por la función prompt es
del tipo cadena. Puedes usar el método Number.isNaN para verificar si se obtiene el número correcto después
de la conversión. Por ejemplo, llamar a Number.isNaN(10) devolverá false, mientras que Number.isNaN(NaN)
devolverá true.*/

let firstNum = Number(prompt("Introduce firts name: "));
let secondNum = Number(prompt("Introduce second name: "));
let operand = prompt("Introduce the operand (+, -, * o /)");
let result;

if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
    switch (operand) {
        case "+": result = firstNum + secondNum; break;
        case "-": result = firstNum - secondNum; break;
        case "*": result = firstNum * secondNum; break;
        case "/": result = firstNum / secondNum; break;
        default: result = "Mistake!: unknown operand";
    }
} else {
    result = "Mistake!: At least one of the entered values is not a number";
}
alert(result);