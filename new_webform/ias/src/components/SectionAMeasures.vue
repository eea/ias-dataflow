<template>
	<div v-if="species">
		<b-btn @click="$store.commit('AddPopulation', {species_index, type})">Add population</b-btn>
		<div v-for="(measure, measure_index) in species[type].fields" :key="measure_index">
			<b-row>
				<b-col cols="7">
					<b-input-group :prepend="measure.population_name.label">
						<input class="form-control" v-model="measure.population_name.selected">
					</b-input-group>
				</b-col>
			</b-row>
			<p class="muted">Measure(s)</p>
			<b-row v-for="(measure_field, measure_field_index) in measure" :key="`${measure_index}_${measure_field_index}`">
				<b-col cols="2">
					{{ measure_field.label }}
				</b-col>
				<b-col>
					<FieldGenerator :field="measure_field"></FieldGenerator>
				</b-col>
			</b-row>
		</div>
	</div>
</template>
<script>
import FieldGenerator from '@/components/FieldGenerator'
import Multiselect from '@/components/ModifiedMultiselect'
export default {
	props: {
		species: null,
		species_index: null,
		type: null
	},
	components: {
		FieldGenerator,
		Multiselect
	},
	methods: {

	},
}
</script>
