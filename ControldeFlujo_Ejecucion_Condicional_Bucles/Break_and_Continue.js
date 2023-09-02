// INSTRUCCIONS BREAK AND CONTINUE

// La instrucción break se utiliza para terminar la ejecución de un bucle
// o un switch. En cada uno de estos contextos, cada vez que el motor de
// JavaScript encuentra una instrucción break, sale de todo el bucle o el
// switch y salta a la primera instrucción después de ese bucle o switch.

// En el ejemplo, podemos ver un bucle infinito while del que se saldrá
// usando break después de que la variable i sea mayor o igual a 5. Tal
// uso de break es solo de importancia ilustrativa, porque tendría más
// sentido incluir esta condición directamente en la construcción del while.

let i = 0;
// Un bucle infinito
while (true) {
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}

alert(`Se salio del bucle con un break (${i}).`);

// Al igual que break, continue se puede usar en bucles (pero no en un switch).
// Cuando se usa, se aplica al bucle circundante más cercano. La instrucción continue,
// a diferencia de break, no finaliza todo el bucle, sino que inicia la siguiente
// iteración de este bucle. Podemos pensar en ello como saltar directamente al final
// de la iteración actual.

for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// El programa escribe números del 0 al 9 en la consola, pero salta el número 3.
// Esto sucede porque cuando i es igual a 3, se ejecuta la instrucción continue,
// finalizando esta iteración (y omitiendo el console.log) y se comienza la siguiente
// iteración.

// Tanto break como continue no se usan con mucha frecuencia. Definitivamente no
// deberíamos usarlos cuando podemos terminar el bucle con una condición construida
// correctamente. Son útiles en situaciones de emergencia, cuando sucede algo inusual
// en bucles con iteraciones más complejas.