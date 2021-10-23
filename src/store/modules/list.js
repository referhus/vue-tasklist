  export default {

  state: {
   lists: []
  },
  newList: null,
  getters : {
   allLists(state) {
    return state.lists
   }
  },
  mutations: {
   updateLists(state, lists) {
    state.lists = lists
   },
   createList(state, newList) {
    let lists = state.lists
      lists.push(newList)
      state.lists = lists
   },
   deleteList(state, id) {
    let lists = state.lists
    lists.splice(id, 1)
      state.lists = lists    
   }
  },
  actions: {
   async fetchLists(ctx) {
    const res = await fetch(
     "https://jsonplaceholder.typicode.com/todos?_limit=4"
     );
    const lists = await res.json();

    ctx.commit('updateLists', lists)
   }
  },
}