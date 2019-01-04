<template>
  <div>
    <b-badge  v-if="errors.has('*' , scope +'_' + 'files-input-' + fieldkey )" variant="danger">
      {{ errors.first('*' , scope +'_' + 'files-input-' + fieldkey ) }}
    </b-badge >
    <b-input-group class="inputgroup">

      <!-- Error Badge -->
      <b-input-group-prepend>
        <div v-if="prepend" class="input-group-text">{{ prepend }}</div>
        <b-badge class="upload-badge" variant="danger" v-show="Boolean(errorUpload.length)">Error could not upload</b-badge>
      </b-input-group-prepend>

      <!-- File Input -->
      <b-form-file v-if="!required"
         v-validate="'filesAllowed:'+ filesAllowed"
         v-model="files"
         :data-vv-as="field.label"
         :multiple="Boolean(multiple)"
         :ref="'fileinputref' + fieldkey"
         v-bind:name="vname"
         v-bind:key="vkey"
         v-bind:data-vv-scope="scope +'_' + 'files-input-' + fieldkey"
      ></b-form-file>


      <b-form-file v-model="files"
         v-validate="'required|filesAllowed:'+ filesAllowed"
         :data-vv-as="field.label"
         :multiple="Boolean(multiple)"
         :ref="'fileinputref' + fieldkey"
         v-else
         v-bind:name="vname"
         v-bind:key="vkey"
         v-bind:data-vv-scope="scope +'_' + 'files-input-' + fieldkey"
      ></b-form-file>
      <!-- END File Input -->

      <b-input-group-append>
        <b-btn v-show="!errors.has(vkey , scope +'_' + 'files-input-' + fieldkey)" @click="uploadFormFile(files, field, fieldkey)" variant="success">Upload</b-btn>
      </b-input-group-append>

    </b-input-group >

    <!-- Progress Bars -->
    <div v-if="multiple === true">
      <div v-for="(file, fkey, findex) in files">
        <div v-if="counter[fkey] !== max[fkey]">
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
      </div>
    </div>
    <!--END Progress Bars -->

    <!-- File Listing -->
    <div v-if="multiple === false && counter[0] !== max[0]">
      <b-row>
        <b-col>
          <span v-if="Boolean(files)">{{ files.name }}</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-progress :value="counter[0]" :max="max[0]" show-progress animated>

            <b-progress-bar :value="counter[0]">
              <strong>{{ counter[0] / max[0] * 100 + '%' }}</strong>
            </b-progress-bar>
          </b-progress>
        </b-col>

      </b-row>
    </div>

    <div v-if="field.selected && field.type === 'file'" >
      <!-- File Listing Multiple -->
      <div v-if="multiple === true" >
        <div v-show="field.selected.length > 0" v-for="fileName in field.selected" >
          File uploaded: <a :href="fileName" blank="_true">{{fileName}}</a>
          <b-badge class="deletefileBtn" variant="danger" @click="deleteFormFile(fileName, field, fieldkey)">Delete file</b-badge>
        </div>
      </div>
      <div v-if="multiple === false" >
        {{  }}
        <!-- File Listing Single -->
        <div v-show="field.selected.length > 0 && typeof field.selected !== 'string'">
          File uploaded: <a :href="field.selected[0]" blank="_true">{{field.selected[0]}}</a>
          <b-badge class="deletefileBtn" variant="danger" @click="deleteFormFile(field.selected, field, fieldkey)">Delete file</b-badge>
        </div>
        <div v-show="field.selected.length > 0 && typeof field.selected === 'string'">
          File uploaded: <a :href="field.selected" blank="_true">{{field.selected}}</a>
          <b-badge class="deletefileBtn" variant="danger" @click="deleteFormFile(field.selected, field, fieldkey)">Delete file</b-badge>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import {deleteFile, uploadFile} from '../api.js';

  export default {
    name: 'FormFileUpload',
    props: ['field', 'fieldkey', 'multiple', 'selected', 'prepend','filesAllowed','scope','vname','vkey','required', 'checkFiles'],
    inject: ['$validator'],

    data(){
      return {
        files: null,
        fileIsUploading: [],
        doneUpload: [],
        errorUpload: [],
        counter: [],
        max: [],
        hasFilesErrors: [],
      }
    },

    watch:{
      hasFilesErrors(newVals, oldVals){
        let self = this;
        newVals.map((found) => {
          let error = {
            //field: self.vname,
            field: found.name,
            msg: "No file uploaded",
            //scope: self.scope +'_' + 'files-input-' + self.fieldkey,
            scope: found.scope,
            rule: 'required',
            //vmId: field.vmId
            //vmId: found.vmId,
          };
          self.$validator.errors.add(error);
        })

      }
    },

    methods: {
      processFile(fileData, index, formfield, fieldkey){
        let self = this;
        let fileinputref = 'fileinputref'+ fieldkey;
        self.fileIsUploading[index] = true;
        self.doneUpload[index] = false;
        self.$forceUpdate();

        let file = new FormData();
        file.append('file', fileData);

        uploadFile(file, (uploadProgressEvent) =>{
          // upload progress updating
          self.max[index] = uploadProgressEvent.total;
          self.counter[index] = uploadProgressEvent.loaded;
          self.$forceUpdate();
        }).then((response)=>{

          if("undefined" !== typeof self.files.splice){
            self.files.splice(index, 1);
          } else {
            self.files = [];
          }
          self.$delete(self.counter, index);
          self.$delete(self.max, index);

          self.fileIsUploading[index] = false;
          self.doneUpload[index] = true;

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
            if("undefined" !== typeof self.$refs[fileinputref]){
              self.$refs[fileinputref].reset();
            }
            self.doneUpload = [];
          }

          // emit event to parent component
          self.$emit("form-file-uploaded",fieldkey, index, formfield);

        }).catch((error)=>{
          console.error(error);
          self.errorUpload[index] = true;
          if("undefined" !== typeof self.$refs[fileinputref]){
            self.$refs[fileinputref].reset();
          }
          self.$forceUpdate();
        });
      },

      uploadFormFile(userfiles, formfield, fieldkey){
        let self = this;
        if(!userfiles || userfiles.length === 0) return false;
        if("undefined" !== typeof userfiles.forEach){
          userfiles.forEach((fileData, ix) => {
            self.processFile(fileData, ix, formfield, fieldkey);
          });
        } else {
            self.processFile(userfiles, 0, formfield, fieldkey);
        }

      },

      deleteFormFile(fileId, field, fieldkey){
        if("undefined" !== typeof fileId.split){
          let id = fileId.split('/');
          let finalId = id[id.length - 1];
          let found = field.selected.length > 0 ? field.selected.indexOf(fileId) : -1;

          deleteFile(finalId).then((response) => {
            if(found !== -1) this.$emit("form-file-delete",found, fieldkey, field);
          }).catch((error) => {
            console.log(error);
          })
        } else if(fileId.length > 0) {
          // is array
          fileId.forEach((fileID)=>{
            let id = fileID.split('/');
            let finalId = id[id.length - 1];
            let found = field.selected.length > 0 ? field.selected.indexOf(fileID) : -1;

            deleteFile(finalId).then((response) => {
              if(found !== -1) this.$emit("form-file-delete",found, fieldkey, field);
            }).catch((error) => {
              console.log(error);
            })
          });
        }
      },

      validate(){
        let self = this;
        let promises = [];

        return new Promise(function(resolve, reject) {
          if(self.checkFiles){
            if(self.field.selected.length > 0){
              resolve(true);
            } else {
              let found = self.$validator.fields.map((field) => {
                if(field.name === self.vname){
                  return field;
                }
                return false;
              }).filter(Boolean)[0];
              self.hasFilesErrors.push(found);
              self.$forceUpdate();

              reject(true);
            }
          }

        });
      }
    }
  }
</script>

<style scoped>
  .upload-badge {
    line-height: 3;
  }

  .deletefileBtn {
    cursor: pointer;
    margin-left: 0.5rem;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 0.5rem;
  }
</style>
