// SWITCH CYCLE
// Choose a gate

let gate = prompt("Elegir la puerta: a, b, o c");
let win = false;

switch (gate) {
    case "a":
        alert("Puerta A: Vacía");
        break;
    case "b":
        alert("Puerta B: Premio Mayor");
        win = true;
        break;
    case "c":
        alert("Puerta C: Vacía");
        break;
    default:
        alert("No existe la Puerta " + String(gate));
}

if (win) {
    alert("¡Ganador!");
}
