<template>
  <v-container>
      <v-card>
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(list, index) in allLists">
          <v-divider
            v-if="index !== 0"
            :key="`${index}-divider`"
          ></v-divider>
          <v-list-item :key="list.id">
            <v-list-item-action>
                  <h4
                    v-text="list.title"
                  ></h4>                    
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
               <v-icon @click="clickDeleteList(index)">clear</v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  <div class="newlistend">
    <v-divider class="mb-4"></v-divider>
    <v-text-field
      v-model="newList"
      label="Введите название списка"
      solo
      @keydown.enter="clickCreateList"
      class="mt-2"
    ></v-text-field>   

    <v-btn
     block
     elevation="2"
     class="mb-2 theme--dark"
     @click="clickCreateList"
    >Создать список</v-btn>
  </div>
  </v-container>
</template>
  
<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data: () => ({
      newList: null,
      lists: []

    }),
    computed: { ...mapGetters(['allLists'])},
      async beforeMount() {
    await this.fetchLists();
    this.lists = this.allLists
  },
    methods:  {
      ...mapActions(['fetchLists']), 

      async mounted() {
      this.fetchLists();
      },

      ...mapMutations(['createList', 'deleteList']),

      async clickCreateList() {
      if (this.newList.trim()) {
        const listToAdd = {
          id: Date.now(),
          title: this.newList,
          tasks: []
        }

      await this.createList(listToAdd);
      this.newList = ""
      console.log(listToAdd.id)
      }
    },

      async clickDeleteList(id) {
      await this.deleteList(id);
      }

    },


  }
  </script>


 <style>
.newlistend {
  position: fixed;
  bottom: 0;
  width: 90%;
}
</style>