<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
      <b-card class="mt-5 mb-5">
      <div v-for="(field, fieldkey, fieldindex ) in info.section.fields">
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

          <div v-if="field.type === 'file'">
            
            <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" files-allowed="zip,geojson"
                            :multiple=false @form-file-uploaded="addFilesToSelected" @form-file-delete="deleteFormFile">
            </FormFileUpload>
          </div>

        </b-col>
        <hr>

      </div>

      </b-card>



      </div>
  </div>
</template>


<script>

import {slugify} from '../utils.js';
import speciesB from '../assets/speciesB.js';
import { getSupportingFiles, envelope} from '../api.js';
import FormFileUpload from "./FormFileUpload";

export default {
  components: {FormFileUpload},
  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
      //files: [],
      fileIsUploading: [],
      doneUpload: [],
      errorUpload: [],
      counter: [],
      max: [],
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
      };
      field.fields.push(empty_field)
    },

    removePathway(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1)
    },

    addFilesToSelected(fieldkey, index, field){
      let self = this;
      getSupportingFiles().then((response) => {
        self.$set(field.selected, index, envelope + '/' + response.data[response.data.length - 1]);
        self.$forceUpdate();
      }).catch((error) =>{
        console.error(error);
      });

    },

    deleteFormFile(found, fieldkey){
        this.info.section.fields[fieldkey].selected.splice(found, 1);
    },
  },
}
</script>

<style lang="css" scoped>

</style>
