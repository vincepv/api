<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/about">A propos</RouterLink>
    <RouterLink to="/detail">Pokemon</RouterLink>
  </nav>

  <RouterView />
</template>


