<template>
  <div v-if="info">
  <div class="question-wrapper">
        <h3>{{info.label}}</h3>

      <div class="question">
        <div class="mt-2">{{info.data.question.label}} <small class="muted">({{info.data.question.info}})</small></div>
        <b-form-group>
          <b-form-radio-group required stacked id="radio_MEDPOL_option" v-model="info.data.question.selected" :options="info.data.question.options" name="radio_MEDPOL_option">
          </b-form-radio-group>
        </b-form-group>
        <small style="font-style:italic; font-size: .6rem">
          <p class="mb-0" v-for="option of info.data.question.options_description">
            {{option}}
          </p>
        </small>
      </div>
      <br>
       <!-- <div class="answer" v-if="!info.data.question.selected" style="position: relative;"> -->
       <div v-if="!info.data.question.selected" class="answer" style="position: relative;">
          <div class="table-head">
            <b>{{info.data.table_label}}</b>
          </div>
          <div role="tablist">
            <div role="tablist">
              <b-card style="background: #eee" v-for="(article,index) in info.data.articles" :key="index" class="mb-1">
                <h5 style="cursor: pointer" href="#" v-b-toggle="`article_${index}`" variant="info">
                  {{article.article_title.value}}
                  <span style="float:right">▼</span>
                </h5>
               <label>
                    {{article.article_title.label}}
               </label>
               <b-input-group>
                <b-form-input required :type="article.article_title.type" :name="article.article_title.name" v-model="article.article_title.value"></b-form-input>
                <b-input-group-append>
                  <b-btn variant="danger" @click="removeSpa(index)"> X Remove spa</b-btn> 
                </b-input-group-append>
               </b-input-group>

                <b-collapse class="mt-3" visible :id="`article_${index}`" accordion="my-accordion" role="tabpanel">
                  <div class="form-subsection" v-for="(item,item_index) in article.article_items">
               
                      <div class="form-fields">
                        <div class="mt-2">{{item.label}}</div>
                            <!-- {{field}} -->
                          <b-form-input required v-if="item.type != 'select' && item.type != 'radio' && item.type != 'textarea'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`" :type="item.type" :name="item.name" v-model="item.selected" :options="item.options"></b-form-input>
                          <b-form-select required v-else-if="item.type === 'select'" :id="`${tabId}_${index}_${item_index}_${item.name}_${item.name}`"  :name="item.name" v-model="item.selected" :options="item.options"></b-form-select>
                          <b-form-radio-group stacked v-else-if="item.type ==='radio'" :required="!article.optional" :id="`radio_${tabId}_${index}_${item_index}_${item.type}`" v-model="item.selected" :options="item.options" :name="`radio_${tabId}_${index}_${item_index}_${item.type}`">
                            </b-form-radio-group>
                          <textarea v-else class="form-control" v-model="item.selected"></textarea>


                       <div v-if="checkForCommentsField(item)">
                          In case of others, please fill in more details here
                          <textarea class="form-control"  v-model="item.comments"></textarea>
                        </div>


                      </div>
                  </div>
                </b-collapse>
              </b-card>
               <b-btn style="    
                  position: absolute;
                  top: 9px;
                  right: 13px;" 
                  variant="primary" @click="addSpa"> + Add</b-btn> 
            </div>
          </div>
        </div>

      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';

export default {

  name: 'NAPs',

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

       checkForCommentsField(item){
      if(item.hasOwnProperty('comments')) {
        return true
      } else {
        return false
      }
    },


  addSpa(){
      let incident ={
        article_title: {
          label: "Ship name or IMO number",
          value: 'Ship name or IMO number',
          name: 'name',
          type: 'text'
        },
        article_items: [{
            type: 'text',
            name: 'latitude',
            label: 'Latitude: decimal (36.406944) or DMS (36°24\'25”N)',
            selected: '',
          },
          {
            type: 'text',
            name: 'longitude',
            label: 'Longitude: decimal (4.646111) or DMS(4°38\'46”)',
            selected: '',
          },
          {
            type: 'text',
            name: 'geo_info',
            label: 'Alternative geographical information',
            selected: '',
            placeholder: 'e.g. closest shore location'
          },
          {
            type: 'text',
            name: 'country',
            label: 'Country',
            selected: '',
          },
          {
            type: 'select',
            label: 'Accident Type',
            name: 'accident',
            selected: null,
            options: [
              { text: 'Please select one item', value: null },
              { text: 'Blow-out', value: 1 },
              { text: 'cargo transfer failure', value: 2 },
              { text: 'contact', value: 3 },
              { text: 'collision', value: 4 },
              { text: 'engine or machine breakdown', value: 5 },
              { text: 'fire or explosion', value: 6 },
              { text: 'grounding', value: 7 },
              { text: 'foundering', value: 8 },
              { text: 'hull structural failure', value: 9 },
              { text: 'installation structural failure', value: 10 },
              { text: 'oil and gas leak', value: 11 },
              { text: 'other', value: 12 }
            ],
            comments: ''
          },
          {
            type: 'date',
            name: 'date',
            label: 'Date',
            selected: '',
          },
          {
            label: 'Pollution',
            type: 'radio',
            name: 'pollution',
            selected: null,
            options: [
              { text: 'Yes', value: true },
              { text: 'No', value: false }
            ]
          },
          {
            label: 'Pollution type',
            type: 'radio',
            name: 'pollution_type',
            selected: null,
            options: [
              { text: 'MARPOL Annex I', value: 1 },
              { text: 'MARPOL Annex II ', value: 2 },
              { text: 'MARPOL Annex III ', value: 3 }

            ]
          },
          {
            type: 'select',
            label: 'Ship Category',
            name: 'ship_category',
            selected: null,
            options: [
              { text: 'Please select one item', value: null },
              { text: 'passenger ship', value: 1 },
              { text: 'fishing vessel', value: 2 },
              { text: 'bulk carrier', value: 3 },
              { text: 'oil tanker', value: 4 },
              { text: 'general cargo ship', value: 5 },
              { text: 'ro-ro cargo ship', value: 6 },
              { text: 'container', value: 7 },
              { text: 'chemical tanker', value: 8 },
              { text: 'other', value: 9 }
            ],
            comments: ''

          },
          {
            type: 'text',
            name: 'ship_flag',
            label: 'Ship flag',
            selected: '',
          },
          {
            type: 'text',
            name: 'offshore_name_id',
            label: 'Offshore installation name or ID number',
            selected: '',
          },
          {
            type: 'select',
            label: 'Offshore installation type',
            name: 'installation_type',
            selected: null,
            options: [
              { text: 'Please select one item', value: null },
              { text: 'floating concrete', value: 1 },
              { text: 'gravity-based concrete', value: 2 },
              { text: 'floating steel', value: 3 },
              { text: 'fixed steel', value: 4 },
              { text: 'subsea steel ', value: 5 },
              { text: 'other', value: 6 }
            ],
            comments: ''

          },
          {
            type: 'text',
            name: 'oil_name_id',
            label: 'Oil handling facility name or ID number',
            selected: '',
          },
          {
            type: 'select',
            label: 'Oil handling facility type',
            name: 'oil_type',
            selected: null,
            options: [
              { text: 'Please select one item', value: null },
              { text: 'Oil terminal', value: 1 },
              { text: 'port', value: 2 },
              { text: 'power station refinery', value: 3 }
            ]
          },
          {
            label: 'Have any actions been taken?',
            type: 'radio',
            name: 'actions',
            selected: null,
            options: [
              { text: 'Yes', value: true },
              { text: 'No', value: false }
            ]
          },

          {
            type: 'textarea',
            name: 'actions_taken',
            label: 'If yes, specify the actions taken',
            selected: ''
          }

        ]
      }
      this.info.data.articles.push(incident)
    },


    removeSpa(index) {
      // console.log(this.info.data.table_2.articles[index])
      this.info.data.articles.splice(index, 1)
    },
  },
}
</script>

<style lang="css" scoped>

</style>