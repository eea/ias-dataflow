<template>
  <div v-if="data">
    <b-card>
      <b-card-header>
        <div>
          <h4>Chose how you want to add a species</h4>
          <hr>
          <h5>Add by selecting a scientific name from the predefined list</h5>
          <b-row>
            <b-col>Species scientific name</b-col>
            <b-col cols="8">
              <Multiselect trackBy='value' label='text' v-model="selected_species" :options="speciesList" :multiple='true'></Multiselect>
            </b-col>
            <b-col>
              <b-btn @click="$store.commit('addSectionBSpecies', {selected_species}); selected_species = []" variant="primary">Add</b-btn>
            </b-col>
          </b-row>
        </div>
        <hr>
        <div>
          <h5>Add manually only if the species name is not available in the predefined list</h5>
          <b-row>
            <b-col cols="10">
              <b-row>
                <b-col>Species scientific name</b-col>
                <b-col cols="8">
                  <input type="text" v-model="manual_species.species_scientific_name" class="form-control">
                </b-col>
              </b-row>
              <b-row>
                <b-col>Common name of the species (optional)</b-col>
                <b-col cols="8">
                  <input type="text" v-model="manual_species.species_common_name" class="form-control">
                </b-col>
              </b-row>
            </b-col>

            <b-col>
              <b-btn @click="$store.commit('addSectionBSpecies', 
              {selected_species: manual_species.species_scientific_name, common_name: manual_species.species_common_name});
              manual_species.species_scientific_name = null;
              manual_species.species_common_name = null" 
              variant="primary">Add</b-btn>
            </b-col>

          </b-row>
        </div>
      </b-card-header>
    </b-card>


    <b-card v-for="(species, species_index) in data.form_fields" :key="`species_${species_index}`" class="mb-4">
      <h4 v-b-toggle="`collapse_species_${species_index}`">
        <i class="fas fa-chevron-right"></i>
        Species scientific name: {{species.scientific_name.selected}}
      </h4>

      <b-collapse :id="`collapse_species_${species_index}`" visible>
        <b-btn variant='danger' @click='remove'>Remove</b-btn>
      </b-collapse>
  </b-card>

  </div>
</template>

<script>
  import FieldGenerator from '@/components/FieldGenerator'
  import Multiselect from '@/components/ModifiedMultiselect'

  export default {
    props: {
      data: null
    },
    components: {
      FieldGenerator,
      Multiselect
    },
    data() {
      return {
        selected_species: [],
        manual_species: {
          species_scientific_name: null,
          species_common_name: null,
        },
      }
    },
    
    computed: {
      speciesList() {
        return this.$store.state.formData.speciesB.map(s => ({value: s.code, text: s.name}))
      }
    },
    methods: {
      remove() {

      }
    }
  }
</script>
