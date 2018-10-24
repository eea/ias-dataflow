<template>
  <div style="margin-bottom: 2rem;overflow: auto;border-radius: 0.25rem;">
    <table class="table table-striped" style="margin-top: 2rem;margin-bottom: 0;
    border-collapse:collapse;border-spacing: 0;border-style: hidden;width:100%;max-width: 100%;">
      <thead class="bg-info" style="color: white">
      <th style="max-width: 10%">Year</th>
      <th style="min-width: 30%;max-width: 50%">{{table_section.table_fields.header}}</th>
      <th style="max-width: 15%;width: 10%;" v-for="header in table_section.table_fields.fields[0].fields" v-if="header.label !=='Year' ">{{ header.label  }}</th>
      <th><span>Actions</span></th>
      </thead>
      <tbody>

      <tr v-for="(row,rkey) in rows">
        <td v-for="(field,fkey) in row.fields" v-if="field.name === 'year'">
          <b-form-select  v-model="field.selected" :options="yearoptions"></b-form-select>
        </td>

        <td><b-form-select :options="options" v-model="index[rkey]" @change="changeRow($event, rkey)"></b-form-select></td>

        <td v-for="(field,fkey) in row.fields" v-if="field.name !== 'year'">
          <b-form-input  v-model="field.selected" ></b-form-input>
        </td>
        <td><b-btn variant="danger" @click="removeRow(rkey)">X</b-btn></td>
      </tr>

      <!--<tr v-for="row in rows">
        <td>{{row.label}}</td>
        <td v-for="field in row.fields">
          {{ field.selected }}
        </td>
      </tr>-->

      </tbody>

    </table>
    <b-input-group>
      <b-btn style="width: 100%;
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;"
             variant="default"
             @click="addRow">Add row</b-btn>
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
        this.initialRows = JSON.parse(JSON.stringify(this.table_section.table_fields.fields));
        let temp  = this.initialRows.map((item, ix)=>{
          return { text: item.label, value: ix};
        });

        this.options = temp;
      }

    },
    methods: {
      //TODO: add validation so that each same name has unique year
      addRow(){
          let last = this.rows.length - 1;
          let newRow = JSON.parse(JSON.stringify(this.rows[last]));
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

</style>
