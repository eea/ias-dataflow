<template>
  <div class="table-wrapper">
    <table class="table table-striped">
      <thead class="bg-primary">
      <th>{{ field.fields[0].label }}</th>
      <th>{{ field.fields[0].inner_field.label }}</th>
      <th>Actions</th>
      </thead>
      <tbody>
      <tr v-for="(row,rowkey) in field.fields">
        <td style="width: 45%;">
          <multiselect v-model="row.selected" :options="row.options"
           :multiple="false" :close-on-select="true" :clear-on-select="true" :preserve-search="true" track-by="text"
           :custom-label="pathLabel"
        >
        </multiselect></td>

        <td><multiselect v-model="row.inner_field.selected" :options="row.inner_field.options"
           :multiple="true" :close-on-select="false" :clear-on-select="true" :preserve-search="true" track-by="text"
           :custom-label="speciesLabel"
        >
        </multiselect></td>
        <td style="width: 10%">
            <b-btn variant="danger" @click="removePathway(field, row, rowkey)">Remove</b-btn>
        </td>

      </tr>
      </tbody>
    </table>
    <b-btn variant="primary" class="addnew"  @click="addPathway(field)">
      + Add row
    </b-btn>

  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect';

  export default {
    name: "Patways",
    components: {Multiselect},
    props: {
      field: null,
    },
    data(){
      return {

      }
    },
    methods: {
      pathLabel({text, value}){
        return `${value} ${text}`
      },
      speciesLabel({text, value, code}){
        return `${text}`
      },
      removePathway(field, row, rowkey){
        if(rowkey !== 0) {
          field.fields.splice(rowkey, 1);
        } else {
          field.fields[0].selected = '';
          field.fields[0].inner_field.selected = '';
        }
        this.$forceUpdate();
      },
      addPathway(field){
        let empty_field = JSON.parse(JSON.stringify(field.fields[0]));
        empty_field.selected = '';
        empty_field.inner_field.selected = '';
        field.fields.push(empty_field);
      },
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
