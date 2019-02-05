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
			<b-row v-for="(measure_field, measure_field_index) in measureTableFields" :key="`${measure_index}_${measure_field_index}`">
				<b-col cols="2">
					{{ measure[measure_field].label }}
				</b-col>
				<b-col>
					<FieldGenerator :field="measure[measure_field]"></FieldGenerator>
				</b-col>
			</b-row>
			<hr>
			<p class="muted">{{measure.measure_effectiveness.label}}</p>
			<FieldGenerator :field="measure.measure_effectiveness"></FieldGenerator>
			<div class="table-header">
				{{measure.observedNegativeImpacts.label }}
			</div>
			<table>
				<thead>
					<tr>
						<th v-for="(header, header_index) in measure.observedNegativeImpacts.fields[0]" :key="`header_${header_index}`">
							{{header.label}}
						</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, row_index) in measure.observedNegativeImpacts.fields" :key="`${measure_index}_${row_index}`">
						<td v-for="(cell, cell_index) in row" :key="`${measure_index}_${cell_index}`">
							<FieldGenerator :field="cell"></FieldGenerator>
						</td>
						<b-btn @click="$store.commit('removeImpact', {species_index, measure_index, impact_index: row_index, type})" variant="danger">Remove</b-btn>
					</tr>
				</tbody>
				<tfoot>
					<b-btn @click="$store.commit('addImpact', {species_index, measure_index, type})" variant="primary">Add</b-btn>
				</tfoot>
			</table>
			<label class="mb-2 mt-2" style="display: flex;"> <FieldGenerator :field="measure.no_negative_impact"></FieldGenerator> {{measure.no_negative_impact.label}} </label>
			<FieldGenerator :field="measure.additional_information"></FieldGenerator>
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
	data() {
		return {
			measureTableFields: ['partTerritory', 'biogeographicalRegion', 'marineSubRegions', 'riverBasinSubUnit', 'methodsUsed']
		}
	},
	components: {
		FieldGenerator,
		Multiselect
	},
	methods: {

	},
}
</script>
