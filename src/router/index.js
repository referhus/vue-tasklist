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

let AUTH_TOKEN = 'R2w3YndHdXdDbzg0bGNvRTVaZ2s2RGlURGc2OXJibFo='

axios.defaults.baseURL = "http://shipilov-bogdan-api.academy.smartworld.team/";

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.withCredentials = true;



export default router
