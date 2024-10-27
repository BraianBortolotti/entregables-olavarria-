import { Personaje } from "./Personaje";

export class Enano extends Personaje{
    private energia:number;
    

    constructor(nombre:string){
        super(nombre,80,55,"habilidades","debilidades",75)
        this.energia=this.energia;
    }


    getfortaleza():number{
        return this.energia
    }

    public atacar ():void{
        console.log(`${this.nombre}lanza un golpe con su espada.`);
        
       }
   
       public defender(): void {
           console.log(`${this.nombre}se proteje a traves de su escudo de madera.`);
       }
    
    
}