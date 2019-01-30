<template>
  <div class="table-wrapper">

    <table class="table table-striped">
      <thead style="background-color: #337dcc;">
      <th class="year-column" ><span v-tooltip=" table_section.table_fields.optionsFields[0].fields[0].tooltip" v-if=" table_section.table_fields.optionsFields[0].fields[0].label ">{{ table_section.table_fields.optionsFields[0].fields[0].label }}</span></th>
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
                variant="danger" class="error-badge"
                v-b-tooltip.hover
                :title="errors.first( 'permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey  )">
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

          <td v-for="(field, fkey) in row.fields" v-if="field.name !== 'year'"
              v-bind:style="{ width: field.type === 'add' ? '20%' : 'auto' }"
              style="padding-left: 15px;padding-right: 15px;max-width: 15%;">
            <div class="selects-wrapper" v-for="(sfield, sfkey) in field.fields" v-if="field.type === 'add'" >
                <div>
                  <div v-for="(fiel, fiekey) in sfield.fields"  style="margin-bottom: 5px;padding: 0">
                    <div v-if="sfield.fields.length === 1">
                      <!-- 'number_establishments_inspections_main', -->
                      <span v-if="field.name === 'establishments_non_compliant_main'">
                        <field-generator
                          v-if="sfield.fields.length === 1"
                          :field="fiel"
                          :validation="'required|min_value:0|numeric|isLess:' + 'permits_' + rkey +  '_' + 'number_establishments_inspections' + '_' + sfkey + '_' + fiekey"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="field.fields.length > 1 ? changeInput( $event, field, row, rkey, fkey, sfkey, fiekey, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ): null"
                          @input="field.fields.length > 1 ? changeInput( $event, field, row, rkey, fkey, sfkey, fiekey,'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ) : null"
                        ></field-generator>
                      </span>
                      <span v-else>
                        <field-generator
                          v-if="sfield.fields.length === 1"
                          :field="fiel"
                          :validation="'required|min_value:0|numeric'"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="field.fields.length > 1 ? changeInput( $event, field, row, rkey, fkey, sfkey, fiekey, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ): null"
                          @input="field.fields.length > 1 ? changeInput( $event, field, row, rkey, fkey, sfkey, fiekey,'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ) : null"
                        ></field-generator>
                      </span>

                    </div>
                    <!--  decimals for kg and integers for pcs-->
                    <div v-else-if="sfield.fields.length === 2">
                      <div v-if="fiel.type === 'number'">
                        <b-badge  v-if="sfield.fields.length === 2 && sfield.fields[1].selected === 'kg'" style="margin-top: 12px;">
                          Please use "." instead of "," for decimal number
                        </b-badge>
                        <field-generator
                          v-if="sfield.fields.length === 2 && sfield.fields[1].selected === ''"
                          :field="fiel"
                          :validation="'required|min_value:0|numeric'"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="changeNumeric( $event, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ,sfield  )"
                          @input="changeNumeric( $event,'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey, sfield )"
                        ></field-generator>

                        <field-generator
                          v-else-if="sfield.fields.length === 2 && sfield.fields[1].selected === 'pcs'"
                          :field="fiel"
                          :validation="'required|min_value:0|numeric'"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="changeNumeric( $event, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey ,sfield  )"
                          @input="changeNumeric( $event,'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey, sfield )"
                        ></field-generator>

                        <field-generator
                          v-if="sfield.fields.length === 2 && sfield.fields[1].selected === 'kg'"
                          :field="fiel"
                          :validation="'required|decimal'"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="changeNumeric( $event, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey,sfield )"
                          @input="changeNumeric( $event,'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey,sfield )"
                        ></field-generator>
                      </div>
                      <div v-else>
                        <b-badge v-if="errors.has( 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey,
                        'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey)"
                                 style="position: relative"
                                 variant="danger" class="error-badge"
                                 :id="'permits_' + fiel.name + '_' + fkey + 'badge'"
                                 :title="errors.collect('permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey,
                                  'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey).join('\n')"
                                 v-b-tooltip.hover
                        >{{ errors.first('permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey,
                          'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey) }}</b-badge>

                        <field-generator
                          :field="fiel"
                          :validation="field.validation"
                          :ref="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vname="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vkey="'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey"
                          :vscope="'sectiona_' + seckey + '_' + scope + '_permits_' + fiel.name + '_' + rkey"
                          @change="changeInput( $event, field, row, rkey, fkey, sfkey, fiekey, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey )"
                          @input="changeInput( $event, field, row, rkey, fkey, sfkey, fiekey, 'permits_' + rkey +  '_' + fiel.name + '_' + sfkey + '_' + fiekey )"
                        ></field-generator>
                      </div>

                    </div>

                  </div>

                </div>
                	<b-btn v-if="sfkey === 0 && excludeSomeFields(field.name)" variant="primary" @click="addSubfield(field)" style="margin-bottom: 5px; width: 100%">+</b-btn>
                	<b-btn v-if="sfkey !== 0" variant="danger" @click="removeSubfield(field,sfkey)" style="margin-bottom: 5px; width: 100%">X</b-btn>
            </div>

            <div v-if="field.name !== 'year' && field.type !== 'add'">

              <b-badge
                v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey )"
                variant="danger" class="error-badge" :id="'permits_' + field.name + '_' + rkey + 'badge'"
                :title="errors.collect('permits_' + field.name + '_' + rkey ,
                                       'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey).join('\n')"
                v-b-tooltip.hover
              >{{ errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_' + seckey + '_' + scope + '_permits_' + field.name + '_' + rkey ).join('\n') }}
              </b-badge>
              <field-generator
               :field="field"
               validation="'required'"
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
      <b-btn class="btnAdd" variant="primary" @click="addRow">+ Add row</b-btn>
    </b-input-group>

    <div v-if="table_section.name === 'inspection_table' ">

      <!-- :ref="'permits_' + table_section.noinspections.name" -->
      <fieldGenerator
        :field="table_section.noinspections"
        :validation="'falserequire'"

        @input="disableValidation($event)"

      ></fieldGenerator>
    </div>
  </div>
</template>

<script>
  import fieldGenerator from './fieldGenerator';

  export default {
    name: "PermitsTable",
    props: ['table_section', 'yearoptions', 'scope','seckey'],
    components: { fieldGenerator },
    //inject: ['$validator'],
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

			excludeSomeFields(fieldName) {
				console.log(fieldName)
				if(['permits_number_main','valid_permits_number_main', 'number_establishments_inspections_main', 'establishments_non_compliant_main'].includes(fieldName)) return false
				else return true
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

      disableValidation($event){
        if($event.filter(Boolean).length > 0){
          this.$validator.reset();
          this.$validator.pause();

          for( let ref in self.$refs){
            if(self.$refs.hasOwnProperty(ref)) {
              if("undefined" !== typeof self.$refs[ref][0].$validator) {
                self.$refs[ref][0].$validator.reset();
                self.$refs[ref][0].$validator.pause();
              }
            }
          }
        } else {
          this.$validator.resume();
          for( let ref in self.$refs){
            if(self.$refs.hasOwnProperty(ref)) {
              if("undefined" !== typeof self.$refs[ref][0].$validator) {
                self.$refs[ref][0].$validator.resume();
              }
            }
          }
          self.validate();
        }
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

      validateTotalNr(){


      },

      validate(){
        let promises = [];
        let self = this;

        if("undefined" !== typeof self.table_section.noinspections ){

          if (self.table_section.noinspections.selected.filter(Boolean) ){
            //console.log(self.table_section.noinspections);
            return new Promise(function(resolve, reject) {
                resolve(true);
            }).catch((err) => {
              console.error(err);
            });
          } else {
            //promises.push(self.validateTotalNr());
          }
        }

        promises.push(self.validateUnique());

        for( let ref in self.$refs){
          if(self.$refs.hasOwnProperty(ref)) {
            if("undefined" !== typeof self.$refs[ref][0].$validator) promises.push( self.$refs[ref][0].$validator.validate(self.$refs[ref][0].vname) );

            if('undefined' !== typeof self.$refs[ref] && 'undefined' !== typeof self.$refs[ref][0] && 'undefined' !== typeof self.$refs[ref][0].validate){
              promises.push( self.$refs[ref][0].validate() );
            }
          }
        }

        let lorf = [];
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
      },
      changeNumeric($event, ref, sfield){
        let self = this;
        // force number instead of decimal
        let isNumeric = sfield.fields[1].selected === "pcs";
        let item = self.$refs[ref][0];

        let $el = item.$el.querySelector("input");
        let vname =$el.getAttribute('name');

        if(isNumeric){
            $el.value = Math.round($event);
            item.$props.field.selected = Math.round($event);
            item.$el.querySelector("input").value = Math.round($event);
        } else {
          let vf = item.$validator.fields.find(vname);
          if(vf){
            let errs = [];

            vf.reset();
            item.$validator.errors.remove(vf.name, vf.scope);

            //self.$validator.errors.remove(vf.name, vf.scope);
          }

        }
      },

      changeInput( $event, field, row, rkey, fkey, sfkey, fiekey, ref, isNumeric){
        let self = this;
        let promises = [];

        // force number instead of decimal
        let allowed = [
          'total_permited_speciments_main', 'valid_total_permited_speciments_main',
          'number_permitted_specimens_main', 'number_speciments_held_by_non_compliant_establishments_main'
        ];

        let fieldsToRound = [];
        // make the row the same measurement unit
        row.fields.forEach((fieldO, fieldkey) => {

          if(fieldO.type === "add" ){
            fieldO.fields.forEach((subfield, subfieldkey) => {
              if(fieldO.fields[subfieldkey].fields.length === 2 ){
                let fd = fieldO.fields[0].fields[1];
                let totali = fieldO.fields[0].fields[0];

                // make same measurement unit
                if( subfieldkey === sfkey){
                  fd = fieldO.fields[0].fields[1];
                  //fd.selected = $event;

                  let found = Object.keys(this.$refs).map((r) => {
                    if(r.indexOf(fd.name) !== -1){
                      let refer = self.$refs[r][0];

                      let str = r.split("_");
                      let sfk = str[ str.length-2 ];
                      let rk = str[1];

                      if(sfkey === parseInt(sfk) && parseInt(rk) === rkey ){
                          refer.field.selected = $event;
                          let el = refer.$el.querySelector("select");

                          let found = null;
                          for (let i = 0; i < el.length; i++) {
                            if (el.options[i].value === $event) found = i;
                          }
                          if (found !== null) el.selectedIndex = found;
                          self.$nextTick().then((res) => {
                            let ns = res.rows[rkey].fields[fkey].fields[sfkey];

                            let vfield = refer.$validator.fields.find(refer.vname);

                            if(ns.fields[1].selected === "kg"){
                              if(vfield) {
                                refer.$validator.errors.clear();
                                vfield.reset();
                              }
                            }

                            refer.$validator.validateAll().then((resV) => {
                              if(ns.fields[1].selected === "pcs" && ns.fields[0].selected !== "")  ns.fields[0].selected = Math.round(ns.fields[0].selected);
                            }).catch((er) => {
                              console.error(er);
                            });

                            self.$forceUpdate();
                          });
                      }
                    } else if(r.indexOf(totali.name) !== -1){
                      let refer = self.$refs[r][0];

                      let str = r.split("_");
                      let sfk = str[ str.length-2 ];
                      let rk = str[1];

                      if(sfkey === parseInt(sfk) && parseInt(rk) === rkey ){
                        if(refer.field.selected !== ''){
                          const val = Math.round(refer.field.selected);

                          refer.$validator.validateAll().then((resV) => {
                            refer.field.selected = val;
                            let el = refer.$el.querySelector("input");
                            el.value = val;
                          }).catch((er) => {
                            console.error(er);
                          });


                        }
                      }
                    }
                  });

                }
              }
            });

          }

        });

        Promise.all(promises).then((res) => {
          self.$forceUpdate();
        }).catch((err) => {
          console.error(err);
        });

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
