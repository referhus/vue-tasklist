<template>
  <div style="background: #fff; width: 85%;">
    <v-divider class="mb-4"></v-divider>
    <v-text-field
      v-model="newList"
      label="Введите название списка"
      solo
      @keydown.enter="CreateList"
    >
    </v-text-field>   

    <v-btn
     block
     elevation="2"
     class="mb-8 pb-6 pt-6 theme--dark"
     @click="CreateList"
    >Создать список
    </v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({
      newList: '',
    }),
    
    methods: {
      CreateList() {
        this.$store
          .dispatch("POST_LIST", {
            attributes: {
              name: this.newList,
            } 
          })
          .then(response => {
          //   this.$store.commit("SET_NOTIFICATION", {
          //     display: true,
          //     text: "List has been created!",
          //     alerrClass: "success"
          //   });
            this.newList = '';
            this.$router.push({
              name: 'tasks',
              params: {
                id: response.data.id
              }
            })
          })
      }
    }
}
 </script>
