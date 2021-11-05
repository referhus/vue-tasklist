<template>
  <div
    class="d-flex justify-space-between pl-3 pr-3">
    <v-checkbox
      v-model="task.is_completed"
      :color="task.is_completed && 'grey' || 'primary'"
    >
      <template v-slot:label>
        <div :class="task.is_completed && 'grey--text' || 'primary--text'"
          v-text="task.name">
        </div>
      </template>
    </v-checkbox>
    <div class="d-flex align-center">
      <div>
       {{ new Date(task.created_at).toLocaleDateString("ru-RU", {hour: 'numeric', minute: 'numeric', second: 'numeric'}) }}
      </div>
      <div style="width: 16px" class="ml-6 mr-6">
      <v-icon v-show="task.urgency" small class="red--text text--darken-4">circle</v-icon>          
      </div>
      <v-icon @click="deleteTask()">clear</v-icon>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: 'Task',
    props: {
    task: Object,
    },

    computed: {
    ...mapState(['currentList']),
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