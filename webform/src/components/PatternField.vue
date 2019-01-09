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

              <b-form-select :options="field.options" v-model="field.selected.pattern" v-validate="'required'"
                             data-vv-as="pattern"  v-bind:key="scope + '_pattern_' + fieldkey"
                             v-bind:data-vv-scope="scope"
                             v-bind:name="scope + '_pattern_' + fieldkey"
                             :ref="scope + '_pattern_' + fieldkey"
                             @change="validate"
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

              <multiselect :options="field.options"
                 v-model="field.selected.pattern"
                 v-validate="'required'"
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
                 @select="validate"
                 @input="validate"
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
    watch: {
      spreadvals(vals, oldVals){
        let self = this;

        if(vals.length === 0){
          oldVals.map((ref)=> {
            let el = ref.ref.$el;
            let name = el.getAttribute('name') || el.querySelector("[name]").getAttribute('name');
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
          if(vals.length === 0) return true;
          vals = vals.filter((itm) => { return itm !== 'undefined' });

          vals.map((ref) => {

            let el = null;

            if('undefined' === typeof ref){
              return true;
            }

            if('undefined' !== typeof ref.ref){
              el = ref.ref.$el;
            } else {
              el = ref.$el;
            }

            if(el !== null){
              let name = el.getAttribute('name') || el.querySelector("[name]").getAttribute('name');
              let scope = el.getAttribute('data-vv-scope');

              if('undefined' !== typeof self.$validator){
                let field = self.$validator.fields.find({ name: name, scope: scope });

                let foundP = self.errors.items.filter((item) => {
                  return item.field === name && item.scope === scope;
                });

                if('undefined' !== typeof self.$validator){
                  foundP.map((err)=> {
                    self.$validator.errors.removeById(err.id);
                  });
                }

                const errs = {
                  "bferr": "At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.",
                  "samereg": "Same region"
                };

                let errmsg = errs[ref.errtype];

                if('undefined' !== typeof field){
                  let error = {
                    field: field.name,
                    msg: errmsg,
                    scope: field.scope,
                    rule: 'required',
                    //vmId: field.vmId
                  };

                  if('undefined' !== typeof self.$validator){
                    self.$validator.errors.add(error);
                  }

                }
              }
            }


          });
        }
      },

      reprovals(vals, oldVals){
        let self = this;
        let rule = 'duplicateRegion';

        if(vals.length > 0){
          /*oldFields.map((field)=> {
            self.$emit("add-error", null, field);
          });*/


          vals.map((field) => {
            let fd = null;
            self.$validator.fields.items.filter((it) => {
              if(field.name === it.name) fd = field;
            });

            if(fd === null) return true;

            let errMsg = ( field.errtype === "samereg" ) ? "Same region" : "Same region and pattern";

            let error = {
              field: fd.name,
              msg: errMsg,
              scope: fd.scope,
              rule: rule,
              //vmId: fd.vmId
            };

            let errorP = {
              field: fd.name,
              msg: errMsg,
              scope: fd.scope,
              rule: rule,
              //vmId: fd.vmId
            };
            self.$validator.errors.add(error);
            //self.$emit("add-error", errorP, field);

            self.$forceUpdate();
          });

        } else {
          //self.$emit("add-error", null, field);

          //self.$validator.errors.clear()
          oldVals.map((field)=> {
            let fd = null;
            self.$validator.fields.items.filter((it) => {
              if(field.name === it.name) fd = field;
            });

            self.$emit("add-error", null, fd);
          });
        }
        /*vals.map((val) => {
          let pat = val.pat;
          //console.log(pat.$el);
          let scope = pat.$el.getAttribute("name");
          let name = pat.$el.getAttribute("data-vv-scope");
        });*/

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

      validateSpread(){
        let self = this;

        function validateRegions( regvals, regpats){
          let uniq = regvals.reduce(( a,b ) => {
            a[ b.val ] = (a[ b.val ] || 0) + b.count;
            if('undefined' === typeof a[ b.val + "_refs"] ){
              a[ b.val + "_refs"] = [];
            }
            a[ b.val + "_refs"].push({
              ref: b.ref,
            });
            return a;
          },{});

          let res = [];
          Object.keys(uniq).filter((a) => uniq[a] > 1).map((dup) => {
            res.push( uniq[dup + "_refs"].map((d) => { return { ref: d.ref, errtype:"samereg" };}) );
          });
          res = res.reduce((a,b) => {
            a = a.concat(b);
            return a;
          }, []);
          return res;
        }

        return new Promise(function (resolve, reject){
          let patsN = Object.keys(self.$refs).filter((item) => {
            return item.indexOf("pattern") !== -1;
          });
          let regsN = Object.keys(self.$refs).filter((item) => {
            return item.indexOf("region") !== -1;
          });

          let vals = [];
          let regvals = [];

          // b-e && f-i validation
          patsN.map((name) => {
            let ref = self.$refs[name][0];

            if("undefined" !== typeof ref){
              let temp = [];

              const allowedFirst = [1,2,3,4];
              const allowedSecond = [5,6,7,8];

              // iterating through multiselect selected values
              let first = [];
              let second = [];
              let nogood = [];

              if(ref.value === null ) return null;
              let filtere = ref.value.map((item) => {
                let val = parseInt(item.value, 10);
                if(allowedFirst.indexOf(val) !== -1) first.push(val);
                if(allowedSecond.indexOf(val) !== -1) second.push(val);
                nogood.push(val);
              });

              if(first.length === 0 || second.length  === 0){
                vals.push({
                  ref: self.$refs[name][0],
                  errtype: "bferr",
                });
              }

              return self.$refs[name][0];
            } else {
              return null;
            }
          });

          // for region validation
          let regpats = regsN.map((name) => {
            let ref = self.$refs[name][0];
            if("undefined" !== typeof ref){
              let val = ref.$el.value;
              regvals.push({
                ref: self.$refs[name][0],
                errtype: "samereg",
                val: val,
                count: 1
              });
              return self.$refs[name][0];
            } else {
              return null;
            }
          });

          let rv = validateRegions( regvals, regpats);
          let allerrors = vals.concat(rv);

          if(allerrors.length > 0){
            self.spreadvals = allerrors;
            reject(false);
          } else {
            self.spreadvals = [];
            resolve(true);
          }
          self.$forceUpdate();
        });
      },

      validateReproduction(){
        let self = this;
        return new Promise(function(resolve, reject) {
          let vals = [];

          Object.keys(self.$refs).filter((item) => {
            return item.indexOf("pattern") !== -1 || item.indexOf("region") !== -1;
          }).map((name) => {
            let ref = self.$refs[name][0];
            if("undefined" !== typeof ref) {
              let val = ref.$el.value;
              vals.push({
                refName: self.$refs[name][0].name,
                val: val,
                ref:ref
              });
              return self.$refs[name][0];
            } else {
              return null;
            }
          });

          let temp = [];

          vals.map((val) => {
            let reg = /sectiona_([0-9]*)_(\w+)_([0-9])/;
            let res = val.refName.match(reg);
            if(res !== null){
              let row = res[3];
              let pat = res[2];
              if("undefined" === typeof temp[row]){
                temp[row] = {};
              }
              temp[row][pat] = { val :val.val, ref : val.ref};
              temp[row]["count"] = 1;
            }
          });

          let uniq = temp.reduce((a,b)=> {
            let finalV = b.reproduction_pattern.val + "|"+ b.reproduction_region.val;
            a[ finalV ] = ( a[ finalV ] || 0) + b.count;
            if('undefined' === typeof a[ finalV + "_refs"] ){
              a[ finalV + "_refs"] = [];
            }
            a[ finalV + "_refs"].push({
              pat: b.reproduction_pattern.ref,
              reg: b.reproduction_region.ref,
              type: "samepatreg"
            });
            return a;
          },{});

          let uniqReg = temp.reduce((a,b)=> {
            let finalV = b.reproduction_region.val;
            a[ finalV ] = ( a[ finalV ] || 0) + b.count;
            if('undefined' === typeof a[ finalV + "_refs"] ){
              a[ finalV + "_refs"] = [];
            }
            a[ finalV + "_refs"].push({
              pat: b.reproduction_pattern.ref,
              reg: b.reproduction_region.ref,
              type: "samereg"
            });
            return a;
          },{});

          let res = [];

          Object.keys(uniq).filter((a) => uniq[a] > 1).map((dup) => {
            res.push( uniq[dup + "_refs"].map((d) => { return { pat: d.pat, errtype: d.type };}) );
          });

          Object.keys(uniqReg).filter((a) => uniqReg[a] > 1).map((dup) => {
            res.push( uniqReg[dup + "_refs"].map((d) => { return { pat: d.pat, errtype: d.type };}) );
          });

          let fields = [];
          res.map((val) => {
            val.map((v) => {
              let name = v.pat.$el.getAttribute("name");
              let scope = v.pat.$el.getAttribute("data-vv-scope");
              fields.push( { name: name , scope: scope, errtype: v.errtype });
            });
          });
          self.reprovals = fields;
          resolve(true);
        });
      },

      validate(){
        let promises = [];
        let self = this;

        if( self.patternfields[0].patternType === "spread"){
          promises.push( self.validateSpread() );
        }

        if ( self.patternfields[0].patternType === "reproduction" ){
          //promises.push( self.validateReproduction() );
        }

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
