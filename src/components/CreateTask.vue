<template>
  <v-container>  
  <div style="position: fixed; bottom: 0; background: #fff; width: 100%; overflow: hidden;"
   class="d-flex align-content-center mt-3">
    <div>
     <v-text-field
     v-model="newTask"
     label="Введите дело"
     style="width: 600px"
     solo
     >
     </v-text-field>     
    </div>
    <div>
     <v-btn
     elevation="2"
     class="pa-6 theme--dark"
    >Добавить</v-btn> 
    </div>
    <div>
      <v-checkbox
        label="Срочно"
        color="red"
        value="important"
      >      
      </v-checkbox>
    </div>
  </div>
    
  </v-container>
</template>

<script>
 export default {
    name: "CreateTask",
    computed: {
     },

    methods: {
      createTask () {
        if(!this.newTask) {
          alert('Введите дело!')
          return
        }
        this.tasks.push({
          done: false,
          text: this.newTask,
        })

        this.newTask = null
      },
      deleteItem (i, task) {
        if (confirm(`Удалить дело ${task.text}?`)) {
        this.tasks.splice(i, 1) 
        }
      }

    },

 }

</script>
