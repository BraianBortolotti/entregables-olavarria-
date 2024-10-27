import { Guerrero } from "./Guerrero"
import  {Mago} from "./Mago"
import { Enano} from "./Enano"
import { Personaje } from "./Personaje"

function crearPersonajes(): Personaje[] {
    const personajes: Personaje[] = [];
    console.log("{_-LA BATALLA HA COMENZADO-_}");


// Nombres
const guerreroNombre = 'Guerrero de Acero';
const magoNombre = 'Mago Sabio';
const enanoNombre = 'Enano Fuerte';

personajes.push(new Guerrero(guerreroNombre,2,88,"Rapidez", "Resistencia", 96));  
personajes.push(new Mago(magoNombre)); 
personajes.push(new Enano(enanoNombre));

return personajes; 

} 


function simularAtaques(personaje:Personaje[]):void {
    personaje.forEach(personaje =>{
        personaje.atacar();
    });
    
}

const personajes=crearPersonajes();
simularAtaques(personajes);






