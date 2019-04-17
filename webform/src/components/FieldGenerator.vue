<template>
  <div v-if="field">
    <b-badge v-b-tooltip :title="field.validation" variant="danger" v-if="field.validation && field.validation.length">{{field.validation}}</b-badge>
    <input v-if="['text', 'number', 'date', 'email'].includes(field.type)" :disabled="field.disabled" class="form-control" v-model="field.selected" :type="field.type">
    <div class="file-upload" v-else-if="field.type === 'file'">
      <div class="custom-form-label">{{field.label}}</div>
      <b-input-group>
        <b-file :accept="field.extensions.join(', ')" @change="handleFileUpload"></b-file>
        <b-input-group-append>
          <b-btn variant='success' :disabled="!file" @click='submitFile'>Upload</b-btn>
        </b-input-group-append>
      </b-input-group>
      <b-badge class="mb-2" variant="default"><b>Allowed file extension : {{field.extensions.join(', ')}}</b></b-badge>
      <br>
      <b-badge class="mb-2" variant="default">{{field.info}}</b-badge>
      <div v-if="field.selected" class="d-flex mb-4">
        <div class="file-upload-location">File uploaded: <a :href="field.selected">{{field.selected}}</a></div>
        <div class="remove-file-button ml-3">
          <b-btn size='sm' variant='danger' @click='removeFile'><b>Delete file</b></b-btn>
        </div>
      </div>
      <hr/>
    </div>
    <b-form-radio-group :id="field.name" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
    <b-form-checkbox v-else-if="field.type === 'checkbox'" :disabled="field.disabled" v-model="field.selected"></b-form-checkbox>
    <div v-else-if="['select', 'multiselect'].includes(field.type)">
      <multiselect
          :multiple="field.type === 'select' ? false : true"
          label="text"
          trackBy="value"
          v-b-tooltip
          :disabled="field.disabled"
          :title="doSelectTitle(field)"
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
  import {deleteFile, getSupportingFiles, uploadFile, envelope} from '@/api';

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
      doSelectTitle(field) {
        if(field.type === 'select') {
          const option = field.options.find(o => o.value === field.selected) 
          if(!field.options || !option) return ''
          if(option.text) return option.text
        } else {
          return ''
        }
      },
			triggerSave() {
				document.getElementById('save_button').click()
			},
      handleFileUpload(e) {
        const fileNameArr = e.target.files[0].name.split('.')
        const extension = '.' + fileNameArr[fileNameArr.length - 1]

        if(!this.field.extensions.includes(extension)) {
          this.file = null
        } else {
          console.log(e.target.files)
          let file = new FormData();
          file.append('file', e.target.files[0]);
          this.file = file
           console.log(this.file)
           this.uploadedFile = e.target.files[0].name;
           console.log(this.uploadedFile)
        }
      },
      submitFile() {
        this.$store.dispatch('setDataLoading', true)
        uploadFile(this.file)
          .then(({data}) => {
            this.$store.dispatch('setDataLoading', false)
            getSupportingFiles()
              .then(({data}) => {
                this.field.selected = `${envelope}/${data[data.length - 1]}`
								this.triggerSave();
            })
          }, (error) => {
            this.$store.dispatch('setDataLoading', false)
            console.log(error)
          })
      },
      removeFile() {
        this.$store.dispatch('setDataLoading', true)
        deleteFile(this.field.selected.replace(`${envelope}/`, ''))
          .then(({data}) => {
            this.$store.dispatch('setDataLoading', false)
            console.log(`File ${data} deleted successfully`)
						this.field.selected = null
						this.triggerSave()
          }, (error) => {
            this.$store.dispatch('setDataLoading', false)
            this.field.selected = null
						this.triggerSave()
          })
      }
    }
  }
</script>
