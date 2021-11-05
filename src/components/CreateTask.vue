<template>
  <v-row style="background: #fff; width: 70%;">
    <v-col cols="8">
      <v-text-field
      v-model="newTask"
      label="Введите дело"
      style="width: 650px"
      solo
      @keydown.enter="CreateTask"
      >
      </v-text-field>     
    </v-col>
    <v-col cols="2">
      <v-btn
      elevation="2"
      class="pa-6 theme--dark"
      @click="CreateTask"
      >Добавить</v-btn> 
    </v-col>
    <v-col cols="2">
      <v-checkbox
        label="Срочно"
        color="red"
        v-model="important"
      >      
      </v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "CreateTask",
    data: () => ({
    newTask: "",
    important: 0,
    }),

    computed: {
      ...mapState(['currentList'])
    },

    methods: {
    CreateTask() {
       this.$store
        .dispatch("POST_TASK", {
          attributes: {
            name: this.newTask,
            is_completed: false,
            list_id: this.$route.params.id,
            urgency: this.important,
          },
        })
          this.newTask = '';
      },

    }

  }


</script>
