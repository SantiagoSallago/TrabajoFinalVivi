import {veterinaria} from "./Sucursales";
import {idAleatorio} from "./funciones";
import readlineSync from 'readline-sync';
console.log(`
        Bienvenido a la consola de la veterinaria
        Escriba el numero al que desea acceder
        1. Sucursales
        2. Clientes
        3. Pacientes
        4. Proveedores
        5. Salir
    `);

let usuario = readlineSync.question('Numero: ');

switch (usuario) {
    case '1':
        let veterinaria1 = new veterinaria("La Matanza","Calle 1",idAleatorio(),true);
        console.log(veterinaria1);
        let veterinaria2 = new veterinaria("La Matanza","Calle 2",idAleatorio(),true);
        console.log(veterinaria2);
        let veterinaria3 = new veterinaria("La Matanza","Calle 3",idAleatorio(),true);
        console.log(veterinaria3);
        break;
    case '2':
        console.log("Clientes");
        break;
    case '3':
        console.log("Pacientes");
        break;
    case '4':
        console.log("Proveedores");
        break;
    case '5':
        console.log("Saliendo");
        break;
    default:
        console.log("Opcion incorrecta");
}
