 import axios from "axios";

  export default {
  state: {
   lists: []
  },
  getters : {
    LISTS(state) {
    return state.lists
   },
  },
  mutations: {
   SET_LISTS(state, lists) {
    state.lists = lists
   },
    ADD_LIST: (state, lists) => {
      state.lists.push(lists);
    },
    deleteList(state, id) {
    let lists = state.lists
    lists.splice(id, 1)
      state.lists = lists    
   }
  },
  actions: {
  async GET_LISTS({commit}) {
      let {data} = await axios.get(`lists`);
      commit('SET_LISTS', data)
    },
  POST_LIST ({ commit }, lists) {
    return new Promise((resolve, reject) => {
        axios
          .post(`lists`, lists)
          .then(({ data, status }) => {
            commit("ADD_LIST", data);
            if (status === 200 || status === 201) {
              resolve({ data, status });
            }
          })
          .catch(error => {
            reject(error);
      })

      });
    },

  }
}