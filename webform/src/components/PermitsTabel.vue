<template>
  <div class="table-wrapper">

    <table class="table table-striped">
      <thead style="background-color: #337dcc;">
      <th class="year-column" ><span v-tooltip=" table_section.table_fields.optionsFields[0].fields[0].tooltip" v-if=" table_section.table_fields.optionsFields[0].fields[0].label ">{{ table_section.table_fields.optionsFields[0].fields[0].label }}</span></th>
      <th class="permits-column"><span v-tooltip=" table_section.table_fields.header" v-if=" table_section.table_fields.header ">{{ table_section.table_fields.header }}</span></th>
      <th class="header-column" v-for="header in table_section.table_fields.fields[0].fields" v-if="header.label !=='Year' ">
        <span v-tooltip="header.tooltip" v-if="header.label" >{{ header.label  }}</span>
        <span v-else>
          <span v-tooltip="header.fields[0].fields[0].tooltip">{{ header.fields[0].fields[0].label }} </span>
        </span>
      </th>
      <th><span>Actions</span></th>
      </thead>
      <tbody>

        <tr v-for="(row,rkey) in rows">
          <td v-for="(field,fkey) in row.fields" v-if="field.name === 'year'" style="min-width: 10%;width: 10%;">
            <div class="selects-wrapper">
              <b-badge
                v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey )"
                variant="danger" class="error-badge" v-b-tooltip.hover
                :title="errors.first('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey  )">
                {{ errors.first('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey ) }}
              </b-badge>
              <b-form-select  v-model="field.selected" :options="field.options"
                v-validate.continues ="'required'"
                :data-vv-as="field.label"
                :ref="'permits_' + field.name + '_' + rkey"
                v-bind:key="'permits_' + field.name + '_' + rkey"
                v-bind:name="'permits_' + field.name + '_' + rkey"
                v-bind:data-vv-scope="'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey"
                @change="validate"
              ></b-form-select>
            </div>
          </td>

          <td style="min-width: 15%;" >
            <div class="selects-wrapper">
              <b-badge
                v-if=" errors.has( 'permits_' + 'permit' + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + 'permit' + '_' + rkey )"
                variant="danger" class="error-badge">
                {{ errors.first( 'permits_' + 'permit' + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + 'permit' + '_' + rkey ) }}
              </b-badge>

              <b-form-select :options="options" v-model="index[rkey]"
                v-b-tooltip.hover
                :title="row.label"
                @change="changeRow($event, rkey)"
                v-bind:key="'permits_' + 'permit' + '_' + rkey"
                v-bind:name="'permits_' + 'permit' + '_' + rkey"
                :ref="'permits_' + 'permit' + '_' + rkey"
                data-vv-as="permits "
                v-bind:data-vv-scope="'sectiona_' + seckey + '_' + scope + '_permits_' + 'permit' + '_' + rkey"
                v-validate="'required'"
              ></b-form-select>
            </div>
          </td>

          <td v-for="(field,fkey) in row.fields" v-if="field.name !== 'year'"
              v-bind:style="{ width: field.type === 'add' ? '20%' : 'auto' }"
              style="padding-left: 15px;padding-right: 15px;max-width: 15%;">
            <div class="selects-wrapper" v-for="(sfield, sfkey) in field.fields" v-if="field.type === 'add'" >
                <div>
                  <div v-for="(fiel, fiekey) in sfield.fields"  style="margin-bottom: 5px;padding: 0">
                    <b-badge v-if="errors.has('permits_' + fiel.name + '_' + fiekey, 'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey )"
                             variant="danger" class="error-badge"
                             :id="'permits_' + fiel.name + '_' + fiekey + 'badge'"
                             :title="errors.collect('permits_' + fiel.name + '_' + fiekey , 'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey).join('\n')"
                             v-b-tooltip.hover
                             >
                    {{ errors.collect( 'permits_' + fiel.name + '_' + fiekey, 'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey  ).join('\n') }}
                    </b-badge>
                    <field-generator :field="fiel" validation="'required'" :ref="'permits_' + fiel.name + '_' + fiekey"
                       :vname="'permits_' + fiel.name + '_' + fiekey"
                       :vkey="'permits_' + fiel.name + '_' + fiekey"
                       :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                    ></field-generator>
                  </div>

                </div>
                <b-btn v-if="sfkey === 0" variant="primary" @click="addSubfield(field)" style="margin-bottom: 5px; width: 100%">+</b-btn>
                <b-btn v-if="sfkey !== 0" variant="danger" @click="removeSubfield(field,sfkey)" style="margin-bottom: 5px; width: 100%">X</b-btn>
            </div>

            <div v-if="field.name !== 'year' && field.type !== 'add'">
              <b-badge
                v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey )"
                variant="danger" class="error-badge" :id="'permits_' + field.name + '_' + rkey + 'badge'"
                :title="errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey).join('\n')"
                v-b-tooltip.hover
              >{{ errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey ).join('\n') }}
              </b-badge>
              <field-generator :field="field" validation="'required'"
               :ref="'permits_' + field.name + '_' + rkey"
               :vname="'permits_' + field.name + '_' + rkey"
               :vkey="'permits_' + field.name + '_' + rkey"
               :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey"
               @change="validate" @input="validate"
              ></field-generator>
            </div>
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

  export default {
    name: "PermitsTable",
    props: ['table_section', 'yearoptions', 'scope','seckey'],
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
          if("undefined" !== typeof field.index){
            this.index[ix] = field.index;
          } else {
            this.index[ix] = ix;
          }
        });
        this.options = [];
        let arr = [];
        this.initialRows = JSON.parse(JSON.stringify(this.table_section.table_fields.optionsFields));
        let temp  = this.initialRows.map((item, ix)=>{
          return { text: item.label, value: ix};
        });


        if(this.table_section.table_fields.fields.length === 0 ) this.table_section.table_fields.fields[0] = JSON.parse(JSON.stringify(this.initialRows[0]));
        this.options = temp;
      }
    },

    watch: {
      duplicateFields(fields, oldFields){
        let self = this;
        let rule = 'requiredUnique';

        if(fields.length > 0){
          oldFields.map((field)=> {
            self.$emit("add-error", null, field);
          });

          fields.map((field) => {
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

            self.$emit("add-error", errorP, field);
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
          this.validate();
          this.$forceUpdate();
      },

      changeRow($event, rkey){
        let newlabel = this.initialRows[$event].label;
        this.rows[rkey].label = newlabel;
        this.$emit('input', $event);
        this.$validator.validate();
        this.validate();
      },

      removeRow(fieldkey){
        if(this.rows.length === 1){
          return false;
        }
        this.rows.splice(fieldkey, 1);
        this.index.splice(fieldkey, 1);
        this.validate();
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

          if(duplicateYears.length !== 0){
            duplicateYears.map((year) => {
              let duplicatePerm = self.compareFields(uniqY[year+"_permit_fields"]);

              if( duplicatePerm.duplicates.length > 0 ){
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

        promises.push(self.validateUnique());

        for( let ref in self.$refs){
          if(self.$refs.hasOwnProperty(ref)) {
            promises.push( self.$refs[ref][0].$validator.validate() );

            if('undefined' !== typeof self.$refs[ref][0].validate){
              promises.push( self.$refs[ref][0].validate() );
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
          //console.error(err);
        });
      },

      addSubfield(field){
        let newSubfield = JSON.parse(JSON.stringify(field.fields[0]));
        newSubfield.fields.forEach((item) => {
          item.selected = '';
        });
        field.fields.push(newSubfield);
        this.$forceUpdate();
      },

      removeSubfield(field, sfkey){
        field.fields.splice(sfkey, 1);
        this.$forceUpdate();
      }
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
    overflow-x:auto;
  }

  thead {
    color: white
  }

  .selects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: .1rem;
    position: relative;
  }

  thead th {
    vertical-align: middle;
    font-size: .8rem;
    font-weight: 400;
  }

  .btnAdd {
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .year-column {
    min-width:5%;
    width: 7%;
  }

  .permits-column {
    min-width: 20%;
    max-width: 50%;
    width: 15%;
  }

  .header-column {
    max-width: 10%;
    width: 10%;
    margin-left: 1.5rem;
  }

  td {
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
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

  @media screen and (max-width: 1024px){
    .table-wrapper {
      overflow:auto;
    }

    table {
      overflow: auto;
    }

  }

</style>
