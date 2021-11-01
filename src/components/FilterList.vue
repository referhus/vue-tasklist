<template>
  <div class="lists-filter pa-4">
    <v-select v-model="selected.name" @change="filterList(selected.name)" :items="items" item-text="name"/>
  </div>
</template>

<script>
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
   methods: {
    filterList(selected) { 
      switch (selected) { 
        case "all": console.log('all'), this.lists = this.getAllLists 
        break; 
        case "done": console.log('done'), this.lists = this.getDoneLists 
        break; 
        case "noDone": console.log('noDone'), this.lists = this.getNotDoneLists 
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