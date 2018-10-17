<template>
  <div>
    <b-input-group>
      <b-input-group-prepend>
        <div v-if="prepend" class="input-group-text">{{ prepend }}</div>
        <b-badge class="upload-badge" variant="danger" v-show="Boolean(errorUpload.length)"
                 style="line-height: 3;">Error could not upload</b-badge>
      </b-input-group-prepend>
      <span>{{ errors }}</span>
      <!-- TODO: validation of file extension : v-validate="'ext:jpeg,jpg'" data-vv-as="field" v-validate="'filesAllowed'" -->
      <b-form-file v-model="files" v-validate="'filesAllowed:'+ filesAllowed" data-vv-as="file" :state="Boolean(files)"
                   :multiple="Boolean(multiple)" :ref="'fileinputref' + fieldkey" key="files-input"
      ></b-form-file>
      <b-input-group-append>
        <b-btn @click="uploadFormFile(files, field, fieldkey)" variant="success">Upload</b-btn>
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
    <!-- Progress Bars END-->

    <div v-if="field.selected && field.type === 'file'" >
      <div v-if="multiple === true" >
        <div v-for="fileName in field.selected" >
          File uploaded: <a :href="fileName" blank="_true">{{fileName}}</a>
          <b-badge style="cursor: pointer; margin-left: 0.5rem;margin-bottom: 20px;margin-top: 10px;padding: 0.5rem;"
                   variant="danger" @click="deleteFormFile(fileName, field, fieldkey)">Delete file</b-badge>
        </div>
      </div>
      <div v-else>
        File uploaded: <a :href="field.selected" blank="_true">{{field.selected}}</a>
        <b-badge style="cursor: pointer; margin-left: 0.5rem;margin-bottom: 20px;margin-top: 10px;padding: 0.5rem;"
                 variant="danger" @click="deleteFormFile(field.selected, field, fieldkey)">Delete file</b-badge>
      </div>
    </div>
  </div>

</template>
<script>
  import {deleteFile, uploadFile} from '../api.js';

  export default {
    name: 'FormFileUpload',
    props: ['field', 'fieldkey', 'multiple', 'selected', 'prepend','filesAllowed'],
    data(){
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
        if(userfiles.length === 0) return false;
        if("undefined" !== typeof userfiles.forEach){
          userfiles.forEach((fileData, ix) => {
            if(self.errors.length === 0){
              self.processFile(fileData, ix, formfield, fieldkey);
            }
          });
        } else {
          if(self.errors.length === 0){
            self.processFile(userfiles, 0, formfield, fieldkey);
          }
        }

      },

      deleteFormFile(fileId, field, fieldkey){
        let id = fileId.split('/');
        let finalId = id[id.length - 1];
        let found = field.selected.length > 0 ? field.selected.indexOf(fileId) : -1;

        deleteFile(finalId).then((response) => {
          if(found !== -1) this.$emit("form-file-delete",found, fieldkey, field);
        }).catch((error) => {
          console.log(error);
        })

      },
    }
  }
</script>
