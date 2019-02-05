<template>
  <div v-if="data">
    <b-card class="mb-4">
      <h4 v-b-toggle="`collapse_species_${species_index}`">
        <i class="fas fa-chevron-right"></i>
        Species scientific name:
      </h4>

      <b-collapse :id="`collapse_species_${species_index}`" visible>
        <b-btn variant='danger' @click='remove'>Remove</b-btn>
      </b-collapse>
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
    methods: {
      remove() {

      }
    }
  }
</script>
