<template>
  <div class="wrapper">
    <div style="position: absolute;top: 5px;right: 5px;">
      <b-btn variant="success" style="" @click="saveForm" :disabled="!valid">Save</b-btn>
      <b-btn variant="primary" @click="validateSections" style="">Validate</b-btn>
      <b-btn variant="danger" style="" @click="exitForm">Back to envelope</b-btn>
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

  updated() {
  },

  created() {
    this.dataset = this.info;
    this.validate()
  },
  inject: ['$validator'],

  data () {
    return {
      dataset: null,
      validation: [],
      valid: this.validated,
      jsonemptyinstance: {
          "BC_PEP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/15/schema-dst-15.xsd",
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
    exitForm(){
      window.location.replace(envelope)
    },

    showAlert () {
      console.log('showingalert')
      this.dismissCountDown = this.dismissSecs
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    saveForm(){
      this.jsonemptyinstance = {
          "BC_PEP": {
              "@xmlns": "https://dd.info-rac.org/namespaces/4",
              "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
              "@xsi:schemaLocation": "https://dd.info-rac.org/namespaces/4 https://dd.info-rac.org/v2/dataset/15/schema-dst-15.xsd",
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

      //console.log(this.jsonemptyinstance);

      saveInstance(this.jsonemptyinstance);
      this.showAlert();
    },

    validate(){

    },

    validateSections(){
      //this.valid = true;
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

@media screen and (max-width: 768px) {
  .wrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.03);
    height: 3rem;
  }
}
</style>
