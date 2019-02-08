<template>
  <div v-if="data">
    <b-card>
      <h2>
        Information to be submitted for each of the invasive alien species of Member State concern
      </h2>
      <b-row class="mt-2 mb-2">
        <b-col>{{data.ias_list.label}}</b-col>
        <b-col><FieldGenerator :field="data.ias_list"></FieldGenerator></b-col>
      </b-row>
      <b-card-header v-if="data.ias_list.selected === true">
        <div>
          <h4>Chose how you want to add a species</h4>
          <hr>
          <h5>Add by selecting a scientific name from the predefined list</h5>
          <b-row>
            <b-col>Common name of the species (optional)</b-col>
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


    <b-card v-if="data.ias_list.selected === true" v-for="(species, species_index) in data.form_fields" :key="`species_${species_index}`" class="mb-4">
      <h4 v-b-toggle="`collapse_species_${species_index}`">
        <i class="fas fa-chevron-right"></i>
        Species scientific name: {{species.scientific_name.selected}}
      </h4>
      <b-btn variant='danger' style="float:right; margin-top:-2rem; margin-bottom: 1rem;" @click="$store.commit('RemoveBSpecies', {species_index})">Remove</b-btn>

      <h5>
          <b-input-group :prepend="species.common_name_national.label">
            <FieldGenerator :field="species.common_name_national"></FieldGenerator>
          </b-input-group>
			</h5>
      <h5>
        <b-input-group :prepend="species.present_in_MS.label">
          <FieldGenerator :field="species.present_in_MS"></FieldGenerator> 
        </b-input-group>
			</h5>
			<hr>
      <b-collapse :id="`collapse_species_${species_index}`" :visible="species.present_in_MS.selected === true">
        <b>A distribution map for this species has to be included in the file which will be uploaded in the 'Distribution map for SECTION B' field available on 'DISTRIBUTION MAP' section (optional).</b>
        <div v-for="pattern in ['reproduction_patterns','spreadPatterns']" class="patterns mt-3 mb-3" :key="`${species_index}_${pattern}`">
          <div class="patterns-label bg-primary">{{species[pattern].label}}</div>
          <FieldGenerator :field="species[pattern]"></FieldGenerator>
        </div>
        <FieldGenerator :field="species.additional_information"></FieldGenerator>
        <h4 class="text-center">Measure(s) applied in the territory of the Member State in relation to the species</h4>
        <div v-for="(measure, measure_index) in species.sectionBMeasures" :key="`${measure_index}_${species_index}`">
          <label class="d-flex">
            <FieldGenerator :field="measure"></FieldGenerator>
            {{measure.label}}
          </label>
        </div>
        <FieldGenerator :field="species.additional_information_measures"></FieldGenerator>
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
