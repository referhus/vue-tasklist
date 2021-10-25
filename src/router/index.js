import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from "axios";

import Tasks from "../components/Tasks.vue";

Vue.use(VueRouter)

const routes = [
 {
  path: "/list/:id",
  components: {tasks: Tasks },
  name: "tasks",
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;


export default router
