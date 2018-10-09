<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
      <b-card class="mt-5 mb-5">
      <div v-for="field in info.section.fields">
        <b-col>
          <label>{{field.label}}</label>
          <b-form-input v-if="field.type === 'text'" :type="field.type" v-model="field.selected" ></b-form-input>
          <textarea class="form-control" v-else-if="field.type === 'textarea'" v-model="field.selected" ></textarea>
          <div class="add-section" v-else-if="field.type === 'add'">
            <b-btn variant="primary" @click="addPathway(field)">Add</b-btn>
            <b-row v-for="addField in field.fields">
              <b-col>
                {{addField.label}}
              </b-col>
              <b-col>
                <b-form-input :type="addField.type" v-model="addField.selected" ></b-form-input>
              </b-col>
              <b-col>
                {{addField.inner_field.label}}
              </b-col>
              <b-col>
                <b-form-input :type="addField.inner_field.type" v-model="addField.inner_field.selected" ></b-form-input>
              </b-col>
              <b-col>
                  <b-btn variant="danger" @click="removePathway(field,addField)">Remove</b-btn>
              </b-col>
            </b-row>
          </div>
          <b-input-group v-else>
            <b-form-file v-model="field.selected"></b-form-file>
            <b-input-group-append>
              <b-btn variant="success">Upload</b-btn>
            </b-input-group-append>
          </b-input-group>

        </b-col>
        <hr>

      </div>

      </b-card>



      </div>
  </div>
</template>


<script>

import {slugify} from '../utils.js';
import speciesB from '../assets/speciesB.js'

export default {


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

    addPathway(field){
      console.log(field)
      let empty_field = {
                label: 'Priority pathways addressed ',
                type: 'text',
                selected: '',
                name: 'priority_pathways_addressed',
                inner_field: {
                  label: 'Species covered  ',
                  type: 'text',
                  selected: '',
                  name: 'species_covered',
                }
              }
      field.fields.push(empty_field)
    },

    removePathway(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1)
    }
  },
}
</script>

<style lang="css" scoped>

</style>
