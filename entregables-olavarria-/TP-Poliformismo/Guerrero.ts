import { Personaje } from "./Personaje";

export class Guerrero extends Personaje{
    private fortaleza:string;

    constructor(nombre:string,nivel:number,puntosDeVida:number,habilidades:string,debilidades:string,fuerza:number){
        super(nombre,nivel,puntosDeVida,habilidades,debilidades,fuerza)
        this.fortaleza=this.fortaleza;
    }


    getfortaleza():string{
        return this.fortaleza
    }

    public atacar ():void{
     console.log(`${this.nombre}lanza un poderoso golpe con su hacha.`);
     
    }

    public defender(): void {
        console.log(`${this.nombre}usa su escudo de madera y acero para defendere.`);
    }
}