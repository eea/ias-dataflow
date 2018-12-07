<template>
  <div v-if="info">
  <div class="question-wrapper">
    <h2><center>{{info.question}}</center></h2>
    <br/>
    <h4><i><center>{{info.help_text}}</center></i></h4>
      <b-card class="mt-5 mb-5">
        <div v-for="(field, fieldkey, fieldindex ) in info.section.fields">
          <b-col>
            <label style="font-size: 1.2em;">{{field.label}}</label>
            <b-form-input v-if="field.type === 'text'" :type="field.type" v-model="field.selected" ></b-form-input>
            <textarea class="form-control" v-else-if="field.type === 'textarea'" v-model="field.selected" ></textarea>
            <div class="add-section" v-else-if="field.type === 'add'">
              <b-btn variant="primary" @click="addPathway(field)">Add</b-btn>
              <b-row v-for="(addField, addFkey) in field.fields">
                <b-col>
                  {{addField.label}}
                </b-col>
                <b-col>
                  <b-form-input :type="addField.type" v-model="addField.selected" ></b-form-input>
                </b-col>
                <b-col>
                  {{addField.inner_field.label}}
                </b-col>
                <b-col>
                  <b-form-input :type="addField.inner_field.type" v-model="addField.inner_field.selected" ></b-form-input>
                </b-col>
                <b-col>
                    <b-btn variant="danger" @click="removePathway(field,addField)">Remove</b-btn>
                </b-col>
              </b-row>
            </div>

            <div v-if="field.type === 'file'">
              <FormFileUpload :selected="field.selected" :field="field"
                :fieldkey="fieldkey"
                files-allowed="shp, geojson, gml,zip"
                :vname="'dmap' + 'file' + '_' + fieldkey"
                :vkey="'dmap' + 'file' + '_' + fieldkey"
                :scope="'dmap' + '_' + fieldkey"
                :multiple=false
                :required="true"
                @form-file-uploaded="addFilesToSelected"
                @form-file-delete="deleteFormFile">
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
import { getSupportingFiles, envelope} from '../api.js';
import FormFileUpload from "./FormFileUpload";

export default {
  components: {FormFileUpload},
  props: {
    info: null,
    tabId:null
  },
  inject: ["$validator"],

  data () {
    return {
    }
  },

  methods: {
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
        }
      };
      field.fields.push(empty_field)
    },

    removePathway(parent, field){
      parent.fields.splice(parent.fields.indexOf(field), 1)
    },

    addFilesToSelected(fieldkey, index, field){
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

    validate(){
      let self = this;
      let promises = [];

      for( let child in self.$refs){
        if(self.$refs.hasOwnProperty(child) &&  'undefined' !== typeof self.$refs[child][0]
          && 'undefined' !== typeof self.$refs[child][0].$validator) {
          if('undefined' !== typeof self.$refs[child][0].validate){
            promises.push( self.$refs[child][0].validate()  );
          }
          promises.push( self.$refs[child][0].$validator.validate() );
        }
      }
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

</style>
