<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
    <br/>
    <h3><i><center>{{info.table_label}}</center></i></h3>

      <b-card class="mt-5 mb-5" v-for="(section,seckey, secindex) in info.sections">
        <div class="panel-heading"
             @click="expanded.indexOf(seckey) === -1 ? expanded.push(seckey) : expanded.splice(expanded.indexOf(seckey), 1)" >

          <h4 class="name-easin">
            <font-awesome-icon v-bind:icon="expanded.indexOf(seckey) !== -1 ? 'chevron-down' : 'chevron-right'" />
            <span class="name">{{section.scientific_name.selected}}</span>
            <small class="easin">EASIN identifier: {{section.species_code.selected}}</small>
            <br>
          </h4>
          <h4>
            <small>{{section.common_name.label}}: {{section.common_name.selected}}</small>
          </h4>
        </div>
        <b-collapse :id="'collapse' + seckey" :visible="expanded.indexOf(seckey) !== -1">
          <b-row>
            <b-col>
              <b-input-group :prepend="section.mandatory_item.label">
                <b-form-select v-model="section.mandatory_item.selected" :options="section.mandatory_item.options"></b-form-select>
              </b-input-group>
            </b-col>
          </b-row>
          <div class="mt-4" v-if="section.mandatory_item.selected === true">
            <hr>
            <h6>
              {{section.depending_on_manadatory.label}}
            </h6>
            <div class="mb-2" v-for="(field,fieldkey,fieldindex) in section.depending_on_manadatory.fields">

              <b-input-group  v-if="field.type === 'select'" :prepend="field.label">
                <b-form-select :options="field.options" v-model="field.selected">
                </b-form-select>
                <b-input-group-append>
                  <b-btn variant="primary" @click="addCustomField(field)">Add new</b-btn>
                </b-input-group-append>
              </b-input-group>

              <div  v-if="field.type === 'file'" :prepend="field.label">
                <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" @form-file-uploaded="addFilesToSelected"
                                @form-file-delete="deleteFormFile" :multiple=false></FormFileUpload>
              </div>

            </div>
          </div>

          <b-row class="mt-3" v-if="section.mandatory_item.selected === true">
            <b-col lg="3">
              {{section.additional_info.label}}
            </b-col>
            <b-col lg='12'>
              <textarea class="form-control" v-model="section.additional_info.selected"></textarea>
            </b-col>
          </b-row>
          <hr>
          <b-card v-if="section.mandatory_item.selected === true" class="inner-card">
            <div class="card-section">
              <center><h5>{{section.tables.table_1.label}}</h5></center>
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
              <center>
                <h5>{{section.tables.table_2.label}}</h5>
              </center>
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
                  <tr v-for="(row, rowkey, rowindex) in sub_section.fields">
                    <td style="width: 120px" v-if="row.label">{{row.label}}</td>
                    <td  v-if="sub_section.type != 'add'">
                      <fieldGenerator :field="row"></fieldGenerator>
                    </td>
                    <td v-else>
                      <b-row>
                        <b-col>
                          <fieldGenerator :field="row" :fieldkey="rowkey"></fieldGenerator>
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
        </b-collapse>
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
import fieldGenerator from './fieldGenerator';
import FormFileUpload from "./FormFileUpload";
import {getSupportingFiles, envelope} from '../api.js';

export default {

  components: {fieldGenerator, FormFileUpload},

  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
      expanded: [],
      customField: null,
      addCustom: {
        text: null,
        value: null,
      },
      files: [],

    }
  },

  methods: {
    titleSlugify(text) {
      return slugify(text)
    },
    addCustomField(field){
      this.customField = field;
      this.$refs.customFieldModal.show();
    },
    saveCustomField(){
      let addField = JSON.parse(JSON.stringify(this.addCustom));

      this.customField.options.push(addField);
      this.customField.selected = addField.value;
      this.addCustom.text = null;
      this.addCustom.value = null;
      this.$refs.customFieldModal.hide();
    },
    addSpecies(field){
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
                };
      field.fields.push(empty_field);
    },

    removeSpecies(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1);
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
  },
}
</script>

<style lang="css" scoped>
  .panel-heading {
    cursor: pointer;
  }

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
  .name-easin .easin {
    position: absolute;
    right: 20px;
  }

  .name-easin .name {
    margin-left: 1rem;
  }

  @media screen and (max-width: 1024px){
    .name-easin {
      display: flex;

      flex-flow: row;
    }
    .name-easin .name {
      display: block;
      width: 50%;
    }
    .name-easin .easin {
      position: relative;
      right: 0;
      width: 40%;
      margin-left: 10%;
      display: block;
    }
  }

</style>
