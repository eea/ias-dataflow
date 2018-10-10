import Vue from 'vue'
import App from './App.vue'
import 'date-input-polyfill';
import Multiselect from 'vue-multiselect'

import BootstrapVue from 'bootstrap-vue'
import './css/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronRight);
library.add(faChevronDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

// import Promise from './polyfills.js'
Vue.component('multiselect', Multiselect);
Vue.use(BootstrapVue);
// Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: h => h(App)
})
