export class Mascota{
    id: number;
    nombre:string;
    especie:string;
    idDueño:Number;
    habilitado:boolean;

constructor(id:number, nombre:string,especie:string,idDueño:number){
    this.id=id;
    this.nombre=nombre;
    // Por defecto se asume que el animal es exotico, obviando los "perro" y "gato"
    this.especie= (especie=="perro" || especie=="gato") ? especie:"exotica";
    this.idDueño=idDueño;
    this.habilitado= true; // Por defecto se asume que el animal esta "habilitado"
}

Alta():void{
    this.habilitado = true; 
}

Baja(){
     this.habilitado = false;
}

Modificar(nombre:string, idDueño:number){
     if(nombre) // si existe el parametro nombre se modifica el nombre
        this.nombre=nombre; 
     if(idDueño)  // si existe el parametro nombre se modifica el id del dueño (cambia de dueño)
        this.idDueño = idDueño;
}


}

