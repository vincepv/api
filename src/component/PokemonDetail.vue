<template>
<h1>Pokemon </h1>
<p>Name ={{ name }} </p>
<p>ID  = {{id}} </p>
<p>Order = {{order}}</p>
<p>Weight ={{weight}} </p>
  
</template>

<script setup>
import axios from "axios";
import { ref } from 'vue'

const props = defineProps({
  id: Number,
  name: String,
  order: Number, 
  weight: Number,
})


const PokemonUrl = [url]

console.log(PokemonUrl)

</script>

