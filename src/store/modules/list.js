import axios from "axios";

  export default {
    state: {
      lists: [],
      currentList: []
    },

    getters : {
      LISTS(state) {
        return state.lists
      },

      GET_CURRENT_LIST(state) {
       return state.currentList
      },

      GET_DONE_LISTS: s => s.lists.filter(list => {
      if (!list.tasks.find(task => task.completed == false) && list.tasks.length != 0) return true
    }),

     GET_NOT_DONE_LISTS: s => s.lists.filter(list => {
      if (list.tasks.find(task => task.completed == false) && list.tasks.length != 0) return true
    })

    },
    mutations: {
      SET_LISTS(state, lists) {
        state.lists = lists
      },

      ADD_LIST: (state, lists) => {
        state.lists.push(lists);
      },

      ADD_TASK: (state, {data, id}) => {
       state.lists.find((list) => (list.id == id)).tasks.push(data)
      },

      SET_CURRENT_LIST(state, id) {
        state.currentList = state.lists.find(list => list.id == id)
      },

      SET_TASKS(state, {tasks, id}) {
        state.lists.find((list) => (list.id == id)).tasks = tasks
      },

      REMOVE_LIST: (state, id) => {
        let rs = state.lists.filter(currentList => {
          return currentList.id !== id;
        });

        state.lists = [...rs];
      },

      REMOVE_TASK: (state, { listId, taskId }) => {
        let tasks = state.lists.find(list => list.id === listId).tasks;
        let rs = tasks.filter(currentTask => {
          return currentTask.id !== taskId;
        });
        state.lists.find(list => list.id === listId).tasks = [...rs];
      },
    },

    actions: {
      async GET_LISTS({commit, dispatch}) {
        let {data} = await axios.get(`list`);
        commit('SET_LISTS', data.data.items)
        data.data.items.map(list => {
        dispatch("GET_TASKS", list.id)
      })

      },

      POST_LIST ({ commit }, lists) {
        return new Promise((resolve, reject) => {
          axios
            .post(`list`, lists)
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

      DELETE_LIST: ({ commit }, listId) => {
        return new Promise((resolve, reject) => {
          axios
            .delete(`list/${listId}`)
            .then(({ status }) => {
              if (status === 204 || status === 200) {
                commit("REMOVE_LIST", listId);
                resolve(status);
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },


      GET_TASKS: async ({ commit }, id) => {
      const tasks = await axios.get(`task`);
        commit("SET_TASKS", {
          tasks: tasks.data.data,
          id
        });
        console.log(tasks.data.data)
      },


      POST_TASK: ({ commit }, tasks) => {
        return new Promise((resolve, reject) => {
          axios
            .post(`task`, tasks)
            .then(({ data, status }) => {
              commit("ADD_TASK", data);
              if (status === 200 || status === 201) {
                resolve({ data, status });
              }
            })
            .catch(error => {
              reject(error);
            })
          });
      },


      // DELETE_TASK: ({ commit }, { listId, taskId }) => {
      //   return new Promise((resolve, reject) => {
      //     axios
      //       .delete(`list/${taskId}`)
      //       .then(({ status }) => {
      //         if (status === 204) {
      //           commit("REMOVE_TASK", { listId, taskId });
      //           resolve(status);
      //         }
      //       })
      //       .catch(error => {
      //         reject(error);
      //       });
      //   });
      // },
    }
  }