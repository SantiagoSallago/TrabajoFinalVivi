export interface Principal{
    nombre:string;
    id:number;
    
    Alta(boolean:boolean):void
    Baja(boolean:boolean):void
    Modificar():String
}