<template>
	<div v-if="field">

		<div v-if="field.type === 'text' ||  field.type ==='email' || field.type === 'number'" >
      <span v-if="validation !== 'false'">
        <b-badge v-if="errors.has(vname, vscope) && field.type === 'number'"
                 variant="danger" class="error-badge"
                 :id="'permits_' + field.name + '_' + fieldkey + 'badge'"
                 :title="errors.collect(vname, vscope).join('\n')"
                 v-b-tooltip.hover
        >{{ errors.first(vname, vscope) }}</b-badge>

        <!-- decimals for kgs-->
        <b-form-input
            :disabled="disabled"
            :name="field.name"
            v-model="field.selected"
            v-if="field.type === 'number'"
            :type="field.type"
            @input="changeInput($event)"
            v-bind:key="vname"
            v-bind:name="vkey"
            :data-vv-as="field.label"
            v-bind:data-vv-scope="vscope"
            v-validate.continues="'undefined' !== typeof validation ? validation : 'required'"
         ></b-form-input>

        <b-form-input
            v-if="field.type !== 'number'"
            :disabled="disabled"
            :name="field.name"
            v-model="field.selected"
            :type="field.type"
            @change="changeInputUM($event)"
            @input="changeInputUM($event)"
            v-bind:key="vname"
            v-bind:name="vkey"
            :data-vv-as="field.label"
            v-bind:data-vv-scope="vscope"
            v-validate.continues="'undefined' !== typeof validation ? validation : 'required'"
        >
        </b-form-input>
      </span>

      <span v-else>
        <b-form-input
          :disabled="disabled"
          :name="field.name"
          v-model="field.selected" :type="field.type" v-if="field.type === 'number'"
          @input="changeInput($event)"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate.continues="'undefined' !== typeof validation ? validation : ''"
        ></b-form-input>

        <b-form-input :disabled="disabled" :name="field.name"
          v-model="field.selected"
          :type="field.type" v-if="field.type !== 'number'"
          @input="changeInput($event)"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate.continues="'undefined' !== typeof validation ? validation : ''"
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
        <b-form-input :disabled="disabled"
                      :name="field.name"
          v-model="field.selected"
          :type="field.type"
          :data-vv-as="field.label"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-scope="vscope"
          @input="changeDate($event)"
          v-validate="'required|date_format:YYYY-MM-DD'"
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
      <b-form-checkbox-group
        :disabled="disabled"
        v-model="field.selected"
        :options="field.options"
        @input="changeInput"
      >
      </b-form-checkbox-group>
    </div>

    <span v-else-if="field.type === 'select'">

      <span v-if="validation !== 'false'">

        <b-form-select
          v-if="field.name === 'total_permited_speciments_measurement' || field.name === 'valid_total_permited_speciments_measurement'"
           v-model="field.selected"
           :options="field.options"
           v-bind:key="vname"
           v-bind:name="vkey"
           v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
           v-bind:data-vv-scope="vscope"
           v-validate ="'required'"
           :disabled="disabled || field.options.length === 0"
           @change="changeSelectUM($event)"
        ></b-form-select>

        <b-form-select v-else-if="field.options.length < 20"
          v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          v-validate ="'required'"
          :disabled="disabled || field.options.length === 0"
          @change="changeSelect($event)"
        ></b-form-select>

        <multiselect v-if="field.options.length >= 20"
          v-model="field.selected" :options="field.options"
          :multiple="false"
          :close-on-select="false" :clear-on-select="false" :preserve-search="true" track-by="text"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          v-validate ="'required'"
          :disabled="disabled || field.options.length === 0"
          @change="changeSelect($event)"
        ></multiselect>
      </span>

      <span v-else>

        <b-form-select v-if="field.options.length < 20"
          v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          v-validate ="'falserequire'"
          :disabled="disabled || field.options.length === 0"
          @change="changeSelect($event)"
        ></b-form-select>
        <multiselect v-if="field.options.length >= 20"
          :multiple="false"
          :close-on-select="true" :clear-on-select="true" :preserve-search="true" track-by="text"
          v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          v-bind:data-vv-as=" (field.label === '' && 'undefined' !== typeof sub_section) ? sub_section.label : field.label "
          v-bind:data-vv-scope="vscope"
          :disabled="disabled || field.options.length === 0"
          v-validate ="'falserequire'"
          @change="changeSelect($event)"
          :custom-label="customLabel"
        ></multiselect>

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
          :multiple=true track-by="text" label="text"
          v-model="field.selected"
          :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          :v-validate ="validation !== null ? validation : 'falserequire'"
          :disabled="disabled || field.options.length === 0"
        ></multiselect>
      </span>
      <span v-else>
        <multiselect
          :close-on-select="false" :clear-on-select="false"
          :hide-selected="true" :preserve-search="true"
          :multiple=true track-by="text" label="text" v-model="field.selected" :options="field.options"
          v-bind:key="vname"
          v-bind:name="vkey"
          :data-vv-as="field.label"
          v-bind:data-vv-scope="vscope"
          v-validate ="'falserequire'"
          :disabled="disabled || field.options.length === 0"
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
        @input="$emit('input', $event)"
        v-validate.continues="'undefined' !== typeof validation ? validation : ''"
      >
      </b-form-input>
    </div>

	</div>
</template>

<script>
import FormFileUpload from "./FormFileUpload";
import {getSupportingFiles, envelope} from '../api.js';
import Multiselect from 'vue-multiselect';

export default {
  name: 'fieldGenerator',
  components: {FormFileUpload, Multiselect},
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
    customLabel({ value, text}){
      return `${text}`
    },

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
      let self = this;
      self.$emit('change', $event);
      self.$validator.validate();
      self.$nextTick().then((res) => {
        self.validate();
      });
    },

    changeSelectUM($event){
      let self = this;

      //console.log("changeSelectUM");

      self.$validator.validate();

      self.$nextTick().then((res) => {
        self.$forceUpdate();
        self.validate();
      });

      self.$forceUpdate();
      self.$emit('change', $event);

    },

    changeInput($event){
      let self = this;

      //console.log($event);

      self.$emit('input', $event);
      self.$validator.validate();
      self.$nextTick().then((res) => {
        self.validate();
      });
    },
    changeInputUM($event){
      let self = this;

      /*console.log($event);*/

      self.$emit('input', $event);
      self.$validator.validate();
      self.$nextTick().then((res) => {
        self.validate();
      });
    },

    changeDate($event){
      let self = this;
      self.$emit('change', $event);
      self.$validator.validate().catch((rej) => { console.error(rej)});
      self.$nextTick().then((res) => {
        self.validate();
      });
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
            console.error(res);
          }
        }).catch((e) => {
          console.error(e);
          reject(e);
        });
      });
    }
  }
}
</script>
<style lang="css" scoped>
  .error-badge {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 85%;
    position: absolute;
    max-width: 85%;
    top: -1px;
  }
</style>
