<template>
	<div v-if="species">
			<table>
				<thead>
					<tr>
						<th v-if="index != 'validation'" v-for="(header, index) in species.permitsIssuedReported[0]" :key="`${index}_${header.name}`">
							{{header.label}}
						</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, row_index) in species.permitsIssuedReported" :key="row_index">
						<td v-for="(cell, cell_index) in row" v-if="!['permitedSpecimensIssued', 'permitedSpecimensValid', 'validation'].includes(cell.name)" :key="cell_index">
							<fieldGenerator :field="cell"></fieldGenerator>
						</td>
						<td v-for="cell in ['permitedSpecimensIssued', 'permitedSpecimensValid']" :key="cell">
							<div v-for="(sub_row, sub_row_index) in row[cell].fields" :key="sub_row_index">
								<div v-for="(field, field_index) in sub_row" :key="field_index">	
									<multiselect
										label="text"
										v-if="field.type === 'select'"
										trackBy="value"
										@input="forceValueInSameRow($event, row, sub_row_index, cell, 'permitsIssuedReported')"
										v-model="field.selected"
										:options="field.options" />
									<input v-else class="form-control" v-model="field.selected" type="field.type">
								</div>
								<b-btn @click="$store.commit('RemovePermittedSpecimen',  {section_type: 'permitsIssuedReported', species_index, row_index, type: cell, field_index: sub_row_index})" variant="danger">X</b-btn>

							</div>
							<b-btn @click="$store.commit('AddPermittedSpecimen', {section_type: 'permitsIssuedReported', species_index, row_index, type: cell})" variant="primary">+</b-btn>
						</td>
						<td><b-btn @click="$store.commit('RemovePermitsRow', {section_type: 'permitsIssuedReported', species_index, row_index})" variant="danger">X</b-btn></td>
					</tr>
				</tbody>
					<b-btn @click="$store.commit('AddPermitsRow', {section_type: 'permitsIssuedReported', species_index})" variant="primary">+</b-btn>
			</table>

			{{species.additional_information_permits.label}}
			<fieldGenerator :field="species.additional_information_permits"></fieldGenerator>

			<div class="table-section">
				Information on inspections to be completed only for invasive alien species of Union concern and if the answer to question 6 above is ‘Yes’
				<table>
					<thead>
						<tr>
							<th v-if="index != 'validation'" v-for="(header, index) in species.inspectionsPermitsReported[0]" :key="`${index}_${header.name}`">
								{{header.label}}
							</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(row, row_index) in species.inspectionsPermitsReported" :key="row_index">
							<td v-for="(cell, cell_index) in row" v-if="!['inspectionsPermitsComplient', 'inspectionsPermitsNoncompliant', 'validation'].includes(cell.name)" :key="cell_index">
								<fieldGenerator :field="cell"></fieldGenerator>
							</td>
							<td v-for="(cell, cell_index) in ['inspectionsPermitsComplient', 'inspectionsPermitsNoncompliant']" :key="cell_index">
								<div v-for="(sub_row, sub_row_index) in row[cell].fields" :key="sub_row_index">
									<div v-for="(field, field_index) in sub_row" :key="field_index">	
										<multiselect
											label="text"
											v-if="field.type === 'select'"
											trackBy="value"
											@input="forceValueInSameRow($event, row, sub_row_index, cell, 'inspectionsPermitsReported')"
											v-model="field.selected"
											:options="field.options" />
										<input v-else class="form-control" v-model="field.selected" type="field.type">
									</div>
									<b-btn @click="$store.commit('RemovePermittedSpecimen', {section_type: 'inspectionsPermitsReported', species_index, row_index, type: cell, field_index: sub_row_index,})" variant="danger">X</b-btn>

								</div>
								<b-btn @click="$store.commit('AddPermittedSpecimen', {section_type: 'inspectionsPermitsReported', species_index, row_index, type: cell})" variant="primary">+</b-btn>
							</td>
							<td><b-btn @click="$store.commit('RemovePermitsRow', {section_type: 'inspectionsPermitsReported', species_index, row_index})" variant="danger">X</b-btn></td>
						</tr>
					</tbody>
						<b-btn @click="$store.commit('AddPermitsRow', {section_type: 'inspectionsPermitsReported', species_index})" variant="primary">+</b-btn>
				</table>
			</div>

			{{species.additional_information_inspections.label}}
			<fieldGenerator :field="species.additional_information_inspections"></fieldGenerator>
	</div>
</template>
<script>
import FieldGenerator from '@/components/FieldGenerator'
import Multiselect from '@/components/ModifiedMultiselect'
export default {
	props: {
		species: null,
		species_index: null,
	},
	components: {
		FieldGenerator,
		Multiselect
	},
	methods: {
		forceValueInSameRow(e, row, field_index, section, section_type) {
			let	otherSection = {
					permitedSpecimensIssued : 'permitedSpecimensValid',
					permitedSpecimensValid : 'permitedSpecimensIssued'
			}
			if(section_type === 'inspectionsPermitsReported'){
				 otherSection = {
					inspectionsPermitsComplient : 'inspectionsPermitsNoncompliant',
					inspectionsPermitsNoncompliant : 'inspectionsPermitsComplient'
				}
			}
			if(row[otherSection[section]].fields[field_index])
			row[otherSection[section]].fields[field_index].unit.selected = e
		}
	},
}
</script>
