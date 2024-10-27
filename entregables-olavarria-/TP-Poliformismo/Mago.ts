import { Personaje } from "./Personaje";

export class Mago extends Personaje{
    private agilidad:number;

    constructor(nombre:string){ 
        super(nombre,85,45,"habilidades","debilidades",88) 
        this.agilidad=this.agilidad;
    }


    getfortaleza():number{
        return this.agilidad
    }
    public atacar ():void{
        console.log(`${this.nombre}lanza un poderoso hechizo!.`);
        
       }
   
    public defender(): void {
           console.log(`${this.nombre} mediante un hechizo arma un escudo protector.`);
       }
}