
import {Principal} from "./Principales";


export class Dueño implements Principal {
    nombre: string;
    id:number;
    habilitado:boolean=true;
    esVip:boolean;
    cantidadVisitas:number;

    constructor(nombre:string,id:number, habilitado:boolean,esVip:boolean,cantidadVisitas:number=0){
        this.nombre=nombre
        this.id=id;
        this.habilitado=habilitado;
        this.esVip=esVip;
        this.cantidadVisitas=cantidadVisitas;
    }


    toString():string{
        return `${this.nombre} (id:${this.id})`;
    
    }

    getIdDueño():number{
        return this.id;
    }

    ModificarVisitas(cantidadVisitas:number):void{
        if(this.cantidadVisitas) this.cantidadVisitas=cantidadVisitas; 
   
        console.log(`Se ha modificado el paciente ${this.nombre}  y su cantidad de visitas ${this.cantidadVisitas}`);
    }
    getVip():boolean{
        
         if(this.cantidadVisitas >= 5){
            this.esVip=true;
            return this.esVip;
        }
        else{
            this.esVip=false;
            return this.esVip;
        }
    }
Alta():void{
    this.habilitado = true;
    console.log(`Se ha activado ${this.nombre}`);     
}

Baja():void{
    this.habilitado = false;
    console.log(`Se ha desactivado ${this.nombre}`);
}

 Modificar(nombre:string):void{
     if(nombre) this.nombre=nombre; 

     console.log(`Se ha modificado el paciente ${this.nombre}  y su id ${this.id}`);
 }
}












