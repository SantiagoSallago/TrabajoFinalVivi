import { veterinaria} from "./Sucursales";
import { idAleatorio, obtenerDueño} from "./funciones";
import { Dueño}  from "./Dueños";
import { Mascota } from "./Mascota";
import { proveedor } from "./proveedores";
import readlineSync from 'readline-sync';


let accion!: string ;
let respuesta:string = '0';

let veterinaria1 = new veterinaria("La Matanza","Calle 1",idAleatorio(),true);
let veterinaria2 = new veterinaria("La Matanza uwu","Calle 2",idAleatorio(),true);
let veterinarias: veterinaria[] = [veterinaria1, veterinaria2];

let dueño1 = new Dueño("Pepe",idAleatorio(),true);
let dueño2 = new Dueño("Menem",idAleatorio(),true);
let clientes: Dueño[] = [dueño1, dueño2];

let Mascota1 = new Mascota(idAleatorio(), "JuanCarlo", "Gato", dueño1.getIdDueño());
let Mascota2 = new Mascota(idAleatorio(), "Jose", "Ave Fenix", dueño2.getIdDueño());
let pacientes: Mascota[] = [Mascota1, Mascota2];

let proveedor1 = new proveedor("Pepe",idAleatorio(),123456789,true);
let proveedor2 = new proveedor("Nemo",idAleatorio(),24124124,true); 
let proveedores: proveedor[] = [proveedor1, proveedor2];



while (respuesta !== '5'){
    // LE PREGUNTAMOS AL USUARIO QUE DESEA HACER
    console.log(`
        A que desea acceder
        1. Sucursales
        2. Clientes
        3. Pacientes
        4. Proveedores
        5. Salir
    `);
    respuesta = readlineSync.question('Elija una opcion: ');
    
    if (respuesta !== '5') {
        console.log(`
            Que desea hacer?
            1. Modificar
            2. Dar de Bajar 
            3. Dar de Alta
            4. Mostrar listado
        `);
        accion = readlineSync.question('Elija una opcion: ');    
    }
    

        switch (respuesta) {
            case '1': //-------- Manejo del tipo de veterinarias
                      menuABM(veterinarias, accion)  
                      break;
            case '2': //-------- Manejo del tipo de clientes, en el menu generico
                      menuABM(clientes, accion)
                      break;
            case '3': //-------- Manejo del tipo de pacientes, en el menu generico
                      menuABM(pacientes, accion)
                      break;
            case '4': //-------- Manejo del tipo de proveedores, en el menu generico
                      menuABM(proveedores, accion)
                      break;
            default : console.log('Gracias papu por usar el sistema')
                      break;

    }
  
}

   
function menuABM(array: veterinaria[] | Dueño[] | Mascota[] | proveedor[] , accion: string){
    let eleccion: number;
    let type = array[0].constructor.name;
    switch(accion){
        //-------------------------- Editar
        case '1':   //--------------- Veterinaria
                    if (type == "veterinaria"){ //<--------- nombre de la clase
                        console.log("Elija el id de la veterinaria a modificar")
                        veterinarias.forEach(e => { //<--------- Array a recorrer
                            console.log('ID: ' +e.id + ', veterinaria:' + e.nombre)
                        })
                        eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                    
                        let nombre = readlineSync.question('Ingrese el nuevo nombre: ');
                        let direccion = readlineSync.question('Ingrese la nueva direccion: ');
                    
                        veterinarias.map(e =>{ //<--------- Recorro array
                            if (e.id === eleccion){ //<--------- Si lo encuentro
                                e.Modificar(nombre, direccion);  //<--------- Modifico
                            }
                        })
                    }
                    //--------------- Dueños
                    if (type == "Dueño"){
                        console.log("Elija el id del Dueño a modificar")
                        clientes.forEach(e => {
                            console.log('ID: ' +e.id + ', Sucursal:' + e.nombre)
                        })
                        eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                    
                        let nombre = readlineSync.question('Ingrese el nuevo nombre: ');
                    
                        clientes.map(e =>{
                            if (e.id === eleccion){
                                e.Modificar(nombre);
                            }
                        })
                    }  
                    
                    //--------------- Mascotas
                    if (type == "Mascota"){
                        console.log("Elija el id del la Mascota a modificar")
                        pacientes.forEach(e => {
                            console.log('ID: ' +e.id + ', Mascota:' + e.nombre)
                        })
                        eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                    
                        let nombre = readlineSync.question('Ingrese el nuevo nombre: ');
                        
                        pacientes.map(e =>{
                            if (e.id === eleccion){
                                e.Modificar(nombre);
                            }
                        })
                    }  
                    
                    //--------------- Proveedores
                    if (type == "Proveedor"){
                        console.log("Elija el id del Proveedor a modificar")
                        proveedores.forEach(e => {
                            console.log('ID: ' +e.id + ', Proveedor:' + e.nombre)
                        })
                        eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                    
                        let nombre = readlineSync.question('Ingrese el nuevo nombre: ');
                    
                        proveedores.map(e =>{
                            if (e.id === eleccion){
                                e.Modificar(nombre);
                            }
                        })
                    }
   
                break;
        //------------------- Bajas
        case '2': 
                  console.log("Elija el id del/las "+ type +" que desea dar de baja")
                  array.forEach(e => {
                      console.log('ID: ' +e.id + ',' + type + ':' + e.nombre)
                  })
                  eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                  
                  array.map(e => {
                    // si el elemento coincide con el "ID" buscado
                    if (e.id == eleccion){
                        e.Baja();
                    }
                  })
                break;    
        //------------------- Altas
        case '3': 
                  console.log("Elija el id del/las "+ type +" que desea dar de baja")
                  array.forEach(e => {
                      console.log('ID: ' +e.id + ',' + type + ':' + e.nombre)
                  })
                  eleccion = parseInt(readlineSync.question('Elija una opcion: '));
                  
                  array.map(e => {
                    // si el elemento coincide con el "ID" buscado
                    if (e.id == eleccion){
                        e.Alta();
                    }
                  })
                break;  

       case '4':  
                array.forEach(e => {
                    console.log('ID: ' +e.id + ',' + type + ':' + e.nombre)  
                })
                break;

    }
    
}

    
