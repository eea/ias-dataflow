<template>
  <b-container fluid class="main-layout">
		<center><h1 class="mb-3 mt-2">IAS dataflow</h1></center>
    <center><h5><span class="text-muted">Technical formats to be used by the Member States for transmitting to the Commission the information pursuant to paragraph 1 of Article 24 of Regulation (EU) No 1143/2014 on the prevention and management of the introduction of invasive alien species</span></h5></center>
		<h5 class="text-center" v-if="isie" style="color:red"><small>Please do not use Internet Explorer for this application unless there is no alternative. We recommend any other browser.</small></h5>
		<div v-if="prefilled && $store.state.form">

			<FormSubmit :form="$store.state.form" :country="$store.state.country"></FormSubmit>
			<b-card no-body>
				<b-tabs card>
					<b-tab title="REPORTING PARTY">
						<reportingParty :data="$store.state.form.tabs.tab_0"></reportingParty>
					</b-tab>
					<b-tab title="SECTION A">
						<SectionA :data="$store.state.form.tabs.tab_1"></SectionA>
					</b-tab>
					<b-tab title="SECTION B">
						<SectionB :data="$store.state.form.tabs.tab_2"></SectionB>
					</b-tab>
					<b-tab title="SECTION C">
						<SectionC :data="$store.state.form.tabs.tab_3"></SectionC>
					</b-tab>
					<b-tab title="DISTRIBUTION MAPS">
						<DistributionMaps :data="$store.state.form.tabs.tab_4"></DistributionMaps>
					</b-tab>
				</b-tabs>
			</b-card>
		</div>

		<div v-if="!prefilled || $store.state.dataLoading" class="spinner-modal">
			<div class="spinner-modal-content">
				<div class="triple-spinner" />
			</div>
		</div>


      <!-- <div v-if="!prefilled" class="lds-ripple">
        <div class="loader"></div>
      </div> -->

  </b-container>
</template>

<script>

import Multiselect from "@/components/ModifiedMultiselect"
import reportingParty from '@/components/ReportingParty'
import SectionA from '@/components/SectionA'
import SectionB from '@/components/SectionB'
import SectionC from '@/components/SectionC'
import DistributionMaps from '@/components/DistributionMaps'
import FormSubmit from '@/components/FormSubmit'
import {getInstance, getSupportingFiles} from '../api.js';
import sectionBSpecies from '@/assets/sectionBSpecies'
import permitsIssuedReported from '@/assets/permitsIssuedReported'
import permitedSpecimens from '@/assets/permitedSpecimens'
import inspectionsPermitsReported from '@/assets/inspectionsPermitsReported'
import sectionAMeasures from '@/assets/sectionAMeasures'
import sectionAMeasuresManagement from '@/assets/sectionAMeasuresManagement'
import infoImpactSpecies from '@/assets/infoImpactSpecies'
import observedNegativeImpacts from '@/assets/observedNegativeImpacts'

export default {
	components: {
		Multiselect,
		reportingParty,
		SectionA,
		SectionB,
		SectionC,
		DistributionMaps,
		FormSubmit
	},

  props: {

  },

	data() {
		return {
			prefilled: false,
			isie: false
		}
	},

	beforeCreate() {
		this.$store.dispatch('getCurrentCountry')
	},

	created() {
		if(navigator.userAgent.indexOf('MSIE')!==-1
			|| navigator.appVersion.indexOf('Trident/') > -1){
				this.isie=true
			}
	},

	computed: {
		country() {
			return this.$store.getters.getCurrentCountryState
		},
	},
	methods: {
		sanitizeSection(data, prefillData) {
			let section = data.IAS[prefillData].Row
			if(!section)
			section = []
			if(section && !Array.isArray(section))
			section = [section]
			return section
		},
		getPrefillData(){
			getInstance().then((response) => {
				// console.log(JSON.stringify(response.data))
				this.prefill(response.data);
			})
		},
	
		prefill(data) {
			if(data.IAS.noPrefillData) {
				this.prefilled = true
				return
			}
			const form = this.$store.state.form
			this.prefillSectionA(data, form)
			this.prefillSectionB(data, form)
			this.prefillSectionC(data, form)
			this.prefillDistributionMaps(data, form)
			this.prefilled = true
		},

    prefillDistributionMaps(data, form) {
      const prefillData = this.sanitizeSection(data, 'distributionMap')
			const section = form.tabs.tab_4.form_fields
			prefillData.forEach(distributionMap => {
				Object.keys(distributionMap).forEach(key => {
					if(section.hasOwnProperty(key)) section[key].selected = distributionMap[key]
				})
			});
    },


    prefillSectionC(data, form) {
      const prefillData = this.sanitizeSection(data, 'sectionC')
			const section = form.tabs.tab_3.form_fields
      const priorityPathwayData = this.sanitizeSection(data, 'priorityPathway')
      const priorityPathwayDestination = section.priority_pathways.fields


			prefillData.forEach(field => {
				Object.keys(field).forEach(key => {
					if(section.hasOwnProperty(key)) section[key].selected = field[key]
				})
			});


			const mergedPathways = []

      priorityPathwayData.forEach(pathway => {
        const existing = mergedPathways.find(mergedPathway => mergedPathway.row_id === pathway.row_id && mergedPathway.pathway_code === pathway.pathway_code)
        if(existing) {
          existing.EASINCode = [...(Array.isArray(existing.EASINCode) ? existing.EASINCode: [existing.EASINCode]), pathway.EASINCode]
        } else {
          mergedPathways.push(pathway)
        }
      })

      mergedPathways.forEach((pathway, index) => {
				const priorityPathwayEmpty = JSON.parse(JSON.stringify(section.priority_pathways.fields[0]))
				if(!Array.isArray(pathway.EASINCode)) pathway.EASINCode = [pathway.EASINCode]
        priorityPathwayEmpty.pathway_code.selected = priorityPathwayEmpty.pathway_code.options.find(p => p.value == pathway.pathway_code).value
        priorityPathwayEmpty.EASINCode.selected = pathway.EASINCode.map(easincode => priorityPathwayEmpty.EASINCode.options.find(f => f.value == easincode).value)
        if(index === 0) {
					priorityPathwayDestination[0].pathway_code.selected = priorityPathwayEmpty.pathway_code.selected
					priorityPathwayDestination[0].EASINCode.selected = priorityPathwayEmpty.EASINCode.selected
				}
        else
					priorityPathwayDestination.push(priorityPathwayEmpty)
			})
			
    },

		prefillSectionB(data, form) {
 			const prefillData = this.sanitizeSection(data, 'sectionBSpecies')
			const section = form.tabs.tab_2.form_fields
			form.tabs.tab_2.ias_list.selected = data.IAS.reporting.Row.has_national_list_MS
			if(!form.tabs.tab_2.ias_list.selected) return
			
			prefillData.forEach(species => {
				const row_id = species.row_id
				const speciesStructure = {
					code: species.EASINCode,
					name: species.scientific_name,
					cname: species.common_name_national
				}
				const sectionBSpeciesStructure = sectionBSpecies(speciesStructure)
				const spreadPatterns = this.sanitizeSection(data, 'spreadPatterns')
				const sectionBMeasures = this.sanitizeSection(data, 'sectionBMeasures')
				sectionBSpeciesStructure.present_in_MS.selected = species.present_in_MS
				
				if(species.present_in_MS) {
					sectionBSpeciesStructure.reproduction_patterns.selected = species.reproduction_pattern
							
					spreadPatterns.filter(p => p.section === 'B' && p.parent_row_id === row_id).forEach(pattern => {
						sectionBSpeciesStructure.spreadPatterns.selected.push(pattern.spread_pattern)
					})
				}

			
				sectionBSpeciesStructure.additional_information.selected = species.additional_information
				sectionBSpeciesStructure.additional_information_measures.selected = species.additional_information_measures



 				sectionBMeasures.forEach(measure => {

          if(measure.measure && measure.parent_row_id === row_id) {
            sectionBSpeciesStructure.sectionBMeasures[
							Object.keys(sectionBSpeciesStructure.sectionBMeasures).find(
							checkbox => checkbox === measure.measure
						)].selected = true
          } 
        })




				section.push(sectionBSpeciesStructure)
			})

		},

		prefillSectionA(data, form) {
			const prefillData = this.sanitizeSection(data, 'sectionASpecies')
			const spreadPatterns = this.sanitizeSection(data, 'spreadPatterns')
			const sectionAMeasuresData = this.sanitizeSection(data, 'sectionAMeasures')
      const permitedSpecimensData = this.sanitizeSection(data, 'permitedSpecimens')
      const permitsIssuedReportedData = this.sanitizeSection(data, 'permitsIssuedReported')
			const inspectionsPermitsReportedData = this.sanitizeSection(data , 'inspectionsPermitsReported')
			const inspectionsPermitsData = this.sanitizeSection(data, 'inspectionsPermits')
      const partTerritory = this.sanitizeSection(data, 'partTerritory')
      const biogeographicalRegion = this.sanitizeSection(data, 'biogeographicalRegion')
      const riverBasinSubUnit = this.sanitizeSection(data, 'riverBasinSubUnit')
      const marineSubRegions = this.sanitizeSection(data, 'marineSubRegions')
      const methodsUsed = this.sanitizeSection(data, 'methodsUsed')
      const observedNegativeImpactsData = this.sanitizeSection(data, 'observedNegativeImpacts')
      const infoImpactSpceciesData = this.sanitizeSection(data, 'infoImpactSpecies')
      const protectedSpecies = this.sanitizeSection(data, 'protectedSpecies')
      const protectedHabitats = this.sanitizeSection(data, 'protectedHabitats')
      const ecosystems = this.sanitizeSection(data, 'ecosystems')
			const section = form.tabs.tab_1.form_fields
			
			prefillData.forEach(species => {
				const row_id = species.row_id
				const sectionASpeciesStructure = section.find(sp => form.tabs.tab_1.form_fields.indexOf(sp) === row_id)
				if(species.common_name_national) {
					sectionASpeciesStructure.common_name_national.selected = species.common_name_national
				}
				sectionASpeciesStructure.present_in_MS.selected = species.present_in_MS
				
				if(species.present_in_MS) {
					spreadPatterns.filter(p => p.section === 'A' && p.parent_row_id === row_id).forEach(pattern => {
						sectionASpeciesStructure.spreadPatterns.selected.push(pattern.spread_pattern)
					})
					sectionASpeciesStructure.reproduction_patterns.selected = species.reproduction_pattern
				}
				
				sectionASpeciesStructure.additional_information.selected = species.additional_information
				sectionASpeciesStructure.additional_information_permits.selected = species.additional_information_permits_issued
				sectionASpeciesStructure.additional_information_inspections.selected = species.additional_information_inspections

				sectionASpeciesStructure.permits_issued.selected = species.permits_issued
				sectionASpeciesStructure.inspectionsPermitsReported.no_inspections_reported.selected = species.no_inspections_reported
				if(species.permits_issued) {
					permitsIssuedReportedData.filter(p => p.parent_row_id === row_id).forEach((permit, permit_index) => {
						const permit_row_id = permit.row_id
						const permitStructure = permitsIssuedReported()
						
						Object.keys(permit).forEach(field => {
							if(permitStructure.hasOwnProperty(field)) permitStructure[field].selected = permit[field]
						})

						
						permitedSpecimensData.filter(p => p.parent_row_id === permit_row_id && p.permit_type === 'issued').forEach((permitedSpecimen, permitedSpecimen_index) => {
							const permitedSpecimensStructure = permitedSpecimens()
							Object.keys(permitedSpecimen).forEach(field => {
								if(permitedSpecimensStructure.hasOwnProperty(field)) permitedSpecimensStructure[field].selected = permitedSpecimen[field]
							})
							if(permitedSpecimen_index === 0) {
								permitStructure.permitedSpecimensIssued.fields.splice(0,1)
							}
							permitStructure.permitedSpecimensIssued.fields.push(permitedSpecimensStructure)
						})

						permitedSpecimensData.filter(p => p.parent_row_id === permit_row_id && p.permit_type === 'valid').forEach((permitedSpecimen, permitedSpecimen_index) => {
							const permitedSpecimensStructure = permitedSpecimens()
							Object.keys(permitedSpecimen).forEach(field => {
								if(permitedSpecimensStructure.hasOwnProperty(field)) permitedSpecimensStructure[field].selected = permitedSpecimen[field]
							})
							if(permitedSpecimen_index === 0) {
								permitStructure.permitedSpecimensValid.fields.splice(0, 1)
							}
							permitStructure.permitedSpecimensValid.fields.push(permitedSpecimensStructure)
						})

						if(permit_index === 0) {
							sectionASpeciesStructure.permitsIssuedReported.fields.splice(0, 1)
							sectionASpeciesStructure.permitsIssuedReported.fields.push(permitStructure)
						} else {
							sectionASpeciesStructure.permitsIssuedReported.fields.push(permitStructure)
						}
					})


					inspectionsPermitsReportedData.filter(p => p.parent_row_id === row_id).forEach((permit, permit_index) => {
						const permit_row_id = permit.row_id
						const permitStructure = inspectionsPermitsReported()
						
						Object.keys(permit).forEach(field => {
							if(permitStructure.hasOwnProperty(field)) permitStructure[field].selected = permit[field]
						})

						
						inspectionsPermitsData.filter(p => p.parent_row_id === permit_row_id && p.inspection_status === 'complient').forEach((permitedSpecimen, permitedSpecimen_index) => {
							const permitedSpecimensStructure = permitedSpecimens()
							Object.keys(permitedSpecimen).forEach(field => {
								if(permitedSpecimensStructure.hasOwnProperty(field)) permitedSpecimensStructure[field].selected = permitedSpecimen[field]
							})
							if(permitedSpecimen_index === 0) {
								permitStructure.inspectionsPermitsComplient.fields.splice(0, 1)
							}
							permitStructure.inspectionsPermitsComplient.fields.push(permitedSpecimensStructure)
						})

						inspectionsPermitsData.filter(p => p.parent_row_id === permit_row_id && p.inspection_status === 'noncompliant').forEach((permitedSpecimen, permitedSpecimen_index) => {
							const permitedSpecimensStructure = permitedSpecimens()
							Object.keys(permitedSpecimen).forEach(field => {
								if(permitedSpecimensStructure.hasOwnProperty(field)) permitedSpecimensStructure[field].selected = permitedSpecimen[field]
							})
							if(permitedSpecimen_index === 0) {
								permitStructure.inspectionsPermitsNoncompliant.fields.splice(0, 1)
							}
							permitStructure.inspectionsPermitsNoncompliant.fields.push(permitedSpecimensStructure)

						})

						if(permit_index === 0) {
							sectionASpeciesStructure.inspectionsPermitsReported.fields.splice(0, 1)
						}
						sectionASpeciesStructure.inspectionsPermitsReported.fields.push(permitStructure)
					})

				}



				sectionASpeciesStructure.eradication_measures.selected = species.eradication_measures
				if(species.eradication_measures) {
					sectionAMeasuresData.filter(m => m.parent_row_id === row_id && m.measure_type === 'eradication').forEach((measure, measure_index) => {
						const measure_row_id = measure.row_id
						const sectionAMeasuresStructure = sectionAMeasures({
								nuts: this.$store.state.formData.nuts_regions,
								b_regions: this.$store.state.formData.biogeographical_regions,
								r_b_subunits: this.$store.state.formData.river_basins,
								marine_subregions: this.$store.state.formData.marine_subregions
							})
						Object.keys(measure).forEach(key => {
							if(sectionAMeasuresStructure.hasOwnProperty(key)) sectionAMeasuresStructure[key].selected = measure[key]
						})

						partTerritory.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							if(!sectionAMeasuresStructure.partTerritory.options.find(o => o.value === field.code)){
								sectionAMeasuresStructure.partTerritory.options.push({value: field.code, text: `${field.code} - ${field.name}`})
							}
							sectionAMeasuresStructure.partTerritory.selected.push(field.code)
						})

						marineSubRegions.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.marineSubRegions.selected.push(field.code)
						})
						biogeographicalRegion.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.biogeographicalRegion.selected.push(field.code)
						})
						riverBasinSubUnit.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.riverBasinSubUnit.selected.push(field.name)
						})
						methodsUsed.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.methodsUsed.selected.push(field.methods_used)
						})

						observedNegativeImpactsData.filter(i => i.parent_row_id === measure_row_id).forEach(impact => {
							const observedNegativeImpactsStructure = observedNegativeImpacts()
							Object.keys(impact).forEach(field => {
								if(observedNegativeImpactsStructure.hasOwnProperty(field)) observedNegativeImpactsStructure[field].selected = impact[field]
							})
							if(impact.row_id === 0) {
								sectionAMeasuresStructure.observedNegativeImpacts.fields.splice(0,1)	
							}
							sectionAMeasuresStructure.observedNegativeImpacts.fields.push(observedNegativeImpactsStructure)
						})

						if(measure_index === 0) {
							sectionASpeciesStructure.sectionAMeasures.fields.splice(0,1)	
						}
						sectionASpeciesStructure.sectionAMeasures.fields.push(sectionAMeasuresStructure)
					})


				}


				sectionASpeciesStructure.subject_management_measures.selected = species.subject_management_measures
				if(species.subject_management_measures) {
						sectionAMeasuresData.filter(m => m.parent_row_id === row_id && m.measure_type === 'management').forEach((measure, measure_index) => {
						const measure_row_id = measure.row_id
						const sectionAMeasuresStructure = sectionAMeasuresManagement({
								nuts: this.$store.state.formData.nuts_regions,
								b_regions: this.$store.state.formData.biogeographical_regions,
								r_b_subunits: this.$store.state.formData.river_basins,
								marine_subregions: this.$store.state.formData.marine_subregions
							})
						Object.keys(measure).forEach(key => {
							if(sectionAMeasuresStructure.hasOwnProperty(key)) sectionAMeasuresStructure[key].selected = measure[key]
						})

						partTerritory.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.partTerritory.selected.push(field.code)
						})

						marineSubRegions.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.marineSubRegions.selected.push(field.code)
						})
						biogeographicalRegion.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.biogeographicalRegion.selected.push(field.code)
						})
						riverBasinSubUnit.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.riverBasinSubUnit.selected.push(field.name)
						})
						methodsUsed.filter(p => p.parent_row_id === measure_row_id).forEach(field => {
							sectionAMeasuresStructure.methodsUsed.selected.push(field.methods_used)
						})

						observedNegativeImpactsData.filter(i => i.parent_row_id === measure_row_id).forEach(impact => {
							const observedNegativeImpactsStructure = observedNegativeImpacts()
							Object.keys(impact).forEach(field => {
								if(observedNegativeImpactsStructure.hasOwnProperty(field)) observedNegativeImpactsStructure[field].selected = impact[field]
							})
							if(impact.row_id === 0) {
								sectionAMeasuresStructure.observedNegativeImpacts.fields.splice(0,1)	
							}
							sectionAMeasuresStructure.observedNegativeImpacts.fields.push(observedNegativeImpactsStructure)
						})

						if(measure_index === 0) {
							sectionASpeciesStructure.sectionAMeasuresManagement.fields.splice(0,1)	
						}
						sectionASpeciesStructure.sectionAMeasuresManagement.fields.push(sectionAMeasuresStructure)
					})

				}

				infoImpactSpceciesData.filter(i => i.parent_row_id === row_id).forEach((impact, impact_index) => {
					const impact_row_id = impact.row_id
					const infoImpactSpeciesStructure = infoImpactSpecies()
					infoImpactSpeciesStructure.impact.selected = impact.impact

				
					protectedSpecies.filter(p => p.parent_row_id === impact_row_id).forEach(field => {
							infoImpactSpeciesStructure.protectedSpecies.selected.push(field.code.toString())
					})
					protectedHabitats.filter(p => p.parent_row_id === impact_row_id).forEach(field => {
							infoImpactSpeciesStructure.protectedHabitats.selected.push(field.code.toString())
					})
					ecosystems.filter(p => p.parent_row_id === impact_row_id).forEach(field => {
							infoImpactSpeciesStructure.ecosystems.selected.push(field.class)
					})
					if(impact_index === 0) {
						sectionASpeciesStructure.infoImpactSpecies.fields.splice(0,1)
					}
					sectionASpeciesStructure.infoImpactSpecies.fields.push(infoImpactSpeciesStructure)
				})
			})

		},

	},
	watch: {
		'$store.state.form': {
			handler(new_val, old_val) {
				if(old_val === null && new_val != old_val) {
					this.getPrefillData()
				}
			},
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.spinner-modal {
	position: fixed;
	z-index: 10;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.7);
}

.spinner-modal-content {
	position: relative;
	top: 50%;
	left: 50%;
	width: 50%;
	transform: translate(-50%, -50%);
}

.triple-spinner {
	display: block;
	position: relative;
	top: 0;
	left: 0;
	width: 125px;
	height: 125px;
	margin: 0 auto;
	border-radius: 50%;
	border: 4px solid transparent;
	border-top: 4px solid #FF5722;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
}

.triple-spinner::before,
.triple-spinner::after {
	content: "";
	position: absolute;
	border-radius: 50%;
	border: 4px solid transparent;
}
.triple-spinner::before {
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-top-color: #FF9800;
	-webkit-animation: spin 3s linear infinite;
	animation: spin 3.5s linear infinite;
}
.triple-spinner::after {
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
	border-top-color: #FFC107;
	-webkit-animation: spin 1.5s linear infinite;
	animation: spin 1.75s linear infinite;
}

@-webkit-keyframes spin {
    from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
    }
    to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
    }
  }
  

@keyframes spin {
    from {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
    }
    to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
    }
  }
</style>
