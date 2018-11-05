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

      console.log("$$$$$$$$$$$$");
      console.log(value);
      console.log("$$$$$$$$$$$$");
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

    console.log("@#@####");
    console.log(value);
    console.log(args);
    return true;
  }
};

let selectRequired = {
  getMessage(field, args){
    return field + " required: yes or no or Unknown";
  },
  validate(value, args){
   /* console.log("#####");
    console.log(value);
    //console.log(value ==='');
    console.log("#####");*/

    if(value === "") return false;
    return true;
  }
};

let weblinks = {
  getMessage(field, args){
    return field + " required: yes or no or Unknown";
  },
  validate(value, args){
    console.log(value);
    let arr = value.split(";").filter(Boolean);
    let res = [];
    //let reg = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    //let reg = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    let reg=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.​\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[​6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1​,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00​a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u​00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    res = arr.map((item) => {
      return item.match(reg) === null;
    });
    console.log(res);
    if(res.length > 0) return false;

    return true;
  }
}

// import Promise from './polyfills.js'
Vue.component('multiselect', Multiselect);
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.use(vueScrollto);

Validator.extend('filesAllowed', filesAllowed);
Validator.extend('selectRequiredBoolean', selectRequiredBoolean);
Validator.extend('selectRequiredNumber', selectRequiredNumber);
Validator.extend('selectRequired', selectRequired);
Validator.extend('weblinks', weblinks);

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
