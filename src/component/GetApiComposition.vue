<template>
  <p>Test de récupération de données avec AXIOS</p>
  <p>Nombre total de résultat: {{items.count}}</p>
  <h3>Listes des pokemons</h3>
  
  <p>A faire : un boutton pour aller sur la page suivante</p>
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue'

const items = ref([0]);
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = () => {
  axios.get(BASE_URL)
    .then(function (response) {
      items.value = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

getPokemon()

</script>

