<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
      <b-card class="mt-5 mb-5">
        <!-- TODO: url validation  -->
      <div v-for="(field,fieldkey,fieldindex ) in info.section.fields">
        <b-col>
          <label>{{field.label}}</label>
          <b-form-input v-if="field.type === 'text'" :type="field.type" v-model="field.selected" ></b-form-input>

          <div v-else-if="field.type === 'textarea'">

            <span v-if="field.name === 'web_link'">
              <b-badge variant="danger" v-if="errors.has('sectionc_weblinks','sectionc_weblinks')">
                {{ errors.collect('sectionc_weblinks','sectionc_weblinks').join('\n') }}
              </b-badge>
              <textarea class="form-control"
                v-model="field.selected"
                :data-vv-as="'weblinks'"
                v-validate.continues="'weblinks'"
                v-bind:key="'sectionc_weblinks'"
                v-bind:data-vv-name="'sectionc_weblinks'"
                v-bind:data-vv-scope="'sectionc_weblinks'"
              ></textarea>
            </span>

            <span v-else>
              <textarea class="form-control" v-model="field.selected" ></textarea>
            </span>
          </div>

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
            <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" files-allowed="jpeg,jpg"
                            :multiple=true @form-file-uploaded="addFilesToSelected" @form-file-delete="deleteFormFile"></FormFileUpload>
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

    addFilesToSelected(fieldkey,index,field){
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

    validate(){
      let self = this;
      let promises = [];

      //console.log(this.$refs);

      for( let child in this.$refs){
        if(this.$refs.hasOwnProperty(child) &&  'undefined' !== typeof this.$refs[child][0]
          && 'undefined' !== typeof this.$refs[child][0].$validator) {
          if('undefined' !== typeof this.$refs[child][0].validate){
            promises.push( this.$refs[child][0].validate());
          }
          promises.push(this.$refs[child][0].$validator.validate());
        }
      }

      return new Promise(function(resolve, reject) {
        Promise.all(promises).then((res) => {
          // if no errors
          if(res.filter((it)=>{ return it === false}).length === 0){
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((e) => {
          reject(e);
        });
      });
    },
  },
}
</script>

<style lang="css" scoped>

</style>
