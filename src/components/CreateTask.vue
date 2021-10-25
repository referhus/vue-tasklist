<template>
  <v-container>      
    <v-row style="position: fixed; bottom: 0; background: #fff; width: 70%;">
    <v-col cols="8">
     <v-text-field
     v-model="newTask"
     label="Введите дело"
     style="width: 650px"
     solo
     >
     </v-text-field>     
    </v-col>
    <v-col cols="3">
     <v-btn
     elevation="2"
     class="pa-6 theme--dark"
    >Добавить</v-btn> 
    </v-col>
    <v-col cols="1">
      <v-checkbox
        label="Срочно"
        color="red"
        value="important"
      >      
      </v-checkbox>
    </v-col>
      
    </v-row>
<!--   </div>
 -->    
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
