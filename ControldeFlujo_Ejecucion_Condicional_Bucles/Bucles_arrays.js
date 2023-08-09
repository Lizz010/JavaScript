// BUCLES AND ARRAYS

// Intentemos jugar de nuevo con los arreglos. Esta vez el programa
// será un poco más complicado. Queremos que el usuario ingrese
// nombres durante la ejecución del programa (usaremos el cuadro de
// diálogo prompt), que se colocarán en el arreglo uno por uno.
// La introducción de nombres finalizará cuando se pulse el botón
// Cancelar. Luego, escribiremos todo el contenido del arreglo
// (es decir, todos los nombres ingresados) en la consola

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Ingresa otro nombre o presiona cancelar.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// El arreglo names está inicialmente vacío. En cada iteración del
// bucle while llamamos al cuadro de diálogo prompt. Si el usuario
// ingresa un nuevo nombre y presiona el botón OK, este nombre se
// ingresará en la variable local name. Si el usuario hace clic en
// Cancelar, la variable contendrá un null. Entonces verificamos en
// la instrucción condicional si el valor es diferente de null. Si es
// así, el valor de la variable name se adjunta al final del arreglo
// names utilizando el método push (si no lo recuerdas, vuelve al
// capítulo donde hablamos sobre arreglos). Si el valor es null, el
// valor de la variable isOver se cambia para finalizar el bucle while.

// Después de dejar el bucle while, pasamos por el arreglo
// (usando el bucle for y la propiedad length) y mostramos todos los
// nombres dentro del arreglo. De esta manera, hemos hecho algo
// absolutamente nuevo. Utilizando arreglos, bucles e interacción con
// el usuario (cuadro de diálogo prompt) hemos creado y llenado una
// estructura de datos dinámica. Toma en cuenta que mientras escribes
// este programa, no está claro cuántos elementos habrá en el arreglo,
// o incluso qué elementos habrá.
