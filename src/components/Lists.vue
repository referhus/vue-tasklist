<template>
  <v-container style="width: 95%; height: 100%;" class="pa-1">
    <v-row justify="center">
      <FilterList></FilterList>   
    </v-row>
    <v-row class="pl-6 pr-2" style="max-height: 65vh; height: 90%; overflow-y: scroll;">
      <v-list-item class="mb-2" style="height: 30px;" 
      :to="{ name: 'tasks', params: {id: list.data.attributes.name} }"
      v-for="(list, key) in LISTS"
      v-bind:key="key">
        <v-list-item-action>
          <h4 v-text="list.data.attributes.name"></h4>                    
        </v-list-item-action>

        <v-spacer></v-spacer>

        <v-icon @click="removeList()">clear</v-icon>
      </v-list-item>
    </v-row>
    <v-row justify="center">
      <CreateList></CreateList>  
    </v-row>
  </v-container>
</template>
  
<script>
  import CreateList from './CreateList.vue'
  import FilterList from './FilterList.vue'
  import {mapGetters} from 'vuex';

  export default {
    name: "lists",
    components: { CreateList, FilterList },
    computed: {
     ...mapGetters(['LISTS']),

  },
    methods:  {
     mounted() {
      this.$store.dispatch('GET_LISTS')
     },

    removeList() {
      this.$store
        .dispatch("DELETE_LIST", {
          listId: this.$route.params.name
        })
        .then(() => {
          this.$router.push({ name: "lists" });
        })
        .catch(error => {
          console.log(error);
        });
    }

    },

  }
  </script>

