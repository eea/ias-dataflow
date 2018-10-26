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
            <b-form-select  v-model="field.selected" :options="yearoptions"></b-form-select>
          </td>

          <td><b-form-select :options="options" v-model="index[rkey]" @change="changeRow($event, rkey)"></b-form-select></td>

          <td v-for="(field,fkey) in row.fields" v-if="field.name !== 'year'">
            <field-generator :field="field"></field-generator>
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
    props: ['table_section', 'yearoptions'],
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

      },
      changeRow($event, rkey){
        let newlabel = this.initialRows[$event].label;
        this.rows[rkey].label = newlabel;
        console.log(this.rows[rkey].label);
      },
      removeRow(fieldkey){
        if(this.rows.length === 1){
          return false;
        }
        this.rows.splice(fieldkey, 1);
        this.index.splice(fieldkey, 1);
        this.$forceUpdate();
      }

    }
  }
</script>

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

</style>
