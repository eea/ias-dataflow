<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h2><center>{{info.question}}</center></h2>
      <b-card class="mt-5 mb-5">
      <div v-for="(field,fieldkey,fieldindex ) in info.section.fields">
        <b-col>
          <label style="font-size: 1.2em;">{{field.label}}</label>

          <!-- for weblinks -->
          <div v-if="field.type === 'text'">
            <span v-if="weblinksFields.indexOf(field.name) !== -1 ">

              <b-badge variant="danger" v-if="errors.has('sectionc_' + field.name , 'sectionc_' + field.name)">
                {{ errors.collect('sectionc_' + field.name, 'sectionc_' + field.name).join('\n') }}
              </b-badge>
              <b-form-input :type="field.type"
                v-model="field.selected"
                :data-vv-as="field.label"
                v-validate.continues="'weblinks'"
                v-bind:key="'sectionc_' + field.name"
                v-bind:data-vv-name="'sectionc_' + field.name"
                v-bind:data-vv-scope="'sectionc_' + field.name"
                :ref="field.name"
              >
              </b-form-input>
            </span>
            <b-form-input v-else :type="field.type" v-model="field.selected"
              v-bind:key="'sectionc_' + field.name"
              v-bind:data-vv-name="'sectionc_' + field.name"
              v-bind:data-vv-scope="'sectionc_' + field.name"
            ></b-form-input>
          </div>

          <div v-else-if="field.type === 'textarea'">

            <!-- for weblinks -->
            <span v-if="weblinksFields.indexOf(field.name) !== -1 ">
              <b-badge variant="danger" v-if="errors.has('sectionc_' + field.name , 'sectionc_' + field.name)">
                {{ errors.collect('sectionc_' + field.name, 'sectionc_' + field.name).join('\n') }}
              </b-badge>
              <textarea class="form-control"
                v-model="field.selected"
                :data-vv-as="field.label"
                v-validate.continues="'weblinks'"
                v-bind:key="'sectionc_' + field.name"
                v-bind:data-vv-name="'sectionc_' + field.name"
                v-bind:data-vv-scope="'sectionc_' + field.name"
                :ref="field.name"
              ></textarea>
            </span>

            <span v-else>
              <textarea class="form-control" v-model="field.selected" :ref="field.name" ></textarea>
            </span>
          </div>

          <div class="add-section" v-else-if="field.type === 'add'" >
            <b-btn variant="primary" @click="addPathway(field)" style="margin-bottom: 1rem;">Add</b-btn>

            <b-row v-for="(addField,fkey) in field.fields" style="margin-bottom: 5px;">
              <b-col md=12>

                <b-input-group :prepend="addField.inner_field.label">
                    <multiselect v-model="speciesModels[fkey]" :options="speciesOptions"
                      style="width: 70%;border-top-left-radius: 0;border-bottom-left-radius: 0;"
                      :multiple="false" :close-on-select="true" :clear-on-select="true" :preserve-search="true" track-by="text"
                      :custom-label="customLabel" @input="changeSpecie($event, field, fkey)"
                    >
                      <!--<template slot="selection" slot-scope="{ values, search, isOpen }">
                        <span class="multiselect__single" v-if="values.length && !isOpen">{{ values.length }} options selected</span>
                      </template>-->
                    </multiselect>
                    <b-input-group-append>
                      <b-btn variant="danger" @click="removePathway(field,addField, fkey)">Remove</b-btn>
                    </b-input-group-append>
                </b-input-group>
                <b class="mt-3">{{addField.label}} :  {{addField.selected ? addField.selected : '-'}}</b>
                <hr>
              </b-col>


            </b-row>

          </div>

          <div v-if="field.type === 'file'">
            <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey"
              :vname="'sectionc_' + field.name"
              :vkey="'sectionc_' + field.name"
              :scope="'sectionc_' + field.name"
              :ref="field.name"
              :multiple=true
              :filesAllowed="'doc,docx,pdf,geojson,zip,dot,docb,dotx,docm'"
              @form-file-uploaded="addFilesToSelected" @form-file-delete="deleteFormFile">
            </FormFileUpload>
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
import species from '../assets/species';
import { getSupportingFiles, envelope} from '../api.js';
import FormFileUpload from "./FormFileUpload";

export default {
  components: {FormFileUpload},
  props: {
    info: null,
    tabId:null,
    speciesOptions: null,
  },

  data () {
    return {
      weblinksFields: [
        'web_link',
        'action_plans_art13',
        'official_control_system',
        'surveillance_system_art14',
        'measures_to_inform_public',
        'cost',
        'additional_info'
      ],
      linkorFile: [],
      //files: [],
      fileIsUploading: [],
      doneUpload: [],
      errorUpload: [],
      counter: [],
      max: [],
      /*speciesOptions : function (){
        /!*return species().species.map((specie) => {
            return {
              value: specie.speciesName,
              text: specie.speciesName,
              code: specie.speciesCode
            };
          });*!/
        return []
      },*/
      speciesModels: [],
    }
  },
  computed: {

  },
  watch: {
    linkorFile(newval, oldval){
      let self = this;
      let key = null;
      let scope = null;

      let fkey = null;
      let fscope = null;
      //Returns true if it is a DOM node
      function isNode(o){
        return (
          typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
        );
      }
      oldval.map((item, ix) => {
        if( isNode( self.$refs[item.link][0] )){
          key = self.$refs[item.link][0].getAttribute('data-vv-name');
          scope =  self.$refs[item.link][0].getAttribute('data-vv-scope');
        } else {
          key = self.$refs[item.link][0].$el.getAttribute('data-vv-name');
          scope =  self.$refs[item.link][0].$el.getAttribute('data-vv-scope');
        }

        if( isNode( self.$refs[item.file][0] )){
          fkey = self.$refs[item.file][0].getAttribute('data-vv-name');
          fscope =  self.$refs[item.file][0].getAttribute('data-vv-scope');
        } else {
          fkey = self.$refs[item.file][0].$el.querySelector('[name]').getAttribute('name');
          fscope =  self.$refs[item.file][0].$el.querySelector('[data-vv-scope]').getAttribute('data-vv-scope');
        }

        let field = self.$validator.fields.find({ name: key, scope: scope });
        let ffield = self.$validator.fields.find({ name: fkey, scope: fscope });

        let err = this.errors.first(key, scope);
        let errF = this.errors.first(fkey, fscope);
        if(self.errors.has(field.name,field.scope )) self.errors.removeById(err.id);
        if(self.errors.has(ffield.name,ffield.scope )) self.errors.removeById(errF.id);
      });

      if( newval.length >= oldval.length ){
        newval.map((item, ix) => {
          if( isNode( self.$refs[item.link][0] )){
            key = self.$refs[item.link][0].getAttribute('data-vv-name');
            scope =  self.$refs[item.link][0].getAttribute('data-vv-scope');
          } else {
            key = self.$refs[item.link][0].$el.getAttribute('data-vv-name');
            scope =  self.$refs[item.link][0].$el.getAttribute('data-vv-scope');
          }

          if( isNode( self.$refs[item.file][0] )){
            fkey = self.$refs[item.file][0].getAttribute('data-vv-name');
            fscope =  self.$refs[item.file][0].getAttribute('data-vv-scope');
          } else {
            fkey = self.$refs[item.file][0].$el.querySelector('[name]').getAttribute('name');
            fscope =  self.$refs[item.file][0].$el.querySelector('[data-vv-scope]').getAttribute('data-vv-scope');
          }

          let field = self.$validator.fields.find({ name: key, scope: scope });
          let ffield = self.$validator.fields.find({ name: fkey, scope: fscope });

          let error = {
            id: field.id,
            vmId: field.vmId,
            field: field.name,
            rule: 'required',
            msg: 'Link or file required',
            scope: field.scope,
          };

          let errorF = {
            id: ffield.id,
            vmId: ffield.vmId,
            field: ffield.name,
            rule: 'required',
            msg: 'Link or file required',
            scope: ffield.scope,
          };

          if(!self.errors.has(field.name,field.scope )) self.errors.add(error);
          if(!self.errors.has(ffield.name,ffield.scope )) self.errors.add(errorF);
        });
      }
    }
  },

  created() {
    let self = this;

    self.info.section.fields.map((field,fieldk) => {
      if(field.type==="add"){
        field.fields.map((f,fkey) => {
          let found = self.speciesOptions.filter((op) => {
            return op.code === f.selected;
          });
          self.speciesModels[fkey] = found[0];
        });
      }
    });
  },
  methods: {
    customLabel({text, value, code}){
      return `${text}`
    },

    titleSlugify(text) {
      return slugify(text)
    },

    addPathway(field){
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
          options: this.speciesOptions,
        }
      };
      field.fields.push(empty_field);
    },

    removePathway(parent, field, fkey){
      function compare(a, b) {
        if (a.text < b.text)
          return -1;
        if (a.text > b.text)
          return 1;
        return 0;
      }

      let code = parent.fields[fkey].selected;
      let name = parent.fields[fkey].inner_field.selected;

      let specie = {
        code: code,
        text: name,
        value: name
      };

      this.speciesOptions.push(specie);
      this.speciesOptions.sort(compare);

      if(parent.fields.length === 1 || parent.fields.length === 0){
        parent.fields[fkey].selected = '';
        parent.fields[fkey].inner_field.selected = '';
      } else {
        parent.fields.splice(parent.fields.indexOf(field), 1);
      }

      this.$delete( this.speciesModels, fkey);
      this.$forceUpdate();
    },

    addFilesToSelected(fieldkey,index,field){
      let self = this;
      getSupportingFiles().then((response) => {
        if(field.selected === '') field.selected = [];
        self.$set(field.selected, index, envelope + '/' + response.data[response.data.length - 1]);
        self.$forceUpdate();
      }).catch((error) =>{
        console.error(error);
      });
    },

    deleteFormFile(found, fieldkey){
        this.info.section.fields[fieldkey].selected.splice(found, 1);
    },

    changeSpecie($event, field, fkey){
      let self = this;

      function compare(a, b) {
        if (a.text < b.text)
          return -1;
        if (a.text > b.text)
          return 1;
        return 0;
      }

      if(field.fields[fkey].selected !== ''){
        let news = JSON.parse(JSON.stringify($event));
        let olds = JSON.parse(JSON.stringify($event));

        olds.code = field.fields[fkey].selected;
        olds.value = field.fields[fkey].inner_field.selected;
        olds.text = field.fields[fkey].inner_field.selected;

        if(olds.code !== '') self.speciesOptions.push(olds);

        self.speciesOptions.sort(compare);
      }

      field.fields[fkey].selected = $event.code;
      field.fields[fkey].inner_field.selected = $event.value;

      self.speciesOptions = self.speciesOptions.filter((item) => {
        return item.code !== $event.code;
      });
    },

    validateRequired(){
      let self = this;

      self.weblinksFields.forEach((item,ix) => {
        if("undefined" !== typeof self.$refs[item+'_file']){
          if(self.$refs[item][0].value.length === 0 && self.$refs[item+'_file'][0].$props.field.selected.length === 0 ){
            self.linkorFile.push({ link:item, file: item + '_file' });
          } else {
            let res = self.linkorFile.filter((it) => {
              return it.link !== item;
            });
            self.$set( self, "linkorFile", res);
          }
        }
      });
    },

    validate(){
      let self = this;
      let promises = [];

      for( let child in self.$refs){
        if(self.$refs.hasOwnProperty(child) &&  'undefined' !== typeof self.$refs[child][0]
          && 'undefined' !== typeof self.$refs[child][0].$validator) {
          if('undefined' !== typeof self.$refs[child][0].validate){
            promises.push( self.$refs[child][0].validate());
          }
          promises.push(self.$refs[child][0].$validator.validate());
        }
      }

      self.validateRequired();

      self.$forceUpdate();

      return new Promise(function(resolve, reject) {
        Promise.all(promises).then((res) => {
          // if no errors
          //res = res.concat(lorf);
          if(res.filter((it)=>{ return it === false}).length === 0){
            resolve(res);
          } else {
            reject(res);
          }
        }).catch((e) => {
          reject(e);
        });
      });
    },
  },
}
</script>

<style lang="css" scoped>
  /*.add-section .col {
    line-height: 2rem;
  }*/

  .multiselect {
    width: auto;
  }
</style>

<style>
  .multiselect multiselect--active {
     z-index: 2000;
  }


</style>
