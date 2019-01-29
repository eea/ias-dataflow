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
					reportId: null,
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
					reportId: null,
					EASINCode: null,
					row_id: null,
					parent_row_id: null,
					section: null,
					spread_pattern: null,
				},
				permitsIssuedReported: {
					reportId: null,
					EASINCode: null,
					row_id: null,
					parent_row_id: null,
					year: null,
					permit_purpose: null,
					number_issued: null,
					number_valid: null	
				},
				permitedSpecimens: {
					reportId: null,
					row_id: null,
					parent_row_id: null,
					permit_type: null,
					value: null,
					unit: null
				},
				permitsIssuedReported: {
					reportId: null,
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
										reportId: null,
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
			let reportId = `${this.currentCountry}-2015-2018`
			// console.log(reportingId)

			this.sectionASpecies(data, emptyInstance, reportId)

			// saveInstance(datatoSave);

      // this.showAlert();
    },


		sectionASpecies(data, emptyInstance, reportId){
	
			data.tab_1.sections.forEach((section, index) => {
				// structure === sectionASpecies
				
				const structure =  Object.assign({}, this.structure.sectionASpecies)
				structure.reportId = reportId
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
						console.log(this.structure.spreadPatterns)
						const spreadPattern = Object.assign({}, this.structure.spreadPatterns)
						console.log(spreadPattern)
						spreadPattern.reportId = reportId
						spreadPattern.EASINCode = section.species_code.selected
						spreadPattern.row_id = pattern_index
						spreadPattern.section = 'A'
						spreadPattern.spread_pattern = pattern.value
						spreadPattern.parent_row_id = index
						emptyInstance.IAS.spreadPatterns.Row.push(spreadPattern)
					})
				}

				structure.permits_issued = section.tables.table_1.question.selected
				structure.additional_information_permits_issued = section.tables.table_1.question.selected

				if(structure.permits_issued) {
						section.tables.table_1.table_sections[0].table_fields.fields.forEach((permitsTableRow, permitsTableRow_index) => {
							const permitsIssuedReported = Object.assign({}, this.structure.permitsIssuedReported)
							permitsIssuedReported.reportId = reportId
							permitsIssuedReported.row_id = permitsTableRow_index
							permitsIssuedReported.parent_row_id = index
							permitsIssuedReported.year = permitsTableRow.fields.find(field => field.name === 'year').selected
							permitsIssuedReported.permit_purpose = permitsTableRow.fields.find(field => field.name === 'purpose_of_permit').selected
							permitsIssuedReported.number_issued = permitsTableRow.fields.find(field => field.name === 'permits_number_main').fields[0].fields[0].selected
							permitsIssuedReported.number_valid = permitsTableRow.fields.find(field => field.name === 'valid_permits_number_main').fields[0].fields[0].selected
							
							// issued
							permitsTableRow.fields.find(field => field.name === 'total_permited_speciments_main').fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = Object.assign({}, this.structure.permitedSpecimens)
									permitedSpecimens.reportId = reportId
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
									permitedSpecimens.reportId = reportId
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
						section.tables.table_1.table_sections[1].table_fields.fields.forEach((inspectionsTableRow, inspectionsTableRow_index) => {
							const inspectionsPermitsReported = Object.assign({}, this.structure.inspectionsPermitsReported)
							inspectionsPermitsReported.reportId = reportId
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
									permitedSpecimens.reportId = reportId
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
									permitedSpecimens.reportId = reportId
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








				emptyInstance.IAS.sectionASpecies.Row.push(structure)
				console.log(emptyInstance.IAS.sectionASpecies.Row)
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
