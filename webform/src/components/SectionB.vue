<template>
  <div v-if="info">
  <div class="question-wrapper">
      <h1>{{info.table_label}}</h1>
      <p>{{info.question}}</p>
      <b-row>
        <b-col>
          <label>{{info.mandatory_item.label}}</label>
        </b-col>
        <b-col>
            <b-form-select v-model="info.mandatory_item.selected" :options="info.mandatory_item.options"></b-form-select>
        </b-col>
      </b-row>
      <b-card v-if="info.mandatory_item.selected === true" class="fields-add-wrapper">
        <h4>Chose how you want to add a species</h4>

        <h5>Add by selectting a scientific name from the predefined list</h5>
        <b-row>
          <b-col lg="3">
            <label>{{info.scientific_name.label}}</label>
          </b-col>
          <b-col lg="7">
              <b-form-select v-model="info.scientific_name.selected" @change="fillCommon($event)" :options="info.scientific_name.options"></b-form-select>
          </b-col>
          <b-col lg="2">
            <b-btn @click="addBySelection(info.scientific_name.selected)" variant="primary">add</b-btn>
          </b-col>
        </b-row>
        <hr>

        <h5>Add manually</h5>
        <b-row>
          <b-col lg="3">
            <label>{{info.scientific_name.label}}</label>
          </b-col>
          <b-col lg="7">
              <b-input v-model="info.scientific_name.selected" :options="info.scientific_name.options"></b-input>
          </b-col>
          <b-col lg="2">
            <b-btn  @click="addManually(info.scientific_name.selected, info.common_name.selected)" style="margin-bottom: -3rem" variant="primary">add</b-btn>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="3">
            <label>{{info.common_name.label}}</label>
          </b-col>
          <b-col lg="7">
              <b-input v-model="info.common_name.selected"></b-input>
          </b-col>
       
        </b-row>

      </b-card>

<!--       <pre>
        {{info}}
      </pre> -->

      <b-card class="mt-5 mb-5" v-for="(section, section_index) in info.sections">
        <h3><small>{{section.scientific_name.label}}: </small>{{section.scientific_name.selected}}</h3>
        <h4><small>{{section.common_name.label}}: </small>{{section.common_name.selected}}</h4>        
        <b-row>
          <b-col>
            <b-input-group :prepend="section.mandatory_item.label">  
              <b-form-select v-model="section.mandatory_item.selected" :options="section.mandatory_item.options"></b-form-select>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row class="mt-3" v-if="section.mandatory_item.selected === true">
          <b-col lg="3">
            {{section.depending_on_manadatory.label}}
          </b-col> 
          <b-col lg='9'>
              <textarea class="form-control" v-model="section.depending_on_manadatory.selected"></textarea>
          </b-col>
        </b-row>

        <b-row class="mt-3" v-if="section.mandatory_item.selected === true">
          <b-col lg="3">
            {{section.additional_info.label}}
          </b-col> 
          <b-col lg='9'>
              <textarea class="form-control" v-model="section.additional_info.selected"></textarea>
          </b-col>
        </b-row>
      
      <h4>{{section.section.label}}</h4>
      <div v-for="field in section.section.fields">
        <div class="checkbox-wrapper" v-if="field.type != 'textarea'" lg="12">
          <input :id="`${field.name}_${section_index}_${tabId}`" type="checkbox" v-model="field.selected" ></input>
          <label :for="`${field.name}_${section_index}_${tabId}`">{{field.label}}</label>
        </div>
    
        <b-col lg="12" v-else>
            <label>{{field.label}}</label>
            <textarea class="form-control" v-model="field.selected" ></textarea>
        </b-col>
      </div>

      </b-card>
  

       
      </div>
  </div>
</template>


<script>

import {slugify} from '../utils.js';
import speciesB from '../assets/speciesB.js'

export default {


  props: {
    info: null,
    tabId:null
  },

  data () {
    return {

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    addBySelection(sci_name) {
      for(let specie of speciesB) {
        if(specie.scientific_name === sci_name) {
          this.addSpecies(sci_name, specie.common_name)
        }
      }
    },

    fillCommon(sci_name){
      for(let specie of speciesB) {
        if(sci_name === specie.scientific_name) {
          this.info.common_name.selected = specie.common_name
        }
      }
    },


    addManually(sci_name, com_name) {
      this.addSpecies(sci_name, com_name)
    },

    addSpecies(sci_name, com_name){
      let tab_1_section = {
        scientific_name: {
          label: 'Species scientific name',
          selected: sci_name,
          type: 'text',
          disabled: true,
          name: 'scientific_name',
          index: 1,
        },
        common_name: {
          label: "Common name of the species (optional)",
          selected: com_name,
          disabled: true,
          name: 'common_name',
          type: 'text',
          index: 2,
        },
        mandatory_item: {
          label: 'Is the species present in the territory of the Member State?',
          type: 'select',
          selected: 1,
          options: [{ value: true, text: "yes" }, { value: false, text: "no" }, { value: 'unknown', text: "Currently unknown" }],
          index: 3,
          name: 'mandatory_question',
        },
        depending_on_manadatory: {
          label: 'Distribution of the species, including information on its spread and reproductive patterns (to be completed only if the answer to question 3 above is ‘Yes’',
          selected: '',
          type: 'textarea',
          index: 4,
          name: 'distribution_of_species'
        },
        additional_info: {
          label: 'Additional information (optional)',
          type: 'textarea',
          index: 5,
          selected: '',
          name: 'additional_info'
        },
        section: {
          label: "Measure(s) applied in the territory of the Member State in relation to the species",
          fields: [
            {
              type: "checkbox",
              name: "restriction_internationally_transport",
              label: "Restriction to intentionally transport, except in the context of eradication",
              selected: false,
            },
            {
              type: "checkbox",
              name: "restriction_internationally_market",
              label: "Restriction to intentionally place on the market",
              selected: false,
            },
            {
              type: "checkbox",
              name: "restriction_internationally_use_exchange",
              label: "Restriction to intentionally use or exchange ",
              selected: false,
            },
            {
              type: "checkbox",
              name: "restriction_internationally_reproduce_grow_cultivate",
              label: "Restriction to intentionally permit to reproduce, grown or cultivated, including in contained holding ",
              selected: false,
            },
            {
              type: "checkbox",
              name: "restriction_internationally_release",
              label: "Restriction to intentionally release into the environment",
              selected: false,
            },
            {
              type: "checkbox",
              name: "derogations_within_art8",
              label: "Derogations foreseen within the permit system under Article 8  ",
              selected: false,
            },
            {
              type: "checkbox",
              name: "addressed_art13",
              label: "Addressed in the action plans pursuant to Article 13 ",
              selected: false,
            },
            {
              type: "checkbox",
              name: "covered_art14",
              label: "Covered by the surveillance system pursuant to Article 14",
              selected: false,
            },
            {
              type: "checkbox",
              name: "controls_to_prevent_international_introduction",
              label: "Official controls to prevent the intentional introduction",
              selected: false,
            },
            {
              type: "checkbox",
              name: "early_detection",
              label: "Subject to early detection system",
              selected: false,
            },
            {
              type: "checkbox",
              name: "rapid_eradiction",
              label: "Subject to rapid eradication following an early detection  ",
              selected: false,
            },
            {
              type: "checkbox",
              name: "management_measures_if_widely_spread",
              label: "Subject to management measures if widely spread",
              selected: false,
            },
            {
              type: "checkbox",
              name: "restoration_measures",
              label: "Restoration measures",
              selected: false,
            },
            {
              type: "textarea",
              name: "additional_info",
              label: "Additional information (optional)",
              selected: '',
            },
          ]
        }
      }

      this.info.sections.push(tab_1_section)

    },
  },
}
</script>

<style lang="css" scoped>
.checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem 0;
    font-size: 1rem;
}

.checkbox-wrapper:hover {
  text-shadow: 1px 1px 3px #aaa;
}

.checkbox-wrapper * {
    cursor: pointer;

}

.checkbox-wrapper input {
  margin-right: .2rem;
}

.checkbox-wrapper label{
  margin-bottom: 0;
}

</style>