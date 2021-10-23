<template>
     <v-container style="max-width: 700px">

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(task, i) in tasks">
          <v-divider
            v-if="i !== 0"
            :key="`${i}-divider`"
          ></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="task.done && 'grey' || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="task.done && 'grey--text' || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
               <v-icon @click="deleteItem(i, task)">clear</v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>   

      <div class="newtaskend">
        <v-text-field
      v-model="newTask"
      label="Введите дело"
      solo
      @keydown.enter="createTask"
    >
    </v-text-field>
    <v-btn
     elevation="2"
     class="theme--dark"
     @click="createTask"
    >Добавить</v-btn>
  </div>
  </v-container>

</template>

<script>

 export default {
    data: () => ({
      tasks: [],
      newTask: null,
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      },
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

<style lang="scss">
  .newtaskend {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
  }
</style>