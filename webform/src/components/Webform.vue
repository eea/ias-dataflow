<template>
	<b-container fluid class="main-layout">
    <center><h1 class="mb-3 mt-2">IAS dataflow</h1></center>
    <center><h5><span class="text-muted">Technical formats to be used by the Member States for transmitting to the Commission the information pursuant to paragraph 1 of Article 24 of Regulation (EU) No 1143/2014 on the prevention and management of the introduction of invasive alien species</span></h5></center>

    <formsubmit v-if="prefilled" :country.sync="country" :info.sync="form" @validate-components="validateSections"
                    :validated="validated" ref="formsubmit" @open-error-modal="openErrorModal"></formsubmit>
    <b-card v-if="prefilled" no-body ref="content">
        <b-form validated novalidate @submit="onSubmit" >
          <b-tabs card v-model="tabIndex"  >
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_0.label)" active ref="country_tab" style="overflow-y: auto;">
              <countrytab tabId="0" :info.sync="form.tab_0" ref="country"></countrytab>
            </b-tab>
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_1.label)" ref="sectiona_tab" style="overflow-y: auto;">
     			    <sectiona tabId="1" :info.sync="form.tab_1" ref="sectiona" :jsondata="form.jsonData"></sectiona>
            </b-tab>
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_2.label)" ref="sectionb_tab" style="overflow-y: auto;">
              <sectionb v-bind:data-vv-scope="'sectionb'" tabId="2" :info.sync="form.tab_2" ref="sectionb"></sectionb>
            </b-tab>
            <!-- TODO: enable WIP -->
            <!--<b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_3.label)" ref="sectionc_tab" style="overflow-y: auto;">
              <sectionc tabId="3" :info.sync="form.tab_3" ref="sectionc"></sectionc>
            </b-tab>-->
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_4.label)" ref="distributionmap_tab"style="overflow-y: auto;">
              <distributionmap tabId="4" :info.sync="form.tab_4" ref="distributionmap"></distributionmap>
            </b-tab>
          </b-tabs>
        </b-form>
      </b-card>

      <div v-if="!prefilled" class="spinner">
        <div class="loader"></div>
      </div>

      <b-modal hide-footer ref="errorsModal" style="max-height: 800px;" id="errorsModal">

        <div v-if="errors.items.filter((item) => { return item.scope.indexOf('sectiona') !== -1; }).length > 0" style="margin-bottom: 5px;">
          <b-btn @click="expandedSecA = !expandedSecA" :class="expandedSecA ? 'collapsed' : null" variant="danger" style="width: 100%;">
            Section A errors
          </b-btn>
          <b-collapse id="secErrorsA" v-model="expandedSecA" style="border: 1px solid #eee;overflow-y: auto; ">
            <div v-for="error in errors.items.filter((item) => { return item.scope.indexOf('sectiona') !== -1; })">
              <b-badge variant="danger" style="padding: 0.5rem;margin-bottom: 0.3rem;white-space: normal">
                <b-link v-bind:href="'sectiona|'+'[name=\'' + error.field +'\']|scope=' + error.scope" @click="scrollIntoView($event, error)"
                        style="color: #fff;"
                >{{ error.scope.split("_")[0] }} : {{ error.msg }} </b-link>
              </b-badge>
            </div>
          </b-collapse>
        </div>

        <div v-if="errors.items.filter((item) => { return item.scope.indexOf('sectionb') !== -1; }).length > 0" style="margin-bottom: 5px;">
          <b-btn @click="expandedSecB = !expandedSecB" :class="expandedSecB ? 'collapsed' : null"  variant="danger" style="width: 100%;" >
            Section B errors
          </b-btn>
          <b-collapse id="secErrorsB" v-model="expandedSecB" style="border: 1px solid  #eee;overflow-y: auto;">
            <div v-for="error in errors.items.filter((item) => { return item.scope.indexOf('sectionb') !== -1; })">
              <b-badge variant="danger" style="padding: 0.5rem;margin-bottom: 0.3rem;white-space: normal">
                <b-link v-bind:href="'sectionb|'+'[name=\'' + error.field +'\']|scope=' + error.scope" @click="scrollIntoView($event, error)"
                        style="color: #fff;"
                >{{ error.scope.split("_")[0] }} : {{ error.msg }}</b-link>
              </b-badge>
            </div>
          </b-collapse>
        </div>

        <div v-if="errors.items.filter((item) => { return item.scope.indexOf('sectionc') !== -1; }).length > 0" style="margin-bottom: 5px;">
          <b-btn @click="expandedSecC = !expandedSecC"  :class="expandedSecC ? 'collapsed' : null"  variant="danger" style="width: 100%;">
            Section C errors
          </b-btn>
          <b-collapse id="secErrorsC" v-model="expandedSecC" style="border: 1px solid  #eee;overflow-y: auto;">
            <div v-for="error in errors.items.filter((item) => { return item.scope.indexOf('sectionc') !== -1; })">
              <b-badge variant="danger" style="padding: 0.5rem;margin-bottom: 0.3rem;white-space: normal">
                <b-link v-bind:href="'sectionc|'+'[data-vv-name=\'' + error.field  +'\']|scope=' + error.scope" @click="scrollIntoView($event, error)"
                        style="color: #fff;"
                >{{ error.scope.split("_")[0] }} : {{ error.msg }}</b-link>
              </b-badge>
            </div>
          </b-collapse>
        </div>

        <div v-if="errors.items.filter((item) => { return item.scope.indexOf('dmap') !== -1; }).length > 0" style="margin-bottom: 5px;">
          <b-btn @click="expadedDistMap = !expadedDistMap"  :class="expadedDistMap ? 'collapsed' : null"  variant="danger" style="width: 100%;">
            Distribution Map errors
          </b-btn>
          <b-collapse id="secErrorsC" v-model="expadedDistMap" style="border: 1px solid  #eee;overflow-y: auto;">
            <div v-for="error in errors.items.filter((item) => { return item.scope.indexOf('dmap') !== -1; })">
              <b-badge variant="danger" style="padding: 0.5rem;margin-bottom: 0.3rem;white-space: normal">
                <b-link v-bind:href="'dmap|'+'[data-vv-name=\'' + error.field  +'\']|scope=' + error.scope" @click="scrollIntoView($event, error)"
                        style="color: #fff;"
                >{{ error.scope.split("_")[0] }} : {{ error.msg }}</b-link>
              </b-badge>
            </div>
          </b-collapse>
        </div>

      </b-modal>

    </b-container>
</template>

<script>

import {getInstance, getCountry} from '../api.js';

import SectionA from './SectionA.vue'
import SectionB from './SectionB.vue'
import SectionC from './SectionC.vue'
import DistributionMap from './DistributionMap.vue'
import Countrytab from './Country.vue'
import FormSubmit from './FormSubmit.vue'
import form from '../assets/form.js'
// import incidentJson from '../assets/incident.js';

export default {
  name: 'Webform',
  components: {
    sectiona: SectionA,
    sectionb: SectionB,
    sectionc: SectionC,
    distributionmap: DistributionMap,
  	formsubmit: FormSubmit,
    countrytab: Countrytab,
  },

  data () {
    return {
    	visibleTab: false,
      form: {},
      button_text: 'Hide list',
      country: '',
      prefilled: false,
      validated: false,
      tabIndex: 0,
      tabMapping: {
    	  countrytab: 0,
    	  sectiona: 1,
        sectionb: 2,
        sectionc: 3,
        dmap: 4,
      },
      expandedSecA: false,
      expandedSecB: false,
      expandedSecC: false,
      expadedDistMap: false,
    }
  },

  created() {
    form().then((fdata) => {

      getInstance().then((response) => {
        let instance_data = response.data;
        getCountry().then((result) => {
          //console.dir(result);
          this.country = result;
          this.prefill(instance_data,fdata);
        })
      })
    }).catch((rej) => {
      console.error(rej)
    });
  },

  methods: {
    openErrorModal(){
      if("undefined" !== typeof this.$refs.errorsModal) this.$refs.errorsModal.show();
    },

    prefill(data,fdata){
      let self = this;
      if('undefined' !== typeof data.IAS.country){
        data.IAS.country.tables.table_1.fields.map((field, ix) => {
          fdata.country.tables.table_1.fields[ix].selected = field.selected;
        });
      }

      if('undefined' !== typeof data.IAS.tab_0){
        data.IAS.tab_0.map((field) => {
          fdata.tab_0.tables.table_1.fields.map((f) => {
            if(f.name === field.name) f.selected = field.selected;
          });
        });
      }

      if('undefined' !== typeof data.IAS.tab_1){
        data.IAS.tab_1.sections.map((sectionI) => {
          fdata.tab_1.sections = fdata.tab_1.sections.map((sectionF) => {
            if(sectionI.scientific_name === sectionF.scientific_name.selected){
              if( sectionF.mandatory_item.selected !== '') sectionF.mandatory_item.selected = sectionI.mandatory_item.selected;

              // reproduction_patterns
              if( sectionI.reproduction_patterns.length > 0 ){
                let blank = JSON.parse(JSON.stringify(sectionF.depending_on_mandatory.reproduction_patterns[0]));

                sectionI.reproduction_patterns.map((pat, ix) => {
                  if(ix !== 0){
                    sectionF.depending_on_mandatory.reproduction_patterns[ix] = JSON.parse(JSON.stringify(blank));
                  }
                  let found = sectionF.depending_on_mandatory.reproduction_patterns[ix].options.filter((op) => {
                    return op.text === pat.pattern;
                  });
                  if(found.length > 0) {
                    sectionF.depending_on_mandatory.reproduction_patterns[ix].selected.pattern =  found[0].value;
                    sectionF.depending_on_mandatory.reproduction_patterns[ix].selected.region =  pat.region;
                  }
                });
              }

              if( sectionI.spread_pattterns.length > 0 ){
                let blank = JSON.parse(JSON.stringify(sectionF.depending_on_mandatory.spread_pattterns[0]));

                sectionI.spread_pattterns.map((pat, ix) => {
                  if(ix !== 0){
                    sectionF.depending_on_mandatory.spread_pattterns[ix] = JSON.parse(JSON.stringify(blank));
                  }

                  let found = pat.pattern.map((p) => {
                    let f = sectionF.depending_on_mandatory.spread_pattterns[ix].options.filter((ops) => {
                      return ops.text === p;
                    });
                    return f[0];
                  });
                  if(found.length > 0) {
                    sectionF.depending_on_mandatory.spread_pattterns[ix].selected.pattern = found;
                    sectionF.depending_on_mandatory.spread_pattterns[ix].selected.region =  pat.region;
                  }
                });
              }

              if( "undefined" !== typeof sectionI.additional_info && sectionI.additional_info.selected !== ''){
                sectionF.additional_info.selected = sectionI.additional_info.selected;
              }

              if("undefined" !== typeof sectionI.permits_info &&
                "undefined" !== typeof sectionI.permits_info.question &&
                sectionI.permits_info.question.selected !== '' ){
                // permits_info
                sectionF.tables.table_1.question.selected = sectionI.permits_info.question.selected;

                // table
                sectionI.permits_info.table_sections.map((tabel,ix) => {
                  sectionF.tables.table_1.table_sections[ix].additional_info.selected = tabel.additional_info.selected;
                   sectionF.tables.table_1.table_sections.map((ts, itx) => {
                     if(ts.name === tabel.name){
                       tabel.rows.map((row) => {
                         let newf = ts.table_fields.optionsFields.filter((r, ri) => {
                           if(r.label === row.label){
                             r.index = ri;
                             return r;
                           }
                           //return false;
                         })[0];

                         let newr = JSON.parse(JSON.stringify(newf));
                         newr.label = row.label;

                         row.fields.map((rfield) => {
                           newr.fields.map((field, fi) => {

                             Object.keys(rfield).map((prop) => {
                               if(prop === field.name || prop+'_main' === field.name){
                                 //if array
                                 if(rfield[prop] instanceof Array){
                                    let deffield = JSON.parse(JSON.stringify(field.fields[0]));
                                    newr.fields[fi].fields = [];

                                    rfield[prop].map((rfp, ri) => {
                                      let tmpf = JSON.parse(JSON.stringify(deffield));

                                      tmpf.fields = tmpf.fields.map((f) => {
                                        f.selected = rfp[f.name];
                                        return f;
                                      });
                                      newr.fields[fi].fields.push(tmpf);
                                    });
                                 } else {
                                   if(typeof rfield[prop] === "number"){
                                     newr.fields[fi].selected = rfield[prop];
                                   } else {
                                     newr.fields[fi].fields = newr.fields[fi].fields.map((nwfield) => {
                                       nwfield.fields = nwfield.fields.map((nwf) => {
                                         nwf.selected = rfield[nwf.name];
                                         return nwf;
                                       });
                                       return nwfield;
                                     });
                                   }
                                 }
                               }
                             });

                           });
                         });

                         sectionF.tables.table_1.table_sections[itx].table_fields.fields.push(newr);
                       });

                     }
                   });
                });
              }

              // eradication_measures_info
              if( "undefined" !== typeof sectionI.eradication_measures_info &&
                "undefined" !== typeof sectionI.eradication_measures_info.question &&
                sectionI.eradication_measures_info.question.selected !== '' ){
                let found = sectionF.tables.table_2.question.options.filter((op) => {
                  return op.text === sectionI.eradication_measures_info.question.selected;
                });
                if(found.length > 0) sectionF.tables.table_2.question.selected = found[0].value;

                let oldt = JSON.parse(JSON.stringify(sectionF.tables.table_2.tables[0]));

                sectionF.tables.table_2.tables = [];

                sectionI.eradication_measures_info.tables.map((populationO) => {
                  let temp = JSON.parse(JSON.stringify(oldt));
                  temp.name = populationO.name;
                  temp.label = populationO.name;

                  populationO.table_sections.map((pts) => {
                    temp.table_sections = temp.table_sections.map((ts) => {
                      ts.table_fields.fields = ts.table_fields.fields.map((subfield) => {
                        let arr = [];
                        subfield.fields = subfield.fields.map((field, fix) => {
                          let found = pts.table_fields.filter((pfield) => {
                            return pfield.name === field.name;
                          });
                          if(found.length > 1){
                            if("undefined" !== typeof subfield.type && subfield.type === "add"){
                              found.map((foundfield, fidx) => {
                                let tmptf = JSON.parse(JSON.stringify(field));
                                if("undefined" !== typeof tmptf){
                                  tmptf.selected = foundfield.selected;
                                  if("undefined" !== typeof tmptf.inner_field){
                                    tmptf.inner_field.selected = foundfield.inner_field.selected;
                                  }
                                  arr.push(tmptf);
                                }
                              });
                            } else {
                              found.map((foundfield, fidx) => {
                                if(foundfield.name === field.name){
                                  field.selected = foundfield.selected;
                                }
                              });
                            }
                            //return false;
                          }  else {
                            const arr = ["river_basin_subunits", "marine_sub_regions","effectiveness_measure"];
                            if(arr.indexOf(field.name) !== -1){
                              if("undefined" !== typeof found[0].selected[0]  && found[0].selected instanceof Array){
                                field.selected = found[0].selected[0].value;
                              } else {
                                field.selected = found[0].selected;
                              }
                            } else {
                              field.selected = found[0].selected;
                              if("undefined" !== typeof found[0].inner_field){
                                field.inner_field.selected = found[0].inner_field.selected;
                              }
                            }

                          }
                          return field;
                        }).filter(Boolean);
                        if(arr.length > 0) subfield.fields = arr;
                        return subfield;
                      });
                      if("undefined" !== typeof pts.additional_info.selected) ts.additional_info.selected = pts.additional_info.selected;
                      return ts;
                    });

                  });
                  /*if(populationO.name === "National Population #3"){
                    console.log(temp.table_sections);
                  }*/
                  sectionF.tables.table_2.tables.push(temp);
                });
              }

              // management_measures_info
              if( "undefined" !== typeof sectionI.management_measures_info &&
                "undefined" !== typeof sectionI.management_measures_info.question &&
                sectionI.management_measures_info.question.selected !== '' ){
                let found = sectionF.tables.table_3.question.options.filter((op) => {
                  return op.text === sectionI.management_measures_info.question.selected;
                });
                if(found.length > 0) sectionF.tables.table_3.question.selected = found[0].value;

                let oldt = JSON.parse(JSON.stringify(sectionF.tables.table_3.tables[0]));

                sectionF.tables.table_3.tables = [];

                sectionI.management_measures_info.tables.map((populationO) => {
                  let temp = JSON.parse(JSON.stringify(oldt));
                  temp.name = populationO.name;
                  temp.label = populationO.name;

                  // populations
                  populationO.table_sections.map((pts) => {
                    temp.table_sections = temp.table_sections.map((ts) => {
                      ts.table_fields.fields = ts.table_fields.fields.map((subfield) => {
                        let arr = [];
                        subfield.fields = subfield.fields.map((field, fix) => {
                          let found = pts.table_fields.filter((pfield) => {
                            return pfield.name === field.name;
                          });

                          if(found.length > 1){
                            if("undefined" !== typeof subfield.type && subfield.type === "add"){
                              found.map((foundfield, fidx) => {
                                let tmptf = JSON.parse(JSON.stringify(field));
                                if("undefined" !== typeof tmptf){
                                  if("undefined" !== typeof tmptf.inner_field){
                                    tmptf.selected = foundfield.selected;
                                    tmptf.inner_field.selected = foundfield.inner_field.selected;
                                  }
                                  arr.push(tmptf);
                                }
                              });
                            } else {
                              found.map((foundfield, fidx) => {
                                  if(foundfield.name === field.name){
                                    field.selected = foundfield.selected;
                                  }
                              });
                            }
                          } else if(found.length === 1) {
                            const arr = ["measures_objective", "river_basin_subunits", "marine_basin_subunits","effectiveness_measure"];
                            if(arr.indexOf(field.name) !== -1){
                              if("undefined" !== typeof found[0].selected[0] && found[0].selected instanceof Array){
                                field.selected = found[0].selected[0].value;
                              } else {
                                field.selected = found[0].selected;
                              }
                            } else {
                              field.selected = found[0].selected;

                              if("undefined" !== typeof found[0].inner_field){
                                field.inner_field.selected = found[0].inner_field.selected;
                              }
                            }
                          } else {
                            //return false;
                          }
                          return field;
                        }).filter(Boolean);
                        if(arr.length > 0) subfield.fields = arr;
                        return subfield;
                      });
                      if("undefined" !== typeof pts.additional_info.selected) ts.additional_info.selected = pts.additional_info.selected;
                      return ts;
                    });
                  });
                  sectionF.tables.table_3.tables.push(temp);
                });
              }
            }
            return sectionF;
          });

        });
      }

      if("undefined" !== typeof data.IAS.tab_2){
        let regionOptions = [
          {
            text: 'Romania', value: 'RO',
          },
          {
            text: 'France', value: 'FR',
          },
        ];

        function newSection(sci_name,com_name ){
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
                  regionOptions: regionOptions
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
                  ],
                  //TODO : remove
                  regionOptions: regionOptions
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
          return tab_1_section;
        }
        let sections = [];

        fdata.tab_2.scientific_name.selected = data.IAS.tab_2.scientific_name.selected;
        fdata.tab_2.common_name.selected = data.IAS.tab_2.common_name.selected;

        data.IAS.tab_2.scientific_name.selected.map((name) => {
          let newsection = newSection(name, {});
          sections.push(newsection);
        });

        sections = sections.map((section) => {
          data.IAS.tab_2.sections.map((sectionI) => {
            if(sectionI.scientific_name === section.scientific_name.selected.value){
              //console.log(sectionI.mandatory_item);

              section.common_name.selected = sectionI.common_name.selected;

              let f = section.mandatory_item.options.filter((op) => {
                return op.text === sectionI.mandatory_item.selected;
              });
              if(f.length > 0) section.mandatory_item.selected = JSON.parse(JSON.stringify(f[0])).value;

              section.additional_info.selected = sectionI.additional_info.selected;

              if( sectionI.reproduction_patterns.length > 0 ){

                let blank = JSON.parse(JSON.stringify(section.depending_on_mandatory.reproduction_patterns[0]));

                sectionI.reproduction_patterns.map((pat, ix) => {
                  if(ix !== 0){
                    section.depending_on_mandatory.reproduction_patterns[ix] = JSON.parse(JSON.stringify(blank));
                  }
                  let found = section.depending_on_mandatory.reproduction_patterns[ix].options.filter((op) => {
                    return op.text === pat.pattern;
                  });
                  if(found.length > 0) {
                    section.depending_on_mandatory.reproduction_patterns[ix].selected.pattern =  found[0].value;
                    section.depending_on_mandatory.reproduction_patterns[ix].selected.region =  pat.region;
                  }
                });

              }

              if( sectionI.spread_patterns.length > 0 ){
                let blank = JSON.parse(JSON.stringify(section.depending_on_mandatory.spread_pattterns[0]));

                sectionI.spread_patterns.map((pat, ix) => {
                  if(ix !== 0){
                    section.depending_on_mandatory.spread_pattterns[ix] = JSON.parse(JSON.stringify(blank));
                  }

                  let found = pat.pattern.map((p) => {
                    let f = section.depending_on_mandatory.spread_pattterns[ix].options.filter((ops) => {
                      return ops.text === p;
                    });
                    return f[0];
                  });
                  if(found.length > 0) {
                    section.depending_on_mandatory.spread_pattterns[ix].selected.pattern = found;
                    section.depending_on_mandatory.spread_pattterns[ix].selected.region =  pat.region;
                  }
                });
              }

              sectionI.section.fields.map((field) => {
                section.section.fields = section.section.fields.map((sfield) => {
                  if(sfield.name === field.name){
                    sfield.selected = field.selected;
                  }
                  return sfield;
                });
              });
            }
          });
          return section;
        });

        fdata.tab_2.sections = sections;
      }

      if("undefined" !== typeof data.IAS.tab_3){
        data.IAS.tab_3.section.fields.map((sectionI) => {
          fdata.tab_3.section.fields = fdata.tab_3.section.fields.map((fsection) => {
            if(sectionI.name === fsection.name){
              if( sectionI.type !== "add"){
                fsection.selected = sectionI.selected;
              } else {
                let temp = JSON.parse(JSON.stringify(fsection.fields[0]));
                if(sectionI.fields.length > 0){
                  fsection.fields = [];
                  sectionI.fields.map((field) => {
                    let newfield = JSON.parse(JSON.stringify(temp));
                    newfield.selected = field.selected;
                    newfield.inner_field.selected = field.inner_field.selected;
                    fsection.fields.push(newfield);
                  });
                }

              }

            }
            return fsection;
          });
        });
      }

      if("undefined" !== typeof data.IAS.tab_4){
        data.IAS.tab_4.section.fields.map((field) => {
          fdata.tab_4.section.fields = fdata.tab_4.section.fields.map((sfield) => {
            if(field.name === sfield.name){
              sfield.selected = field.selected;
            }
            return sfield;
          });
        });
      }

      this.form = fdata;
      this.prefilled = true;
    },

    doTitle(title) {
      return title.split(":")[0]
    },

    onSubmit (evt) {
       evt.preventDefault();
    },
    validateSections(){
      let sections = this.$refs;
      let self = this;
      let promises = [];

      Object.keys(sections).filter((item) => {
        return 'undefined' !== typeof sections[item].$validator || sections[item].validate ;
      }).map((section) => {
        if(self.$refs.hasOwnProperty(section) ){
          if( 'undefined' !== typeof self.$refs[section].validate ) {
            promises.push( self.$refs[section].validate() );
          }
          if('undefined' !== self.$refs[section].$validator) promises.push( self.$refs[section].$validator.validate() );
        }
      });

      Promise.all(promises).then((res) => {
       self.$set(self.$refs.formsubmit.$data , 'valid', true);
        //console.log(res);
      }).catch((e) => {
        //console.log("errors");
        console.error(e);
      })
    },

    scrollIntoView ($event, error) {
      $event.preventDefault();
      let href = $event.target.getAttribute('href');

      let section = error.scope.split("_")[0];
      this.tabIndex = this.tabMapping[section];

      let target = href.split("|");
      let sect = target[0];
      let elt = target[1];
      let scope = null;
      target.length > 1 ? scope  = target[2] : scope = null;

      let el = null;
      let todecollapse = false;

      if(sect === 'sectionc') {
        el = this.$refs[sect].$el.querySelector(".card").querySelector(elt);
      } else {
        if(null !== this.$refs[sect].$el.querySelector(elt)){
          el = this.$refs[sect].$el.querySelector(elt).closest(".card");
        } else {
          if(scope !== null){
            let scopesel = scope.replace('scope=', '');
            el = this.$refs[sect].$el.querySelector('[data-vv-scope="' + scopesel + '"]').closest(".card");
          }
        }
        if(el && !el.querySelector(".show") ){
          todecollapse = true;
        }
      }

      if (el) {
        setTimeout(function () {
          function getOffset( el ) {
            let _x = 0;
            let _y = 0;
            while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
              _x += el.offsetLeft - el.scrollLeft;
              _y += el.offsetTop - el.scrollTop;
              el = el.offsetParent;
            }
            return { top: _y, left: _x };
          }
          window.scrollTo( 0, getOffset( el ).top - Math.floor(window.innerHeight/2));
          if(todecollapse){
            let ph = el.querySelector(".panel-heading");
            if(ph) ph.click();
          }

        } , 1000);
      }
    }
  },

}
</script>

<style lang="css" scoped>

#errorsModal .modal {
  max-height: 800px;
}

.subtitle {
  max-width: 488px;margin: auto;display: block;
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

@media (min-width: 1024px){
  .main-layout {
    max-width: 82%;
  }
}
</style>
<style>
  .titletab {
    font-size: 1.2em;
  }

  @media (min-width: 576px){
    .modal-dialog {
      max-width: 1000px;
    }
  }


</style>
