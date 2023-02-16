const pokemonResult = document.getElementById('pokemonResult');
let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
let escribirHtml;

const lanzarPokemon = async (url) => {
  try {
    const resp = await fetch(url);
    const results = await resp.json();
    console.log(results);
    pintarPokemon(results.results)
  } catch (error) {
    console.log(error)
  }
};

lanzarPokemon(urlPokemon)


const pintarPokemon = async (data) => {
  try {
    pokemonResult.innerHTML = '';
    for (const index of data) {
      const response = await fetch(index.url)
      const resul = await response.json();
      console.log(resul);

      escribirHtml = `<div class="caja">
      <p><img class = img src = ${resul.sprites.front_shiny/* other.dream_world.front_default */} alt = ${resul.name}/></p>
      <div class = id><p>Nº.${resul.id}</p></div>
      <div class = name><p>${resul.name[0].toUpperCase() + resul.name.substring(1)}</p></div>
      
      </div>`
      pokemonResult.innerHTML += escribirHtml;
    }


  } catch (error) {
    console.log(error);
  }




  /* const num = 19
   for(let i = 1; i<= num; i++){ 
 
 /pokemonResult.innerHTML +=
     `<div class="caja"><p>${pokemon.results[i].name}</p></div>` 
   
 
 pokemonResult.innerHTML += 
   `<div class= "img"><img src="${pokemon.results[i].sprites.front_shiny}" alt="${results.name}">
   </img>
   </div>`
 
 /pokemonResult.innerHTML +=
     `<div class= "caja2"><p>${pokemon[i].id}</p></div>`
 console.log(pokemon.results)
   } */

}




