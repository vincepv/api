import axios from "axios";


const GetPokemon = (PokemonUrl) => {

  const items = [];

  axios.get(PokemonUrl)
    .then(function (response) {
      items.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return items

}

export default GetPokemon;
