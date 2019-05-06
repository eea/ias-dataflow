<template>
  <div id="app">
    <Webform></Webform>
  </div>
</template>

<script>
import Webform from './components/Webform.vue'

export default {
  name: 'app',
  components: {
    Webform
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
