<template>
  <div style="margin-bottom: 2rem;">
    <table class="table table-striped" style="margin-top: 2rem;margin-bottom: 0;">
      <thead class="bg-info" style="color: white">
      <th>Year</th>
      <th>{{table_section.table_fields.header}}</th>
      <th v-for="header in table_section.table_fields.fields[0].fields" v-if="header.label !=='Year' ">{{ header.label  }}</th>
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
        <td><b-btn variant="danger" @click="removeRow(fieldkey)">X</b-btn></td>
      </tr>
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
        let temp  = this.table_section.table_fields.fields
          .map((item, ix)=>{
            if(arr.filter((it)=>{ return it.label === item.label }).length === 0){
              arr.push({ text: item.label, value: ix});
            }
          return { text: item.label, value: ix};
        });

        this.options = arr;
      }

    },
    methods: {
      //TODO: add validation so that each same name has unique year
      addRow(){
          let last = this.rows.length - 1;
          let newRow = JSON.parse(JSON.stringify(this.rows[last]));
          this.rows.push(newRow);
          this.$forceUpdate();

      },
      changeRow($event, rkey){
        let newlabel = this.table_section.table_fields.fields[$event].label;
        this.rows[rkey].label = newlabel;
        console.log(this.rows[rkey].label);

      }

    }
  }
</script>

<style scoped>

</style>
