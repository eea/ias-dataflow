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
     			    <sectiona tabId="1" :info.sync="form.tab_1" ref="sectiona"></sectiona>
            </b-tab>
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_2.label)" ref="sectionb_tab" style="overflow-y: auto;">
              <sectionb v-bind:data-vv-scope="'sectionb'" tabId="2" :info.sync="form.tab_2" ref="sectionb"></sectionb>
            </b-tab>
            <b-tab :title-link-class="'titletab'" :title="doTitle(form.tab_3.label)" ref="sectionc_tab" style="overflow-y: auto;">
              <sectionc tabId="3" :info.sync="form.tab_3" ref="sectionc"></sectionc>
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
      data.IAS.country.tables.table_1.fields.map((field, ix) => {
        fdata.country.tables.table_1.fields[ix].selected = field.selected;
      });

      data.IAS.tab_0.map((field) => {
        fdata.tab_0.tables.table_1.fields.map((f) => {
          if(f.name === field.name) f.selected = field.selected;
        });
      });

      data.IAS.tab_1.sections.map((sectionI) => {
        fdata.tab_1.sections.map((sectionF) => {
          if(sectionI.scientific_name === sectionF.scientific_name.selected){
            console.log("inside section");
            let found = sectionF.mandatory_item.options.filter((op) => {
              return op.text === sectionI.mandatory_item.selected;
            });
            sectionF.mandatory_item.selected = found[0].value;
          }
        });
      });


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
