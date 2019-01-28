<template>
  <div class="wrapper">
    <div>
      <b-btn variant="success" @click="saveForm">Save</b-btn>
      <b-btn variant="primary" @click="validateSections" style="">Validate</b-btn>
      <b-btn variant="danger" @click="openErrorModal" v-if="errors.items.length > 0">Errors</b-btn>
      <b-btn variant="danger" @click="exitForm">Back to envelope</b-btn>
    </div>

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
  props: ['info', 'country', 'validated'],
  inject: ['$validator'],
  updated() {
  },
  created() {
    this.dataset = this.info;
    this.validate()
  },
  data () {
    return {
      dataset: null,
      validation: [],
      valid: this.validated,
      jsonemptyinstance: {
          "BC_PEP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "https://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://converterstest.eionet.europa.eu/schemas/IAS/2018",
              "country": null,
              "contacting_party":{
                "partyname":null,
                "rep_period_from":null,
                "rep_period_to":null,
                "institution_name":null,
                "officer_name":null,
                "mailing_address":null,
                "tel":null,
                "fax":null,
                "email":null,
                "contact_point":null,
                "instituion_full_name":null,
                "national_mailing_address":null,
                "national_tel":null,
                "national_fax":null,
                "national_email":null,
                "national_signature":null,
                "national_date":null,
                "org_name":null,
                "org_contact_point":null,
                "org_tel":null,
                "org_fax":null,
                "org_email":null,

              },
              "measuresdata": {Row:[]},
              "measuredata_difficulty": {Row:[]},
              "pollincidents": {Row:[]},
              "pollincidentsInfo": null,
          }
      },
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {
    openErrorModal(){
      this.$emit('open-error-modal');
    },

    exitForm(){
      window.location.replace(envelope)
    },

    showAlert () {
      console.log('showingalert');
      this.dismissCountDown = this.dismissSecs
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    saveForm(){
      let datatoSave = this.prefill();
      saveInstance(datatoSave);

      this.showAlert();
    },

    prefill(){
      let newDataset = JSON.parse(JSON.stringify(this.dataset));
      let newDatasetObject = {};

      function iterationCopy(src) {
        let target = {};
        for (let prop in src) {
          if (src.hasOwnProperty(prop)) {
            target[prop] = src[prop];
          }
        }
        return target;
      }

      function processsPattern( pattern ){
        let res = pattern.map((pat) => {
          if(pat.selected.pattern !== null){
            if( pat.selected.pattern instanceof Array ){
              let pats = pat.selected.pattern.map((el) => {
                return el.text;
              });
              return {patternType: pat.patternType, /*region:pat.selected.region,*/ pattern: pats };
            } else {
              return {patternType: pat.patternType, /*region:pat.selected.region,*/ pattern: pat.options[pat.selected.pattern].text };
            }
          } else {
            return null;
          }
        });
        return res.filter(Boolean);
      }

      function processPermitsRow( fields, empty ){
        let res = [];

        fields.map((itm,fk) => {
          if('undefined' !== typeof itm.selected) {
            let iname = itm.name;
            let temp = {};
            temp[iname] = itm.selected;
            res.push(temp);
          }

          if('undefined' !== typeof itm.type && itm.type === "add"){
            let subfield = null;

            if(itm.name.indexOf("main") !== -1){
              subfield = itm.fields.map((field) => { return field.fields;});
            } else {
              subfield = itm.fields[0].fields;
            }

            let subs = subfield.map((sub) => {
              if(sub instanceof Array) {
                let ret = [];
                sub.map((field) => {
                  ret.push({ name: field.name, selected: field.selected })
                });
                return ret;
              } else {
                return { name: sub.name, selected: sub.selected};
              }
            }).reduce((acc, item) => {
              if(item instanceof Array){
                if('undefined' === typeof acc[item[0].name]){ acc[item[0].name] = [] }
                let temp = {};
                item.map((fi) => {
                  temp[fi.name] = fi.selected;
                });
                acc[item[0].name].push(temp);
                return acc;
              } else {
                acc[item.name] = item.selected;
                return acc;
              }
            },{});
            res.push(subs);
          }
        });
        return res;
      }

      function processTable1(table){
        delete table.question.type;
        delete table.question.index;

        let sections = table.table_sections.map((tsection) => {
          delete tsection.table_fields.optionsFields;
          if(Object.keys(tsection.field).length === 0) delete tsection.field;

          let rows = tsection.table_fields.fields.map((itm) => {
            itm['fields'] = processPermitsRow(itm.fields);
            return itm;
          });

          let res = {};

          if( "undefined" !== typeof tsection.noinspections && tsection.noinspections.selected.filter(Boolean).length > 0 ){
            rows = [];
          }

          res['name'] = tsection.name;
          res['additional_info'] = tsection.additional_info;
          res['rows'] = rows;

          return res;
        });

        let res = JSON.parse(JSON.stringify(table));
        if(sections.length > 0){
          delete res.table_sections;
          res.table_sections = sections;
        }
        return res;
      }

      // TODO: maybe simplify: use one function for table 2 and 3
      function processTable2( table ){
        let res = JSON.parse(JSON.stringify( table ));
        delete res.question.type;
        delete res.question.index;
        res.question.options.map((op) => {
          if(op.value === res.question.selected) res.question.selected = op.text;
        });
        delete res.question.options;
        delete res.question.type;
        delete res.question.index;

        delete res.table_sections;

        res.tables = res.tables.map( (table, ix) => {
          table.table_sections.map(( tsection) => {
            if("undefined" !== typeof tsection.table_fields){

              tsection.table_fields = tsection.table_fields.fields.reduce((acc, fs) => {
                acc = acc.concat(fs.fields);
                return acc;
              }, []).map((field) => {

                if("undefined" !== typeof field){
                  if( "undefined" !== typeof field.selected ){
                    if( field.selected === ''){
                      //return false;
                    } else {
                      if ( field.selected instanceof Array && field.selected.length > 0 ){
                      } else {
                        if("undefined" !== typeof field.options){
                          let found = field.options.filter((op) => { return op.value === field.selected });
                          if(found.length > 0) field.selected = found;
                        }
                      }
                    }
                  }
                  delete field.options;
                  delete field.required;
                  delete field.type;
                  delete field.validation;
                  delete field.addoption;
                }
                return field;
              }).filter(Boolean);
            }
            return tsection;
          });
          return table;
        });
        //TODO : additional_info
        return res;
      }

      function processTable3( table ) {
        let res = JSON.parse(JSON.stringify( table ));
        delete res.question.type;
        delete res.question.index;
        res.question.options.map((op) => {
          if(op.value === res.question.selected) res.question.selected = op.text;
        });
        delete res.question.options;
        delete res.table_sections;

        res.tables = res.tables.map( (table, ix) => {
          table.table_sections = table.table_sections.map( (tsection, ix) => {
            if("undefined" !== typeof tsection.table_fields){
              tsection.table_fields = tsection.table_fields.fields
                .reduce((acc, fs) => {
                  acc = acc.concat(fs.fields);
                  return acc;
                }, [])
                .map((field) => {
                  if("undefined" !== typeof field){
                    if(field.selected === ''){
                      //return false;
                    } else {
                      if (field.selected instanceof Array){
                      } else {
                        if("undefined" !== typeof field.options){
                          let found = field.options.filter((op) => { return op.value === field.selected });
                          if(found.length > 0) field.selected = found;
                        }
                      }
                    }
                    delete field.required;
                    delete field.options;
                    delete field.type;
                    delete field.validation;
                    delete field.addoption;
                  }

                  return field;
                }).filter(Boolean);
              return tsection;
            }
          });
          return table;
        });
        return res;
      }



      newDatasetObject.country = {};
      newDatasetObject.country.tables = {};
      let country_tab = newDataset.country.tables;
      if(typeof country_tab === "object"){
        for(let table in country_tab) {
          if( country_tab.hasOwnProperty(table)){
            if(typeof country_tab[table] === "object"){
              for (let value of Object.keys( country_tab[table])) {
                if(value !== 'fields'){

                  //delete newDatasetObject.country.tables[table][value];
                } else {
                  newDatasetObject.country.tables[table] = {};
                  newDatasetObject.country.tables[table].fields = country_tab[table].fields.map((it) => {
                    delete it.type;
                    delete it.disabled;
                    return it;
                  });
                }
              }
            }
          }
        }
      }

      newDatasetObject.tab_0 = newDataset.tab_0.tables.table_1.fields.map((it) => {
        delete it.type;
        delete it.disabled;
        return it;
      });

      /*
      * TAB 1
      * */
      for(let val of Object.keys(newDataset.tab_1)){
        if (val !== 'sections') delete newDataset.tab_1[val];
      }
      let todelete = [];

      newDatasetObject.tab_1 = {};
      if("undefined" !== typeof newDataset.tab_1.sections){
        newDatasetObject.tab_1.sections = newDataset.tab_1.sections.map((section, k) => {
          if(section.mandatory_item.selected === 1){
            todelete.push(k);
            newDataset.tab_1.sections[k] = null;
            return false;
          }

          for(let prop of Object.keys(section)){
            if(prop !== 'tables'){
              let field = section[prop];
              const allowed = [
                'name',
                'fields',
                'selected',
                'reproduction_patterns',
                'spread_pattterns',
                //'options',
                'nopermits'
              ];

              const todelete = [
                'index',
                'label',
                'disabled',
                'type'
              ];

              if('object' === typeof field.reproduction_patterns ){
                section['reproduction_patterns'] = processsPattern(field.reproduction_patterns);
                delete field['reproduction_patterns'];
              }

              if('object' === typeof field.spread_pattterns ){
                section['spread_pattterns'] = processsPattern(field.spread_pattterns );
                delete field['spread_pattterns'];
              }
              for(let fieldProp of Object.keys(field)){
                //cleaning not allowed properties
                //if(allowed.indexOf(fieldProp) === -1 ) delete field[fieldProp];

                if( todelete.indexOf(fieldProp) !== -1 ) delete field[fieldProp];

                if(fieldProp === 'options') {
                  if(field.selected !== ''){
                    //field.options.map((opt) => {
                    //  if(opt.value === field.selected) field.selected = opt.text;
                    //});
                    delete field.options;
                  } else {
                    delete field.options;
                  }
                }
              }

            } else {
              // flatten tables
              let table_1 = section[prop].table_1;
              let table_2 = section[prop].table_2;
              let table_3 = section[prop].table_3;
              let table_4 = section[prop].table_4;

              if(table_1.question.selected !== true){
                table_1 = null;
                delete section[prop].table_1;
              } else {
                // section[prop].table_1 = processTable1(section[prop].table_1);
                let newtable1 = processTable1( section[prop].table_1 );
                section[ section[prop].table_1.name ] = newtable1;
                delete section[prop].table_1;
              }

              if(table_2.question.selected !== true){
                table_2 = null;
                delete section[prop].table_2;
              } else {
                section[ section[prop].table_2.name ] = processTable2( section[prop].table_2 );
                delete section[prop].table_2;
              }

              if(table_3.question.selected !== true){
                table_3 = null;
                delete section[prop].table_3;
              } else {
                section[ section[prop].table_3.name ] = processTable3( section[prop].table_3 );
                delete section[prop].table_3;
              }

              section[prop].table_4.table_sections[0].table_fields = section[prop].table_4.table_sections[0].table_fields.map((row) => {
                row.fields = row.fields.map((f) => {
                  delete f.options;
                  return f;
                });
                return row;
              });

              section[ section[prop].table_4.name ] = section[prop].table_4;
              delete section[prop].table_4;

              //if(Object.keys(section[prop]).length === 0) delete section[prop];
            }
          }
          // flattening simple { name, selected } object into string
          section.scientific_name = section.scientific_name.selected;
          section.species_code = section.species_code.selected;
          section.common_name = section.common_name.selected;
          return section;
        }).filter(Boolean);
      }

      /*
      * TAB 2
      * */
      newDatasetObject.tab_2 = {};
      function processFields(fields) {
        let f = fields.map((field) => {
          if(field.type === "checkbox" ){
            if(field.selected === true) return field;
            if(field.selected === false) return false;
          } else {
            return field;
          }
        }).filter(Boolean);
        return f;
      }

      let sectionB = newDataset.tab_2.sections;

      if("undefined" !== typeof sectionB){
        const todeleteB = [
          'index',
          'label',
          'disabled',
          'type'
        ];

        newDataset.tab_2.sections = sectionB.map((section, k) => {
          if('object' === typeof section.depending_on_mandatory.reproduction_patterns ){
            section['reproduction_patterns'] = processsPattern(section.depending_on_mandatory.reproduction_patterns);
            delete section.depending_on_mandatory['reproduction_patterns'];
          }

          if('object' === typeof section.depending_on_mandatory.spread_pattterns ){
            section['spread_patterns'] = processsPattern(section.depending_on_mandatory.spread_pattterns );
            delete section.depending_on_mandatory['spread_pattterns'];
          }

          for(let prop of Object.keys(section)){
            let field = section[prop];

            for(let fieldProp of Object.keys(field)){
              //if( todeleteB.indexOf(fieldProp) !== -1 ) delete field[fieldProp];

              if(fieldProp === 'options'  && prop !== "depending_on_mandatory") {
                if(field.selected !== ''){
                  field.options.map((opt) => {
                    if(opt.value === field.selected) field.selected = opt.text;
                  });
                  delete field.options;
                } else {
                  delete field.options;
                }
              } else if(fieldProp === "fields" && prop !== "depending_on_mandatory" ){
                field[fieldProp] = processFields( field[fieldProp] );

              }
            }

            if(prop === "common_name"){
              section["code_name"] = field.selected.code;
              if( "undefined" !== typeof field.selected.common_names && field.selected.common_names.length > 0){
                section[prop] = Object.keys(field.selected.common_names).map((ctry) => {
                  return { country: ctry, name: field.selected.common_names[ctry][0] };
                });
              }
            } else if(prop === "scientific_name"){
              section[prop] = section.scientific_name.selected;
            }
          }

          return section;
        });

        delete newDataset.tab_2.scientific_name.options;
        newDatasetObject.tab_2 = newDataset.tab_2;

      }

      /*
      * TAB 3
      * */
      newDatasetObject.tab_3 = newDataset.tab_3;
      newDatasetObject.tab_3.section.fields = newDataset.tab_3.section.fields.filter((section) => {
        if(section.name === "priority_pathways"){
          section.fields = section.fields.map((field) => {
            if("undefined" !== field.inner_field.options){
              delete field.inner_field.options;
            }
            return field;
          });
        }
        return section.selected !== '';
      });

      /*
      * TAB 4
      * */
      newDataset.tab_4.section.fields = newDataset.tab_4.section.fields.filter((field) => {
        return field.selected instanceof Array && field.selected.length > 0;
      });
      newDatasetObject.tab_4 = newDataset.tab_4;

      console.log(JSON.stringify(newDatasetObject));
      return newDatasetObject;
    },

    validate(){

    },

    validateSections(){
      this.$emit("validate-components");
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
    },
    country: {
      handler: function(old_val,new_val) {
        this.jsonemptyinstance.BC_PEP.country = new_val
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

.wrapper {
      text-align: right;
    margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .wrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.03);
    height: 3rem;
  }
}
</style>
