
import {Dueño} from "./Dueños"

export function idAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
}

// -------- Numero de id del dueño de la mascota, array de los posibles dueños
export function obtenerDueño(number: number, array: Dueño[]){
    
    let pepe = array.find(x => x.getIdDueño() == number); // <-- busco el id dentro del array

    //--- Si lo encuentro
    if (pepe)
        console.log('El dueño de la fucking mascota es: ' + pepe.nombre)
    else
        console.log('No se encontro el fucking dueño')
}
