<template>
  <div class="todo-list">
    <ul>
      <li v-for="t in todos" class="todo-list-item" :class="{completed: t.completed}">{{t.task}}</li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'todo-list',
    props: ['todos']
  }
</script>

<style scoped>
  .todo-list {
    margin: 20px;
  }
  .todo-list-item {
    list-style-type: none;
  }
</style>
