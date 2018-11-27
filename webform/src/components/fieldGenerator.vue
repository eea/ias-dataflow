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

      <span v-if="validation !== 'false'">
        <b-form-input :disabled="disabled" :name="field.name"
          v-model="field.selected" :type="field.type" v-if="field.type !== 'number'"
          @input="changeInput($event)"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate.continues="'required'"
        ></b-form-input>
      </span>
      <span v-else>
        <b-form-input :disabled="disabled" :name="field.name"
          v-model="field.selected" :type="field.type" v-if="field.type !== 'number'"
          @input="changeInput($event)"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
        ></b-form-input>
      </span>
    </div>

    <div v-else-if="field.type === 'date'">
      <span v-if="validation !== 'false'">
        <!-- v-if="errors.has(vname, vscope)" -->
        <b-badge variant="danger" class="error-badge" v-if="errors.items
        .filter((err) => { return err.scope === vscope && err.msg.indexOf('start date bust be lower') !== -1; }).length > 0">
          {{
            errors.items
          .filter((err) => { return err.scope === vscope && err.msg.indexOf('start date bust be lower') !== -1; })
          .map((err) => { return err.msg}).join('\n')
          }}
        </b-badge>
        <b-form-input :disabled="disabled" :name="field.name"
          v-model="field.selected"
          :type="field.type"
          :data-vv-as="field.label"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-scope="vscope"
          @input="changeDate($event)"
          v-validate.continues="'required|date_format:YYYY-MM-DD'"
          date-format="yyyy-mm-dd"
        ></b-form-input>
      </span>
      <span v-else>
        <!-- v-if="errors.has(vname, vscope)" -->
        <b-badge variant="danger" class="error-badge" v-if="errors.items
        .filter((err) => { return err.scope === vscope && err.msg.indexOf('start date bust be lower') !== -1; }).length > 0">
          {{
            errors.items
          .filter((err) => { return err.scope === vscope && err.msg.indexOf('start date bust be lower') !== -1; })
          .map((err) => { return err.msg}).join('\n')
          }}
        </b-badge>
        <!-- TODO: validation issue; probably add a custom validation rule -->
        <b-form-input :disabled="disabled" :name="field.name"
          v-model="field.selected"
          :type="field.type"
          :data-vv-as="field.label"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-scope="vscope"
          @input="changeDate($event)"
          date-format="yyyy-mm-dd"
          v-validate.continues="'falserequire'"
        ></b-form-input>
      </span>
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
      
      <span v-if="validation !== 'false'">
        <!-- TODO: delay in validation at units of measurement -->
        <b-form-select
          :disabled="disabled" v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          v-validate ="'required'"
          @change="changeSelect($event)"
        ></b-form-select>
      </span>
      <span v-else>
         <!-- TODO: delay in validation at units of measurement -->
        <b-form-select
          :disabled="disabled" v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          v-validate ="'falserequire'"
          @change="changeSelect($event)"
        ></b-form-select>
      </span>
    </span>

    <textarea v-else-if="field.type === 'textarea'" v-model="field.selected" :data-vv-as="field.label"></textarea>

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

    <span v-else-if="field.type ==='multiselect'">
      <span v-if="validation !== 'false'">
        <multiselect  :close-on-select="false" :clear-on-select="false"
          :hide-selected="true" :preserve-search="true"
          :multiple=true track-by="text" label="text" v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate ="'required'"
        ></multiselect>
      </span>
      <span v-else>
        <multiselect  :close-on-select="false" :clear-on-select="false"
          :hide-selected="true" :preserve-search="true"
          :multiple=true track-by="text" label="text" v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate ="'falserequire'"
        ></multiselect>
      </span>

    </span>

    <div v-else>
      <b-form-input
        :disabled="disabled"
        :name="field.name"
        :fieldkey="fieldkey"
        :vname="vname"
        :vkey="vkey"
        :scope="vscope"
        v-model="field.selected"
        :data-vv-as="field.label"
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
    sub_section: Object,
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
      let self = this;
      return new Promise(function(resolve, reject) {
        self.$validator.validate().then((res) => {
          // if no errors
          if(res.length > 0 && res.filter((it)=>{ return it === false}).length === 0){
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
