<template>
  <div class="app">
    <Todolist/>
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}
</style>