import * as Dueños from "./Dueños";

class Mascota{
    nombre:string;
    especie:string;
    iddueño:Number;

constructor(nombre:string,especie:string,iddueño:number){
    this.nombre=nombre;
    this.especie=(especie=="perro" || especie=="gato") ? especie:"exotica";
    this.iddueño=iddueño;
}


ToString():string{
    
    return `nombre:${this.nombre}, especie:${this.especie},dueñoid:${this.iddueño}`;

}


}

