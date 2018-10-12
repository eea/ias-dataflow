<template>
	<div v-if="field">
		<div  v-if="field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type ==='email'" >
			<b-form-input :disabled="disabled" :name="field.name" v-model="field.selected" :type="field.type"></b-form-input>
		</div>
		<b-form-radio-group :disabled="disabled" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
		<b-form-checkbox-group :disabled="disabled" v-else-if="field.type === 'checkbox'" v-model="field.selected" :options="field.options"></b-form-checkbox-group>
		<b-form-select :disabled="disabled" v-else-if="field.type === 'select'" v-model="field.selected" :options="field.options"></b-form-select>
		<textarea v-else-if="field.type === 'textarea'" v-model="field.selected"></textarea>
    <div v-else-if="field.type ==='file'">
       <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" :prepend="'Shapefile,Geojson or GML file'"
                       @form-file-uploaded="addFilesToSelected" @form-file-delete="deleteFormFile" :multiple=false >
       </FormFileUpload>
    </div>
    <multiselect  :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" :multiple=true track-by="text" label="text" v-else-if="field.type ==='multiselect'" v-model="field.selected" :options="field.options"></multiselect>
	</div>
</template>

<script>
import FormFileUpload from "./FormFileUpload";
import {getSupportingFiles, envelope} from '../api.js';

export default {

  name: 'fieldGenerator',
  components: {FormFileUpload},
  props: {
    field: Object,
    fieldkey: Number
  },
  created(){

  },

  data () {
    return {
      disabled: false,
    }
  },
  methods: {
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
  }
}
</script>
<style lang="css" scoped>
</style>
