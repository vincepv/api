<script setup>
import { RouterLink, RouterView } from "vue-router";
import {useLogInStore} from "@/store/LogInStore.js"
import LogIn from "@/views/LogIn.vue";

const store =  useLogInStore()

const isLog = false

</script>

<template>
  <template v-if ="store.IsLog" >
    <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    </nav>

    <RouterView />
  </template>

  <template v-else>
    <LogIn />
  </template>

  
</template>


