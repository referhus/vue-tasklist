<template>
  <v-card elevation="0" style="height:100%; width: 100%">
    <v-list style="max-height: 80vh; height: 100%; overflow-y: scroll;" class="d-flex justify-start flex-column pa-3">
      <div v-if="currentList" >
        <template v-for="task in currentList.tasks">
          <Task v-bind:key="task.id" :task="task"></Task>
        </template>   
      </div>
    </v-list>
    <v-card-actions>
      <CreateTask></CreateTask>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Task from './Task.vue'
  import CreateTask from './CreateTask.vue'
  import {mapState} from 'vuex'

  export default {
    name: "tasks",
    components: { Task, CreateTask },
    computed: {
    ...mapState(['currentList'])
    },

    methods: {
    },

    // async mounted () {
    //   await this.$store.dispatch("GET_TASKS", this.$route.params.id);
    // }

 }

</script>
