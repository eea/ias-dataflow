<template>
  <div v-if="data">
    <br/>
    <h2>
      <center>Distribution maps for the Section A - IAS of Union concern and Section B – IAS of Member States concern
      </center>
    </h2>
    <br/>
    <h4>
      <center><i>Upload here the required files is described in the guidelines. Please note that in addition to the file
        with the spatial data also Inspire conform metadata are required.</i></center>
    </h4>
    <b-card class="mt-5 mb-5">
      <div v-for="(field, field_index) in data.form_fields" :key="field_index" class="file-upload-grup">
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
