import {Principal} from "./Principales";


export class Dueño implements Principal {
    id:number;
    nombre:string;
    habilitado:boolean=true;

    constructor(id:number,nombre:string, habilitado:boolean){
        this.id=id;
        this.nombre=nombre
    }


    toString():string{
        return `${this.nombre} (id:${this.id})`;
    
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
 Modificar(nombre?:string,id?:number,habilitado?:boolean):void{
     if(nombre) this.nombre=nombre; 
     if(id) this.id=id;
     if(habilitado) this.habilitado=habilitado;

     console.log(`Se ha modificado el paciente ${this.nombre}  y su id ${this.id}`);

 }
}












