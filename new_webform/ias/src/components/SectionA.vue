<template>
		<div v-if="data">
			<h2 class="text-center"><b>Information to be submitted for each of the invasive alien species of Union concern and for each invasive alien species of regional concern subject to measures as provided for in Article 11(2) of Regulation (EU) No 1143/2014</b></h2>
				<h4 class="text-center"><i>Information on the species, its distribution, spread and reproductive patterns</i></h4>
				<!-- <div v-for="(field, field_index) in data.form_fields" :key="field_index">
					{{field.label}}
					<FieldGenerator :id="field_index" :field="field"></FieldGenerator>
				</div> -->
				<b-card v-for="(species, species_index) in data.form_fields" :key="`species_${species_index}`" class="mb-4">
					<h3 v-b-toggle="`collapse_species_${species_index}`">
						<b>
							<i class="fas fa-chevron-right"></i> {{species.scientific_name.selected}}
						</b>
						<small style="position: absolute; right: 20px;">{{species.EASINCode.label}} : <b>{{species.EASINCode.selected}}</b></small>
					</h3>
					<h5><b>{{species.common_name.label}}: {{species.common_name.selected}}</b></h5>
					<h5>
						<b-input-group :prepend="species.common_name_national.label">
							<FieldGenerator :field="species.common_name_national"></FieldGenerator>
						</b-input-group>
					</h5>


					<b-collapse :id="`collapse_species_${species_index}`" visible>
						<h5>
							<b-input-group :prepend="species.present_in_MS.label">
								<FieldGenerator :field="species.present_in_MS"></FieldGenerator> 
							</b-input-group>
						</h5>
						<hr>

						<div class="inner-card" v-if="species.present_in_MS.selected === true">
							<div class="card-body">
								<h5>
									<b-input-group :prepend="species.permits_issued.label">
										<FieldGenerator :field="species.permits_issued"></FieldGenerator> 
									</b-input-group>
								</h5>

								<div v-if="species.permits_issued.selected === true" class="table-section">
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

									{{species.additional_information_inspections.label}}
									<fieldGenerator :field="species.additional_information_inspections"></fieldGenerator>
								</div>



								<h5>
									<b-input-group :prepend="species.eradication_measures.label">
										<FieldGenerator :field="species.eradication_measures"></FieldGenerator> 
									</b-input-group>
								</h5>

								<h5>
									<b-input-group :prepend="species.subject_management_measures.label">
										<FieldGenerator :field="species.subject_management_measures"></FieldGenerator> 
									</b-input-group>
								</h5>
							</div>
						</div>	

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
	}
}
</script>