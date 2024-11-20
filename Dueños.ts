
import {Principal} from "./Principales";


export class Dueño implements Principal {
    nombre:string;
    id:number;
    habilitado:boolean=true;

    constructor(nombre:string,id:number, habilitado:boolean){
        this.nombre=nombre
        this.id=id;
        this.habilitado=habilitado;
    }


    toString():string{
        return `${this.nombre} (id:${this.id})`;
    
    }

    getIdDueño():number{
        return this.id;
    }

Alta():void{
    this.habilitado=true;
    console.log(`Se ha activado ${this.nombre}`);     
}

Baja(habilitado:boolean):boolean{
    this.habilitado=habilitado;
    console.log(`${this.nombre} esta ${this.habilitado?`habilitada`:`deshabilitada`}`);
    return this.habilitado;
}

 Modificar(nombre:string):void{
     if(nombre) this.nombre=nombre; 

     console.log(`Se ha modificado el paciente ${this.nombre}  y su id ${this.id}`);
 }

}












