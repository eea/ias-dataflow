<template>
  <div v-if="info">

  <div class="question-wrapper">
    <h1><center>{{info.question}}</center></h1>
      <b-card class="mt-5 mb-5">
      <div v-for="(field,fieldkey,fieldindex ) in info.section.fields">
        <b-col>
          <label>{{field.label}}</label>

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
            <b-form-input  v-else :type="field.type" v-model="field.selected"
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

          <div class="add-section" v-else-if="field.type === 'add'">
            <b-btn variant="primary" @click="addPathway(field)">Add</b-btn>

            <b-row v-for="(addField,fkey) in field.fields" style="margin-bottom: 5px;">
              <b-col>

              </b-col>
              <b-col>

                <b-form-input disabled :type="addField.type" v-model="addField.selected" ></b-form-input>
              </b-col>
              <b-col>
                {{addField.inner_field.label}}
              </b-col>
              <b-col>

                <b-form-select :type="addField.inner_field.type" v-model="addField.inner_field.selected"
                               :options="speciesOptions" @change="changeSpecie($event, field, fkey)"></b-form-select>
              </b-col>
              <b-col>
                  <b-btn variant="danger" @click="removePathway(field,addField)">Remove</b-btn>
              </b-col>
            </b-row>

          </div>

          <div v-if="field.type === 'file'">
            <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey"
              :vname="'sectionc_' + 'file' + '_' + fieldkey"
              :vkey="'sectionc_' + 'file' + '_' + fieldkey"
              :vscope="'sectionc_files' + '_' + fieldkey"
              :multiple=true
              :filesAllowed="'zip,geojson'"
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
import speciesB from '../assets/speciesB.js';
import species from '../assets/species';
import { getSupportingFiles, envelope} from '../api.js';
import FormFileUpload from "./FormFileUpload";


export default {
  components: {FormFileUpload},
  props: {
    info: null,
    tabId:null
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
      //files: [],
      fileIsUploading: [],
      doneUpload: [],
      errorUpload: [],
      counter: [],
      max: [],
      speciesOptions : species.map((specie) => {
        return {
          value: specie.speciesName,
          text: specie.speciesName,
          code: specie.speciesCode
        };
      })
    }
  },

  methods: {
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

    removePathway(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1)
    },

    addFilesToSelected(fieldkey,index,field){
      let self = this;
      getSupportingFiles().then((response) => {
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
      let found = species.filter((item) => {
        return item.speciesName === $event;
      });
      if(found.length > 0 ){
        field.fields[fkey].selected = found[0].speciesCode;
      }
    },

    validate(){
      let self = this;
      let promises = [];

      //console.log(this.$refs);

      for( let child in this.$refs){
        if(this.$refs.hasOwnProperty(child) &&  'undefined' !== typeof this.$refs[child][0]
          && 'undefined' !== typeof this.$refs[child][0].$validator) {
          if('undefined' !== typeof this.$refs[child][0].validate){
            promises.push( this.$refs[child][0].validate());
          }
          promises.push(this.$refs[child][0].$validator.validate());
        }
      }

      var lorf = [];

      /*this.weblinksFields.forEach((item) => {
        if("undefined" !== typeof this.$refs[item+'_file']){
          console.log(this.$refs[item+'_file'][0].$props.field.selected);

         self.$validator.verify(this.$refs[item].value, 'linkOrFile:conf', {
            bails: true,
            name: 'linkOrFile',
            values: { conf: this.$refs[item+'_file'].value }
          }).then((res) => {
            console.log("linkOrFile");
            console.log(res);
          }).catch((rej) => {
            console.log("linkOrFile");
            console.error(rej);
          });*!/


          /!*if(this.$refs[item][0].value.length === 0 && this.$refs[item+'_file'][0].$props.field.selected.length === 0 ){

            lorf.push(false);

            let key = 'sectionc_' + item;
            let scope = 'sectionc_' + item;

            let field = this.$validator.fields.find({ name: key, scope: scope });

            let error = {
              id: 'sectionc_' + item,
              vmId: field.vmId,
              field: field.name,
              rule: 'linkOrFile',
              msg: 'Link or file required ' + field.name,
              scope: 'sectionc_' + item,
            };

            //if( fieldErrors.length === 0 ){
              debugger;
              this.errors.add(error);
            //}

            field.setFlags({
              invalid: true,
              valid: false,
              validated: true,
            });

            this.$forceUpdate();

          } else {
            lorf.push(true);
          }
        }
      });*/
      this.$forceUpdate();

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

</style>
