<template>
  <div id="app">
    <webform></webform>
  </div>
</template>

<script>

import Webform from './components/Webform'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {webform : Webform},
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>
