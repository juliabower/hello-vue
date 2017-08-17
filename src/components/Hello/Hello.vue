<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ storeMsg }}</h2>
    <h2>{{ counter }}</h2>
    <button @click='increment'>Click me</button>
    <button @click='plus50'>+50</button>
    <button @click='reset'>Start over</button>

    <form class="form" @submit.prevent="addTodo">
      <input title="addItem" type="text" v-model="task" />
    </form>
    <todo-list :todos="todos"></todo-list>

    <things />

    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import Things from '../Things/Things'
  import TodoList from '../TodoList/TodoList'

  export default {
    name: 'hello',
    created () {
      console.log(this)
    },
    data () {
      return {
        msg: 'Hello World!',
        task: ''
      }
    },
    computed: {
      storeMsg: function () {
        return this.$store.state.message
      },
      counter: function () {
        return this.$store.getters.counter
      },
      todos: function () {
        return this.$store.getters.todos
      }
    },
    methods: {
      increment: function () {
        this.$store.commit('increment')
      },
      plus50: function () {
        this.$store.commit('plus50')
      },
      reset: function () {
        this.$store.commit('reset')
      },
      addTodo: function () {
        // Commit to mutation
        this.$store.commit('addTodo', this.task)
        // Empty text input
        this.task = ''
      }
    },
    components: {
      'todo-list': TodoList,
      'things': Things
    }
  }
</script>

<style scoped lang='scss' src='./Hello.scss'></style>
