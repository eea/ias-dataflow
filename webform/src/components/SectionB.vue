<template>
  <div v-if="info">
    <b-btn variant="primary" @click="validateForm">Validate</b-btn>
    <!--<div v-for="er in errors.items">
      <b-badge variant="danger">{{ er }}</b-badge>
    </div>

    <div v-for="fiel in fields">
      {{ fiel }}
    </div>-->

    <div class="question-wrapper">
      <h1><center>{{info.question}}</center></h1>
      <br/>
      <h3><i><center>{{info.table_label}}</center></i></h3>
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
                <multiselect v-model="value" :options="info.scientific_name.options"  :multiple="true"
                :close-on-select="false" :clear-on-select="false" :preserve-search="true" track-by="text"
                @select="fillCommon($event)" :custom-label="customLabel" @input="updateSelected()" @remove="remove($event)"
                >
                  <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                </multiselect>

            </b-col>
            <b-col lg="2" class="addbyselection_wrapper">
              <b-btn @click="addBySelection()" variant="primary">add</b-btn>
            </b-col>
          </b-row>
          <hr>
          <h5>Add manually</h5>

          <div style="margin-bottom: 50px">
            <b-row>
              <b-col lg="3">
                <label>{{info.scientific_name.label}}</label>
              </b-col>
              <b-col lg="7">
                <b-input v-model="selected['sci_name']" :options="info.scientific_name.options"
                ></b-input>
              </b-col>
              <b-col lg="2" class="d-none d-md-block d-lg-block d-xl-block">
                <b-btn  @click="addManually(selected['sci_name'], selected['common_name'])"
                        style="margin-bottom: -3rem" variant="primary" class="">add</b-btn>

              </b-col>
            </b-row>
            <b-row>
              <b-col lg="3">
                <label>{{info.common_name.label}}</label>
              </b-col>

              <b-col lg="7">
                <b-input v-model="selected['common_name']"></b-input>
              </b-col>
              <b-col lg="2" class="d-xs-block d-md-none d-lg-none d-xl-none">
                <b-btn  @click="addManually(selected['sci_name'], selected['common_name'])"
                        style="margin-bottom: -3rem" variant="primary" >add</b-btn>

              </b-col>
            </b-row>
          </div>
          <hr>

          <div v-if="info.sections" v-for="(selval, selkey, selindex) in info.sections">

            <b-row> <!-- v-if="info.sections[selkey].scientific_name.selected.text" -->
              <b-col lg="3">
                <label>{{info.scientific_name.label}}</label>
              </b-col>
              <b-col lg="7">
                <b-input v-model="info.sections[selkey].scientific_name.selected.text" :options="info.scientific_name.options"
                         @change="updateSFName($event, selkey)" v-validate="'required'" data-vv-as="Scientific name"
                         v-bind:data-vv-scope="'scientific_name_' + selkey" v-bind:name="'scientific_name_' + selkey"
                ></b-input>
                <b-badge variant="danger" v-show="errors.has('scientific_name_' + selkey + '.' + 'scientific_name_' + selkey )"
                         style="line-height: 3;">{{ errors.first('scientific_name_' + selkey + '.' + 'scientific_name_' + selkey ) }}</b-badge>
              </b-col>
              <b-col lg="2" class="d-none d-md-block d-lg-block d-xl-block">
                <b-btn style="margin-bottom: -3rem" variant="danger" @click="removeSection(selkey)" >remove</b-btn>
              </b-col>
            </b-row>
            <b-row  >
              <b-col lg="3">
                <label>{{info.common_name.label}}</label>
              </b-col>

              <b-col lg="7">
                <b-input v-model="info.sections[selkey].common_name.selected.value"
                         @change="updateSectionCommonName($event,selkey)"></b-input>
              </b-col>
              <b-col lg="2" class="d-xs-block d-md-none d-lg-none d-xl-none">
                <b-btn style="margin-bottom: -3rem" variant="danger" @click="removeSection(selkey)">remove</b-btn>
              </b-col>
            </b-row>
              <b-card class="mt-5 mb-5" v-if="info.sections[selkey]">
                <div class="panel-heading" @click="(expanded.indexOf(selkey) === -1) && info.sections[selkey].mandatory_item.selected ?
                 expanded.push(selkey) : expanded.splice(expanded.indexOf(selkey), 1)">
                  <h3>
                    <font-awesome-icon v-bind:icon="expanded.indexOf(selkey) !== -1 ? 'chevron-down' : 'chevron-right'"
                     v-show="info.sections[selkey].mandatory_item.selected !== 1 && info.sections[selkey].mandatory_item.selected !== false"
                     class="fachevron" />
                    <small>{{info.scientific_name.label}}: </small>{{ info.sections[selkey].scientific_name.selected.text }}</h3>
                  <h4><small>{{info.common_name.label}}: </small>{{info.sections[selkey].common_name.selected.value}}</h4>
                  <b-row>
                    <b-col>
                      <b-badge variant="danger" v-if="errors.has('mandatory_item_'+ selkey + '.mandatory_item_' + selkey)">
                        {{ errors.first('mandatory_item_'+ selkey + '.mandatory_item_' + selkey) }}
                      </b-badge>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-input-group :prepend="info.sections[selkey].mandatory_item.label">
                        <b-form-select v-model="info.sections[selkey].mandatory_item.selected" v-validate="{ selectRequiredNumber: 1 }"
                          data-vv-as="Mandatory item" v-bind:key="'mandatory-item-' + selkey" v-bind:data-vv-scope="'mandatory_item_'+ selkey"
                          v-bind:name="'mandatory_item_' + selkey" :options="info.sections[selkey].mandatory_item.options">
                        </b-form-select>
                      </b-input-group>
                    </b-col>
                  </b-row>
                </div>

                <b-collapse :id="'collapse' + selkey" :visible="expanded.indexOf(selkey) !== -1">
                <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
                    <hr>
                    <h6>
                      {{info.sections[selkey].depending_on_mandatory.label}}
                    </h6>
                    <div class="mt-4" v-if="info.sections[selkey].mandatory_item.selected === true">
                      <PatternField :patternfields="info.sections[selkey].depending_on_mandatory.reproduction_patterns"
                                    @remove-pattern="removePattern" @add-new-pattern="addNewPattern">
                      </PatternField>

                      <PatternField :patternfields="info.sections[selkey].depending_on_mandatory.spread_pattterns"
                                    @add-new-pattern="addNewPattern" @remove-pattern="removePattern">
                      </PatternField>

                      <!-- :key="'depending_on_manadatory_' + selkey + '_' + fieldkey" -->
                      <div class="mb-2" v-for="(field, fieldkey, fieldindex) in info.sections[selkey].depending_on_mandatory.fields">
                        <b-input-group v-if="field.type === 'select' && 'undefined' === typeof field.selected.region"
                                        :prepend="field.label">
                          <b-form-select :options="field.options" v-model="field.selected"
                             v-validate="'selectRequiredBoolean:bool'"
                             v-bind:name="'depending_on_manadatory_' + selkey + '_' + fieldkey"
                             v-bind:key="'depending_on_manadatory_' + selkey + '_' + fieldkey "
                             v-bind:data-vv-scope="'depending_on_manadatory_' + selkey + '_' + fieldkey"
                             data-vv-as="Depending on mandatory"
                          ></b-form-select>

                          <b-input-group-append>
                            <b-btn variant="primary" @click="addCustomField(field)">Add new</b-btn>
                          </b-input-group-append>
                        </b-input-group>




                        <div v-if="field.type === 'file'">
                          <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" files-allowed="jpeg,jpg"
                                          @form-file-uploaded="addFilesToSelected" :multiple=false @form-file-delete="deleteFormFile">
                          </FormFileUpload>
                        </div>

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
                  <div v-if="info.sections[selkey].mandatory_item.selected === true" style="margin-top: 1rem;">
                    <h4>{{info.sections[selkey].section.label}}</h4>

                    <div v-for="field in info.sections[selkey].section.fields">
                      <div class="checkbox-wrapper" v-if="field.type !== 'textarea'" lg="12">
                        <input :id="`${field.name}_${selkey}_${tabId}`" type="checkbox" v-model="field.selected" ></input>
                        <label :for="`${field.name}_${selkey}_${tabId}`">{{field.label}}</label>
                      </div>
                      <div lg="12" v-else >
                        <label>{{field.label}}</label>
                        <textarea class="form-control" v-model="field.selected" ></textarea>
                      </div>
                    </div>
                  </div>
                </b-collapse>
              </b-card>
            </div>

        </b-card>

        <b-modal hide-footer ref="customFieldModal">
          <div v-if="customField" slot="modal-title">{{customField.label}}</div>
          <div v-if="customField">
            <b-input-group class="mb-3" prepend="Name">
              <b-form-input v-model="addCustom.text"></b-form-input>
            </b-input-group>
            <b-input-group prepend="Code">
              <b-form-input v-model="addCustom.value"></b-form-input>
            </b-input-group>
            <b-btn class="mt-3" variant="outline-primary" @click="saveCustomField" block>Add</b-btn>
          </div>
        </b-modal>
    </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';
import speciesB from '../assets/speciesB.js';
import FieldGenerator from "./fieldGenerator";
import Multiselect from 'vue-multiselect';
import {getSupportingFiles, envelope} from '../api.js';
import FormFileUpload from "./FormFileUpload";
import PatternField from "./PatternField";

export default {
  components: {FieldGenerator, Multiselect, FormFileUpload, PatternField},
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
      customField: null,
      addCustom: {
        text: null,
        value: null
      },
      expanded: [],
      regionOptions: [
        {
          text: 'Romania', value: 'RO',
        },
        {
          text: 'France', value: 'FR',
        },
      ]
    }
  },
  methods: {
    titleSlugify(text) {
      return slugify(text)
    },
    addCustomField(field){
      this.customField = field;

      if("undefined" !== typeof this.$refs.customFieldModal) this.$refs.customFieldModal.show();
    },
    saveCustomField(){
      let addField = JSON.parse(JSON.stringify(this.addCustom));
      this.customField.options.push(addField);
      this.customField.selected = addField.value;
      this.addCustom.text = null;
      this.addCustom.value = null;
      this.$refs.customFieldModal.hide();
    },
    addNewPattern(fields){
      let newField = JSON.parse(JSON.stringify(fields[0]));
      newField.selected.pattern = null;
      newField.selected.region = null;
      fields.push(newField);
    },
    removePattern(fields, fieldkey){
      if(fieldkey !== 0) fields.splice(fieldkey, 1);
    },

    addBySelection() {
      this.info.scientific_name.selected.forEach((item, ix) => {
        if(!this.info.sections[ix]){
          this.addSpecies( this.info.scientific_name.selected[ix], this.info.common_name.selected[ix], ix);
        }
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
      let key = null;
      this.info.common_name.selected.forEach(function (val, ix) {
        if("undefined" !== typeof vm.info.scientific_name.selected[ix]){
          if(sci_name.value === vm.info.scientific_name.selected[ix].value){
            key = ix;
            return false;
          }
        } else if(sci_name.value === val.speciesNameLegis ) {
          key = ix;
          return false;
        }
      });
      vm.$delete(vm.info.sections, key);
      vm.$delete(vm.info.common_name.selected, key);
      vm.$delete(this.expanded, key);
      vm.$forceUpdate();
    },

    removeSection(key){
      this.$delete(this.info.sections, key);
      this.$delete(this.info.common_name.selected, key);
      this.$delete(this.value, key);
      this.$delete(this.expanded, key);
      this.$forceUpdate();
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
        let selkey = this.info.sections.length;

        this.$set(this.info.common_name.selected, selkey, com_name );
        this.$set(this.info.scientific_name.selected, selkey, sci_name );

        this.selected.common_name = '';
        this.selected.sci_name = '';
        this.selected.text = '';
        this.addSpecies( sci_name, com_name, selkey);
      }
    },

    updateSFName(val, selkey){
      if( this.info.sections[selkey]){
        this.info.sections[selkey].scientific_name.selected.value = val;
        this.info.sections[selkey].scientific_name.selected.text = val;
      }
    },

    updateSectionCommonName($event,selkey){
      //TODO: validation
      let reg = /(.*?)\[(.*?)\]/;
      let temp = {
        "none": []
      };

      let more = $event.split(";");

      if(more.length === 0){
        this.info.sections[selkey].common_name.selected.common_names = $event;
        return true;
      }

      more.map((item)=>{
        let match =  item.trim().match(reg);
        if(match === null){
          if("undefined" !== typeof temp["none"]){
            temp["none"] = [];
          }
          temp["none"].push(item);
          return true;
        }
        let country = match[2].toUpperCase();

        if("undefined" === typeof temp[country] ){
          temp[country] = [];
        }
        if("undefined" !== typeof match[1]) temp[country].push( match[1]);
      });
      this.info.sections[selkey].common_name.selected.common_names = temp;

    },

    addFilesToSelected(fieldkey,index,field){
      let self = this;
      getSupportingFiles().then((response) => {
        field.selected = envelope + '/' + response.data[response.data.length - 1];
        self.$forceUpdate();
      }).catch((error) =>{
        console.error(error);
      });
    },

    deleteFormFile(found, fieldkey, field){
      field.selected = null;
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
        depending_on_mandatory: {
          label: 'A distribution map for this species is included in the file which will be uploaded in the \'Distribution map for SECTION B\' field available on \'DISTRIBUTION MAP\' section.',
          index: 4,
          name: 'distribution_of_species',
          fields: [
            {
              label: 'Tick if yes',
              type: 'checkbox',
              name: 'distribution_maps_check',
              selected: false,
            },
          ],
          reproduction_patterns: [
            {
              label: 'Reproduction patterns',
              type: 'select',
              add: true,
              patternType: 'reproduction',
              name: 'reproduction patterns',
              selected: {
                region: null,
                pattern: null
              },
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
              ],
              //TODO : remove
              regionOptions: [
                {
                  text: 'Romania', value: 'RO',
                },
                {
                  text: 'France', value: 'FR',
                },
              ]
            }
          ],
          spread_pattterns:[
            {
              label: 'Spread patterns',
              type: 'select',
              patternType: 'spread',
              name: 'spread_patterns',
              add: true,
              selected: {
                region: null,
                pattern: null
              },
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
              ],
              //TODO : remove
              regionOptions: [
                {
                  text: 'Romania', value: 'RO',
                },
                {
                  text: 'France', value: 'FR',
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

    validateForm(){
      this.$validator.validate().then((result)=>{
        //console.log(result);
        //console.log(this.$validator.errors.items);
        /*if (result) {
          // do axois or whatever on validate true
          console.log('All is well');
          return;
        }
        if(!result){
          console.log('Oops!');
          console.log(this.errors);
        }*/
      });
    }
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

.panel-heading {
  cursor: pointer;
}

.fachevron {
  font-size: 60%;
  margin-right: 1rem;
}

@media screen and (max-width: 768px) {
  .addbyselection_wrapper {
    margin-top: 1rem;
  }
}

</style>
