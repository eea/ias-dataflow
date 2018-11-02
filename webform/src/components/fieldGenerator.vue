<template>
	<div v-if="field">
		<div  v-if="field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type ==='email'" >
      <b-form-input :disabled="disabled" :name="field.name" v-model="field.selected" :type="field.type" v-if="field.type === 'number'"
                    @input="changeInput($event)"
                    v-bind:key="vname"
                    v-bind:name="vkey"
                    :data-vv-as="field.label"
                    v-bind:data-vv-scope="vscope"
                    v-validate.continues="'required|numeric|min_value:1'"
                    >
      </b-form-input>

			<b-form-input :disabled="disabled" :name="field.name" v-model="field.selected" :type="field.type" v-if="field.type !== 'number'"
                    @input="$emit('input', $event)" ></b-form-input>
		</div>

		<b-form-radio-group :disabled="disabled" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options">
    </b-form-radio-group>

    <b-form-checkbox-group :disabled="disabled" v-else-if="field.type === 'checkbox'" v-model="field.selected" :options="field.options">
    </b-form-checkbox-group>

    <span v-else-if="field.type === 'select'">
      <b-form-select :disabled="disabled" v-model="field.selected" :options="field.options"
                     v-bind:key="vname"
                     v-bind:name="vkey"
                     :data-vv-as="field.label"
                     v-bind:data-vv-scope="vscope"
                     v-validate.continues ="'required'"
                     @change="changeSelect($event)"
      ></b-form-select>
    </span>

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
  inject: ['$validator'],
  props: {
    field: Object,
    fieldkey: Number,
    vname: String,
    vkey: String,
    vscope: String,
  },
  created(){

  },
  $_veeValidate: {
    // value getter
    value () {
      return this.$el.value;
    },
    // name getter
    name () {
      return this.field.name;
    }
  },
  mounted () {
    this.$el.value = this.field.selected;
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

    changeSelect($event){
      this.$emit('input', $event);
      this.$validator.validate();
    },

    changeInput($event){
      this.$emit('input', $event);
      this.$validator.validate();
    }
  }
}
</script>
<style lang="css" scoped>
</style>
