export abstract class Personaje{
    protected nombre:string;
    protected nivel:number;
    protected puntoDeVida:number;
    protected habilidades:string; 
    protected debilidades:string;
    protected fuerza:number;

    constructor(nombre:string,nivel:number,puntoDeVida:number,habilidades:string,debilidades:string,fuerza:number){
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntoDeVida=puntoDeVida;
        this.habilidades=habilidades;
        this.debilidades=debilidades;
        this.fuerza=fuerza;
    }

    getnombre():string{
        return this.nombre
    }

    getnivel():number{
        return this.nivel
    }

    getpuntoDeVida():number{
        return this.puntoDeVida
    }

   abstract atacar():void;
   
   abstract defender ():void;
}
