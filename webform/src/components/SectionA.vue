<template>
  <div v-if="info">
  <div class="question-wrapper">
      <h1>{{info.table_label}}</h1>
      <p>{{info.question}}</p>

      <b-card class="mt-5 mb-5" v-for="section in info.sections">
        <h4>
          {{section.scientific_name.selected}} ({{section.common_name.selected}})    
        </h4>
        <b-row>
          <b-col>
            <b-input-group :prepend="section.mandatory_item.label">  
              <b-form-select v-model="section.mandatory_item.selected" :options="section.mandatory_item.options"></b-form-select>
            </b-input-group>
          </b-col>
        </b-row>
        <b-row class="mt-3" v-if="section.mandatory_item.selected === true">
          <b-col lg="3">
            {{section.depending_on_manadatory.label}}
          </b-col> 
          <b-col lg='9'>
              <textarea class="form-control" v-model="section.depending_on_manadatory.selected"></textarea>
          </b-col>
        </b-row>

        <b-row class="mt-3" v-if="section.mandatory_item.selected === true">
          <b-col lg="3">
            {{section.additional_info.label}}
          </b-col> 
          <b-col lg='9'>
              <textarea class="form-control" v-model="section.additional_info.selected"></textarea>
          </b-col>
        </b-row>

        <b-card v-if="section.mandatory_item.selected === true" class="inner-card">
          <div class="card-section">
            <h5>{{section.tables.table_1.label}}</h5>
            <hr>
            <b-row>
              <b-col>
                <b-input-group :prepend="section.tables.table_1.question.label">  
                  <b-form-select v-model="section.tables.table_1.question.selected" :options="section.tables.table_1.question.options"></b-form-select>
                </b-input-group>
              </b-col>
            </b-row>
            <div class="table-section" v-for="table_section in section.tables.table_1.table_sections" v-if="section.tables.table_1.question.selected === true">
              <h6>{{table_section.label}}</h6>
              <b-row>
                <b-col>
                  <b-input-group :prepend="table_section.field.label">  
                    <b-form-input v-model="table_section.field.selected" :type="table_section.field.type"></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
              <table class="table">
                <thead>
                  <tr>
                    <th>{{table_section.table_fields.header}}</th>
                    <th v-for="header in table_section.table_fields.fields[0].fields">{{header.label}}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in table_section.table_fields.fields">
                    <td>{{row.label}}</td>
                    <td v-for="field in row.fields">
                      <fieldGenerator :field="field"></fieldGenerator>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                  <div>
                    <label>{{table_section.additional_info.label}}</label>
                  </div>
                  <textarea class="form-control" v-model="table_section.additional_info.selected"></textarea>
              </div>
            </div>
          </div>
        </b-card>


        <b-card v-if="section.mandatory_item.selected === true" class="inner-card">
          <div class="card-section">
            <h5>{{section.tables.table_2.label}}</h5>
            <hr>
            <b-row>
              <b-col>
                <b-input-group :prepend="section.tables.table_2.question.label">  
                  <b-form-select v-model="section.tables.table_2.question.selected" :options="section.tables.table_2.question.options"></b-form-select>
                </b-input-group>
              </b-col>
            </b-row>
            <div class="table-section" v-for="table_section in section.tables.table_2.table_sections" v-if="section.tables.table_2.question.selected === true">
              <h6>{{table_section.label}}</h6>
              <table  v-for="sub_section in table_section.table_fields.fields" class="table">
                <thead>
                  <tr>
                    <th style="max-width: 50px" >{{sub_section.label}}</th>
                    <!-- <th ></th> -->
                    <th v-if="sub_section.type === 'add'">
                      <b-btn variant="primary" @click="addSpecies(sub_section)">Add</b-btn>
                    </th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="row in sub_section.fields">
                      <td style="width: 120px" v-if="row.label">{{row.label}}</td>
                      <td  v-if="sub_section.type != 'add'">
                        <fieldGenerator :field="row"></fieldGenerator>
                      </td>
                      <td v-else>
                        <b-row>
                          <b-col>
                            <fieldGenerator :field="row"></fieldGenerator>
                          </b-col>
                          <b-col lg="2">
                            <label>{{row.inner_field.label}}</label>
                          </b-col>
                          <b-col>
                            <fieldGenerator :field="row.inner_field"></fieldGenerator>
                          </b-col>    
                          <b-col lg="2">
                            <b-btn variant="danger" @click="removeSpecies(sub_section, row)" v-if="sub_section.type === 'add'">Remove</b-btn>
                          </b-col>
                        </b-row>
                      </td>
                    </tr>
                </tbody>
              </table>
              <div>
                  <div>
                    <label>{{table_section.additional_info.label}}</label>
                  </div>
                  <textarea class="form-control" v-model="table_section.additional_info.selected"></textarea>
              </div>
            </div>
          </div>
        </b-card>

      </b-card>


       
      </div>
  </div>
</template>

<script>

import {slugify} from '../utils.js';
import fieldGenerator from './fieldGenerator'

export default {

  components: {fieldGenerator},

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
    addSpecies(field){
      console.log(field)
      let empty_field = {
                  label: 'Impacted non-targeted species',
                  type: 'text',
                  selected: '',
                  name: 'impacted_nontargeted_species',
                  inner_field: {
                    label: 'Impact per species',
                    type: 'text',
                    selected: '',
                    name: 'impact_per_species',
                  }  
                }
      field.fields.push(empty_field)
    },

    removeSpecies(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1)
    }
  },
}
</script>

<style lang="css" scoped>

  .inner-card {
    background: #eee;
    margin: 1rem 0;
  }

  .table-section {
    background: white;
    border-radius: .25em;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

</style>