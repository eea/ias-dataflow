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
      /*this.jsonemptyinstance = {
          "BC_PEP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 http://converterstest.eionet.europa.eu/schemas/IAS/2018",
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
      };

      let country_tab = this.dataset.country.tables;
      if(typeof country_tab === "object"){
        for(let table in country_tab) {
          if(typeof table === "object"){
            for (let value of country_tab[table]) {
              this.jsonemptyinstance.BC_PEP.contacting_party[value.name] = value.selected;
            }
          }
        }
      }

      let tab_1 = this.dataset.tab_1.data;
      if("undefined" !== typeof tab_1){
        for (let article of tab_1.articles) {
          if("undefined" !== typeof article.article_items){
            for (let article_item of article.article_items){
              let collection_id = article_item.collection_id || null;
              let parent_collection_id = article_item.parent_collection_id || null;
              let description = article_item.description;
              let row =  {
                "description": description,
                "parent_collection_id": parent_collection_id,
                "collection_id": collection_id,
                "changes": null,
                "difficulties": null,
                "difficulties_comments": null,
                "status":null,
                "status_comments": null,
              };

              for(let item of article_item.items) {
                if(item.type ==='changes') {
                  row.changes = item.selected;
                } else if (item.type === 'status') {
                  row.status = item.selected;
                  row.status_comments = item.comments;
                } else {
                  // row.difficulties = item.selected
                  row.difficulties_comments = item.comments;
                  if(item.selected.length){
                    for(let difficulty of item.selected) {
                      this.jsonemptyinstance.BC_PEP.measuredata_difficulty.Row.push(
                        {
                          "collection_id": collection_id || null,
                          "difficulty": difficulty
                        }
                      );
                    }
                  }

                }
              }
              this.jsonemptyinstance.BC_PEP.measuresdata.Row.push(row);
            }
          }
        }
      }

      let tab_2 = this.dataset.tab_2.data;
      if("undefined" !== typeof tab_1){
        for (let article of tab_2.articles) {
          for (let article_item of article.article_items){
            let collection_id = article_item.collection_id || null;
            let parent_collection_id = article_item.parent_collection_id || null;
            let description = article_item.description;
            let row =  {
              "description": description,
              "parent_collection_id": parent_collection_id,
              "collection_id": collection_id,
              "changes": null,
              "difficulties": null,
              "difficulties_comments": null,
              "status":null,
              "status_comments": null,
              "contingency_plan":null,
            };

            for(let item of article_item.items) {
              if(item.type ==='changes') {
                row.changes = item.selected;
              } else if (item.type === 'status') {
                row.status = item.selected;
                row.status_comments = item.comments
              } else if (item.type === 'special') {
                row.contingency_plan = item.selected;
              } else {
                // row.difficulties = item.selected
                row.difficulties_comments = item.comments;
                if(item.selected.length){
                  for(let difficulty of item.selected) {
                    this.jsonemptyinstance.BC_PEP.measuredata_difficulty.Row.push(
                      {
                        "collection_id": collection_id || null,
                        "difficulty": difficulty
                      }
                    );
                  }
                }
              }
            }

            this.jsonemptyinstance.BC_PEP.measuresdata.Row.push(row);
          }
        }
      }

      if("undefined" !== typeof this.dataset.tab_3.data){
        let showtab3 = this.dataset.tab_3.data.question.selected;

        this.jsonemptyinstance.BC_PEP.pollincidentsInfo = showtab3;
      }

      let tab_3 = this.dataset.tab_3.data;
      if("undefined" !== typeof tab_3){
        for (let article of tab_3.articles) {
          let collection_id = article.collection_id || null;
          let parent_collection_id = article.parent_collection_id || null;
          let description = article.description || null;
          let ship_name = article.article_title.value || null;
          let row = {
            collection_id : collection_id,
            parent_collection_id: parent_collection_id,
            description: description,
            ship_name: ship_name,
            latitude: null,
            longitude: null,
            geo_info: null,
            country: null,
            accident: null,
            accident_comments: null,
            date: null,
            pollution: null,
            pollution_type: null,
            ship_category: null,
            ship_category_comments: null,
            ship_flag: null,
            offshore_name_id: null,
            installation_type: null,
            installation_type_comments: null,
            oil_name_id: null,
            oil_type: null,
            actions: null,
            actions_taken: null
          };
          for (let article_item of article.article_items){
            // let row = {};
            // console.log(article_item)
            if(article_item.name === "accident" || article_item.name === "ship_category" || article_item.name === "installation_type") {
              row[article_item.name + "_comments"] = article_item.comments;
            }
            row[article_item.name] = article_item.selected;
          }
          this.jsonemptyinstance.BC_PEP.pollincidents.Row.push(row);
        }
      }

      this.jsonemptyinstance.BC_PEP.country = this.country;

      saveInstance(this.jsonemptyinstance);*/
      this.prefill();

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
          if(pat.selected.pattern !== null && pat.selected.region !== null){
            if( pat.selected.pattern instanceof Array ){
              let pats = pat.selected.pattern.map((el) => {
                return el.text;
              });
              return {patternType: pat.patternType, region:pat.selected.region, pattern: pats };
            } else {
              return {patternType: pat.patternType, region:pat.selected.region, pattern: pat.options[pat.selected.pattern].text };
            }
          } else {
            return null;
          }
        });
        return res.filter(Boolean);
      }

      function processPermitsRow( fields ){
        let res = [];

        fields.map((itm) => {
          if('undefined' !== typeof itm.selected) {
            let iname = itm.name;
            let temp = {};
            temp[iname] = itm.selected;
            console.log(temp);
            res.push(temp);
          }
          if('undefined' !== typeof itm.type && itm.type === "add"){
            let subfield = null;
            if(itm.fields.length > 1){
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
          res = {};
          res['name'] = tsection.name;
          res['additional_info'] = tsection.additional_info;
          res['rows'] = rows;
          //console.log(res);
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
          //if('undefined' !== typeof tsection.selected) res.table_sections[ix] = { name: tsection.name, selected: tsection.selected };
          table.table_sections.map(( tsection) => {
            if("undefined" !== typeof tsection.table_fields){
              tsection.table_fields = tsection.table_fields.fields.reduce((acc, fs) => {
                acc = acc.concat(fs.fields);
                return acc;
              }, []).map((field) => {
                //TODO: process options for selected
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
                delete field.options;
                delete field.required;
                delete field.type;
                delete field.validation;
                delete field.addoption;
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
                  //TODO: process options for selected
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

                //TODO: cleaning not allowed properties
                //if(allowed.indexOf(fieldProp) === -1 ) delete field[fieldProp];

                if( todelete.indexOf(fieldProp) !== -1 ) delete field[fieldProp];

                if(fieldProp === 'options') {
                  if(field.selected !== ''){
                    /*field.options.map((opt) => {
                      if(opt.value === field.selected) field.selected = opt.text;
                    });*/
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

      /*function processFields(fields) {
        let res = [];
        fields.map((field) => {
          if(field.type === "checkbox" && field.selected === true){
            res.push({
              name: field.name,
              label: field.label,
              value: field.selected
            });
          }
        });
        return res;
      }*/

      /*let sectionB = newDataset.tab_2.sections;

      for(let val of Object.keys(newDataset.tab_2)){
        if (val !== 'sections') delete newDataset.tab_2[val];
      }
      if("undefined" !== typeof sectionB){
        const todeleteB = [
          'index',
          'label',
          'disabled',
          'type'
        ];

        newDataset.tab_2.sections = sectionB.map((section, k) => {
          if(section.mandatory_item.selected === 1){
            todelete.push(k);
            newDataset.tab_2.sections[k] = null;
            return true;
          }

          if('object' === typeof section.depending_on_mandatory.reproduction_patterns ){
            section['reproduction_patterns'] = processsPattern(section.depending_on_mandatory.reproduction_patterns);
            delete section.depending_on_mandatory['reproduction_patterns'];
          }

          if('object' === typeof section.depending_on_mandatory.spread_pattterns ){
            section['spread_patterns'] = processsPattern(section.depending_on_mandatory.spread_pattterns );
            delete section.depending_on_mandatory['spread_pattterns'];
          }

          //console.log("###################specie############");
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
              section[prop] = section.scientific_name.selected.value;
            }
          }

          return section;
        });
      }
      newDataset.tab_2.sections = newDataset.tab_2.sections.filter(Boolean);*/

      /*
      * TAB 3
      * */
      /*newDataset.tab_3 = newDataset.tab_3.section.fields.filter((section) => {
        return section.selected !== '';
      });*/

      /*
      * TAB 4
      * */
      /*newDataset.tab_4 = newDataset.tab_4.section.fields;*/

      delete newDataset.tab_2;
      delete newDataset.tab_3;
      delete newDataset.tab_4;

      //console.log( newDatasetObject );
      console.log(JSON.stringify(newDatasetObject));

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
