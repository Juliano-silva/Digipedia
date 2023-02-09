const fetchPokemon = () => {

    const getPokemonUrl = id => `https://digimon-api.com/api/v1/digimon/${id}`
    const pokemonPromises = []
    for (let i=1;i<=1422 ;i++){
    pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    console.log(pokemonPromises)
    Promise.all(pokemonPromises)
    .then(pokemons => {
    const lisPokemons = pokemons.reduce((accumulator,pokemon) => {
        accumulator +=
        `
        <div id="CardDigimon">
          <img id="DigiImg" src="https://digimon-api.com/images/digimon/w/${pokemon.name.replace(/ /g, '_')}.png" />
        <li id="Digiid">Nº${pokemon.id}</id>
        <li id="DigimonName">${pokemon.name}</li>
        <li id="DigimonX">Anti Corpo X:${pokemon.xAntibody}</li>
        <li id="DigimonData">Data do Digimon: ${pokemon.releaseDate}</li>
        </div>
        `
        return accumulator
    },'')
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = lisPokemons
    })
    }
    fetchPokemon()

