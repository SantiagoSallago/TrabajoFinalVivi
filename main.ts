import {veterinaria} from "./Sucursales";
import {idAleatorio} from "./funciones";
const id = idAleatorio();


let veterinaria1 = new veterinaria("La Matanza","Calle 1",id);
console.log(veterinaria1);
