//CYCLE SWITCH
//Declarando var "Mes"
var Mes = 4;
switch (Mes) { //Asignando a switch var "Mes" segun sea su valor asi se ejecutara el caso 
    case 1: //Caso 1
        console.log('January'); //Imprimiendo caso 1
        break; //Se rompe el caso si se cumple la condicion
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('Mes no encontrado');
        break;
}
//----------------------------------------------------
//Declarando var "fruta"
var fruta = "Mango";
switch (fruta) { //Asignando var "fruta" a switch
    case 'Manzana'://Segun sea el valor se cumple la instancia
        console.log('El kg de manzanas cuesta $1.00');
        break;
    case 'Naranja':
        console.log('El kg de naranjas cuesta $3.00');
        break;
    case 'Fresa':
        console.log('El kg de fresas cuesta $2.00');
        break;
    case 'Mango':
        console.log('El kg de mangos cuesta $5.00');
        break;
    default: console.log('Lo sentimos, por el momento no disponemos de: ' + fruta + '.');
        break;
}