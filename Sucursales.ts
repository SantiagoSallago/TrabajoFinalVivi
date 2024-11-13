import {Principal} from "./Principales";

export class veterinaria implements Principal{
    nombre:string;
    direccion:string;
    id:number;
    
    constructor(nombre:string,direccion:string,id:number){
        this.nombre=nombre;
        this.direccion=direccion;
        this.id=id *100;
    }


    
    Alta():String{
        return "Alta";
    }
    Baja():String{
        return "Baja";
    }
    Modificar():String{
        return "Modificar";
    }
}