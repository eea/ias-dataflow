<template>
  <div v-if="info">
    <div class="question-wrapper">
      <h2><center>{{info.question}}</center></h2>
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
          <div class="card-header">
          <h4>Chose how you want to add a species</h4>
          <h5>Add by selecting a scientific name from the predefined list</h5>
          <b-row>
            <b-col lg="3">
              <label>{{info.scientific_name.label}}</label>
            </b-col>
            <b-col lg="7">
              <!-- @input="updateSelected()" -->
                <multiselect
                  v-model="value"
                  :options="info.scientific_name.options"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  track-by="text"
                  @select="fillCommon($event)"
                  :custom-label="customLabel"

                  @remove="remove($event)"
                >
                </multiselect>

            </b-col>
            <b-col lg="2" class="addbyselection_wrapper">
              <b-btn @click="addBySelection()" variant="primary">Add</b-btn>
            </b-col>
          </b-row>
          <hr>
          <h5>Add manually only if the species name is not available in the predefined list</h5>

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
                        style="margin-bottom: -3rem" variant="primary" class="">Add</b-btn>

              </b-col>
            </b-row>
            <b-row>
              <b-col lg="3">
                <label>{{info.common_name.label}}</label>
              </b-col>

              <b-col lg="7">
                <b-input v-model="selected['common_name']" ></b-input>
              </b-col>
              <b-col lg="2" class="d-xs-block d-md-none d-lg-none d-xl-none">
                <b-btn  @click="addManually(selected['sci_name'], selected['common_name'])"
                        style="margin-bottom: -3rem" variant="primary" >Add</b-btn>
              </b-col>
            </b-row>
          </div>
          </div>
          <hr>

          <div v-if="info.sections" v-for="(selval, selkey, selindex) in info.sections">
            <SectionBsection :sectionProp="info.sections[selkey]" :selkey="selkey" :info="info"
                             @remove-section="removeSection" :tabId="tabId"
                             v-bind:key="'sectionb_sections_' + selkey" :ref="'section_' + selkey"
            ></SectionBsection>
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
import SectionBsection  from "./SectionBsection";

export default {
  components: {FieldGenerator, Multiselect, SectionBsection},
  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
      //value: this.info.scientific_name.selected,
      value: [] ,
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
    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },

    addBySelection() {
      let self = this;

      if(self.info.sections.length === 0){
        self.value.forEach((item, ix) => {
          if(!this.info.sections[ix]){
            this.addSpecies( item, this.info.common_name.selected[ix], ix);
          }
        });
      } else {
        let foundS = [];

        let sections = self.info.sections.map((section ) => { return section.scientific_name.selected.value; });

        let f = self.value.map((name,nix) => {
          if(sections.indexOf(name.value) === -1){
            let cn = self.info.common_name.selected.filter((c) => { return c.name === name.value });
            this.addSpecies( name , cn , self.info.sections.length );
          }
        });

      }

    },

    fillCommon(sci_name){
      for(let specie of speciesB) {
        if(sci_name.value === specie.name) {
          this.info.common_name.selected.push(specie);
          break;
        }
      }
    },

    remove(sci_name){
      let self = this;
      let vm = this;
      let key = null;

      /*this.info.common_name.selected.forEach(function (val, ix) {
        if("undefined" !== typeof vm.info.scientific_name.selected[ix]){
          if(sci_name.value === vm.info.scientific_name.selected[ix].value){
            vm.$delete(vm.info.scientific_name.selected, ix);
            key = ix;
            return false;
          }

        } else if(sci_name.value === val.name ) {
          vm.$delete(vm.info.scientific_name.selected, ix);
          return false;
        }
      });*/
      this.info.sections.map((sc, ix) => {
        if( sc.scientific_name.selected.value === sci_name.value ){
          key = ix;
        }
      });

      let newcn = self.info.common_name.selected.filter((cn) => { return cn.name !== sci_name.value});
      self.$set(this.info.common_name, 'selected', newcn);

      vm.$delete(vm.info.sections, key);
      //vm.$delete(vm.info.common_name.selected, key);
      //vm.$delete(vm.info.scientific_name.selected, key);
      vm.$delete(this.expanded, key);
      vm.$forceUpdate();
    },

    removeSection(selkey,field){
      let self = this;
      this.$delete(this.info.sections, selkey);

      let name = field.scientific_name.selected.value;

      let newcn = self.info.common_name.selected.filter((cn) => { return cn.name !== name});
      self.$set(this.info.common_name, 'selected', newcn);

      self.value.map((v, ix) => {
        if(name === v.value) self.$delete( self.value, ix);
      });

      self.info.scientific_name.selected = self.info.scientific_name.selected.filter((v,ix) => {
        return (name !== v.value)
      });


      //this.$delete(this.info.common_name.selected, selkey);
      //this.$delete(this.value, selkey);

      this.$delete(this.expanded, selkey);
      this.$forceUpdate();
    },

    updateSelected(){
      //this.info.scientific_name.selected = JSON.parse(JSON.stringify(this.value));
      let self = this;
      self.value.forEach((val, vix)=> {
        let f = self.info.scientific_name.selected.filter((n) => { return val.text === n.text});
        if(f.length === 0) this.info.scientific_name.selected.push(val);
      });

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
          name: this.selected['common_name']
        };
        sci_name = {
          country: "",
          text: this.selected['sci_name'],
          value: this.selected['sci_name'],
          manual: true,
        };
        let selkey = this.info.sections.length;

        //this.$set(this.info.common_name.selected, selkey, com_name );
        //this.$set(this.info.scientific_name.selected, selkey, sci_name );

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
          options: [{ value: true, text: "Yes" }, { value: false, text: "No" },
             { value: 'unknown', text: "Currently unknown" }
          ],
          index: 3,
          name: 'mandatory_question',
        },
        depending_on_mandatory: {
          label: 'A distribution map for this species has to be included in the file which will be uploaded in the \'Distribution map for SECTION B\' field available on \'DISTRIBUTION MAP\' section (optional).',
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
              multiple: false,
              selected: {
                region: null,
                pattern: null
              },
              options:[
                {
                  text: 'Sexual', value: 0,
                },
                {
                  text: 'Asexual', value: 1,
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
            }
          ],
          spread_pattterns:[
            {
              label: 'Spread patterns',
              type: 'select',
              patternType: 'spread',
              name: 'spread_patterns',
              add: true,
              multiple: true,
              selected: {
                region: null,
                pattern: null
              },
              options:[
                {
                  text: 'a) The species was already widely spread before 2015',
                  index: 'a',
                  value: 0,
                },

                {
                  text: 'b) The species predominantly entered through natural dispersal from a neighbouring country',
                  index: 'b',
                  value: 1,
                },

                {
                  text:'c) The species predominantly entered with unintentional human assistance',
                  index: 'c',
                  value : 2,
                },

                {
                  text: 'd) The species predominantly entered with intentional human assistance',
                  index: 'd',
                  value: 3,
                },

                {
                  text: 'e) There is no evidence of new entries into the Member State',
                  index: 'e',
                  value: 4,
                },

                {
                  text: 'f) The species predominantly spread through natural dispersal',
                  index: 'f',
                  value: 5,
                },

                {
                  text: 'g) The species predominantly spread with unintentional human assistance',
                  index: 'g',
                  value: 6,
                },

                {
                  text: 'h) The species predominantly spread with intentional human assistance',
                  index: 'h',
                  value: 7,
                },

                {
                  text: 'i) There is no evidence of spread within the Member State',
                  index: 'i',
                  value: 8,
                },

                {
                  text: 'j) The species spread from the Member State into other Member State(s)',
                  index: 'j',
                  value: 9
                }
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
              type: "checkbox",
              name: "not_included",
              label: "The species is included in the national list but is not subject to any measures",
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

    customLabel({country, text, value, manual}){
      if(manual) return '';
      return `${text}`;
    },

    validate(){
      let promises = [];
      for( let section in this.$refs){
        if(this.$refs.hasOwnProperty(section)) {
          if( 'undefined' !== typeof this.$refs[section][0].$validator ){
            promises.push(this.$refs[section][0].$validator.validate());
          }

          if('undefined' !== typeof this.$refs[section][0].validate){
            promises.push(this.$refs[section][0].validate());
          }
        }
      }
      return new Promise(function(resolve, reject) {
        Promise.all(promises).then((res) => {
          // if no errors
          if(res.filter((it)=>{ return it === false}).length === 0){
            resolve(res);
          } else {
            reject(res);
          }

        }).catch((e) => {
          reject(e);
        });
      });
    },
  }

}
</script>

<style lang="css" scoped>


.checkbox-wrapper * {
    cursor: pointer;
}

.checkbox-wrapper input {
  margin-right: .2rem;
}

.checkbox-wrapper label{
  margin-bottom: 0;
}


@media screen and (max-width: 768px) {
  .addbyselection_wrapper {
    margin-top: 1rem;
  }
}

</style>

<style>
  .multiselect .multiselect__tag {
    font-weight: 600;
    font-size: 1.2em;
  }
</style>
