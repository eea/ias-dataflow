import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'date-input-polyfill';
import Multiselect from 'vue-multiselect'
import VeeValidate from 'vee-validate'
import vueScrollto from 'vue-scrollto'



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
        let res = [];
        value.forEach((file, ix)=>{
          res.push(validateExtension(file, exts))
        });
        return res.filter((val)=>{ return !val}).length === 0;

      } else if(value instanceof  File){
        return validateExtension(value, exts);
      } else {
        return false;
      }
    }
};

/* if select is empty ( args[0] === 1 for example) */
let selectRequiredNumber = {
  getMessage(field, args) {
    return field + " required: yes or no or Unknown";
  },
  validate(value, args) {
    if(typeof value === "number"){
      if(value === parseInt(args[0])){
        return false;
      }
    } else {
      if(value === args[0]){
        return false;
      }
      if(value.toString() === args[0]){
        return false;
      }
    }
    return true;
  }
};

let selectRequiredBoolean = {
  getMessage(field, args) {
    return field + " required: yes or no or Unknown";
  },
  validate(value, args) {
    console.log(value);
    console.log(args);
    return true;
  }
};

// import Promise from './polyfills.js'
Vue.component('multiselect', Multiselect);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(vueScrollto);

Validator.extend('filesAllowed', filesAllowed);
//Validator.extend('selectRequiredBoolean', selectRequiredBoolean);
Validator.extend('selectRequiredNumber', selectRequiredNumber);

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
