<template>
	<b-container style="position: relative">
    <center><h1 class="mb-3 mt-2">National Baseline Budget Report (NBB)</h1></center>
    <center><h5><small class="text-muted">NBB/PRTR component allows the Contracting Parties to submit the data related to national loads of pollutants discharged directly or indirectly into the Mediterranean Sea.</small></h5></center>
      <b-card v-if="prefilled" no-body>
        <b-form validated novalidate @submit="onSubmit">
          <b-card header="Report details">
            <b-col v-for="table in form.country.tables" lg="6">
                <label>{{table.label}}</label>
              <div v-if="table.name ==='partyname'">
                <b-input required :id="table.name" :type="table.type" disabled v-model="table.selected"></b-input>
              </div>
              <div v-else-if="table.name === 'region'">
                <b-form-select v-model="selectedRegion" @change="getSelectedRegionName($event)" :options="regionOptions">
                  <template slot="first">
                    <option :value="null" disabled>-- Please select a region --</option>
                  </template>
                </b-form-select>
              </div>
              <div v-else>
                <b-input required :id="table.name" :type="table.type" v-model="table.selected"></b-input>
              </div>
            </b-col>
            <b-col>
              <baselines v-if="selectedRegion" :regionName="selectedRegionName" :region="selectedRegion" :country="country" :info.sync="form.content"></baselines>
            </b-col>
          </b-card>
        </b-form>
   			<formsubmit :region="selectedRegion" :country.sync="country" :info.sync="form"></formsubmit>

      </b-card>
      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';

import Baselines from './Baselines.vue'
import countries from '../assets/countries.js'

import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'


export default {

  name: 'Webform',
  components: {
    baselines: Baselines,
    formsubmit: FormSubmit
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      button_text: 'Hide list',
      country: '',
      countryData: null,
      regionOptions: [],
      selectedRegion: null,
      selectedRegionName: null,
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
          this.getRegionOptions(countries, response.data);
        })
    })
  },

  methods: {


    prefill(data){
      for(let value of this.form.country.tables) {
            value.selected = data.NBB_Report.contacting_party[value.name]
            if(value.name === 'partyname') {
              value.selected = this.country;
            }
      }





      this.prefilled = true;


    },


    getSelectedRegionName(region) {

      for(let option of this.regionOptions) {
        if(option.value === region) {
          this.selectedRegionName = option.text
        }
      }

      console.log(this.selectedRegionName)
    },

    getRegionOptions(countries, current_country) {
      for(let country of countries) {
        if(country.country_code_iso2 === current_country) {
          this.countryData = country
        }
      }
      this.makeRegionOptions(this.countryData)
    },

    makeRegionOptions(country) {
      for(let region of country.regions) {
        this.regionOptions.push({text: region.region_name, value: region.region_id})
      }
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

.container {
  max-width: 700px;
}

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
