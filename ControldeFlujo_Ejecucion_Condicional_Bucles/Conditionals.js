// CONDITIONALS
// CONDICIONAL IF, IF ELSE
// Declarando variable respuesta e inicializandola con valor true
var respuesta = true
if (respuesta) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}
//-----------------------------------
// Declarando variable edad e inicializandola con valor 40
var edad = 40
if (edad < 18) {
    console.log("Eres niño o adolescente")
} else if (edad >= 18 && <= 40) {
    console.log("Adulto Joven")
} else if (edad > 40 && <= 60) {
    console.log("Adulto")
} else if (edad > 60) {
    console.log("Adulto mayor")
}
// CONDITIONAL SWITCH
// Recibe una expresión y de acuerdo a esta ejecuta un caso o no
// Declarando variable opcion con valor 1
var Opcion = 1
switch (Opcion) {
    case 1:
        console.log("Monday") //En este caso se imprime el caso 1
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
}
//-----------------------------------
// Declarando variable opcion con valor string "Hi"
var Opcion = "Hi"
switch (Opcion) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    case "Hi":
        console.log("Hi World") //En este caso se imprime el caso "Hi"
}
//-----------------------------------
var Opcion = "Hi"
switch (Opcion) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    case "Hi":
        let Hola = "Hi Again" //Declarando variable "Hola" dentro de case "Hi"
        console.log(Hola) //En este caso se imprime "Hi Again"
        break;
}
//-----------------------------------
var Opcion = "Whatever"
switch (Opcion) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    case "Hi":
        let Hola = "Hi Again" 
        console.log(Hola) 
        break;
    default:
        console.log("Break") //En este caso se imprime "Break"
        break;
}