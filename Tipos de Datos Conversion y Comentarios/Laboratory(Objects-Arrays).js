/*Escenario
¿Recuerdas la lista de contactos que se creó mientras
realizabas la tarea del laboratorio anterior? Tienes que
admitir que a primera vista parecía bastante extraño. Tuvimos
que usar nueve variables para almacenar información sobre
solo tres usuarios. Lo que es peor, agregar cada nuevo usuario
requeriría la creación de tres variables más. Esto no es
conveniente ni práctico. Afortunadamente, desde entonces
hemos aprendido algo sobre arreglos y objetos, lo que nos
permitirá guardar nuestra lista de una manera un poco más
conveniente. Con los mismos datos que en el laboratorio
anterior, crea la lista de contactos como un arreglo, cada
elemento del cual será un objeto que describa a un solo usuario.
Entonces, deberíamos tener un arreglo de tres elementos, y
cada objeto colocado en el contendrá tres piezas de
información (nombre, teléfono y correo electrónico).*/
let contacts = [
    {
        name:"Maxwell Wright",
        phone:"0191 719 6495",
        email:"Curabitur.egestas.nunc@nonummyac.co.uk"
    },{
        name:"Raja Villarreal",
        phone:"0866 398 2895",
        email:"posuere.vulputate@sed.com"
    },{
        name:"Helen Richards",
        phone:"0800 1111",
        email:"libero@convallis.edu"
    }];
    
    let newcont = {
        name:"Maisie Haley",
        phone:"0913 531 3030",
        email:"risus.Quisque@urna.ca"
    }
    contacts.push(newcont);
    console.log(contacts.length);
    console.log(contacts[0].name);
    console.log(contacts[4].name);
    
    