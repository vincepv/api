<template>
  <h1>Pokemon : informations utiles</h1>

  <PokemonDetail
  :id= "items.id"
  :name= "items.name"
  :order= "items.order"
  :weight= "items.weight"
  />

</template>

<script setup>
import PokemonDetail from "../component/PokemonDetail.vue";
import GetPokemon from "../api/GetPokemon.js";

import { ref } from 'vue'

const items = ref([]);
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/43";

// need to send in items array
console.log(GetPokemon(BASE_URL))


</script>

<style>

</style>