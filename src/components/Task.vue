<template>
  <div
    style="max-width: 90%; height: 100%;"
    class="d-flex justify-space-between">
    <v-checkbox
      v-model="task.done"
      :color="task.done && 'grey' || 'primary'"
    >
      <template v-slot:label>
        <div :class="task.done && 'grey--text' || 'primary--text'"
          v-text="task.title">
        </div>
      </template>
    </v-checkbox>
    <div class="d-flex align-center">
        <div>
         ДД.ММ.ГГГГ ВВ:ВВ
        </div>
        <div style="width: 16px" class="ml-6 mr-6">
        <v-icon v-show="task.important" small class="red--text text--darken-4">circle</v-icon>          
        </div>
        <v-icon @click="deleteItem(i, task)">clear</v-icon>
      
    </div>
</div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
    task: Object,
    index: Number
  },

  }
</script>