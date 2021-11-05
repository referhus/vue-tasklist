<template>
  <div class="lists-filter pa-4">
    <v-select v-model="selected.name" @change="filterList(selected.name)" :items="items" item-text="name"/>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from "vuex";
  export default {
    name: "filterList", 
    data: () => ({
    selected: {name: "Все", value: "all"},
      items: [
      { name: "Все", value: "all" },
      { name: "Завершенные", value: "done" },
      { name: "Незавершенные", value: "noDone" }
      ] 
    }),
   computed: {
    ...mapGetters(['LISTS','GET_DONE_LISTS','GET_NOT_DONE_LISTS'])
   }, 
   methods: {
    ...mapMutations(['SET_CURRENT_LIST']),
    filterList(selected) { 
      this.SET_CURRENT_LIST(null); 
      switch (selected) { 
        case "all": console.log('all'), this.lists = this.LISTS 
        break; 
        case "done": console.log('done'), this.lists = this.GET_DONE_LISTS 
        break; 
        case "noDone": console.log('noDone'), this.lists = this.GET_NOT_DONE_LISTS 
        break; 
      } 
    },

   }
 }
</script>

<style>
  .lists-filter {
    width: 90%;
  }
</style>