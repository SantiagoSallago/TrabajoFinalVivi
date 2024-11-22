export class proveedor {
   nombre:string;
   id:number;
   telefono:number;
   habilitado:boolean = true;


   constructor(nombre:string,id:number,telefono:number,habilitado:boolean) {

   this.nombre=nombre;
   this.id=id*100;
   this.telefono=telefono;
   this.habilitado=habilitado;

   }

   Alta():void{
      this.habilitado=true;
      console.log(`Este proveedor ${this.nombre} esta Dado de alta`);     
   }
   Baja():void{
       this.habilitado=false;
       console.log(`Este proveedor ${this.nombre} esta Dado de baja`);
   }
  
   Modificar(nombre?:string):void{
      if(nombre) this.nombre=nombre; 
      console.log(`Se ha modificado el proveedor ${this.nombre}`);
 
  }
}


