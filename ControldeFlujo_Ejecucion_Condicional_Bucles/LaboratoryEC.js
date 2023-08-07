/*Escenario
Durante la última modificación del programa con la lista de contactos, permitimos que el usuario agregara un
nuevo contacto con los datos ingresados por el usuario mientras se ejecuta el programa. Vayamos un paso más
allá: intenta modificar el programa para que el usuario pueda elegir lo que quiere hacer con la lista. Las
opciones serán:

Mostrar el primer contacto (primero)
Mostrar el último contacto (último)
Añadir un nuevo contacto (nuevo)

Al agregar un nuevo contacto, verifica si el usuario ha ingresado todos los datos necesarios. Si falta al
menos uno de los tres valores (nombre, teléfono o correo electrónico), no se agrega el contacto.*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let action = prompt("Choose action: Show(firts), Show(ultm), Show(new)");
let last = contacts.length - 1;

switch (action) {
    case "firts":
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case "ultm":
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
        break;
    case "new":
        let name = prompt("Enter the username: ");
        let phone = prompt("Enter the phone: ");
        let email = prompt("Enter the email: ");
        if (name && phone && email) {
            contacts.push({
                name: name,
                phone: phone,
                email: email
            });
        }
        last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
        break;
}