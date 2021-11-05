<template>
  <v-app id="app">
    <div style="max-height: 100vh; height: 100%; overflow: hidden">
      <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
        <v-layout row class="d-flex align-space-between justify-space-between">
          <v-flex lg3 pr-5>
            <Lists></Lists>
          </v-flex>
          <v-flex lg9 pr-2>
            <v-app-bar class="theme--dark">
              <v-toolbar-title style="width: 100%"><h4 class="text-center text-h4 ml-9 white--text"> Список дел "{{}}" </h4></v-toolbar-title>
            </v-app-bar>
            <router-view name="tasks">
              <Tasks></Tasks>
              <Notification></Notification>
            </router-view>        
          </v-flex> 
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
  import Lists from './components/Lists.vue'
  import Tasks from './components/Tasks.vue'
  import Notification from './components/Notification.vue'
  export default {
    components: {
    Lists,
    Tasks,
    Notification
   },
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
