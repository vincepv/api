<template>
  <h1 v-if="store.IsLog">You are login !!</h1>
  <h1 v-else>Your are not login. Please provide login/password</h1>
  <label for="username">User Name</label>
  <input v-model="userNameInput" type="text" name="username" id="username" />

  <label for="password">Enter your password</label>
  <input v-model="passWordInput" type="password" name="password" id="password"/>

  <button @click="LogIn()">Submit</button>
  <button @click="LogOut()">Log Out</button>
  <p>This is the result : {{ items }}</p>


</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import {useLogInStore} from "@/store/LogInStore.js"

const store = useLogInStore();
const userNameInput = ref('');
const passWordInput = ref('');

const items = ref([]);
const BASE_URL = "http://devcrsdb.com/api/v1/vpv/auth";

const LogIn = () => {
  axios
    .post(BASE_URL,{},{
        auth: {
          username: userNameInput.value,
          password: passWordInput.value,
        },
      }
    )
    .then(function (response) {
      console.log(response);
      items.value = response.data;
      store.IsLog = true
      
    })
    .catch(function (error) {
      console.log(error);
    });
};

const LogOut = () => {
  store.$reset()
  location.reload();
}

</script>

