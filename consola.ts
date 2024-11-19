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
        console.log(`${veterinaria1.nombre}, ${veterinaria1.direccion} y su id ${veterinaria1.id} `);
        
        let veterinaria2 = new veterinaria("La Matanza","Calle 2",idAleatorio(),true);
        console.log(`${veterinaria2.nombre}, ${veterinaria2.direccion} y su id ${veterinaria2.id} `);
        
        let veterinaria3 = new veterinaria("La Matanza","Calle 3",idAleatorio(),true);
        console.log(`${veterinaria3.nombre}, ${veterinaria3.direccion} y su id ${veterinaria3.id} `);
        
        console.log(`
        Que desea hacer?
        1. Modificar
        2. Dar de Bajar
        3. Dar de Alta
        4. Salir
            `);
        
        usuario = readlineSync.question('Numero: ');
        if (usuario) {
            switch (usuario) {
                case '1':
                    console.log("Que sucursal desea modificar?");
                    console.log(`
                        1.${veterinaria1.nombre}
                        2.${veterinaria2.nombre}
                        3.${veterinaria3.nombre}
                        4.Salir
                    `);
                    usuario = readlineSync.question('Numero: ');
                    switch (usuario) {
                        case '1':
                            console.log(' Ingrese el nuevo nombre de la sucursal');
                            let nombre = readlineSync.question('Nuevo nombre: ');
                            console.log(' Ingrese la nueva direccion de la sucursal');
                            let direccion = readlineSync.question('Nueva direccion: ');
                            veterinaria1.Modificar(nombre,direccion,idAleatorio(),true);
                            console.log(veterinaria1);
                            
                            break;
                        case '2':
                            console.log(' Ingrese el nuevo nombre de la sucursal');
                            let nombre2 = readlineSync.question('Nuevo nombre: ');
                            console.log(' Ingrese la nueva direccion de la sucursal');
                            let direccion2 = readlineSync.question('Nueva direccion: ');
                            veterinaria2.Modificar(nombre2,direccion2,idAleatorio(),true);
                            console.log(veterinaria2);
                            
                            break;
                        case '3':
                            console.log(' Ingrese el nuevo nombre de la sucursal');
                            let nombre3 = readlineSync.question('Nuevo nombre: ');
                            console.log(' Ingrese la nueva direccion de la sucursal');
                            let direccion3 = readlineSync.question('Nueva direccion: ');
                            veterinaria3.Modificar(nombre3,direccion3,idAleatorio(),true);
                            console.log(veterinaria3);
                            
                            break;
                        case '4':
                            console.log("Saliendo...");
                            break;
                    }
                    break;
                case '2':
                    console.log(`
                        Que sucursal desea dar de Baja?
                        1.${veterinaria1.nombre}
                        2.${veterinaria2.nombre}
                        3.${veterinaria3.nombre}
                        4.Salir
                        `);
                        usuario = readlineSync.question('Numero: ');
                        switch (usuario) {
                            case '1':
                                
                                veterinaria1.Baja();
                                break;
                            case '2':
                                veterinaria2.Baja();

                                break;
                            case '3':
                                veterinaria3.Baja();
                                break;
                            case '4':
                                console.log("Saliendo...");
                                break;
                        }
                        break;
                case '3':
                    console.log(`
                    Que sucursal desea dar de Alta?
                    1.${veterinaria1.nombre}
                    2.${veterinaria2.nombre}
                    3.${veterinaria3.nombre}
                    4.Salir
                        `);
                        usuario = readlineSync.question('Numero: ');
                        switch (usuario) {
                            case '1':
                                veterinaria1.Alta();
                                break;
                            case '2':
                                veterinaria2.Alta();
                                break;
                            case '3':
                                veterinaria3.Alta();
                                break;
                            case '4':
                                console.log("Saliendo...");
                                break;
                        }
                    break;
                case '4':
                    console.log("Saliendo");
                    break;
            }
        }
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
