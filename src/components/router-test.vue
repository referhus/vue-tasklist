 <template>
  
 <v-container style="max-width: 700px">

    <v-divider class="mt-4"></v-divider>

    <v-row
      class="my-1"
      align="center"
    >
      <strong class="mx-4 info--text text--darken-2">
        Осталось: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Выполнено: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      ></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

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
               <v-icon>clear</v-icon>
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
      class="mt-4"
    >
    </v-text-field>
    <v-btn
     elevation="2"
     class="mb-2 theme--dark"
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
    },

 }

</script>

<style lang="scss">
  .newtaskend {
    display: flex;
    align-items: center;
    width: 700px;
    position: fixed;
    bottom: 0;
  }
</style>