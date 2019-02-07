<template>
  <div v-if="field">
    <input v-if="['text', 'number', 'date', 'email'].includes(field.type)" :disabled="field.disabled" class="form-control" v-model="field.selected" :type="field.type">
    <div class="file-upload" v-else-if="field.type === 'file'" v-model="field.selected">
      <div class="custom-form-label">{{field.label}}</div>
      <b-input-group>
        <b-file v-model="field.selected" @change="handleFileUpload"></b-file>
        <b-input-group-append>
          <b-btn variant='success' @click='submitFile'>Upload</b-btn>
        </b-input-group-append>
      </b-input-group>
      <b-badge class="mb-2" variant="default"><b>Allowed file extension : files</b></b-badge>
      <div v-if="field.selected" class="d-flex mb-4">
        <div class="file-upload-location">File uploaded: <a :href="field.selected">{{field.selected}}</a></div>
        <div class="remove-file-button ml-3">
          <b-btn size='sm' variant='danger' @click='removeFile'><b>Delete file</b></b-btn>
        </div>
      </div>
      <hr/>
    </div>
    <b-form-radio-group :id="field.name" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
    <b-form-checkbox v-else-if="field.type === 'checkbox'" v-model="field.selected"></b-form-checkbox>
    <div v-else-if="['select', 'multiselect'].includes(field.type)">
      <multiselect
          :multiple="field.type === 'select' ? false : true"
          label="text"
          trackBy="value"
          v-model="field.selected"
          :options="field.options" />
    </div>
    <div v-else-if="field.type === 'textarea'">
      <div class="custom-form-label">{{field.label}}</div>
      <textarea class="form-control"   v-model="field.selected"></textarea>
      <hr />
    </div>
  </div>
</template>

<script>
  import Multiselect from '@/components/ModifiedMultiselect'
  import {deleteFile, getSupportingFiles, uploadFile} from '@/api';

  export default {
    components: {
      Multiselect
    },

    data() {
      return {
        file: '',
        uploadedFile: '',
      }
    },

    props: {
      field: null
    },

    methods: {
      handleFileUpload(e) {
        this.file = e.target.files[0]
      },
      submitFile() {
        uploadFile(this.file)
          .then(({data}) => {
            this.uploadedFile = data;

            getSupportingFiles()
              .then(({data}) => {
                data.filter(file => {
                  if(file === this.uploadedFile) {
                    this.field.selected = `${window.location.href}${this.uploadedFile}`
                  }
                })
              })
          }, error => console.log(error))
      },
      removeFile() {
        deleteFile(this.uploadedFile)
          .then(({data}) => {
            console.log(`File ${data} deleted successfully`)
          }, error => console.log(error))
      }
    }
  }
</script>
