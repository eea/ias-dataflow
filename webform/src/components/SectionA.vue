<template>
		<div class="sectionA" v-if="data">
			<h3 class="text-center mb-3"><b>Information to be submitted for each of the invasive alien species of Union concern and for each invasive alien species of regional concern subject to measures as provided for in Article 11(2) of Regulation (EU) No 1143/2014</b></h3>
				<h5 class="text-center"><i>Information on the species, its distribution, spread and reproductive patterns</i></h5>
				<!-- <div v-for="(field, field_index) in data.form_fields" :key="field_index">
					{{field.label}}
					<FieldGenerator :id="field_index" :field="field"></FieldGenerator>
				</div> -->
				<b-card :class="{invalid: species.validation}" class="sectionASpecies mb-4" v-for="(species, species_index) in data.form_fields" :key="`species_${species_index}`">
					<h4 
					:id="species.scientific_name.selected" 
					:EASINCode="species.EASINCode.selected" 
					v-b-toggle="`collapse_species_${species_index}_A`" 
					@click="species.expanded = !species.expanded"
					style="cursor:pointer"
					>
						<i v-if="species.validation" class="fas fa-exclamation"></i>

						<b>
							<i v-if="!species.expanded" class="fas fa-chevron-right"></i> <i v-if="species.expanded" class="fas fa-chevron-down"></i> {{species.scientific_name.selected}}
						</b>
						<small style="position: absolute; right: 20px;">{{species.EASINCode.label}} : <b>{{species.EASINCode.selected}}</b></small>
					</h4>
					<h5><b>{{species.common_name.label}}: {{species.common_name.selected}}</b></h5>
					<h5>
						<b-input-group :prepend="species.common_name_national.label">
							<FieldGenerator :field="species.common_name_national"></FieldGenerator>
						</b-input-group>
					</h5>


					<b-collapse :id="`collapse_species_${species_index}_A`">
						<h5>
							<b-input-group :prepend="species.present_in_MS.label">
								<FieldGenerator :field="species.present_in_MS"></FieldGenerator> 
							</b-input-group>
						</h5>
						<hr>

						<b-card  v-if="species.present_in_MS.selected !== null">
							<div v-if="species.present_in_MS.selected === true">
							 	<b>A distribution map for this species has to be included in the file which will be uploaded in the 'Distribution map for SECTION A' field available on 'DISTRIBUTION MAP' section (optional).</b>
								<div v-for="pattern in ['reproduction_patterns','spreadPatterns']" class="patterns mt-3 mb-3" :key="`${species_index}_${pattern}`">
									<div class="patterns-label bg-primary">{{species[pattern].label}}</div>
									<FieldGenerator :field="species[pattern]"></FieldGenerator>
								</div>
							</div>

							<FieldGenerator :field="species.additional_information"></FieldGenerator>
								<b-card class="inner-card">
									<h6 class="text-center">{{species.permits_issued.info}}</h6>
									<hr>
									<h5>
										<b-input-group :prepend="species.permits_issued.label">
											<FieldGenerator :field="species.permits_issued"></FieldGenerator> 
										</b-input-group>
									</h5>
									<div class="inner-card" v-if="species.permits_issued.selected === true">
										<SectionAPermits :species_index="species_index" :species="species">	</SectionAPermits>
									</div>
								</b-card>

								
							<b-card class="inner-card">
								<h6 class="text-center">{{species.eradication_measures.info}}</h6>
								<hr>
								<h5>
									<b-input-group :prepend="species.eradication_measures.label">
										<FieldGenerator :field="species.eradication_measures"></FieldGenerator> 
									</b-input-group>
								</h5>
								<div v-if="species.eradication_measures.selected === true" class="inner-card">
									<SectionAMeasures type="sectionAMeasures" :species_index="species_index" :species="species"></SectionAMeasures>
								</div>
							</b-card>
								
							<b-card class="inner-card">
                <h6 class="text-center">{{species.subject_management_measures.info}}</h6>
                <hr>
								<h5>
									<b-input-group :prepend="species.subject_management_measures.label">
										<FieldGenerator :field="species.subject_management_measures"></FieldGenerator> 
									</b-input-group>
								</h5>
								<div v-if="species.subject_management_measures.selected === true" class="inner-card">
									<SectionAMeasures type="sectionAMeasuresManagement" :species_index="species_index" :species="species"></SectionAMeasures>
								</div>

								<div>
									<SectionAImpact :species_index="species_index" :species="species" style="background: white"></SectionAImpact>
								</div>
							</b-card>
						</b-card>

					</b-collapse>
				</b-card>
		</div>
</template>

<script>
import FieldGenerator from '@/components/FieldGenerator'
import Multiselect from '@/components/ModifiedMultiselect'
import SectionAPermits from '@/components/SectionAPermits'
import SectionAMeasures from '@/components/SectionAMeasures'
import SectionAImpact from '@/components/SectionAImpact'

export default {
	props: {
		data: null
	},
	components: {
		FieldGenerator,
		Multiselect,
		SectionAPermits,
		SectionAMeasures,
		SectionAImpact
	},
	methods: {

	}
}
</script>
