<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
      app
      v-model="drawer"
      style="width: 300px"
      >
      <TodoLists></TodoLists>
      </v-navigation-drawer>
      <v-app-bar class="theme--dark"
      absolute
      app>
       <v-app-bar-nav-icon class="ml-9" @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-toolbar-title><h4 class="text-h4 ml-9 white--text">Список дел</h4></v-toolbar-title>
      </v-app-bar>
      <v-main app>
        <TodoItems></TodoItems>
      </v-main> 
    </v-app>
  </div>
</template>

<script>
  import TodoLists from './components/TodoLists.vue'
  import TodoItems from './components/TodoItems.vue'
  
  export default {
  components: {
  TodoLists,
  TodoItems
 },
  data: () => ({
    drawer: true
  })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
