<template>
  <v-container>
      <v-card class="mb-9" style="max-height: '50vh'; height: '50%'">
          <v-list-item         
          :to="{ name: 'tasks', params: {id: list.id} }"
         v-for="(list, key) in LISTS"
         v-bind:key="key">
            <v-list-item-action>
             <h4
               v-text="list.title"
             ></h4>                    
            </v-list-item-action>

            <v-spacer></v-spacer>

               <v-icon>clear</v-icon>
          </v-list-item>
    </v-card>
    <CreateList></CreateList>
  </v-container>
</template>
  
<script>
  import CreateList from './CreateList.vue'
  import {mapGetters} from 'vuex';

  export default {
    name: "lists",
    components: { CreateList },
    data: () => ({}),
    computed: {
     ...mapGetters(['LISTS']),

  },
    methods:  {
     mounted() {
      this.$store.dispatch('GET_LISTS')
     },
    },

  }
  </script>


 <style>
.newlistend {
  position: fixed;
  bottom: 0;
  width: 90%;
}
</style>