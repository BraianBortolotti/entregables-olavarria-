"use strict"


let contenedor=document.getElementById("contenedor")

fetch("https://fakestoreapi.com/products")
.then(resp => resp.json())
.then(data =>
    data.forEach(prod =>{
        contenedor.innerHTML += ` <div class="card" >
                                    <h2 class="nombre" >Nombre:${prod.title}
                                    <p class="texto" >Precio:${prod.price}</p>
                                    <p class="texto" >Categoria:${prod.category}</p>     
                                  <div/>
                                  `

})
)
.catch(err => console.log(err))


/* 


let contenedor=document.getElementById("contenedor")

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
.then(resp => resp.json())
.then(data => 
    data.results.forEach(pokemon => {
        contenedor.innerHTML += `
        <div>
            Carretilla
            <h3>
                Nombre:${pokemon.name}
            </h3>
        </div>
    `
    })
)
    .catch(err => console.log(err))
 */