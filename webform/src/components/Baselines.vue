<template>
  <div v-if="info && country && region && regionName && region">

  <div class="question-wrapper">
        <h3>{{info.label}} {{regionName}} </h3>

        <div class="question">
            <p>{{info.data.question}}</p>
        </div>
      
  <div class="answer" style="position: relative;">
        <!-- <div class="table-head">
          </div> -->
   
          <div role="tablist">

            <div role="tablist">

              <b-card v-if="pollutant.region === region" style="background: #eee" v-for="(pollutant,index) in info.data.table.pollutants" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`pollutant_table_${index}`" variant="info">
                   {{pollutant.pollutant_title.label}} : {{getPollutantTitle(pollutant.pollutant_title.selected)}} 
                  <span style="float:right">▼</span>
                </h5>
              <br>

              <b-form-select required :id="`${tabId}_${index}_${pollutant.pollutant_title.name}_${pollutant.pollutant_title.type}`" :options="pollutant.pollutant_title.options" :name="pollutant.pollutant_title.name" @change="current_selections.pollutant = $event" v-model="pollutant.pollutant_title.selected"></b-form-select>

              <!-- <b-btn variant="danger" @click="removeIncidentmov(index)"> X</b-btn>  -->

                <b-collapse class="mt-3" visible :id="`pollutant_table_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in pollutant.pollutant_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input v-if="item.type !='select' && item.type != 'checkbox'" required :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected"></b-form-input>
                          <b-form-checkbox v-else-if="item.type === 'checkbox'" :options="item.options" v-model="item.selected"></b-form-checkbox>
                          <b-form-select v-else @change="makeOtherFields($event, item, pollutant.pollutant_items)"  :options="item.options" v-model="item.selected"></b-form-select>
                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addPollutant"> + Add</b-btn> 
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';
import pollutantsJson from '../assets/pollutants.json';
import sectorsJson from '../assets/sectors.json';
import estimationtypeJson from '../assets/estimationtype.json'
import emissionfactorunitJson from "../assets/emissionfactorunit.json"
import defaultValues from '../assets/defaultemissionfactor.json'

export default {
  props: {
    info: null,
    tabId:null,
    country: null,
    region: null,
    regionName: null
  },

  data () {
    return {
      current_selections: {
        pollutant: null,
        process: null,
        sector: null,
        subsector: null,
      },
      selectsOptions: {
        pollutant: [],
        year: [],
        sector: [],
        subsector: [],
        process: [],
        estimated: [],
        emission_factor_unit: [],
      }
    }
  },


  created() {

    if(this.info.data.table.pollutants.length === 0) {
      this.addPollutant()
    }

    this.makeFormData()
  },

  methods: {
    makeFormData() {

      for(let pollutantData of this.info.data.table.pollutants) {

        for(let pollutant of pollutantsJson) {
          pollutantData.pollutant_title.options.push({value: pollutant.pollutant_id, text: pollutant.pollutant_name})
        }

        for(let item of pollutantData.pollutant_items) {

          if(item.name === 'sector') {
            for(let sector of sectorsJson) {
              item.options.push({value: sector.sector_id, text: sector.sector_name})
            }
          }

          if(item.name === 'estimated') { 
            for (let estimation of estimationtypeJson) {
             item.options.push({value: estimation.estimation_type_id, text: estimation.name})
            }
          }

          if(item.name === 'emission_factor_unit') { 
            for(let emission of emissionfactorunitJson) {
              item.options.push({value: emission.emission_factor_unit_id, text: emission.name})
            }
          }

          if(item.name === 'year')  {
            item.options = this.generateYears(1998)
          }
        } 

      }

    },


    makeOtherFields(selected, item, parent){
      if(item.name === 'sector') {
        for (let sector of sectorsJson) {
          if(sector.sector_id === selected) {
            for(let field of parent) {
              if(field.name ==='subsector') {
                field.options = []
                for(let subsector of sector.subsectors) {
                  field.options.push({value:subsector.subsector_id, text: subsector.subsector_name})
                }
              }
            }
            break;
          }
        }
      } else if (item.name === 'subsector') {
        for (let sector of sectorsJson) {
            for(let subsector of sector.subsectors) {
              if(subsector.subsector_id === selected) {
               for(let field of parent) {
                  if(field.name === 'process'){
                    field.options = []
                    for (let process of subsector.processes) {
                      field.options.push({value:process.process_id, text:process.process_name})
                    }
                  }
                }
                break;
              }
            }
        }
      }

      // console.log()


      let efv = null
      let efu = null


      for(let field of parent) {
        if(field.name === 'emission_factor')
          efv = field

        if(field.name === 'emission_factor_unit')
          efu = field        
      }


      if(item.name === 'process')
        this.current_selections.process = selected

      if(item.name === 'sector')
        this.current_selections.sector = selected

      if(item.name === 'subsector')
        this.current_selections.subsector = selected

      if(item.name === 'process' || item.name === 'sector' || item.name === 'subsector') {

        for(let defaultValue of defaultValues) {

          if(defaultValue.pollutant_pollutant_id === this.current_selections.pollutant && defaultValue.process_process_id === this.current_selections.process && defaultValue.sector_sector_id === this.current_selections.sector && defaultValue.subsector_subsector_id === this.current_selections.subsector) {
            efv.selected = defaultValue.default_value
            efu.selected = defaultValue.emission_factor_unit_emission_factor_unit_id
          } else {
            efv.selected = null
            efu.selected = null
          }
        }

      }

    },


    getPollutantTitle(selected) {
      for(let pollutant of pollutantsJson) {
        if(pollutant.pollutant_id === selected)
          return pollutant.pollutant_name
      } 
    },

    generateYears(startYear) {
        var currentYear = new Date().getFullYear(), years = [];
        startYear = startYear;

        while ( startYear <= currentYear ) {
                years.push({text:startYear++ , value: startYear++});
        } 

        return years;
    },

    getSelectItems(name) {
      return this.selectsOptions[name]
    },  


    addPollutant() {
      const pollutant = {
          region: this.region,
          pollutant_title: {
            name: 'pollutant',
            type: 'select',
            label: 'Pollutant',
            selected: '',
            options: [],
            required: true,
          },
          pollutant_items: [{
              label: 'Year',
              type: 'select',
              name: 'year',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Sector',
              type: 'select',
              name: 'sector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Subsector',
              type: 'select',
              name: 'subsector',
              selected: '',
              options: [],
              required: true,

            }, {
              label: 'Process',
              type: 'select',
              name: 'process',
              selected: '',
              options: [],
            }, {
              label: 'Facility',
              type: 'select',
              name: 'facility',
              selected: '',
              options: [],
            }, {
              label: 'From PRTR',
              type: 'checkbox',
              name: 'from_prtr',
              selected: false,
              options: [{ value: false, text: '' }, { value: true, text: '' }]
            },
            {
              label: 'Estimated based on',
              type: 'select',
              name: 'estimated',
              selected: '',
              options: [],
              required: true,

            },
            {
              label: 'Emission factor',
              type: 'number',
              name: 'emission_factor',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Emission factor unit',
              type: 'select',
              name: 'emission_factor_unit',
              selected: '',
              options: [],
            },
            {
              label: 'Production',
              type: 'number',
              name: 'production',
              validation: 'double',
              selected: '',
              required: true,
            },
            {
              label: 'Production unit',
              type: 'select',
              name: 'production_unit',
              selected: '',
              options: [],
              required: true,
            },
            {
              label: 'Total releases',
              type: 'number',
              name: 'total_releases',
              validation: 'double',
              selected: '',
              disabled: true,
            },
            {
              label: 'Total releases unit',
              type: 'select',
              name: 'total_releases_unit',
              selected: '',
              options: [],
              disabled: true,
            },
          ]
        }

      this.info.data.table.pollutants.push(pollutant)
      this.makeFormData()
    },

    titleSlugify(text) {
      return slugify(text)
    },
  },
}
</script>

<style lang="css" scoped>

</style>