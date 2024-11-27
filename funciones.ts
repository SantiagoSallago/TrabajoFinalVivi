import {Dueño} from "./Dueños"

export function idAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
}

// -------- Numero de id del dueño de la mascota, array de los posibles dueños
export function obtenerDueño(mascotaDueñoId: number, Dueños: Dueño[]): string{
    
    let dueño = Dueños.find(dueño => dueño.getIdDueño() == mascotaDueñoId); // <-- busco el id dentro del array

    //--- Si lo encuentro
    if (dueño)
        return dueño.nombre
    else
        return "No existe"
}
