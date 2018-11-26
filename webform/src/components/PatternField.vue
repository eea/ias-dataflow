<template>
  <div class="table-wrapper">
    <table class="table table-striped">
      <thead class="bg-primary">
      <th><span v-html="patternfields[0].label"></span></th>
      <th>Biogeographical region</th>
      <th><span>Actions</span></th>
      </thead>
      <tbody>
      <tr v-for="(field,fieldkey) in patternfields">
        <td>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_pattern_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
              >{{ errors.first(scope + '_pattern_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>

            <!--<multiselect
              v-model="field.selected.pattern" :options="field.options"
              :multiple="multiple"
              :close-on-select="false" :clear-on-select="false" :preserve-search="true"
              track-by="text"
              v-validate="'required'" data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
              v-bind:data-vv-scope="scope" v-bind:name="scope + '_pattern_' + fieldkey"
              :custom-label="customLabel"
            ></multiselect>-->

            <!-- v-validate="'required'" -->
            <b-form-select :options="field.options" v-model="field.selected.pattern"
               data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
              v-bind:data-vv-scope="scope"
              v-bind:name="scope + '_pattern_' + fieldkey"
              :ref="scope + '_pattern_' + fieldkey"
            ></b-form-select>

          </b-input-group>
        </td>
        <td>
          <b-input-group>
            <b-input-group-prepend v-if="errors.has(scope + '_region_' + fieldkey,scope)">
              <b-badge class="error-badge"  variant="danger"
              >{{ errors.first(scope + '_region_' + fieldkey, scope) }}</b-badge>
            </b-input-group-prepend>

            <!-- v-validate="'required'" -->
            <b-form-select :options="field.regionOptions" v-model="field.selected.region"
              data-vv-as="region" v-bind:name="scope + '_region_' + fieldkey"
              v-bind:key="scope + '_region_' + fieldkey"
              v-bind:data-vv-scope="scope"
              :ref="scope + '_region_' + fieldkey"
              :custom-label="customLabel"
            ></b-form-select>
          </b-input-group>
        </td>
        <td><b-btn variant="danger" @click="removeRow(fieldkey)">X</b-btn></td>
      </tr>
      </tbody>
    </table>
    <b-btn variant="default" class="addnew" @click="addNewRow">
      + Add another pattern
    </b-btn>
  </div>
</template>

<script>
  export default {
    name: 'PatternField',
    props: ['patternfields','scope', 'multiple'],
    data(){
      return {
      }
    },
    methods: {
      addNewRow(){
        this.$emit('add-new-pattern', this.patternfields);
      },
      removeRow(fieldkey){
        this.$emit('remove-pattern', this.patternfields, fieldkey);
      },
      customLabel({ text, value}){
        return `${text}`
      },

      validateSpread(){
        let self = this;
        console.log("validating spread patterns");

        let patsN = Object.keys(self.$refs).filter((item) => {
          return item.indexOf("pattern") !== -1;
        });

        let pats = patsN.map((name) => { return self.$refs[name][0]});


        console.log(pats);

        return new Promise(function(resolve, reject) {
            resolve(false);
            //reject(false);
        });
      },

      validate(){
        let promises = [];
        let self = this;

        let lorf = [];

        console.log("validating patterns");

        if( self.patternfields[0].patternType === "spread"){
          promises.push(self.validateSpread());
        }

        for( let ref in self.$refs){
          if(self.$refs.hasOwnProperty(ref) && 'undefined' !== typeof self.$refs[ref][0].$validator.validate) {
            promises.push(self.$refs[ref][0].$validator.validate());
          }
          if('undefined' !== typeof self.$refs[ref][0].validate){
            promises.push(self.$refs[ref][0].validate());
          }
        }

        return new Promise(function(resolve, reject) {
          Promise.all(promises).then((res) => {
            // if no errors
            res = res.concat(lorf);
            if(res.filter((it)=>{ return it === false}).length === 0){
              resolve(res);
            } else {
              reject(res);
            }

          }).catch((e) => {
            reject(e);
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
    overflow: auto;
    border-radius: 0.25rem;
  }

  .table {
    margin-bottom: 0;
    border-spacing: 0;
    border-style: hidden;
    width:100%;
    max-width: 100%;
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
  .multiselect__tags {
    padding: 0;
  }
</style>
