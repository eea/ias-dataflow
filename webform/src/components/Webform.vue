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
     			    <sectiona tabId="1" :info.sync="form.tab_1" ref="sectiona" :jsondata="form.jsondata"></sectiona>
            </b-tab>
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_2.label)" ref="sectionb_tab" style="overflow-y: auto;">
              <sectionb v-bind:data-vv-scope="'sectionb'" tabId="2" :info.sync="form.tab_2" ref="sectionb"></sectionb>
            </b-tab>

            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_3.label)" ref="sectionc_tab" style="overflow-y: auto;">
              <sectionc tabId="3" :info.sync="form.tab_3" ref="sectionc" :jsondata="form.jsondata"></sectionc>
            </b-tab>
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
import pathways from '../assets/priority_pathways.js'
// import incidentJson from '../assets/incident.js';
import bstructure from '../assets/sectionBSpeciesStructure.js'

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
          this.form = fdata;
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
  sanitizeSection(data, prefillData) {
        let section = data.IAS[prefillData].Row
        if(!section)
          section = []
        if(section && !Array.isArray(section))
          section = [section]
        return section
  },
   prefill(data, form) {
     this.prefillSectionA(data, form)
     this.prefillSectionB(data, form)
     this.prefillSectionC(data, form)
     this.prefillDistributionMaps(data, form)
     this.prefilled = true
   },

   prefillSectionA(data, form) {
      const prefillData = data.IAS.sectionASpecies.Row
      const spreadPatterns = this.sanitizeSection(data, 'spreadPatterns')
      const sectionAMeasures = this.sanitizeSection(data, 'sectionAMeasures')
      const permitedSpecimens = this.sanitizeSection(data, 'permitedSpecimens')
      const permitsIssuedReported = this.sanitizeSection(data, 'permitsIssuedReported')
      const inspectionsPermitsReported = this.sanitizeSection(data , 'inspectionsPermitsReported')
      const partTerritory = this.sanitizeSection(data, 'partTerritory')
      const biogeographicalRegion = this.sanitizeSection(data, 'biogeographicalRegion')
      const riverBasinSubUnit = this.sanitizeSection(data, 'riverBasinSubUnit')
      const marineSubRegions = this.sanitizeSection(data, 'marineSubRegions')
      const methodsUsed = this.sanitizeSection(data, 'methodsUsed')
      const observedNegativeImpacts = this.sanitizeSection(data, 'observedNegativeImpacts')
      const infoImpactSpecies = this.sanitizeSection(data, 'infoImpactSpecies')
      const protectedSpecies = this.sanitizeSection(data, 'protectedSpecies')
      const protectedHabitats = this.sanitizeSection(data, 'protectedHabitats')
      const ecosystems = this.sanitizeSection(data, 'ecosystems')

      prefillData.forEach(species => {
        const currentFormSection = form.tab_1.sections.find(formSection => species.EASINCode === formSection.species_code.selected)
        currentFormSection.common_name.selected[this.country] = species.common_name_national
        currentFormSection.mandatory_item.selected = species.present_in_ms
        currentFormSection.additional_info.selected = species.additional_information
        currentFormSection.depending_on_mandatory.reproduction_patterns[0].selected.pattern = species.reproduction_pattern
        const row_id = species.row_id
        currentFormSection.depending_on_mandatory.spread_patterns[0].selected.pattern = []
        
        // tables

        currentFormSection.tables.table_1.question.selected = species.permits_issued
        currentFormSection.tables.table_2.question.selected = species.eradication_measures
        currentFormSection.tables.table_3.question.selected = species.subject_management_measures


        spreadPatterns.forEach(pattern => {
          pattern.section === 'A' 
          && pattern.parent_row_id === row_id 
          && currentFormSection.depending_on_mandatory.spread_patterns[0].selected.pattern.push(currentFormSection.depending_on_mandatory.spread_patterns[0].options.find(o => 
            o.value === pattern.spread_pattern
          ))
        })

        if(species.permits_issued) {
          // permits
          permitedSpecimens.filter(permitedSpecimen => permitedSpecimen.parent_row_id === row_id).forEach(permitedSpecimen => {
            
          })
        }

        if(species.eradication_measures) {
          // eradications measures
        }

        if(species.subject_management_measures) {
          // management measures
        }

      })


   },

    prefillSectionB(data, form) {
      let prefillData = data.IAS.sectionBSpecies.Row
      if(!prefillData) 
        return

      if(prefillData && !Array.isArray(prefillData)) 
        prefillData = [prefillData]

      let spreadPatterns = this.sanitizeSection(data, 'spreadPatterns')
      let sectionBMeasures = this.sanitizeSection(data, 'sectionBMeasures')

      prefillData.forEach(section => {
        const sci_name = {
          cname: section.common_name_national,
          code: section.EASINCode,
          text: section.scientific_name
        }
        const common_name = {
          cname: section.common_name_national,
          text: section.common_name_national,
          value: section.common_name_national
        } 
        const sectionB = bstructure(sci_name, common_name)
        form.tab_2.sections.push(sectionB)

        const row_id = section.row_id

        sectionB.additional_info.selected = section.additional_information
        sectionB.mandatory_item.selected = section.present_in_MS
        sectionB.depending_on_mandatory.reproduction_patterns[0].selected = {pattern: section.reproduction_pattern, region: null}
        sectionB.depending_on_mandatory.spread_patterns[0].selected.pattern = []
        sectionB.section.fields.find(field => field.name === 'additional_info').selected = section.additional_information_measures
        spreadPatterns.forEach(pattern => {
          pattern.section === 'B' 
          && pattern.parent_row_id === row_id 
          && sectionB.depending_on_mandatory.spread_patterns[0].selected.pattern.push(sectionB.depending_on_mandatory.spread_patterns[0].options.find(o => 
            o.value === pattern.spread_pattern
          ))
        })

        sectionBMeasures.forEach(measure => {
          if(measure.parent_row_id === row_id) {
            console.log(measure.measure)
            sectionB.section.fields.find(checkbox => checkbox.name === measure.measure).selected = true
          } 
        })

      })

    },

    prefillDistributionMaps(data, form) {
      const prefillData = data.IAS.distributionMap.Row
      const section = form.tab_4.section.fields
      section.find(field => field.name === 'section_a_distribution_file').selected[0] = prefillData.distributionMap_sectionA
      section.find(field => field.name === 'section_b_distribution_file').selected[0] = prefillData.distributionMap_sectionB
      section.find(field => field.name === 'section_a_inspire').selected[0] = prefillData.inspireMetadata_sectionA
      section.find(field => field.name === 'section_b_inspire').selected[0] = prefillData.inspireMetadata_sectionB
    },


    prefillSectionC(data, form) {
      const prefillData = data.IAS.sectionC.Row
      const section = form.tab_3.section.fields
      const priorityPathwayData = data.IAS.priorityPathway.Row
      const priorityPathwayDestination = section.find(field => field.name === 'priority_pathways').fields


      section.find(field => field.name === 'web_link').selected = prefillData.weblink_permits 
      section.find(field => field.name === 'action_plans_art13').selected = prefillData.action_plans
      section.find(field => field.name === 'action_plans_art13_file').selected = [prefillData.file_action_plans]
      section.find(field => field.name === 'surveillance_system_art14').selected = prefillData.surveillance_system
      section.find(field => field.name === 'surveillance_system_art14_file').selected = [prefillData.file_surveillance_system]
      section.find(field => field.name === 'official_control_system').selected = prefillData.official_control_system
      section.find(field => field.name === 'official_control_system_file').selected = [prefillData.file_official_control_system]
      //TODO: missing mescription of measures taken
      section.find(field => field.name === 'cost').selected = prefillData.cost_of_action
      section.find(field => field.name === 'cost_file').selected = [prefillData.file_cost_of_action]
      section.find(field => field.name === 'additional_info').selected = prefillData.additional_information
      section.find(field => field.name === 'additional_info_file').selected = [prefillData.file_additional_information]

      const mergedPathways = []

      Array.isArray(priorityPathwayData) && priorityPathwayData.forEach(pathway => {
        const existing = mergedPathways.find(mergedPathway => mergedPathway.row_id === pathway.row_id && mergedPathway.pathway_code === pathway.pathway_code)
        if(existing) {
          existing.EASINCode = [...(Array.isArray(existing.EASINCode) ? existing.EASINCode: [existing.EASINCode]), pathway.EASINCode]
        } else {
          mergedPathways.push(pathway)
        }
      })

      if(!Array.isArray(priorityPathwayData)) {
        priorityPathwayData.EASINCode = [priorityPathwayData.EASINCode]
        mergedPathways.push(priorityPathwayData)
      } 

      mergedPathways.forEach((pathway, index) => {
        const priorityPathwayEmpty = JSON.parse(JSON.stringify(section.find(field => field.name === 'priority_pathways').fields[0]))
        priorityPathwayEmpty.selected = priorityPathwayEmpty.options.find(p => p.value == pathway.pathway_code)
        priorityPathwayEmpty.inner_field.selected = pathway.EASINCode.map(easincode => priorityPathwayEmpty.inner_field.options.find(f => f.code == easincode))
        if(index === 0)
          priorityPathwayDestination[0] = priorityPathwayEmpty
        else
          priorityPathwayDestination.push(priorityPathwayEmpty)
      })

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
        //console.error(e);
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
