<template>
  <div class="table-wrapper">
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
                     variant="danger"
                    class="error-badge"
                    v-b-tooltip.hover
            :title="errors.first('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey  )">
              {{ errors.first('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey ) }}
            </b-badge>

            <b-form-select  v-model="field.selected" :options="field.options"
                            v-validate.continues ="'required'"
                            :data-vv-as="field.label"
                            v-bind:key="'permits_' + field.name + '_' + rkey"
                            v-bind:name="'permits_' + field.name + '_' + rkey"
                            v-bind:data-vv-scope="'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey"
            ></b-form-select>
          </td>

          <td>
            <b-badge v-if=" errors.has( 'permits_' + 'permit' + '_' + rkey , 'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey )"
                     variant="danger" class="error-badge" >
              {{ errors.first( 'permits_' + 'permit' + '_' + rkey , 'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey ) }}
            </b-badge>
            <b-form-select :options="options" v-model="index[rkey]" @change="changeRow($event, rkey)"
                             v-bind:key="'permits_' + 'permit' + '_' + rkey"
                             v-bind:name="'permits_' + 'permit' + '_' + rkey"
                             data-vv-as="permits "
                             v-bind:data-vv-scope="'sectiona_'+ scope + '_permits_' + 'permit' + '_' + rkey"
                             v-validate="'required'"
          ></b-form-select></td>


          <td v-for="(field,fkey) in row.fields"  v-if="field.name !== 'year'">
            <b-badge v-if=" errors.has('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey )"
                     variant="danger"
                     class="error-badge"
                     :id="'permits_' + field.name + '_' + rkey + 'badge'"
                     :title="errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey).join('\n')"
                     v-b-tooltip.hover
                    >
              {{ errors.collect('permits_' + field.name + '_' + rkey , 'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey ).join('\n') }}
            </b-badge>
            <field-generator :field="field"
                             validation="'required'"
                             :vname="'permits_' + field.name + '_' + rkey"
                             :vkey="'permits_' + field.name + '_' + rkey"
                             :vscope="'sectiona_'+ scope + '_permits_' + field.name + '_' + rkey"
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

  export default {
    name: "PermitsTable",
    props: ['table_section', 'yearoptions', 'scope'],
    components: { fieldGenerator },
    data(){
      return {
        index: [],
        options: [],
        initialRows: [],
        rows: this.table_section.table_fields.fields,
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
        //this.$emit('input', $event);
        //this.$validator.validate();
      },
      removeRow(fieldkey){
        if(this.rows.length === 1){
          console.log(this.rows[0].fields);
          return false;
        }
        this.rows.splice(fieldkey, 1);
        this.index.splice(fieldkey, 1);
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
