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
               :title="errors.collect(scope + '_pattern_' + fieldkey, scope).join('\n')"
                       v-b-tooltip.hover
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

            <b-form-select :options="field.options" v-model="field.selected.pattern" v-validate="'required'"
               data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
              v-bind:data-vv-scope="scope"
              v-bind:name="scope + '_pattern_' + fieldkey"
              :ref="scope + '_pattern_' + fieldkey"
              @change="validate"
            ></b-form-select>

          </b-input-group>
        </td>
        <td>
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
    //inject:['$validator'],
    data(){
      return {
        spreadvals: [],
        firstval: [],
        secondval:[],
        patrefs: [],
      }
    },
    watch: {
      spreadvals(vals, oldVals){
        let self = this;

        if(vals.length === 0){
          oldVals.map((ref)=> {
            let el = ref.$el;
            let name = el.getAttribute('name');
            let scope = el.getAttribute('data-vv-scope');

            if('undefined' !== typeof self.$validator){
              let field = self.$validator.fields.find({ name: name, scope: scope });

              let foundP = this.errors.items.filter((item) => {
                return item.field === field.name && item.scope === field.scope;
              });
              foundP.map((err)=> {
                self.$validator.errors.removeById(err.id);
              });
            }
          });
        } else {
          vals.map((ref) => {
            let el = null;

            if('undefined' !== typeof ref.ref){
              el = ref.ref.$el;
            } else {
              el = ref.$el;
            }

            if(el !== null){
              let name = el.getAttribute('name');
              let scope = el.getAttribute('data-vv-scope');

              if('undefined' !== typeof self.$validator){
                let field = self.$validator.fields.find({ name: name, scope: scope });

                let foundP = self.errors.items.filter((item) => {
                  return item.field === field.name && item.scope === field.scope;
                });

                if('undefined' !== typeof self.$validator){

                  foundP.map((err)=> {
                    self.$validator.errors.removeById(err.id);
                  });
                }

                if('undefined' !== typeof field){
                  let error = {
                    field: field.name,
                    msg: "At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.",
                    scope: field.scope,
                    rule: 'required',
                    vmId: field.vmId
                  };

                  if('undefined' !== typeof self.$validator){

                  }
                  self.$validator.errors.add(error);
                }
              }
            }
          });
        }
      },
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
        function filterPats(pats ,tofilter ) {
          let res = [];
          pats.map((el) => {
            tofilter.map((item) => {
              if(el !== item.ref){ res.push(item); }
            })
          });

          return res.map((item) => { return item.ref});
        }

        return new Promise(function(resolve, reject) {
          let patsN = Object.keys(self.$refs).filter((item) => {
            return item.indexOf("pattern") !== -1;
          });

          let vals = [];

          let pats = patsN.map((name) => {
            let ref = self.$refs[name][0];
            let val = parseInt(ref.$el.value, 10);

            vals.push({
              ref: self.$refs[name][0],
              val: val,
            });
            return self.$refs[name][0];
          });

          let allowedFirst = [1,2,3,4];
          let allowedSecond = [5,6,7,8];
          let tofilter = [];

          let first = vals.filter((el) => {
            return allowedFirst.indexOf(el.val) !== -1;
          });

          let second = vals.filter((el) => {
            return allowedSecond.indexOf(el.val) !== -1;
          });

          vals.map((el) => {
            if(allowedFirst.indexOf(el.val) === -1 && allowedSecond.indexOf(el.val) === -1 ) { tofilter.push(el); }
          });

          if(tofilter.length === 0){
            pats = [ pats[pats.length-1] ];
          } else  {
            if(first.length === 0 || second.length === 0){
              //console.log(pats);
            } else {
              pats = filterPats(pats, tofilter );
            }
          }

          if(first.length > 0 && second.length > 0){
            resolve(true);
            self.spreadvals = [];
            self.$forceUpdate();
          } else {
            if(first.length === 0 || second.length === 0){
              //console.log(pats);
            }
            self.spreadvals = pats;
            resolve(false);
            self.$forceUpdate();
          }
        });
      },

      validate(){
        let promises = [];
        let self = this;

        let newvalid = [];

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
            res = res.concat(newvalid);
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
