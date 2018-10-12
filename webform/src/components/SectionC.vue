<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
      <b-card class="mt-5 mb-5">
      <div v-for="(field,fieldkey,fieldindex ) in info.section.fields">
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

          <b-input-group v-if="field.type === 'file'">
              <b-input-group-prepend>
                <!-- v-show="field.selected && fileIsUploading[selkey] === false && doneUpload[selkey] === true" -->
                <!--<b-badge class="upload-badge" variant="success"
                         style="line-height: 3;"
                >✓ Uploaded</b-badge>-->
                <!-- v-show="fileIsUploading[selkey] === true " -->
                <!--<b-badge class="upload-badge" variant="info"
                         style="line-height: 3;" >Uploading</b-badge>-->
                <!-- v-show="errorUpload[selkey] === true" -->
                <!--<b-badge class="upload-badge" variant="danger"
                         style="line-height: 3;">Error could not upload</b-badge>-->

              </b-input-group-prepend>

              <b-form-file v-model="files" :state="Boolean(files)" multiple :ref="'fileinput' + fieldkey"></b-form-file>
              <b-input-group-append>
                <b-btn @click="uploadFormFile(files, field, 'fileinput' + fieldkey)" variant="success">Upload</b-btn>
              </b-input-group-append>

          </b-input-group >

          <div v-show="field.type === 'file' && files.length > 0 "
               v-for="(file, fkey, findex) in files">
            <div v-if="files[fkey] && counter[fkey] !== max[fkey]">
              <b-row>
                <b-col>
                  <span v-if="Boolean(files.length)">{{ file.name }}</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-progress :value="counter[fkey]" :max="max[fkey]" show-progress animated>

                    <b-progress-bar :value="counter[fkey]">
                      <strong>{{ counter[fkey] / max[fkey] * 100 + '%' }}</strong>
                    </b-progress-bar>
                  </b-progress>
                </b-col>

              </b-row>

            </div>

              <br>
          </div>

          <div v-if="field.selected && field.type === 'file'" v-for="fileName in field.selected">File uploaded: <a :href="fileName" blank="_true">{{fileName}}</a>
            <b-badge style="cursor: pointer; margin-left: 0.5rem;margin-bottom: 20px;margin-top: 10px;padding: 0.5rem;"
                     variant="danger" @click="deleteFormFile(fileName, field)">Delete file</b-badge>
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
import speciesB from '../assets/speciesB.js'
import {deleteFile, uploadFile, getSupportingFiles, envelope} from '../api.js';

export default {


  props: {
    info: null,
    tabId:null
  },

  data () {
    return {
      files: [],
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

    processFile(fileData, index, formfield, fileinputref){
      let self = this;
      self.fileIsUploading[index] = true;

      self.$forceUpdate();

      let file = new FormData();
      file.append('file', fileData);

      uploadFile(file, (uploadProgressEvent) =>{
        // upload progress updating
        self.max[index] = uploadProgressEvent.total;
        self.counter[index] = uploadProgressEvent.loaded;
        self.$forceUpdate();
      }).then((response)=>{
        self.doneUpload[index] = false;
        self.$forceUpdate();
        getSupportingFiles().then((response) => {
          //self.$set(self.files, index, null);
          self.files.splice(index, 1);
          self.$delete(self.counter, index);
          self.$delete(self.max, index);

          formfield.selected[index] = envelope + '/' + response.data[response.data.length - 1];

          self.fileIsUploading[index] = false;
          self.doneUpload[index] = true;
          self.$forceUpdate();

          let remainstobeUploaded = self.fileIsUploading.filter((val,i)=>{
            return val !== false;
          });
          if(remainstobeUploaded.length === 0){
            self.fileIsUploading = [];
          }
          let doneUpload =  self.fileIsUploading.filter((val,i)=>{
            return val === false;
          });
          if(doneUpload.length === 0){
            if(self.$refs[fileinputref]){
              self.$refs[fileinputref][0].reset();
            }
            self.doneUpload = [];
          }

        }).catch((error) =>{
          console.error(error);
          self.errorUpload[index] = true;
          self.$forceUpdate();
        });
      }).catch((error)=>{
        console.error(error);
        self.errorUpload[index] = true;
        self.$forceUpdate();
      });
    },

    uploadFormFile(userfiles, formfield, fileinputref){
      let self = this;
      userfiles.forEach((fileData, ix) => {
        //console.log(fileData);
        self.processFile(fileData, ix, formfield, fileinputref);
      });
    },

    deleteFormFile(fileId, field){
      let id = fileId.split('/');
      let finalId = id[id.length - 1];
      let found = field.selected.length > 0 ? field.selected.indexOf(fileId) : -1;

      deleteFile(finalId).then((response) => {
        if(found !== -1) field.selected.splice(found, 1);
      }).catch((error) => {
        console.log(error);
      })

    },
  },
}
</script>

<style lang="css" scoped>

</style>
