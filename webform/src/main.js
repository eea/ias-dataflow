import Vue from 'vue'
import App from './App.vue'
import 'date-input-polyfill';
import Multiselect from 'vue-multiselect'

import BootstrapVue from 'bootstrap-vue'
import './css/main.scss'
// import Promise from './polyfills.js'
Vue.component('multiselect', Multiselect)
Vue.use(BootstrapVue);
// Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})
