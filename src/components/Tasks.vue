<template>
  <v-card elevation="0" style="height:100%; width: 100%">
    <v-list style="max-height: 80vh; height: 100%; overflow-y: scroll;" class="d-flex justify-start flex-column pa-3">
      <template v-for="(task, key) in tasks">
        <Task v-bind:key="key" :task="task" :index="key"></Task>
      </template>
    </v-list>
    <v-card-actions>
      <CreateTask></CreateTask>
    </v-card-actions>
  </v-card>
</template>

<script>
  import Task from './Task.vue'
  import CreateTask from './CreateTask.vue'
  export default {
    name: "tasks",
    components: { Task, CreateTask },
    data: () => ({
      tasks: [
      {
        id: 1,
        title: "Таск",
        important: true,
      },      {
        id: 1,
        title: "Таск",
        important: true,
      },      {
        id: 1,
        title: "Таск",
        important: true,
      },      {
        id: 1,
        title: "Таск",
        important: true,
      },      {
        id: 1,
        title: "Таск",
        important: true,
      }, 
    ]
    }),
    
    computed: {
     },

    methods: {
    },

 }

</script>
