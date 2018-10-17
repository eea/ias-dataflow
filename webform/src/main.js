import Vue from 'vue'
import App from './App.vue'

import 'date-input-polyfill';
import Multiselect from 'vue-multiselect'
import VeeValidate from 'vee-validate'

import BootstrapVue from 'bootstrap-vue'
import './css/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { Validator } from 'vee-validate'

library.add(faChevronRight);
library.add(faChevronDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

let filesAllowed = {
    getMessage(field, args) {
      // will be added to default locale messages.
      // Returns a message.
      return field + " extension not allowed";
    },

    validate(value, args) {
      function validateExtension(file, allowed) {
        let reg = /\.([0-9a-z]+)(?:[\?#]|$)/;
        let extension = file.name.match(reg)[1];

        if("undefined" !== typeof file.name.match(reg)[1]){
          return allowed.indexOf(extension) !== -1;
        }
        return false;
      }

      // Returns a Boolean or a Promise that resolves to a boolean.
      let exts = args;
      if(exts[0] === "undefined") return true;

      // is array
      if("undefined" !== typeof value.splice){
        let res = false;
        value.forEach((file, ix)=>{
          if(validateExtension(file, exts)){
            console.log(true);
            res = true;
          } else {
            console.log(false);
            res = false;
          }
        });
        return res;

      } else if(value instanceof  File){
        return validateExtension(value, exts);
      } else {
        return false;
      }
    }
};

// import Promise from './polyfills.js'
Vue.component('multiselect', Multiselect);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Validator.extend('filesAllowed', filesAllowed );
// Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
