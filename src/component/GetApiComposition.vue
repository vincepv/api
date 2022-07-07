<template>
  <p>Test de récupération de données avec AXIOS</p>
  <p>Nombre total de résultat: {{items.count}}</p>
  <h3>Listes des pokemons</h3>
  <ul>
    <li v-for="item in items.results" :key="item"> 
        {{item.name}} 
    </li>
  </ul>
  <button @click="previous()">Précédent</button>
  <button @click="next()">Suivant</button>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue'

const items = ref([]);
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


const getPokemon = (url) => {
  axios.get(url)
    .then(function (response) {
      items.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getPokemon(BASE_URL)

const next = () => {
  const next_url = items.value.next;
  getPokemon(next_url)
}

const previous = () => {
  const previous_url = items.value.previous;
  getPokemon(previous_url)
}


</script>

