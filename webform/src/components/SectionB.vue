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
            <!--  @select="fillCommon($event)" :custom-label="customLabel" @remove="remove($event)"-->
              <multiselect v-model="value" :options="info.scientific_name.options"  :multiple="true"
              :close-on-select="false" :clear-on-select="false" :preserve-search="true" track-by="text"
              @select="fillCommon($event)" :custom-label="customLabel" @input="updateSelected()" @remove="remove($event)"
              >
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>

          </b-col>
          <b-col lg="2">
            <b-btn @click="addBySelection()" variant="primary">add</b-btn>
          </b-col>
        </b-row>
        <hr>
        <h5>Add manually</h5>

        <!-- for multiselect -->
        <div v-for="(selval, selkey, selindex) in value" v-if="value.length">
          <b-row>
            <b-col lg="3">
              <label>{{info.scientific_name.label}}</label>
            </b-col>
            <b-col lg="7">
              <b-input v-if="value[selkey]['value']"
                       v-model="value[selkey]['value']"
                       :options="info.scientific_name.options"
                       @change="updateSFName($event, selkey)"
              ></b-input>
            </b-col>
            <b-col lg="2">
              <b-btn  @click="addManually(info.scientific_name.selected[selkey], info.common_name.selected[selkey], selkey)"
                      style="margin-bottom: -3rem" variant="primary">add</b-btn>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3">
              <label>{{info.common_name.label}}</label>
            </b-col>
            <b-col lg="7">
              <b-input v-model="info.common_name.selected[selkey]['value']"></b-input>
            </b-col>
          </b-row>

          <!-- v-for="(section, section_index) in info.sections" -->
          <b-card class="mt-5 mb-5" v-if="info.sections[selkey]">
            <h3><small>{{info.scientific_name.label}}: </small>{{ info.sections[selkey].scientific_name.selected.text }}</h3>
            <h4><small>{{info.common_name.label}}: </small>{{info.sections[selkey].common_name.selected.value}}</h4>

            <b-row>
              <b-col>
                <b-input-group :prepend="info.sections[selkey].mandatory_item.label">
                  <b-form-select v-model="info.sections[selkey].mandatory_item.selected"
                                 :options="info.sections[selkey].mandatory_item.options"></b-form-select>
                </b-input-group>
              </b-col>
            </b-row>
            <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
              <hr>
              <h6>
                {{info.sections[selkey].depending_on_manadatory.label}}
              </h6>
              <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
                <div class="mb-2" v-for="field in info.sections[selkey].depending_on_manadatory.fields">
                  <b-input-group  v-if="field.type === 'select'" :prepend="field.label">
                    <b-form-select :options="field.options" v-model="field.selected">
                    </b-form-select>
                    <b-input-group-append>
                      <b-btn variant="primary" @click="addCustomField(field)">Add new</b-btn>
                    </b-input-group-append>
                  </b-input-group>

                  <b-input-group  v-else :prepend="field.label">
                    <b-form-file v-model="field.selected"></b-form-file>
                    <b-input-group-append>
                      <b-btn variant="success">Upload</b-btn>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </div>
            <b-row class="mt-3" v-if="info.sections[selkey].mandatory_item.selected === true">
              <b-col lg="3">
                {{info.sections[selkey].additional_info.label}}
              </b-col>
              <b-col lg='9'>
                <textarea class="form-control" v-model="info.sections[selkey].additional_info.selected"></textarea>
              </b-col>
            </b-row>
            <div v-if="info.sections[selkey].mandatory_item.selected === true">
              <h4>{{info.sections[selkey].section.label}}</h4>

              <div v-for="field in info.sections[selkey].section.fields">
                <div class="checkbox-wrapper" v-if="field.type !== 'textarea'" lg="12">
                  <input :id="`${field.name}_${selkey}_${tabId}`" type="checkbox" v-model="field.selected" ></input>
                  <label :for="`${field.name}_${selkey}_${tabId}`">{{field.label}}</label>
                </div>
                <b-col lg="12" v-else>
                  <label>{{field.label}}</label>
                  <textarea class="form-control" v-model="field.selected" ></textarea>
                </b-col>
              </div>
            </div>

          </b-card>

        </div>

        <!-- for manual entry -->
        <div v-show="value.length === 0">
          <b-row>
            <b-col lg="3">
              <label>{{info.scientific_name.label}}</label>
            </b-col>
            <b-col lg="7">
              <b-input v-model="selected['sci_name']" :options="info.scientific_name.options"
              ></b-input>
            </b-col>
            <b-col lg="2">
              <b-btn  @click="addManually(selected['sci_name'], selected['common_name'])"
                      style="margin-bottom: -3rem" variant="primary">add</b-btn>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="3">
              <label>{{info.common_name.label}}</label>
            </b-col>

            <b-col lg="7">
              <b-input v-model="selected['common_name']"></b-input>
            </b-col>
          </b-row>
          <hr>
          <div v-if="info.sections" v-for="(selval, selkey, selindex) in info.sections">

            <b-row v-if="info.sections[selkey].scientific_name.selected.text">
              <b-col lg="3">
                <label>{{info.scientific_name.label}}</label>
              </b-col>
              <b-col lg="7">
                <!--  -->
                <b-input v-model="info.sections[selkey].scientific_name.selected.text" :options="info.scientific_name.options"
                         @change="updateSFName($event, selkey)"
                ></b-input>
              </b-col>
              <b-col lg="2">
                <!--<b-btn  @click="addManually(info.scientific_name.selected[selkey], info.common_name.selected[selkey], selkey)"
                        style="margin-bottom: -3rem" variant="primary">add</b-btn>-->
              </b-col>
            </b-row>

            <b-row  v-if="info.sections[selkey].common_name.selected.value">
              <b-col lg="3">
                <label>{{info.common_name.label}}</label>
              </b-col>

              <b-col lg="7">
                <b-input v-model="info.sections[selkey].common_name.selected.value" ></b-input>
              </b-col>
            </b-row>

            <b-card class="mt-5 mb-5" v-if="info.sections[selkey]">
              <h3><small>{{info.scientific_name.label}}: </small>{{ info.sections[selkey].scientific_name.selected.text }}</h3>
              <h4><small>{{info.common_name.label}}: </small>{{info.sections[selkey].common_name.selected.value}}</h4>

              <b-row>
                <b-col>
                  <b-input-group :prepend="info.sections[selkey].mandatory_item.label">
                    <b-form-select v-model="info.sections[selkey].mandatory_item.selected"
                                   :options="info.sections[selkey].mandatory_item.options"></b-form-select>
                  </b-input-group>
                </b-col>
              </b-row>
              <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
                <hr>
                <h6>
                  {{info.sections[selkey].depending_on_manadatory.label}}
                </h6>
                <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
                  <div class="mb-2" v-for="field in info.sections[selkey].depending_on_manadatory.fields">
                    <b-input-group  v-if="field.type === 'select'" :prepend="field.label">
                      <b-form-select :options="field.options" v-model="field.selected">
                      </b-form-select>
                      <b-input-group-append>
                        <b-btn variant="primary" @click="addCustomField(field)">Add new</b-btn>
                      </b-input-group-append>
                    </b-input-group>

                    <b-input-group  v-else :prepend="field.label">
                      <b-form-file v-model="field.selected"></b-form-file>
                      <b-input-group-append>
                        <b-btn variant="success">Upload</b-btn>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                </div>
              </div>
              <b-row class="mt-3" v-if="info.sections[selkey].mandatory_item.selected === true">
                <b-col lg="3">
                  {{info.sections[selkey].additional_info.label}}
                </b-col>
                <b-col lg='9'>
                  <textarea class="form-control" v-model="info.sections[selkey].additional_info.selected"></textarea>
                </b-col>
              </b-row>
              <div v-if="info.sections[selkey].mandatory_item.selected === true">
                <h4>{{info.sections[selkey].section.label}}</h4>

                <div v-for="field in info.sections[selkey].section.fields">
                  <div class="checkbox-wrapper" v-if="field.type !== 'textarea'" lg="12">
                    <input :id="`${field.name}_${selkey}_${tabId}`" type="checkbox" v-model="field.selected" ></input>
                    <label :for="`${field.name}_${selkey}_${tabId}`">{{field.label}}</label>
                  </div>
                  <b-col lg="12" v-else>
                    <label>{{field.label}}</label>
                    <textarea class="form-control" v-model="field.selected" ></textarea>
                  </b-col>
                </div>
              </div>

            </b-card>
          </div>



        </div>

      </b-card>



      </div>
  </div>
</template>


<script>

import {slugify} from '../utils.js';
import speciesB from '../assets/speciesB.js';
import FieldGenerator from "./fieldGenerator";
import Multiselect from 'vue-multiselect';

export default {
  components: {FieldGenerator, Multiselect},
  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
      value: this.info.scientific_name.selected,
      selected: {
        sci_name: '',
        text: '',
        common_name: '',
      },
    }
  },
  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    addBySelection() {
      var vm = this;

      this.info.scientific_name.selected.forEach(function (item, ix) {
        vm.addSpecies( vm.info.scientific_name.selected[ix], vm.info.common_name.selected[ix], ix);
      });

    },

    fillCommon(sci_name){
      for(let specie of speciesB) {
        if(sci_name.value === specie.speciesNameLegis) {
          this.info.common_name.selected.push(specie);
          break;
        }
      }
    },
    remove(sci_name){
      let vm = this;
      this.info.common_name.selected.forEach(function (val, ix) {
        if(sci_name.value === val.speciesNameLegis) {
          vm.$delete(vm.info.common_name.selected, ix);
          vm.$delete(vm.info.sections, ix);
          vm.$forceUpdate();
        }
      });
    },
    
    updateSelected(){
      this.info.scientific_name.selected = this.value;
    },

    addManually(sci_name, com_name, selkey) {
      if(selkey){
        this.addSpecies( sci_name, com_name, selkey);
      } else {
        // no multiselect
        com_name = {
          value: this.selected['common_name'],
          country:"",
          permitsIssued:true,
          speciesCode:"",
          speciesNameLegis: this.selected['common_name']
        };
        sci_name = {
          country: "",
          text: this.selected['sci_name'],
          value: this.selected['sci_name']
        };

        this.addSpecies( sci_name, com_name, this.info.sections.length);
        this.selected.common_name = '';
        this.selected.sci_name = '';
        this.selected.text = '';

      }

    },
    updateSFName(val, selkey){
      if( this.info.sections[selkey]){
        this.info.sections[selkey].scientific_name.selected.value = val;
        this.info.sections[selkey].scientific_name.selected.text = val;
      }
    },
    updateCommonName(val, selkey){
      if( this.info.sections[selkey]){
        this.info.sections[selkey].common_name.selected.value = val;
      }
    },

    addSpecies(sci_name, com_name, selkey){
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
          options: [{ value: true, text: "Yes" }, { value: false, text: "No" }, { value: 'unknown', text: "Currently unknown" }],
          index: 3,
          name: 'mandatory_question',
        },
        depending_on_manadatory: {
          label: 'Distribution of the species, including information on its spread and reproductive patterns (to be completed only if the answer to question 3 above is ‘Yes’',
          index: 4,
          name: 'distribution_of_species',
          fields: [
            {
              label: 'Distribution maps',
              type: 'file',
              name: 'distribution_maps',
              selected: null,
            },
            {
              label: 'Reproduction patterns',
              type: 'select',
              add: true,
              name: 'reproduction patterns',
              selected: '',
              options:[
                {
                  text: 'Sexual', value: 0,
                },
                {
                  text: 'Asexusal', value: 1,
                },
                {
                  text: 'Both (sexual and asexual)', value : 2,
                },
                {
                  text: 'Unclear (sexual or asexual) ', value: 3,
                },
                {
                  text: 'Not reproducing in the Member State', value: 4,
                },
                {
                  text: 'Unknown whether the species reproduces in the Member State', value: 5,
                }
              ]
            },
            {
              label: 'Spread patterns',
              type: 'select',
              name: 'spread_patterns',
              add: true,
              selected: '',
              options:[
                {
                  text: 'Diffuse spread /travelling/moving population front (predominantly)', value: 0,
                },
                {
                  text: 'Linear terrestrial spread (predominantly)', value: 1,
                },
                {
                  text: 'Linear aquatic spread (predominantly)', value : 2,
                },
                {
                  text: 'Patchy spread / Long distance jumps (predominantly) ', value: 3,
                },
                {
                  text: 'Combination of diffuse and patchy spread/long distance jumps', value: 4,
                },
                {
                  text: 'Stable, not spreading', value: 5,
                },
                {
                  text: 'Unknown', value: 6,
                },
                {
                  text: 'Other', value: 7,
                },
              ]
            },
          ]
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
      };

      this.$set(this.info.sections, selkey, tab_1_section);

    },

    customLabel({country, text, value}){
      return `${text}`
    },
  }

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
