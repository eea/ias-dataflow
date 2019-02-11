<template>
	<div v-if="species">
		<b-btn variant="primary" @click="$store.commit('AddPopulation', {species_index, type})">Add population</b-btn>
		<div v-for="(measure, measure_index) in species[type].fields" :key="measure_index" class="table-section mt-1 mb-4">
			<b-btn v-b-toggle="`${species_index}_${type}_${measure_index}`">Minimize</b-btn>
			<b-row class="mt-3">
				<b-col cols="7">
					<b-input-group :prepend="measure.population_name.label">
						<FieldGenerator :field="measure.population_name"></FieldGenerator>
					</b-input-group>
				</b-col>
			</b-row>
			<b-btn variant="danger" style="float:right;margin-top: -2.4rem;" @click="$store.commit('RemovePopulation', {species_index, type, measure_index})">Remove</b-btn>
			
			
			<b-collapse :id="`${species_index}_${type}_${measure_index}`" visible>
				<p class="muted mt-2">Measure(s)</p>
				<b-row class="mb-2 mt-2" v-for="(measure_field, measure_field_index) in measureTableFields" :key="`${measure_index}_${measure_field_index}`">
					<b-col cols="12" v-if="measure_field === 'biogeographicalRegion'">
							<b-badge variant="danger" v-if="measure.validation">{{measure.validation}}</b-badge>			
					</b-col>
					<b-col cols="2">
						{{ measure[measure_field].label }}
					</b-col>
					<b-col>
						<FieldGenerator :field="measure[measure_field]"></FieldGenerator>
					</b-col>
					<b-col cols="1" class="d-flex" v-if="measure_field === 'partTerritory'">
						<b-btn @click="addTerritory(measure[measure_field])">Add</b-btn>
					</b-col>
				</b-row>
				<hr>
				<p class="muted">{{measure.measure_effectiveness.label}}</p>
				<FieldGenerator :field="measure.measure_effectiveness"></FieldGenerator>
				<div class="table-header">
				</div>
				<div class="table-wrapper">

					<table class="table table-striped">
						<thead>
							<tr>
								<th colspan="3">
									{{measure.observedNegativeImpacts.label }}
								</th>
							</tr>
							<tr>
								<th v-for="(header, header_index) in measure.observedNegativeImpacts.fields[0]" :key="`header_${header_index}`">
									{{header.label}}
								</th>
								<th style="width: 80px">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, row_index) in measure.observedNegativeImpacts.fields" :key="`${measure_index}_${row_index}`">
								<td v-for="(cell, cell_index) in row" :key="`${measure_index}_${cell_index}`">
									<FieldGenerator :field="cell"></FieldGenerator>
								</td>
								<td style="width: 80px">
									<b-btn @click="$store.commit('removeImpact', {species_index, measure_index, impact_index: row_index, type})" variant="danger">Remove</b-btn>
								</td>
							</tr>
						</tbody>
					</table>
						<b-btn class="btn-big" @click="$store.commit('addImpact', {species_index, measure_index, type})" variant="primary">Add</b-btn>
				</div>

				<label class="mb-2 mt-2" style="display: flex;"> <FieldGenerator :field="measure.no_negative_impact"></FieldGenerator> {{measure.no_negative_impact.label}} </label>
				<FieldGenerator :field="measure.additional_information"></FieldGenerator>
    		</b-collapse>
		
		</div>
    	<b-modal size="lg" style="text-align:left" ref="territoryModal" hide-footer title="Add option">
				<b-badge v-if="invalidTerritory" class="mb-2" variant="danger">Do not use " - " preceded and followed by a space in the name or code of the territory</b-badge>
			<b-input-group prepend="Name" class="mb-2">
				<input class="form-control" v-model="territory.name">
			</b-input-group>
			<b-input-group prepend="Code" class="mb-2">
				<input class="form-control" v-model="territory.code">
			</b-input-group>
			<b-btn :disabled="invalidTerritory" style="width: 100%" variant="primary" @click="actuallyAddTerritory">Add</b-btn>
    	</b-modal>
		
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
			measureTableFields: ['start_date', 'end_date', 'partTerritory', 'biogeographicalRegion', 'marineSubRegions', 'riverBasinSubUnit', 'methodsUsed'],
			territory: {
				name: '',
				code: '',
				current_field: null,
			}
		}
	},
	components: {
		FieldGenerator,
		Multiselect
	},
	computed: {
		invalidTerritory() {
			if(this.territory.code.includes(' - ') || this.territory.name.includes(' - '))
				return true
		},
	},
	methods: {
		addTerritory(field) {
			this.territory = {
				name: '',
				code: '',
				current_field: null,
			}
			this.territory.current_field = field
        	this.$refs.territoryModal.show()
		},
		actuallyAddTerritory(){
			this.territory.current_field.options.push({text: `${this.territory.code} - ${this.territory.name}`, value: this.territory.code})
			this.territory.current_field.selected.push(this.territory.code)
			this.territory = {
				name: '',
				code: '',
				current_field: null,
			}
        	this.$refs.territoryModal.hide()

		},
	},
}
</script>
