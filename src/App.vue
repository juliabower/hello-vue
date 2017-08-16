<template>
  <div id='app'>
    <img src='./assets/unicorn.gif' class='unicorn'>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang='scss' src='./styles.scss'></style>
