export class proveedores {
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
      console.log(`Se ha modificado el proveedor ${this.nombre}  y su id ${this.id}`);
 
  }




  
}


