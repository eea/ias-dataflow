<template>
  <div class="table-wrapper">
    <table class="table table-striped">
      <thead class="bg-primary">
      <th><span v-html="patternfields[0].label"></span></th>
      <!--<th v-if='patternfields[0].patternType === "spread"'><span>Actions</span></th>-->
      </thead>
      <tbody>
       <!--{{  patternfields[0].patternType === "spread" ?  patternfields : '' }}-->

      <tr v-for="(field,fieldkey) in patternfields">
        <td v-if='patternfields[0].patternType !== "spread"'>
            <b-input-group>
              <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey,scope)">
                <b-badge class="error-badge"  variant="danger"
                         :title="errors.collect(scope + '_pattern_' + fieldkey, scope).join('\n')"
                         v-b-tooltip.hover
                >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
              </b-input-group-prepend>

              <!-- v-validate.continues="'required'" @input="validate" -->
              <b-form-select :options="field.options" v-model="field.selected.pattern"
                             v-validate="'falserequire'"
                             data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
                             v-bind:data-vv-scope="scope"
                             v-bind:name="scope + '_pattern_' + fieldkey"
                             :ref="scope + '_pattern_' + fieldkey"
                             @change="validate"
                             @input="validate"

              ></b-form-select>

            </b-input-group>
        </td>

        <td v-if='patternfields[0].patternType === "spread"'>
          <b-col>
            <b-input-group>
              <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey, scope)">
                <b-badge class="error-badge"  variant="danger"
                         :title="errors.collect(scope + '_pattern_' + fieldkey, scope).join('\n')"
                         v-b-tooltip.hover
                >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
              </b-input-group-prepend>

              <!-- @input="validateSpread" @select="selectChange" -->
              <multiselect
                 :options="field.options"
                 v-model="field.selected.pattern"
                 v-validate="'falserequire|spreadvalidate'"
                 data-vv-as="pattern"
                 v-bind:key="scope + '_pattern_' + fieldkey"
                 v-bind:data-vv-scope="scope"
                 v-bind:name="scope + '_pattern_' + fieldkey"
                 :ref="scope + '_pattern_' + fieldkey"
                 :close-on-select="false"
                 :clear-on-select="false"
                 :hide-selected="true"
                 :preserve-search="true"
                 track-by="value"
                 :multiple=true
                 :class="'spreadmulti'"
                 :allow-empty="true"
                 :selectLabel = "''"
                 :custom-label="customLabel"
              ></multiselect>
            </b-input-group>
          </b-col>
        </td>

        <!--<td>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_region_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
                       :title="errors.collect(scope + '_region_' + fieldkey, scope).join('\n')"
                       v-b-tooltip.hover
              >{{ errors.first(scope + '_region_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>

            <b-form-select :options="field.regionOptions" v-model="field.selected.region" v-validate="'required'"
              data-vv-as="region" v-bind:name="scope + '_region_' + fieldkey"
              v-bind:key="scope + '_region_' + fieldkey"
              v-bind:data-vv-scope="scope"
              :ref="scope + '_region_' + fieldkey"
              :custom-label="customLabel"
              @change="validate"
            ></b-form-select>
          </b-input-group>
        </td>-->

        <!--<td v-if='patternfields[0].patternType === "spread"'><b-btn variant="danger" @click="removeRow(fieldkey)">X</b-btn></td>-->
      </tr>
      </tbody>
    </table>
    <!--<b-btn variant="default" class="addnew" @click="addNewRow" v-if='patternfields[0].patternType === "spread"' >
      + Add another pattern
    </b-btn>-->
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: 'PatternField',
    props: ['patternfields','scope', 'multiple'],
    components: { Multiselect},
    //inject:['$validator'],
    data(){
      return {
        spreadvals: [],
        firstval: [],
        secondval:[],
        patrefs: [],
        reprovals: [],
      }
    },

    methods: {
      addNewRow(){
        this.$emit('add-new-pattern', this.patternfields);
      },
      removeRow(fieldkey){
        this.$emit('remove-pattern', this.patternfields, fieldkey);
      },
      customLabel({ text, index, value}){
        return `${text}`
      },

      selectChange(){
        this.spreadvals = [];
        this.$forceUpdate();

        this.validateSpread().then((res) => {
          console.log(res);
        });
      },

      validate(){
        let promises = [];
        let self = this;

        /*if( self.patternfields[0].patternType === "spread"){
          promises.push( self.validateSpread() );
        }*/

        for( let ref in self.$refs){
          if( self.$refs.hasOwnProperty(ref) ){
            if( "undefined" === typeof self.$refs[ref][0] ){
              continue;
            }
            if(self.$refs.hasOwnProperty(ref) && 'undefined' !== typeof self.$refs[ref][0].$validator.validate) {
              promises.push(self.$refs[ref][0].$validator.validate());
            }
            if('undefined' !== typeof self.$refs[ref][0].validate){
              promises.push(self.$refs[ref][0].validate());
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
            console.error(e);
          });
        }).catch((err) => {
          console.error(err);
        });
      }
    }
  }
</script>

<style scoped>
  .table-wrapper {
    margin-bottom: 2rem;
    /*overflow-x: auto;*/
    border-radius: 0.25rem;
  }

  .table {
    margin-bottom: 0;
    border-spacing: 0;
    border-style: hidden;
    width:100%;
    max-width: 100%;
  }

  .table th {
    font-size: 1.2em;
  }

  thead {
    color: white
  }

  .error-badge {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    line-height: 2rem;
  }

  .addnew {
    width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>

<style>
  /* .multiselect__tags {
    padding: 0;
  } */
  @media screen and (max-width: 1024px) {
    .spreadmulti .multiselect__element span {
      white-space: normal;
    }
  }
</style>
