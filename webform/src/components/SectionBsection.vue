<template>
  <div>
    <b-row>
      <b-col lg="3">
        <label>{{info.scientific_name.label}}</label>
      </b-col>

      <b-col lg="7">
        <b-input v-model="sectionProp.scientific_name.selected.text" :options="info.scientific_name.options"
                 v-validate="'required'" data-vv-as="Scientific name"
                 v-bind:data-vv-scope="'sectionb_' + 'scientific_name_' + selkey" v-bind:name="'scientific_name_' + selkey"
                 @change="updateSFName($event, selkey)"
        ></b-input>
        <b-badge variant="danger" v-show="errors.has('sectionb_scientific_name_' + selkey + '.' + 'scientific_name_' + selkey )"
                 style="line-height: 3;">{{ errors.first('sectionb_scientific_name_' + selkey + '.' + 'scientific_name_' + selkey ) }}</b-badge>
      </b-col>
      <b-col lg="2" class="d-none d-md-block d-lg-block d-xl-block">
        <b-btn style="margin-bottom: -3rem" variant="danger" @click="removeSection(selkey)" >remove</b-btn>
      </b-col>
    </b-row>
    <b-row  >
      <b-col lg="3">
        <label>{{info.common_name.label}}</label>
      </b-col>

      <b-col lg="7">
        <b-input v-model="sectionProp.common_name.selected.value"
                 @change="updateSectionCommonName($event,selkey)"></b-input>
      </b-col>
      <b-col lg="2" class="d-xs-block d-md-none d-lg-none d-xl-none">
        <b-btn style="margin-bottom: -3rem" variant="danger" @click="removeSection(selkey)">remove</b-btn>
      </b-col>
    </b-row>

    <b-card class="mt-5 mb-5">
      <b-badge variant="danger" v-if="errors.items.filter((err) => {return err.scope.indexOf('sectionb_' + selkey + '_') !== -1; }).length > 0"
        v-b-tooltip.hover
        style="cursor: pointer;"
        :title="errors.items.filter((err) => { return err.scope.indexOf('sectionb_' + selkey + '_') !== -1;} )
          .map((err)=> {return err.msg}).join('\n')"
      >{{ errors.items.filter((err) => { return err.scope.indexOf('sectionb_' + selkey + '_') !== -1; })[0].msg }}</b-badge>

      <div class="panel-heading" @click="(!expanded && sectionProp.mandatory_item.selected) ?
               expanded = true : expanded = false">
        <h3>
          <font-awesome-icon v-bind:icon="expanded ? 'chevron-down' : 'chevron-right'"
            v-show="sectionProp.mandatory_item.selected !== 1 && sectionProp.mandatory_item.selected !== false"
            class="fachevron" />
          <small>{{info.scientific_name.label}}: </small>{{ sectionProp.scientific_name.selected.text }}</h3>
        <h4><small>{{info.common_name.label}}: </small>{{ sectionProp.common_name.selected.value}}</h4>
        <b-row>
          <b-col>
            <b-badge variant="danger" v-if="errors.has('sectionb_mandatory_item_'+ selkey + '.mandatory_item_' + selkey)">
              {{ errors.first('sectionb_mandatory_item_'+ selkey + '.mandatory_item_' + selkey) }}
            </b-badge>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-input-group :prepend="sectionProp.mandatory_item.label">
              <b-form-select v-model="sectionProp.mandatory_item.selected"
                 v-validate="'selectRequiredNumber:1'"
                 data-vv-as="Mandatory item"
                 v-bind:key="'mandatory_item_' + selkey"
                 v-bind:data-vv-scope="'sectionb_mandatory_item_'+ selkey"
                 v-bind:name="'mandatory_item_' + selkey"
                 :options="sectionProp.mandatory_item.options">
              </b-form-select>
            </b-input-group>
          </b-col>
        </b-row>
      </div>

      <b-collapse :id="'collapse' + selkey" :visible="expanded">
        <div class="mt-4" v-if="sectionProp.mandatory_item.selected === true">
          <hr>
          <h6>
            {{ sectionProp.depending_on_mandatory.label}}
          </h6>
          <div class="mt-4" v-if="sectionProp.mandatory_item.selected === true">

            <PatternField :patternfields="sectionProp.depending_on_mandatory.reproduction_patterns"
                          :scope="'sectionb_' + selkey + '_reproduction'"
                          :ref="'sectionb_' + selkey + '_reproduction'"
                          :multiple="sectionProp.depending_on_mandatory.reproduction_patterns.multiple"
                          @remove-pattern="removePattern" @add-new-pattern="addNewPattern">
            </PatternField>

            <!--  TODO: validation for spread  -->
            <PatternField :patternfields="sectionProp.depending_on_mandatory.spread_pattterns"
                          :scope="'sectionb_' + selkey + '_spread'"
                          :ref="'sectionb_' + selkey + '_spread'"
                          :multiple="sectionProp.depending_on_mandatory.spread_pattterns.multiple"
                          @add-new-pattern="addNewPattern" @remove-pattern="removePattern">
            </PatternField>

            <div class="mb-2" v-for="(field, fieldkey, fieldindex) in sectionProp.depending_on_mandatory.fields">
              <b-input-group v-if="field.type === 'select' && 'undefined' === typeof field.selected.region"
                :prepend="field.label">
                <b-form-select :options="field.options" v-model="field.selected"
                  v-validate="'selectRequiredBoolean'"
                  v-bind:name="'depending_on_manadatory_' + selkey + '_' + fieldkey"
                  v-bind:key="'depending_on_manadatory_' + selkey + '_' + fieldkey "
                  v-bind:data-vv-scope="'depending_on_manadatory_' + selkey + '_' + fieldkey"
                  data-vv-as="Depending on mandatory"
                ></b-form-select>
              </b-input-group>

              <div v-if="field.type === 'file'">
                <FormFileUpload :selected="field.selected" :field="field" :fieldkey="fieldkey" files-allowed="jpeg,jpg"
                  @form-file-uploaded="addFilesToSelected" :multiple=false @form-file-delete="deleteFormFile">
                </FormFileUpload>
              </div>

            </div>
          </div>
        </div>

        <b-row class="mt-3" v-if="sectionProp.mandatory_item.selected === true">
          <b-col lg="3">
            {{sectionProp.additional_info.label}}
          </b-col>
          <b-col lg='9'>
            <textarea class="form-control" v-model="sectionProp.additional_info.selected"></textarea>
          </b-col>
        </b-row>

        <div v-if="sectionProp.mandatory_item.selected === true" style="margin-top: 1rem;">
          <h4>{{sectionProp.section.label}}</h4>
          <div v-for="field in sectionProp.section.fields">
            <div class="checkbox-wrapper" v-if="field.type !== 'textarea'" lg="12">
              <input :id="`${field.name}_${selkey}_${tabId}`" type="checkbox" v-model="field.selected" />
              <label :for="`${field.name}_${selkey}_${tabId}`">{{field.label}}</label>
            </div>
            <div lg="12" v-else >
              <label>{{field.label}}</label>
              <textarea class="form-control" v-model="field.selected" ></textarea>
            </div>
          </div>
        </div>

      </b-collapse>
    </b-card>

  </div>
</template>

<script>
  import PatternField from "./PatternField";
  import FormFileUpload from "./FormFileUpload";
  import {getSupportingFiles, envelope} from '../api.js';

    export default {
        name: "SectionBsection",
        props: ['sectionProp', 'selkey','info','tabId'],
        components: {PatternField , FormFileUpload},
        inject: ['$validator'],

        data(){
          return {
            expanded: false,
          }
        },

        methods: {
          validate(){
            let self = this;
            let promises = [];
            for( let child in self.$refs){
              if(self.$refs.hasOwnProperty(child) && 'undefined' !== typeof self.$refs[child].$validator) {
                promises.push( self.$refs[child].$validator.validate() );
                if( 'undefined' !==  self.$refs[child].validate ){
                  promises.push( self.$refs[child].validate());
                }
              }
            }

            return new Promise(function(resolve, reject) {
              Promise.all(promises).then((res) => {
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
          },

          updateSFName(val, selkey){
            let self = this;

            if( self.info.sections[selkey]){
              self.info.sections[selkey].scientific_name.selected.value = val;
              self.info.sections[selkey].scientific_name.selected.text = val;
            }
          },

          updateSectionCommonName($event,selkey){
            //TODO: validation?
            let reg = /(.*?)\[(.*?)\]/;
            let temp = {
              "none": []
            };
            let self = this;

            let more = $event.split(";");

            if(more.length === 0){
              self.info.sections[selkey].common_name.selected.common_names = $event;
              return true;
            }
            more.map((item)=>{
              let match =  item.trim().match(reg);
              if(match === null){
                if("undefined" !== typeof temp["none"]){
                  temp["none"] = [];
                }
                temp["none"].push(item);
                return true;
              }
              let country = match[2].toUpperCase();

              if("undefined" === typeof temp[country] ){
                temp[country] = [];
              }
              if("undefined" !== typeof match[1]) temp[country].push( match[1]);
            });
            self.info.sections[selkey].common_name.selected.common_names = temp;
          },

          removeSection(selkey){
            this.$emit('remove-section', selkey);
          },

          removePattern(fields, fieldkey){
            if(fieldkey !== 0) {
              fields.splice(fieldkey, 1);
            } else {
              fields[fieldkey].selected.region = null;
              fields[fieldkey].selected.pattern = null;
            }
          },

          addNewPattern(fields){
            let newField = JSON.parse(JSON.stringify(fields[0]));
            newField.selected.pattern = null;
            newField.selected.region = null;
            fields.push(newField);
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
          }

        }
    }
</script>

<style scoped>
  .panel-heading {
    cursor: pointer;
  }

  .fachevron {
    font-size: 60%;
    margin-right: 1rem;
  }

  .checkbox-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem 0;
    font-size: 1rem;
  }

  .checkbox-wrapper:hover {
    text-shadow: 1px 1px 3px #aaa;
  }

  .checkbox-wrapper * {
    cursor: pointer;
  }

  .checkbox-wrapper input {
    margin-right: .2rem;
  }

  .checkbox-wrapper label{
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    .addbyselection_wrapper {
      margin-top: 1rem;
    }
  }
</style>
