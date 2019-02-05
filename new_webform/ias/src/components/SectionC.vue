<template>
  <div v-if="data">
    <br/>
    <h2>
      <center>Horizontal information</center>
    </h2>
    <br/>
    <b-card>
      <div v-for="(field, field_index) in data.form_fields" :key="field_index">
        <FieldGenerator :id="field_index" :field="field"></FieldGenerator>
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
