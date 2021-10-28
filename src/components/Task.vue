<template>
  <div
    class="d-flex justify-space-between pl-3 pr-3">
    <v-checkbox
      v-model="task.done"
      :color="task.done && 'grey' || 'primary'"
    >
      <template v-slot:label>
        <div :class="task.done && 'grey--text' || 'primary--text'"
          v-text="task.title">
        </div>
      </template>
    </v-checkbox>
    <div class="d-flex align-center">
      <div>
       ДД.ММ.ГГГГ ВВ:ВВ
      </div>
      <div style="width: 16px" class="ml-6 mr-6">
      <v-icon v-show="task.important" small class="red--text text--darken-4">circle</v-icon>          
      </div>
      <v-icon @click="deleteTask()">clear</v-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
    task: Object,
    index: Number
    },

    methods: {
      deleteTask() {
        this.$store
          .dispatch("DELETE_TASK", {
            taskId: this.$route.params.taskId,
            listId: this.$route.params.id
          })
          .then((status) => {
            if (status === 204) {
               this.open = false;
            }
          })
          .catch(error => {
            console.log(error) 
          })
      }
    },

    watch: {
      open: function(value) {
        if (value === false) {
          this.$router.push({
            name: "tasks",
            params: {
              id: this.$route.params.id
            }
          })
        }
      }
    }
  }

</script>