<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">Prevention and Emergency Protocol</h1></center>
    <center><h5><small class="text-muted">IMPLEMENTATION OF THE PROTOCOL CONCERNING COOPERATION IN PREVENTING POLLUTION FROM SHIPS AND, IN CASES OF EMERGENCY,
      COMBATING POLLUTION OF THE MEDITERRANEAN SEA (PREVENTION AND EMERGENCY PROTOCOL)</small></h5></center>
      <b-card v-if="prefilled" no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-tabs card>
            <b-tab title="Reporting party" active>
              <countrytab tabId="0" :info.sync="form.country"></countrytab>
            </b-tab>
            <b-tab :title="doTitle(form.tab_1.label)">
     			    <lrmeasures tabId="1" :info.sync="form.tab_1"></lrmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_2.label)" >
              <opmeasures tabId="2" :info.sync="form.tab_2"></opmeasures>
            </b-tab>
            <b-tab :title="doTitle(form.tab_3.label)" >
              <polincidents tabId="3" :info.sync="form.tab_3"></polincidents>
            </b-tab>
          </b-tabs>
        </b-form>
   			<formsubmit :country.sync="country" :info.sync="form"></formsubmit>
        
      </b-card>
      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';

import LRMeasures from './LRMeasures.vue'
import OpMeasures from './OpMeasures.vue'
import PolIncidents from './PolIncidents.vue'
import Countrytab from './Country.vue'
// import incidentJson from '../assets/incident.js';


import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    lrmeasures: LRMeasures,
    opmeasures: OpMeasures,
    polincidents: PolIncidents,
  	formsubmit: FormSubmit,
    countrytab: Countrytab
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      button_text: 'Hide list',
      country: '',
      prefilled: false,
    }
  },


  created() {
    this.form = form;
    getInstance().then((response) => {
      let instance_data = response.data
      getCountry().then((response) => {
          this.country = response.data
          this.prefill(instance_data)
        })
    })

  },

  methods: {


    prefill(data){

    
      this.prefilled = true;


    },

    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
    },
  },

}
</script>

<style lang="css" scoped>
.subtitle {
  max-width: 488px;margin: auto;display: block;
}
/*
.container {
  max-width: 700px;
}*/

.spinner {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
   border-top: 16px solid blue;
   border-right: 16px solid green;
   border-bottom: 16px solid red;
   border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
