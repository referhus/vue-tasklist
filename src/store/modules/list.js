import axios from "axios";

  export default {
    state: {
      lists: [
      {
        id: 1,
        title: "Список 1"
      },
      {
        id: 2,
        title: "Список 2"
      },
      ]
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

      ADD_TASK: (state, { data, listId }) => {
        state.lists.find(list => list.id === listId).tasks.push(data);
      },

      REMOVE_LIST: (state, listId) => {
        let rs = state.lists.filter(currentList => {
          return currentList.id !== listId;
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
      async GET_LISTS({commit}) {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('SET_LISTS', data)
      },

      POST_LIST ({ commit }, lists) {
        return new Promise((resolve, reject) => {
          axios
            .post('https://jsonplaceholder.typicode.com/todos', lists)
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

      DELETE_LIST: ({ commit }, { listId }) => {
        return new Promise((resolve, reject) => {
          axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${listId}`)
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

      GET_TASKS: async ({ commit }, lists) => {
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos/${lists}/tasks`);
        commit("SET_TASKS", {
          data,
          listId: lists
        });
      },

      POST_TASK: async ({ commit }, { listId, taskTitle }) => {
        let { data } = await axios.post(`https://jsonplaceholder.typicode.com/todos/${listId}/tasks`, {
          title: taskTitle
        });
        commit("ADD_TASK", {
          data,
          listId
        });
      },

      DELETE_TASK: ({ commit }, { listId, taskId }) => {
        return new Promise((resolve, reject) => {
          axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
            .then(({ status }) => {
              if (status === 204) {
                commit("REMOVE_TASK", { listId, taskId });
                resolve(status);
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },
    }
  }