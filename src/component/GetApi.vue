<template>
  <p>Test de récupération de données avec AXIOS</p>
  <p>Nombre total de résultat: {{ items.count }}</p>
  <h3>Listes des pokemons</h3>
  <ul>
    <li v-for="item in items.results" :key="item">{{item.name}}</li>
  </ul>
  <button @click="next()">Suivant</button>

</template>

<script>
import axios from "axios";
export default {
  name: "GetApi",
  data() {
    return {
      items: [],
      BASE_URL:"https://pokeapi.co/api/v2/pokemon/",
      
    };
  },
  async created() {
    try {
      const res = await axios.get(this.BASE_URL);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {}
};

</script>

