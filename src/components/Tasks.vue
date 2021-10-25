<template>
    <v-container >
      <div style="width: 100%;">
      <v-list class="d-flex flex-column ml-5">
        <template v-for="(task, key) in tasks">
          <Task v-bind:key="key" :task="task" :index="key"></Task>
        </template>
      </v-list>
        <v-card-actions>
          <CreateTask></CreateTask>
      </v-card-actions>
      </div>

  </v-container>

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
      },
      {
        id: 2,
        title: "Таск",
        important: false,
      },
      {
        id: 3,
        title: "Таск",
        important: true,
      },
      {
        id: 4,
        title: "Таск",
        important: false,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
            {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
        id: 1,
        title: "Таск",
        important: true,
      },
      {
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
