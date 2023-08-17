// BUCLES - CYCLES

// Tarea 4

// Escribe un programa utilizando un bucle que le pida al usuario el nombre de una
// película(primer cuadro de dialogo) y su calificación de www.imdb.com(segundo cuadro de dialogo).
// El programa te permitirá ingresar tantas películas como desees en el arreglo de películas.Cada elemento
// del arreglo será un objeto, que constará de dos campos: título e imdb.La entrada se completa si el usuario
// presiona Cancelar en el cuadro de diálogo.Luego, el programa debe imprimir primero en la consola todas las
// películas que tienen una calificación inferior a 7, luego aquellas cuya calificación sea mayor o igual a 7.
// Escribe el nombre de la película y su calificación uno al lado del otro, por ejemplo:
// Perdido en la Selva(7.7)

let movies = [];

while (true) {
    let title = prompt("NAME MOVIE: ");
    let score = prompt("IMDB MOVIE: ");
    if (title && score) {
        movies.push({
            title: title,
            score: score
        });
    } else {
        break;
    }
}

console.log("MOVIES RATED LESS THAN 7");
for (mov of movies) {
    if (mov.score < 7) {
        console.log(`${mov.title} / ${mov.score}`);
    }
}

console.log("MOVIES RATED GREATER THAN OR EQUAL THAN 7");
for (mov of movies) {
    if (mov.score >= 7) {
        console.log(`${mov.title} / ${mov.score}`);
    }
}


