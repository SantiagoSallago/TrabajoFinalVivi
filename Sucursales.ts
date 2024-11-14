import {Principal} from "./Principales";

export class veterinaria implements Principal{
    nombre:string;
    direccion:string;
    id:number;
    habilitado:boolean = true;

    constructor(nombre:string,direccion:string,id:number,habilitado:boolean){
        this.nombre=nombre;
        this.direccion=direccion;
        this.habilitado=habilitado;
        this.id=id *100;
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
   
    
    Modificar():String{
        return "Modificar";
    }
}