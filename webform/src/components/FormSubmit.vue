<template>
  <div class="wrapper">
    <div>
      <b-btn variant="success" @click="saveForm">Save</b-btn>
      <b-btn variant="primary" @click="validateSections" style="">Validate</b-btn>
      <b-btn variant="danger" @click="openErrorModal" v-if="errors.items.length > 0">Errors</b-btn>
      <b-btn variant="danger" @click="exitForm">Back to envelope</b-btn>
    </div>

    <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold;">The report is saved</h3>
      </b-alert>
  </div>
</template>

<script>

import {saveInstance, envelope} from '../api.js';

export default {
  name: 'FormSubmit',
  props: ['info', 'country', 'validated'],
  inject: ['$validator'],
  updated() {
  },
  created() {
    this.dataset = this.info;
		this.currentCountry = this.country
    this.validate()
  },
  data () {
    return {
      dataset: null,
			structure: {
					sectionASpecies: {
					reportID: null,
					EASINCode: null,
					common_name_national: null,
					present_in_ms: null,
					reproduction_pattern: null,
					additional_information: null,
					permits_issued: null,
					additional_information_permits_issued: null,
					no_inspections_reported: null,
					additional_information_inspections: null,
					eradication_measures: null,
					subject_management_measures: null,
					row_id: null
				},
				spreadPatterns: {
					reportID: null,
					EASINCode: null,
					row_id: null,
					parent_row_id: null,
					section: null,
					spread_pattern: null,
				},
				permitsIssuedReported: {
					reportID: null,
					EASINCode: null,
					row_id: null,
					parent_row_id: null,
					year: null,
					permit_purpose: null,
					number_issued: null,
					number_valid: null	
				},
				permitedSpecimens: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					permit_type: null,
					value: null,
					unit: null
				},
				permitsIssuedReported: {
					reportID: null,
					EASINCode: null,
					row_id: null,
					parent_row_id: null,
					year: null,
					permit_purpose: null,
					number_establishment: null,
					number_inspected: null	
				},
				inspectionPermits: {
					reportID: null,
          row_id: null,
          parent_row_id: null,
        	inspection_status: null,
        	value: null,
          unit: null
				},
				sectionAMeasures: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					population_name: null,
					population_code: null,
					start_date: null,
					end_date: null,
					measure_type: null,
					no_negative_impact: null,
					measure_effectiveness: null,
					additional_information: null,
					measure_objective: null
				},
				partTerritory: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					name: null,
					code: null
				},
				biogeographicalRegion: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					name: null,
					code: null,
					CountryCode: null
				},
				riverBasinSubUnit: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					name: null,
					CountryCode: null
				},
				marineSubRegions: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					name: null,
					code: null,
					CountryCode: null
				},
				methodsUsed: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					methods_used: null
				},
				observedNegativeImpacts: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					non_targeted_species: null,
					species: null
				},
				infoImpactSpecies: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					impact: null
				},
				protectedSpecies: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					code: null,
					name: null	
				},
				protectedHabitats: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					code: null,
					name: null	
				},
				ecosystems: {
					reportID: null,
					row_id: null,
					parent_row_id: null,
					group: null,
					class: null	
				},
			},
			currentCountry: null,
      validation: [],
      valid: this.validated,
      jsonemptyinstance: {
							"IAS": {
								"@xmlns": "http://dd.eionet.europa.eu/namespaces/884",
								"@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
								"@xsi:schemaLocation": "http://dd.eionet.europa.eu/namespaces/884  http://dd.eionet.europa.eu/v2/dataset/3421/schema-dst-3421.xsd",
								"inspectionsPermitsReported": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/895",
									"Row": [
										
									]
								},
								"permitsIssuedReported": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/893",
									"Row": [
										
									]
								},
								"sectionC": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/889",
									"Row": [
										
									]
								},
								"sectionBSpecies": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/888",
									"Row": [
										
									]
								},
								"distributionMap": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/890",
									"Row": [
										
									]
								},
								"sectionASpecies": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/887",
									"Row": [
										
									]
								},
								"partTerritory": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/899",
									"Row": [
										
									]
								},
								"inspectionsPermits": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/896",
									"Row": [
										
									]
								},
								"permitedSpecimens": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/894",
									"Row": [
										
									]
								},
								"sectionAMeasures": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/898",
									"Row": [
										
									]
								},
								"sectionBMeasures": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/897",
									"Row": [
										
									]
								},
								"priorityPathway": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/891",
									"Row": [
										
									]
								},
								"spreadPatterns": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/892",
									"Row": [
										
									]
								},
								"reporting": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/885",
									"Row": {
										StartYear: null,
										EndYear: null,
										reportID: null,
										has_national_list_MS: null,
										CountryCode: null,
									}
								},
								"biogeographicalRegion": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/900",
									"Row": [
										
									]
								},
								"riverBasinSubUnit": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/901",
									"Row": [
										
									]
								},
								"marineSubRegions": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/902",
									"Row": [
										
									]
								},
								"methodsUsed": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/903",
									"Row": [
										
									]
								},
								"observedNegativeImpacts": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/904",
									"Row": [
										
									]
								},
								"infoImpactSpecies": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/905",
									"Row": [
										
									]
								},
								"protectedSpecies": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/906",
									"Row": [
										
									]
								},
								"protectedHabitats": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/907",
									"Row": [
										
									]
								},
								"ecosystems": {
									"@xmlns": "http://dd.eionet.europa.eu/namespaces/908",
									"Row": [
										
									]
								}
							}
      },
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
    }
  },

  methods: {
    openErrorModal(){
      this.$emit('open-error-modal');
    },

    exitForm(){
      window.location.replace(envelope)
    },

    showAlert () {
      console.log('showingalert');
      this.dismissCountDown = this.dismissSecs
    },

    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    saveForm(){
      let emptyInstance = JSON.parse(JSON.stringify(this.jsonemptyinstance))
      let data = JSON.parse(JSON.stringify(this.dataset))
			let reportID = `${this.currentCountry}-2015-2018`
			// console.log(reportingId)

			this.sectionASpecies(data, emptyInstance, reportID)

			// saveInstance(datatoSave);

      // this.showAlert();
    },


		sectionASpecies(data, emptyInstance, reportID){
	
			data.tab_1.sections.forEach((section, index) => {
				// structure === sectionASpecies
				
				const structure =  Object.assign({}, this.structure.sectionASpecies)
				structure.reportID = reportID
				structure.EASINCode = section.species_code.selected
				structure.common_name_national = section.common_name.selected[this.currentCountry]
				structure.present_in_ms = section.mandatory_item.selected
				structure.additional_information = section.additional_info.selected
				structure.row_id = index
				if(section.mandatory_item.selected !== true) {
					emptyInstance.IAS.sectionASpecies.Row.push(structure)
					return
				}
				
				structure.reproduction_pattern = section.depending_on_mandatory.reproduction_patterns[0].selected.pattern
				
				// spread patterns
				if(section.depending_on_mandatory.spread_patterns[0].selected.pattern) {
					section.depending_on_mandatory.spread_patterns[0].selected.pattern.forEach((pattern, pattern_index) => {
						const spreadPattern = Object.assign({}, this.structure.spreadPatterns)
						spreadPattern.reportID = reportID
						spreadPattern.EASINCode = section.species_code.selected
						spreadPattern.row_id = pattern_index
						spreadPattern.section = 'A'
						spreadPattern.spread_pattern = pattern.value
						spreadPattern.parent_row_id = index
						emptyInstance.IAS.spreadPatterns.Row.push(spreadPattern)
					})
				}

				structure.permits_issued = section.tables.table_1.question.selected

				if(structure.permits_issued) {
						structure.additional_information_permits_issued = section.tables.table_1.table_sections[0].additional_info.selected
						section.tables.table_1.table_sections[0].table_fields.fields.forEach((permitsTableRow, permitsTableRow_index) => {
							const permitsIssuedReported = Object.assign({}, this.structure.permitsIssuedReported)
							permitsIssuedReported.reportID = reportID
							permitsIssuedReported.row_id = permitsTableRow_index
							permitsIssuedReported.parent_row_id = index
							permitsIssuedReported.year = permitsTableRow.fields.find(field => field.name === 'year').selected
							permitsIssuedReported.permit_purpose = permitsTableRow.fields.find(field => field.name === 'purpose_of_permit').selected
							permitsIssuedReported.number_issued = permitsTableRow.fields.find(field => field.name === 'permits_number_main').fields[0].fields[0].selected
							permitsIssuedReported.number_valid = permitsTableRow.fields.find(field => field.name === 'valid_permits_number_main').fields[0].fields[0].selected
							
							// issued
							permitsTableRow.fields.find(field => field.name === 'total_permited_speciments_main').fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = Object.assign({}, this.structure.permitedSpecimens)
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = permitsTableRow_index
									permitedSpecimens.permit_type ='issued'
									permitedSpecimens.value = permitedSpecimen.fields[0].selected
									permitedSpecimens.unit = permitedSpecimen.fields[1].selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})

							// valid
							permitsTableRow.fields.find(field => field.name === 'valid_total_permited_speciments_main').fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = Object.assign({}, this.structure.permitedSpecimens)
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = permitsTableRow_index
									permitedSpecimens.permit_type ='valid'
									permitedSpecimens.value = permitedSpecimen.fields[0].selected
									permitedSpecimens.unit = permitedSpecimen.fields[1].selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})
							
							emptyInstance.IAS.permitsIssuedReported.Row.push(permitsIssuedReported)

						})
					
					// inspections

						structure.no_inspections_reported = section.tables.table_1.table_sections[1].noinspections.selected
						structure.additional_information_inspections = section.tables.table_1.table_sections[1].additional_info.selected

						section.tables.table_1.table_sections[1].table_fields.fields.forEach((inspectionsTableRow, inspectionsTableRow_index) => {
							const inspectionsPermitsReported = Object.assign({}, this.structure.inspectionsPermitsReported)
							inspectionsPermitsReported.reportID = reportID
							inspectionsPermitsReported.row_id = inspectionsTableRow_index
							inspectionsPermitsReported.parent_row_id = index
							inspectionsPermitsReported.year = inspectionsTableRow.fields.find(field => field.name === 'year').selected
							inspectionsPermitsReported.permit_purpose = inspectionsTableRow.fields.find(field => field.name === 'purpose_of_permit').selected
							inspectionsPermitsReported.number_establishment = inspectionsTableRow.fields.find(field => field.name === 'number_establishments_inspections_main').fields[0].fields[0].selected
							inspectionsPermitsReported.number_inspected = inspectionsTableRow.fields.find(field => field.name === 'establishments_non_compliant_main').fields[0].fields[0].selected
							// TODO: CHECK width dd
							// compliant
							inspectionsTableRow.fields.find(field => field.name === 'number_permitted_specimens_main').fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = Object.assign({}, this.structure.inspectionPermits)
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = inspectionsTableRow_index
									permitedSpecimens.inspection_status ='compliant'
									permitedSpecimens.value = permitedSpecimen.fields[0].selected
									permitedSpecimens.unit = permitedSpecimen.fields[1].selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})

							// non-compliant
							inspectionsTableRow.fields.find(field => field.name === 'number_speciments_held_by_non_compliant_establishments_main').fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = Object.assign({}, this.structure.inspectionPermits)
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = inspectionsTableRow_index
									permitedSpecimens.inspection_status ='non-compliant'
									permitedSpecimens.value = permitedSpecimen.fields[0].selected
									permitedSpecimens.unit = permitedSpecimen.fields[1].selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})
							
							emptyInstance.IAS.inspectionsPermitsReported.Row.push(inspectionsPermitsReported)

						})
						
				}

				// eradication measures - table 2
				structure.eradication_measures = section.tables.table_2.question.selected
				if(structure.eradication_measures) {
					section.tables.table_2.tables.forEach((measure, measure_index) => {
						console.log('here')
							const sectionAMeasures = Object.assign({}, this.structure.sectionAMeasures)
							sectionAMeasures.measure_type = 'eradication'
							sectionAMeasures.reportID = reportID
							sectionAMeasures.row_id = measure_index
							sectionAMeasures.parent_row_id = index
							sectionAMeasures.population_name = measure.name
							sectionAMeasures.population_code = measure.name
							sectionAMeasures.start_date = measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'starting_date').selected
							sectionAMeasures.end_date = measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'duration_or_end').selected
							console.log(measure.table_sections[0].table_fields.fields[0].fields)
						
							// part of territory
							measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'part_territory').selected.forEach((territory, territory_index) => {
									const partTerritory = Object.assign({}, this.structure.partTerritory)
									partTerritory.reportID = reportID
									partTerritory.row_id = territory_index
									partTerritory.parent_row_id = measure_index
									partTerritory.name = territory.text
									partTerritory.code = territory.value
									emptyInstance.IAS.partTerritory.Row.push(partTerritory)
							})

						// biogeographical regions
				    measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'biogeographical_region').selected.forEach((region, region_index) => {
                  const biogeographicalRegion = Object.assign({}, this.structure.biogeographicalRegion)
                  biogeographicalRegion.reportID = reportID
                  biogeographicalRegion.row_id = region_index
                  biogeographicalRegion.parent_row_id = measure_index
                  biogeographicalRegion.name = region.text
                  biogeographicalRegion.code = region.value
                  biogeographicalRegion.CountryCode = this.currentCountry
                  emptyInstance.IAS.biogeographicalRegion.Row.push(biogeographicalRegion)
              })
						
						// river basins subunit
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'river_basin_subunits').selected.forEach((river, river_index) => {
                  const riverBasinSubUnit = Object.assign({}, this.structure.riverBasinSubUnit)
                  riverBasinSubUnit.reportID = reportID
                  riverBasinSubUnit.row_id = river_index
                  riverBasinSubUnit.parent_row_id = measure_index
                  riverBasinSubUnit.name = river.text
                  riverBasinSubUnit.CountryCode = this.currentCountry
                  emptyInstance.IAS.riverBasinSubUnit.Row.push(riverBasinSubUnit)
              })
						// marine sub-regions
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'marine_sub_regions').selected.forEach((marine, marine_index) => {
                  const marineSubRegions = Object.assign({}, this.structure.marineSubRegions)
                  marineSubRegions.reportID = reportID
                  marineSubRegions.row_id = marine_index
                  marineSubRegions.parent_row_id = measure_index
                  marineSubRegions.name = marine.text
                  marineSubRegions.code = marine.value
                  marineSubRegions.CountryCode = this.currentCountry
                  emptyInstance.IAS.marineSubRegions.Row.push(marineSubRegions)
              })

						// methods used
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'methods_used').selected.forEach((method, method_index) => {
                  const methodsUsed = Object.assign({}, this.structure.methodsUsed)
                  methodsUsed.reportID = reportID
                  methodsUsed.row_id = method_index
                  methodsUsed.parent_row_id = measure_index
                  methodsUsed.methods_used = method.value
                  emptyInstance.IAS.methodsUsed.Row.push(methodsUsed)
              })

						sectionAMeasures.measure_effectiveness = measure.table_sections[0].table_fields.fields[1].fields.find(row => row.name === 'effectiveness_measure').selected
						sectionAMeasures.no_negative_impact = measure.table_sections[0].table_fields.fields[3].selected
						sectionAMeasures.additional_information = measure.table_sections[0].additional_info.selected

						measure.table_sections[0].table_fields.fields[2].fields.forEach((impact, impact_index) => {
									const observedNegativeImpacts = Object.assign({}, this.structure.observedNegativeImpacts)
									observedNegativeImpacts.reportID = reportID
									observedNegativeImpacts.row_id = impact_index
									observedNegativeImpacts.parent_row_id = measure_index
									observedNegativeImpacts.non_targeted_species = impact.selected
									observedNegativeImpacts.species = impact.inner_field.selected
                  emptyInstance.IAS.observedNegativeImpacts.Row.push(observedNegativeImpacts)
						})
						emptyInstance.IAS.sectionAMeasures.Row.push(sectionAMeasures)
					})

				}



				structure.subject_management_measures = section.tables.table_3.question.selected
				if(structure.subject_management_measures) {
					section.tables.table_3.tables.forEach((measure, measure_index) => {
							const sectionAMeasures = Object.assign({}, this.structure.sectionAMeasures)
							sectionAMeasures.measure_type = 'management'
							sectionAMeasures.reportID = reportID
							sectionAMeasures.row_id = measure_index
							sectionAMeasures.parent_row_id = index
							sectionAMeasures.population_name = measure.name
							sectionAMeasures.population_code = measure.name
							sectionAMeasures.start_date = measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'starting_date').selected
							sectionAMeasures.end_date = measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'duration_or_end').selected
							sectionAMeasures.measure_objective = measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'measures_objective').selected
						
							// part of territory
							measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'part_territory').selected.forEach((territory, territory_index) => {
									const partTerritory = Object.assign({}, this.structure.partTerritory)
									partTerritory.reportID = reportID
									partTerritory.row_id = territory_index
									partTerritory.parent_row_id = measure_index
									partTerritory.name = territory.text
									partTerritory.code = territory.value
									emptyInstance.IAS.partTerritory.Row.push(partTerritory)
							})

						// biogeographical regions
				    measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'biogeographical_region').selected.forEach((region, region_index) => {
                  const biogeographicalRegion = Object.assign({}, this.structure.biogeographicalRegion)
                  biogeographicalRegion.reportID = reportID
                  biogeographicalRegion.row_id = region_index
                  biogeographicalRegion.parent_row_id = measure_index
                  biogeographicalRegion.name = region.text
                  biogeographicalRegion.code = region.value
                  biogeographicalRegion.CountryCode = this.currentCountry
                  emptyInstance.IAS.biogeographicalRegion.Row.push(biogeographicalRegion)
              })
						
						// river basins subunit
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'river_basin_subunits').selected.forEach((river, river_index) => {
                  const riverBasinSubUnit = Object.assign({}, this.structure.riverBasinSubUnit)
                  riverBasinSubUnit.reportID = reportID
                  riverBasinSubUnit.row_id = river_index
                  riverBasinSubUnit.parent_row_id = measure_index
                  riverBasinSubUnit.name = river.text
                  riverBasinSubUnit.CountryCode = this.currentCountry
                  emptyInstance.IAS.riverBasinSubUnit.Row.push(riverBasinSubUnit)
              })
						
						// marine sub-regions
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'marine_basin_subunits').selected.forEach((marine, marine_index) => {
                  const marineSubRegions = Object.assign({}, this.structure.marineSubRegions)
                  marineSubRegions.reportID = reportID
                  marineSubRegions.row_id = marine_index
                  marineSubRegions.parent_row_id = measure_index
                  marineSubRegions.name = marine.text
                  marineSubRegions.code = marine.value
                  marineSubRegions.CountryCode = this.currentCountry
                  emptyInstance.IAS.marineSubRegions.Row.push(marineSubRegions)
              })

						// methods used
						measure.table_sections[0].table_fields.fields[0].fields.find(row => row.name === 'methods_used').selected.forEach((method, method_index) => {
                  const methodsUsed = Object.assign({}, this.structure.methodsUsed)
                  methodsUsed.reportID = reportID
                  methodsUsed.row_id = method_index
                  methodsUsed.parent_row_id = measure_index
                  methodsUsed.methods_used = method.value
                  emptyInstance.IAS.methodsUsed.Row.push(methodsUsed)
              })

						sectionAMeasures.measure_effectiveness = measure.table_sections[0].table_fields.fields[1].fields.find(row => row.name === 'effectiveness_measure').selected
						sectionAMeasures.no_negative_impact = measure.table_sections[0].table_fields.fields[3].selected
						sectionAMeasures.additional_information = measure.table_sections[0].additional_info.selected

						measure.table_sections[0].table_fields.fields[2].fields.forEach((impact, impact_index) => {
									const observedNegativeImpacts = Object.assign({}, this.structure.observedNegativeImpacts)
									observedNegativeImpacts.reportID = reportID
									observedNegativeImpacts.row_id = impact_index
									observedNegativeImpacts.parent_row_id = measure_index
									observedNegativeImpacts.non_targeted_species = impact.selected
									observedNegativeImpacts.species = impact.inner_field.selected
                  emptyInstance.IAS.observedNegativeImpacts.Row.push(observedNegativeImpacts)
						})
						emptyInstance.IAS.sectionAMeasures.Row.push(sectionAMeasures)
					})

				}

				section.tables.table_4.table_sections[0].table_fields.forEach((infoImpact, infoImpact_index) => {
							const infoImpactSpecies = Object.assign({}, this.structure.infoImpactSpecies)
							infoImpactSpecies.reportID = reportID
							infoImpactSpecies.row_id = infoImpact_index
							infoImpactSpecies.parent_row_id = index
							infoImpactSpecies.impact = infoImpact.fields.find(cell => cell.name === 'impact').selected
							console.log(infoImpact.fields.find(cell => cell.name === 'protected_species'))
							infoImpact.fields.find(cell => cell.name === 'protected_species').selected.forEach((entry, entry_index) => {
									const protectedSpecies = Object.assign({}, this.structure.protectedSpecies)
									protectedSpecies.reportID = reportID
									protectedSpecies.row_id = entry_index
									protectedSpecies.parent_row_id = infoImpact_index
									protectedSpecies.code = entry.value
									protectedSpecies.name = entry.text
									emptyInstance.IAS.protectedSpecies.Row.push(protectedSpecies)
							})
							infoImpact.fields.find(cell => cell.name === 'protected_habitats').selected.forEach((entry, entry_index) => {
									const protectedHabitats = Object.assign({}, this.structure.protectedHabitats)
									protectedHabitats.reportID = reportID
									protectedHabitats.row_id = entry_index
									protectedHabitats.parent_row_id = infoImpact_index
									protectedHabitats.code = entry.value
									protectedHabitats.name = entry.text
									emptyInstance.IAS.protectedHabitats.Row.push(protectedHabitats)
							})
							infoImpact.fields.find(cell => cell.name === 'ecosystem_services').selected.forEach((entry, entry_index) => {
									const ecosystems = Object.assign({}, this.structure.ecosystems)
									ecosystems.reportID = reportID
									ecosystems.row_id = entry_index
									ecosystems.parent_row_id = infoImpact_index
									ecosystems.group = entry.value
									ecosystems.class = entry.text
									emptyInstance.IAS.ecosystems.Row.push(ecosystems)
							})
				})

				emptyInstance.IAS.sectionASpecies.Row.push(structure)
				console.log(emptyInstance.IAS)
			})
			
		},


		

    validate(){

    },

    validateSections(){
      this.$emit("validate-components");
    }
  },
    watch: {
    info: {
      handler: function(old_val,new_val) {
        this.validate()
      },
      deep: true,
      immediate: true,
    },
    country: {
      handler: function(old_val,new_val) {
        this.currentCountry = new_val
      },
      deep: true,
      immediate: true,
    }
  }
}
</script>

<style lang="css" scoped>

.alert.alert-success {
  position: fixed;
  top:3rem;
  left: 20%;
  right: 20%;
}

.wrapper {
      text-align: right;
    margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .wrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.03);
    height: 3rem;
  }
}
</style>
