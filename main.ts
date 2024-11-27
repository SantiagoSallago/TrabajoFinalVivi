
import ReadLineSync from 'readline-sync';

import {veterinaria} from "./Sucursales";
import {idAleatorio, obtenerDueño} from "./funciones";
import { Dueño} from "./Dueños";
import { Mascota } from "./Mascota";
let arrayDueños:Dueño [] = []; // <--- Los id de los dueños, para asignarselos a las mascotas

// let veterinaria1 = new veterinaria("La Matanza","Calle 1",idAleatorio(),true);
// console.log(veterinaria1);
// let veterinaria2 = new veterinaria("La Matanza","Calle 2",idAleatorio(),true);
// console.log(veterinaria2);

// console.log(veterinaria1.Baja());
// console.log(veterinaria2.Alta());
let duenio = new Dueño("Pepe",idAleatorio(),true,false,1);
let duenio2 = new Dueño("Menem",idAleatorio(),true,false,4);


// veterinaria1.Modificar("La Matanza2.0","Calle 3",idAleatorio(),false);


duenio.getVip();
duenio2.getVip();


arrayDueños.push(duenio)
arrayDueños.push(duenio2)
console.log(arrayDueños)



console.log()
// ---- Mascota del primer dueño ---- 
let mascota = new Mascota (idAleatorio(), "JuanCarlo", "Gato", duenio.getIdDueño()); //<--- Joia
console.log(mascota)

// ---- Cambio la mascota de dueño ---- 
mascota.Modificar("",duenio2.getIdDueño());

console.log()
console.log(mascota)

console.log()
obtenerDueño(mascota.idDueño,arrayDueños);

// --- Pido numero para ver si existe, y luego ver si puedo cambiar de dueño o no :D
let num = ReadLineSync.question();