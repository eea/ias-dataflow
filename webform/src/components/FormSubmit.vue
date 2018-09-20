<template>
  <div>
    <b-btn variant="success" style="position: absolute;
    top: 5px;
    right: 5px;" @click="doStuff">Save</b-btn>
    <b-btn variant="danger" style="position: absolute;
    top: 5px;
    right: 85px;" @click="exitForm">Back to envelope</b-btn>

    
    <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
      </b-alert>
  </div>
</template>

<script>

import {saveInstance, envelope} from '../api.js';

export default {

  name: 'FormSubmit',


  props: {
    info: null,
    country: null,
    region: null,
  },

  updated() {
  },

  created() {
    this.dataset = this.info
  },

  data () {
    return {
      dataset: null,
      validation: [],
      jsonemptyinstance: {
          "NBB_Report": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/15/schema-dst-15.xsd",
              "country": null,
              "contacting_party":{
                "partyname":null,
                "rep_period_from":null,
                "rep_period_to":null,
              },
              "region": [
                {
                  "region_id": null,
                  "record": {
                    "pollutant_id": null,
                    "budget_year": null,
                    "sector_id": null,
                    "subsector_id": null,
                    "process_id": null,
                    "facility": null,
                    "from_prtr": null,
                    "estimated_on_id": null,
                    "emission_factor_value": null,
                    "emission_factor_unit_id": null,
                    "production_value": null,
                    "production_unit_id": null,
                    "total_release_value": null,
                    "total_release_unit_id": null,
                  }                  
                }
              ]
          }
      },
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {
    exitForm(){
      window.location.replace(envelope)
    },

      showAlert () {
      console.log('showingalert')
      this.dismissCountDown = this.dismissSecs
      },

       countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
      },

      doStuff(){

      this.jsonemptyinstance = {
          "NBB_Report": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/15/schema-dst-15.xsd",
              "country": null,
              "contacting_party":{
                "partyname":null,
                "rep_period_from":null,
                "rep_period_to":null,
              },
              "region": []
          }
      }
          
      let country_tab = this.dataset.country.tables

        for(let value of country_tab) {
              this.jsonemptyinstance.NBB_Report.contacting_party[value.name] = value.selected
        }


        for(let pollutants of this.dataset.content.data.table.pollutants) {
          console.log(pollutants)
          let pollutantSubmitItem = {
                  "region_id": pollutants.region,
                  "record": {
                    "pollutant_id": pollutants.pollutant_title.selected,
                    "budget_year": null,
                    "sector_id": null,
                    "subsector_id": null,
                    "process_id": null,
                    "facility": null,
                    "from_prtr": null,
                    "estimated_on_id": null,
                    "emission_factor_value": null,
                    "emission_factor_unit_id": null,
                    "production_value": null,
                    "production_unit_id": null,
                    "total_release_value": null,
                    "total_release_unit_id": null,
                  }                  
            }
            for(let pollutant of pollutants.pollutant_items) {
              pollutantSubmitItem.record[pollutant.name] = pollutant.selected
            }
            this.jsonemptyinstance.NBB_Report.region.push(pollutantSubmitItem)
        }

        console.log(this.jsonemptyinstance)
        saveInstance(this.jsonemptyinstance)
        this.showAlert();


      },


      getBaselineName(name) {
        switch (name) {
          case 'pollutant':
            return 'pollutant_id'
            break;
          case 'year':
            return 'budget_year'
            break;
          case 'sector':
            return 'sector_id'
            break;
          case 'subsector':
            return 'subsector_id'
            break;
          case 'process':
            return 'process_id'
            break;
          case 'facility':
            return 'facility'
            break;
          case 'from_prtr':
            return 'from_prtr'
            break;
          case 'estimated':
            return 'estimated_on_id'
            break;
          case 'emission_factor':
            return 'emission_factor_value'
            break;
          case 'emission_factor_unit':
            return 'emission_factor_unit_id'
            break;
          case 'production':
            return 'production_value'
            break;
          case 'production_unit':
            return 'production_unit_id'
            break;
          case 'total_releases':
            return 'total_release_value'
            break;
          case 'total_releases_unit':
            return 'total_release_unit_id'
            break;
          default:
            return ''
            break;
        }
      },

    },
    watch: {
    country: {
      handler: function(old_val,new_val) {
        this.jsonemptyinstance.NBB_Report.contacting_party.partyname = new_val
      },
      deep: true,
      immediate: true,
    }
  }
}
</script>

<style lang="css" scoped>

.alert.alert-success {
  position: fixed;
  top:3rem;
  left: 20%;
  right: 20%;
}
</style>
