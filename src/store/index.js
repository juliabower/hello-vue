import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'This is coming from the vuex store',
    counter: 0,
    todos: [
      {
        task: 'Code',
        completed: true
      },
      {
        task: 'Sleep',
        completed: false
      },
      {
        task: 'Eat',
        completed: false
      }
    ]
  },
  getters: {
    counter: state => state.counter,
    todos: state => state.todos
  },
  mutations: {
    increment: state => state.counter++,
    plus50: state => (state.counter += 50),
    reset: state => (state.counter = 0),
    addTodo: (state, payload) => {
      // Assemble data
      const task = {
        task: payload,
        completed: false
      }
      // Add to existing todos
      state.todos.unshift(task)
    },
    toggleTodo: (state, payload) => {
      state.todos = state.todos.map(t => {
        if (t.task === payload) {
          // Update the todolist
          // that matches the clicked item
          return {task: t.task, completed: !t.completed}
        }
        return t
      })
    }
  }
})
