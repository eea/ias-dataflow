<template>
  <div class="sectionC" v-if="data">
    <br/>
    <h2>
      <center>Horizontal information</center>
    </h2>
    <br/>
    <b-card>
     

      <div v-for="(field, field_index) in data.form_fields" class="sectionCField" :id="field_index" :key="field_index">
        <FieldGenerator v-if="field_index != 'priority_pathways'" :id="field_index" :field="field"></FieldGenerator>
        <div class="table-wrapper" v-else>
          <table class="table table-striped">
            <thead>
              <tr>
                <th v-for="(header,header_index) in field.fields[0]" :key="header_index">
                  {{header.label}}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, row_index) in field.fields" :key="row_index">
                <td style="min-width: 40%;" v-for="(cell, cell_index) in row" :key="`${row_index}_${cell_index}`">
                  <FieldGenerator :field="cell"></FieldGenerator>
                </td>
                <td style="width: 50px"><b-btn variant="danger" @click="$store.commit('removePathway', {row_index})">X</b-btn></td>
              </tr>
            </tbody>
          </table>
          <b-btn class="btn-big" variant="primary" @click="$store.commit('addPathway')">Add</b-btn>
        </div>

      </div>
    </b-card>
  </div>
</template>

<script>
  import FieldGenerator from '@/components/FieldGenerator'

  export default {
    props: {
      data: null
    },
    components: {
      FieldGenerator
    },
    methods: {}
  }
</script>
