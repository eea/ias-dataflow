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
							<b-btn @click="$store.state.form.tabs.tab_1.form_fields[0].common_name_national.selected = 'asd'">fasfsafas</b-btn>
						</b-input-group>
					</h5>

					<b-collapse :id="`collapse_species_${species_index}`" visible>
						<h5>
							<b-input-group :prepend="species.present_in_MS.label">
								<FieldGenerator :field="species.present_in_MS"></FieldGenerator> 
							</b-input-group>
						</h5>

						<h5>
							<b-input-group :prepend="species.permits_issued.label">
								<FieldGenerator :field="species.permits_issued"></FieldGenerator> 
							</b-input-group>
						</h5>

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
}
</script>