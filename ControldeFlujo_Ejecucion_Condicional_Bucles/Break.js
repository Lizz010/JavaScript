// PALABRA CLAVE BREAK 
/*También necesitamos decir algunas palabras más sobre la palabra clave break. En
el ejemplo, la palabra clave break está presente en todos los casos excepto en el
caso default. A diferencia de las sentencias if, las sentencias switch no ejecutan
solo una rama, sino que ejecutan el código completo desde el primer caso que
coincide hasta el final de la sentencia switch. Este comportamiento se llama
pasar a través de y tiene algunos usos, pero la mayoría de las veces queremos
ejecutar solo una rama, y por eso está presente la palabra clave break.
Cuando un intérprete de JavaScript llega a un break, saltará fuera de la
sentencia switch actual.*/

// Para entender esto mejor, observa este ejemplo ligeramente modificado de un
// switch:

var gate = prompt("Elige una puerta: a, b, o c");
var win = false;

switch (gate) {
    case "a":
        alert("Puerta A: Vacía");
    case "b":
        alert("Puerta B: Premio Mayor");
        win = true;
    case "c":
        alert("Puerta C: Vacía");
    default:
        alert("No existe la puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}

// La única diferencia es que ahora no hay palabras clave break. Ejecuta este código
// y verifica qué sucede cuando se da la respuesta "a" al cuadro de diálogo. Ahora
// se muestran todas las alertas, incluso la predeterminada.
// El break puede ser útil cuando más de un caso debe terminar exactamente con el
// mismo comportamiento.

var gate = prompt("Elige una puerta: a, b, o c");
var win = false;

switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Puerta A: Vacía");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Puerta B: Premio Mayor");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Puerta C: Vacía");
        break;
    default:
        alert("No existe la puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}

// El código visible en el ejemplo se comportará igual cuando se proporcione "a", "A",
// 1 o "1" como respuesta al cuadro de dialogo.

// La última parte importante es que si se necesita un código más complejo dentro de
// un caso determinado, debemos colocar ese código en bloques de código separados
// rodeándolo adicionalmente con llaves. Esto aumentará la legibilidad del código
// y permitirá la declaración de variables solo en el alcance del caso dado.

var gate = prompt("Elige una puerta: a, b, o c");
var win = false;

switch (gate) {
    case "a": {
        let message = "Puerta A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Puerta B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Puerta C";
        console.log(message);
        break;
    }
    default:
        alert("No existe la puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}

// En el ejemplo, se observaría un error de redeclaración en cada uno de los casos
// y no se estaría encapsulado en el propio alcance de cada caso.

