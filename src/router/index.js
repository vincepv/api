import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import PokemonDetail from "../views/PokemonDetail.vue";
import LogIn from "../views/LogIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/detail",
      name: "PokemonDetail",
      component: PokemonDetail,
    },
    {
      path: "/login",
      name: "LogIn",
      component: LogIn,
    },
    
  ],
});

export default router;
