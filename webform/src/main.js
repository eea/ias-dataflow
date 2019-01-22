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

import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

VTooltip.options.defaultClass = 'infoTooltip'

library.add(faChevronRight);
library.add(faChevronDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

let filesAllowed = {
    getMessage(field, args) {
      // will be added to default locale messages.
      // Returns a message.
      return field + " extension not allowed (allowed only:  " + args.join(" ,") + " )";
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
    if(value === "") return false;
    return true;
  }
};

let weblinks = {
  getMessage(field, args){
    return field + " are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable ";
  },
  validate(value, args){
    let arr = value.split(";").filter(Boolean);
    let res = [];
    let reg = /(?:(?:https?):\/\/|www\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    res = arr.map((item) => {
      return item.match(reg);
    });
    //console.log(res);

    if ( res.filter((item)=>{ return item === null;}).length > 0){
      return false;
    }

    return true;
  }
};

let falserequire = {
  getMessage(field, args){
    return '';
  },
  validate(value, args){
    return true;
  },
};

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

let isLess = {
  getMessage(field, args){
    return field + " must be less or equal to 'number of establishments subjected to inspections' and cannot be larger" ;
  },
  validate(value, [otherValue] ){
    let ref = vm.$el.querySelector('[name="' + otherValue + '"]');
    if( "undefined" !== typeof ref ){
      if( value <= parseInt(ref.value, 10) ){
        return true;
      }
    }

    return false;
  }
};

let spreadvalidate = {
  getMessage(field, args){
    return "At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.";
  },
  validate(val, args){
    let first = [];
    let second = [];
    const allowedFirst = [ "b","c","d","e"];
    const allowedSecond = ["f","g","h","i"];

    val.map((v) => {
      if(allowedFirst.indexOf(v.index) !== -1) first.push(v.index);
      if(allowedSecond.indexOf(v.index) !== -1) second.push(v.index);
    });

    return first.length > 0 && second.length > 0;
  }
};

/*
/*(value,[otherValue]) => {
  console.log("#########");
  console.log(value);
  console.log(otherValue);
  console.log("#########");
  return value <= otherValue;
},
**/

Validator.extend('isLess',  isLess, {
  hasTarget: true
});

Validator.extend('spreadvalidate', spreadvalidate);
Validator.extend('falserequire', falserequire );
// Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  render: h => h(App)
});
