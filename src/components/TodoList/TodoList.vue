<template>
  <div class="todo-list">
    <ul class="todo-list-body">
      <li
        v-for="t in todos"
        class="todo-list-item"
        :class="{completed: t.completed}"
        @click="toggleTodo(t.task)"
      >{{t.task}}
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'todo-list',
    props: ['todos'],
    methods: {
      toggleTodo: function (task) {
        this.$store.commit('toggleTodo', task)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-list {
    margin: 20px;
  }

  .todo-list-body {
    width: 20%;
    padding: 0;
    margin: 0 auto;
  }

  .todo-list-item {
    list-style-type: none;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }

    &.completed {
      text-decoration: line-through;
    }

  }
</style>
