<template>
  <h3>Pokemon</h3>
  <p>Name = {{ name }}</p>
  <p>ID = {{ id }}</p>
  <p>Order = {{ order }}</p>
  <p>Weight = {{ weight }}</p>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const props = defineProps({
  id: Number,
  name: String,
  order: Number,
  weight: Number,
});



</script>

