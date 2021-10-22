import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
  },
  deleteTask(state, index) {
      state.tasks.splice(index, 1);
  },
  setTasks(state, tasks) {
      state.tasks = tasks;
  }
  },
  actions: {
  },
  modules: {
  }
})
