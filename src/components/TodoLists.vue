<template>
  <v-container>
      <v-card v-if="lists.length > 0">
      <v-slide-y-transition
        class="py-0"
        group
      >
        <template v-for="(list, index) in lists">
          <v-divider
            v-if="index !== 0"
            :key="`${index}-divider`"
          ></v-divider>
          <v-list-item :key="list">
            <v-list-item-action>
                  <h4
                    v-text="list"
                  ></h4>                    
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
               <v-icon @click="deleteList(index)">clear</v-icon>
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
      @keydown.enter="createList"
      class="mt-2"
    ></v-text-field>   

    <v-btn
     block
     elevation="2"
     class="mb-2 theme--dark"
     @click="createList"
    >Создать список</v-btn>
  </div>
  </v-container>
</template>
  
<script>

 export default {
    data: () => ({
      lists: [],
      newList: null,
    }),

    methods: {
      createList () {
        if(!this.newList) {
          alert('Введите название списка!')
          return
        }

        this.lists.push(this.newList)
        console.log(this.lists)

        this.newList = null
      },
      deleteList (i) {
        this.lists.splice(i, 1)
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