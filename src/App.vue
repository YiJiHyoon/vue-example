<template>
  <div id="app">
    <HelloViewer />
  </div>
</template>

<script>
  import HelloViewer from './components/HelloViewer.vue'

export default {
  name: 'app',
  components: {
    HelloViewer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
