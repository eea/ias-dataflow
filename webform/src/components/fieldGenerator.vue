<template>
	<div v-if="field">

		<div v-if="field.type === 'text' || field.type === 'number' || field.type ==='email'" >
      <b-form-input :disabled="disabled" :name="field.name"
        v-model="field.selected" :type="field.type" v-if="field.type === 'number'"
        @input="changeInput($event)"
        v-bind:key="vname"
        v-bind:name="vkey"
        :data-vv-as="field.label"
        v-bind:data-vv-scope="vscope"
        v-validate.continues="'required|numeric|min_value:1'"
      ></b-form-input>
    </div>

    <div v-else-if="field.type === 'date'">
      <b-form-input :disabled="disabled" :name="field.name"
        v-model="field.selected"
        :type="field.type"
        :data-vv-as="field.label"
        v-bind:key="vname"
        v-bind:name="vkey"
        v-bind:data-vv-scope="vscope"
        @input="changeDate($event)"
        v-validate.continues="'required|date_format:YYYY-MM-DD'"
      ></b-form-input>
		</div>

    <div v-else-if="field.type === 'radio'">
      <b-form-radio-group :disabled="disabled" v-model="field.selected" :options="field.options">
      </b-form-radio-group>
    </div>

    <div v-else-if="field.type === 'checkbox'">
      <b-form-checkbox-group :disabled="disabled" v-model="field.selected" :options="field.options">
      </b-form-checkbox-group>
    </div>

    <span v-else-if="field.type === 'select'">
      <!-- TODO: delay in validation at units of measurement -->
      <b-form-select
        :disabled="disabled" v-model="field.selected" :options="field.options"
        v-bind:key="vname"
        v-bind:name="vkey"
        :data-vv-as="field.label"
        v-bind:data-vv-scope="vscope"
        v-validate ="'required'"
        @change="changeSelect($event)"
      ></b-form-select>
    </span>

    <textarea v-else-if="field.type === 'textarea'" v-model="field.selected"></textarea>

    <div v-else-if="field.type ==='file'">
      <FormFileUpload :selected="field.selected" :field="field"
        :filesAllowed="'zip,geojson'"
        :fieldkey="fieldkey"
        :vname="vname"
        :vkey="vkey"
        :scope="vscope"
        :prepend="'Shapefile,Geojson or GML file'"
        @form-file-uploaded="addFilesToSelected" @form-file-delete="deleteFormFile" :multiple=false >
       </FormFileUpload>
    </div>

    <multiselect v-else-if="field.type ==='multiselect'" :close-on-select="false" :clear-on-select="false"
       :hide-selected="true" :preserve-search="true"
       :multiple=true track-by="text" label="text" v-model="field.selected" :options="field.options"></multiselect>

    <div v-else>
      <b-form-input
        :disabled="disabled"
        :name="field.name"
        :fieldkey="fieldkey"
        :vname="vname"
        :vkey="vkey"
        :scope="vscope"
        v-model="field.selected"
        :type="field.type"
        @input="$emit('input', $event)" ></b-form-input>
    </div>

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
    validation: String,
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
      this.$emit('change', $event);
      this.$validator.validate();
    },

    changeInput($event){
      this.$emit('input', $event);
      this.$validator.validate();
    },

    changeDate($event){
      this.$emit('change', $event);
      this.$validator.validate();
    },
    validate(){
      return new Promise(function(resolve, reject) {
        this.$validator.validate().then((res) => {
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
    }
  }
}
</script>
<style lang="css" scoped>
</style>
