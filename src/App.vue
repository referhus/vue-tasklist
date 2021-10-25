<template>
  <div id="app">
    <v-app id="inspire">
      <div>
       <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
          <v-navigation-drawer
          app
          permanent
          style="width: 290px; 
          overflow: hidden;"    
          >
            <Lists></Lists>
          </v-navigation-drawer>
           <v-app-bar class="theme--dark"
          style="position: fixed;"
           app>
            <v-toolbar-title style="width: 100%"><h4 class="text-center text-h4 ml-9 white--text"> Список дел {{listId}} </h4></v-toolbar-title>
          </v-app-bar>
          <v-main app class="ml-9" style="width: 100%;">
<!--            <router-view name="tasks">
 -->       <Tasks></Tasks>
           <Notification></Notification>
<!--            </router-view>
 -->      </v-main> 
      </v-container>
     </div>
    </v-app>
  </div>
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
    data: () => ({
    }),
    computed: {
   listId() {
    return this.$route.params.id;
   }

  }
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
