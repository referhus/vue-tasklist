<template>
  <v-row style="background: #fff; width: 70%;">
    <v-col cols="8">
      <v-text-field
      v-model="newTask"
      label="Введите дело"
      style="width: 650px"
      solo
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
        value="important"
      >      
      </v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "CreateTask",
    data: () => ({
    newTask: ""
    }),

    computed: {
    },

    methods: {
      async CreateTask() {
        await this.$store.dispatch("POST_TASK", {
          taskTitle: this.newTask,
          listId: this.$route.params.data.attributes.name
        });      
      },

    }

  }


</script>
