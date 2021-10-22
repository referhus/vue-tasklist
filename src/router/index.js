import Vue from 'vue'
import VueRouter from 'vue-router'
// import TodoItems from '../components/TodoItems.vue'

Vue.use(VueRouter)

const routes = [
// {
//  path: '/list',
//  name: TodoItems,
//  component: TodoItems,
// }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
