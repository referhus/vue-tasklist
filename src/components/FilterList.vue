<template>
  <div class="lists-filter pa-4">
<!--     <select v-model="selectFilter" @change="filterList" id="list-filter" > 
      <option value="all" selected>Все</option> 
      <option value="done">Завершенные</option> 
      <option value="not-done">Незавершенные</option> 
    </select> 
 -->  
    <v-select :options="['Все', 'Незавершенные', 'Завершенные']"/>
  </div>
</template>

<script>
  export default {
    name: "filterList", 
   methods: {
    filterList() { 
      // this.setCurrentList(null); 
      // switch (this.selectFilter) { 
      //   case "all": this.lists = this.getAllLists 
      //   break; 
      //   case "done": this.lists = this.getDoneLists 
      //   break; 
      //   case "not-done": this.lists = this.getNotDoneLists 
      //   break; 
      // } 
    },

   }
 }
</script>

<!-- <style>
  .lists-filter {
    width: 100%;
  }
  #list-filter {
    padding: 10px;
  }
</style> -->