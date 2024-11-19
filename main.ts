import {veterinaria} from "./Sucursales";
import {idAleatorio} from "./funciones";

let veterinaria1 = new veterinaria("La Matanza","Calle 1",idAleatorio(),true);
console.log(veterinaria1);
let veterinaria2 = new veterinaria("La Matanza","Calle 2",idAleatorio(),true);
console.log(veterinaria2);

console.log(veterinaria1.Baja(false));
console.log(veterinaria2.Alta());


veterinaria1.Modificar("La Matanza2.0","Calle 3",idAleatorio(),false);