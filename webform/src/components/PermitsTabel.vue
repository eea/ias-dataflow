<template>
  <div class="table-wrapper">

    <!--{{ errors.items

    /*.filter((err) => {
        return err.rule === "requiredUnique"
    } )*/ }}-->
    <table class="table table-striped">
      <thead class="bg-info">
      <th class="year-column" >Year</th>
      <th class="permits-column">{{table_section.table_fields.header}}</th>
      <th class="header-column" v-for="header in table_section.table_fields.fields[0].fields" v-if="header.label !=='Year' ">{{ header.label  }}</th>
      <th><span>Actions</span></th>
      </thead>
      <tbody>

      <!-- TODO: add validation so that each same name has unique year -->
        <tr v-for="(row,rkey) in rows">
          <td v-for="(field,fkey) in row.fields" v-if="field.name === 'year'">
            <b-badge v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey )"
                     variant="danger" class="error-badge" v-b-tooltip.hover
            :title="errors.first('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey  )">
              {{ errors.first('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey ) }}
            </b-badge>

            <b-form-select  v-model="field.selected" :options="field.options"
                            v-validate.continues ="'required'"
                            :data-vv-as="field.label"
                            :ref="'permits_' + field.name + '_' + rkey"
                            v-bind:key="'permits_' + field.name + '_' + rkey"
                            v-bind:name="'permits_' + field.name + '_' + rkey"
                            v-bind:data-vv-scope="'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey"
                            @change="validate"
            ></b-form-select>
          </td>

          <!-- TODO: permits select -->
          <td>
            <b-badge v-if=" errors.has( 'permits_' + 'permit' + '_' + rkey , 'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey )"
                     variant="danger" class="error-badge" >
              {{ errors.first( 'permits_' + 'permit' + '_' + rkey , 'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey ) }}
            </b-badge>

            <b-form-select :options="options" v-model="index[rkey]"
                           @change="changeRow($event, rkey)"
                             v-bind:key="'permits_' + 'permit' + '_' + rkey"
                             v-bind:name="'permits_' + 'permit' + '_' + rkey"
                             :ref="'permits_' + 'permit' + '_' + rkey"
                             data-vv-as="permits "
                             v-bind:data-vv-scope="'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey"
                             v-validate="'required'"


            ></b-form-select>

          </td>

          <td v-for="(field,fkey) in row.fields"  v-if="field.name !== 'year'">
            <b-badge v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey )"
                     variant="danger" class="error-badge" :id="'permits_' + field.name + '_' + rkey + 'badge'"
                     :title="errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey).join('\n')"
                     v-b-tooltip.hover
                    >
              {{ errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey ).join('\n') }}
            </b-badge>
            <field-generator :field="field" validation="'required'"
                             :ref="'permits_' + field.name + '_' + rkey"
                             :vname="'permits_' + field.name + '_' + rkey"
                             :vkey="'permits_' + field.name + '_' + rkey"
                             :vscope="'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey"
                             @change="validate"
                             @input="validate"

            ></field-generator>
          </td>

          <td><b-btn variant="danger" @click="removeRow(rkey)">X</b-btn></td>
        </tr>

      </tbody>
    </table>
    <b-input-group>
      <b-btn class="btnAdd" variant="default" @click="addRow">Add row</b-btn>
    </b-input-group>


  </div>
</template>

<script>
  import fieldGenerator from './fieldGenerator';
  import { ErrorBag } from 'vee-validate';

  export default {
    name: "PermitsTable",
    props: ['table_section', 'yearoptions', 'scope'],
    components: { fieldGenerator },
    inject: ['$validator'],
    data(){
      return {
        index: [],
        options: [],
        initialRows: [],
        rows: this.table_section.table_fields.fields,
        duplicateFields: []
      }
    },
    created: function(){
      if('undefined' !== typeof this.table_section.table_fields.fields){

        this.table_section.table_fields.fields.forEach((field, ix)=>{
          this.index[ix] = ix;
        });

        this.options = [];
        let arr = [];
        this.initialRows = JSON.parse(JSON.stringify(this.table_section.table_fields.optionsFields));
        let temp  = this.initialRows.map((item, ix)=>{
          return { text: item.label, value: ix};
        });
        this.table_section.table_fields.fields[0] = JSON.parse(JSON.stringify(this.initialRows[0]));
        this.options = temp;
      }

    },
    watch: {
      duplicateFields(fields, oldFields){
        let self = this;
        let selfParentErrorBag = self.$parent.$validator.errors;
        let rule = 'requiredUnique';

        if(fields.length > 0){
          oldFields.map((field)=> {
            self.$emit("add-error", null, field);
          });

          let errors = fields.map((field) => {
            let error = {
              field: field.name,
              msg: "Unique year and permit type necessary",
              scope: field.scope,
              rule: rule,
              vmId: field.vmId
            };

            let errorP = {
              field: field.name,
              msg: "Unique year and permit type necessary",
              scope: field.scope,
              rule: rule,
              vmId: field.vmId
            };

            //self.errbag.add(error);
            self.$emit("add-error", errorP, field);

            /*field.setFlags({
              invalid: true,
              valid: false,
              validated: true,
            });*/
          });

        } else {

          oldFields.map((field)=> {
            self.$emit("add-error", null, field);
          });

        }



      }
    },
    methods: {
      addRow(){
          let newRow = JSON.parse(JSON.stringify(this.initialRows[0]));

          this.rows.push(newRow);
          this.index[this.rows.length-1] = null;
          this.$forceUpdate();
          //this.$validator.validate();

      },
      changeRow($event, rkey){
        let newlabel = this.initialRows[$event].label;
        this.rows[rkey].label = newlabel;
        this.$emit('input', $event);
        this.validateUnique();
        this.$validator.validate();
      },
      removeRow(fieldkey){
        if(this.rows.length === 1){
          //console.log(this.rows[0].fields);
          return false;
        }
        this.rows.splice(fieldkey, 1);
        this.index.splice(fieldkey, 1);
        this.$forceUpdate();
      },

      compareFields(fields){
        let uniq = fields.map((item)=>{
          let selector = "[name='" + item.field + "']";
          return {count: 1, it: document.querySelector(selector).value, selector:item.field, field: item };
        }).reduce((a,b)=>{
          a[b.it] = ( a[b.it] || 0) + b.count;
          if('undefined' === typeof a[b.it + "_fields"] ) a[b.it + "_fields"] = [];
          a[b.it + "_fields"].push(b.field);
          return a;
        },{});

        let duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

        let temp = [];
        Object.keys(uniq)
          .filter((name) => {return name.indexOf("_fields") !== -1; })
          .map((name) => { temp.push(uniq[name]) });

        return { duplicates: duplicates, fields: temp };

      },

      validateUnique(){
        let self = this;
        return new Promise(function(resolve, reject) {
          let years = [];
          let permits = [];

          function clearErrorsByRule(bag, rule){
            bag.items.filter((error) => {
              return error.rule === rule;
            }).map((err) => {
              bag.removeById(err.id);
            });
          }

          for(let item in self.$refs){
            if(item.indexOf("permits_year") !== -1){
              years.push(self.$refs[item]);
            }
            if(item.indexOf("permits_permit") !== -1){
              permits.push(self.$refs[item]);
            }
          }

          let uniqY = years
            .map((item) => {
              if(item[0]){
                let permit = item[0].$el.getAttribute("name").replace("year","permit");
                let permitScope = item[0].$el.getAttribute("data-vv-scope").replace("year","permit");
                return {count: 1, year: item[0].$el.value, field:item[0], permit:permit, permitScope:permitScope };
              }
            })
            .reduce((a, b) => {
              a[b.year] = (a[b.year] || 0) + b.count;
              if('undefined' === typeof a[b.year + "_fields"] ) a[b.year + "_fields"] = [];
              a[b.year + "_fields"].push(b.field);

              if('undefined' === typeof a[b.year + "_permit_fields"] ) a[b.year + "_permit_fields"] = [];
              a[b.year + "_permit_fields"].push({ field: b.permit, scope: b.permitScope });

              return a;
            }, {});
          let duplicateYears = Object.keys(uniqY).filter((a) => uniqY[a] > 1);

          let selfParentErrorBag = self.$parent.$validator.errors;

          if(duplicateYears.length !== 0){
            duplicateYears.map((year) => {
              // TODO: fix clearing errors from $validator and errorBag
              let duplicatePerm = self.compareFields(uniqY[year+"_permit_fields"]);
              if( duplicatePerm.duplicates.length > 0 ){
                console.log(duplicatePerm.fields);
                duplicatePerm.fields.map((filedD) => {
                  filedD.map((fieldO) => {
                    let field = self.$validator.fields.find({ name: fieldO.field , scope: fieldO.scope });
                    self.duplicateFields.push(field);
                  });
                });

              } else {
                self.$set( self, "duplicateFields", []);
              }
            });
            self.$forceUpdate();
            resolve(false);
          } else {
            self.duplicateFields = [];
            self.$forceUpdate();
            reject(false);
          }
        });

      },

      validate(){
        let promises = [];
        let self = this;

        promises.push(this.validateUnique());

        /*let lorf = this.errbag.items.map((err) => {
          return true
        });*/

        for( let ref in this.$refs){
          if(this.$refs.hasOwnProperty(ref)) {
            promises.push(this.$refs[ref][0].$validator.validate());

            if('undefined' !== typeof this.$refs[ref][0].validate){
              promises.push(this.$refs[ref][0].validate());
            }
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
          console.log(err);
        });
      },

    }
  }
</script>
<style>
  /* tooltip background color */
  .tooltip-inner {
    background-color: #cc0000;
    opacity: 100%;
  }
  .tooltip.bs-tooltip-right .arrow:before {
    border-right-color: #cc0000 !important;
  }
  .tooltip.bs-tooltip-left .arrow:before {
    border-left-color: #cc0000 !important;
  }
  .tooltip.bs-tooltip-bottom .arrow:before {
    border-bottom-color: #cc0000 !important;
  }
  .tooltip.bs-tooltip-top .arrow:before {
    border-top-color: #cc0000 !important;
  }
</style>

<style scoped>


  .table-wrapper {
    margin-bottom: 2rem;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-top: 1rem;

  }
  table {
    margin-bottom: 0;

    border-collapse:collapse;
    border-spacing: 0;
    border-style: hidden;
    width:100%;
    max-width: 100%;
  }

  thead {
    color: white
  }

  thead th {
    vertical-align: middle;
  }

  .btnAdd {
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .year-column {
    min-width:12%;
    width: 12%
  }

  .permits-column {
    min-width: 30%;
    max-width: 50%;
    width: auto;
  }

  .header-column {
    max-width: 10%;
    width: 10%;
  }

  td {
    position: relative;
  }

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
