import {Principal} from "./Principales";

export class veterinaria implements Principal{
    nombre:string;
    direccion: string;
    id:number;
    habilitado:boolean = true;

    constructor(nombre:string, direccion:string,id:number,habilitado:boolean){
        this.nombre=nombre;
        this.direccion=direccion;
        this.habilitado=habilitado;
        this.id=id *100;
    }

    Alta():void{
       this.habilitado=true;
       console.log(`Se ha activado ${this.nombre}`);     
    }
    Baja():void{
        this.habilitado=false;
        console.log(`Se ha desactivado ${this.nombre}`);
    }
    Modificar(nombre:string, direccion?:string):void{
        this.nombre=nombre;
        if (direccion)
            this.direccion= direccion;
        console.log(`Se ha modificado la sucursal ${this.nombre} con direccion ${this.direccion}`);

    }
}