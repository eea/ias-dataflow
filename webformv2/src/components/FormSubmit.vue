<template>
  <div class="wrapper">
    <div class="buttons-wrapper">
      <b-btn variant="success" @click="saveForm">Save</b-btn>
      <b-btn variant="primary" @click="validateSections" style="">Validate</b-btn>
      <b-btn variant="danger" @click="openErrorModal">Errors</b-btn>
      <b-btn variant="danger" @click="exitForm">Back to envelope</b-btn>
    </div>

    <b-alert :show="dismissCountDown"
       variant="success"
       @dismissed="dismissCountDown=0"
       @dismiss-count-down="countDownChanged">
        <h3 style="color: black; font-weight: bold; text-align: center">The report is saved</h3>
      </b-alert>

    <b-modal size="lg" style="text-align:left" ref="errorsModal" hide-footer title="Errors">
          <b-card v-if="sectionAErrors.length">
              <h4 class="errorSectionTitle"  @click="changeDirection('sectionAChevron')"  v-b-toggle.SectionAErrors><b-badge style="font-size:inherit; width: 100%" variant="danger"><i ref="sectionAChevron" class="fas fa-chevron-right"></i> Section A</b-badge></h4>
              <b-collapse id="SectionAErrors">
                <b-list-group>
                    <b-list-group-item v-for="(error, error_index) in sectionAErrors" :key="`A_${error_index}`">
                        <h6>
                            <a @click="clickSectionA(error.EASINCode)" :href="`#${error.sci_name}`">{{error.sci_name}} <span style="float:right">{{error.EASINCode}}</span></a>
                        </h6>
                        <ul class="listing">
                            <li v-for="(field_error, field_error_index) in error.errors" :key="field_error_index">
                                <b-badge variant="danger">
                                    {{field_error}}
                                </b-badge> 
                            </li>
                        </ul>
                    </b-list-group-item>
                </b-list-group>
              </b-collapse>
          </b-card>


        <b-card v-if="sectionBErrors.length">
              <h4 class="errorSectionTitle"  @click="changeDirection('sectionBChevron')"  v-b-toggle.SectionBErrors><b-badge style="font-size:inherit; width: 100%"  variant="danger"><i ref="sectionBChevron" class="fas fa-chevron-right"></i> Section B</b-badge></h4>
              <b-collapse id="SectionBErrors">
                <b-list-group>
                    <b-list-group-item v-for="(error, error_index) in sectionBErrors" :key="`B_${error_index}`">
                        <h6>
                            <a @click="clickSectionB(error.EASINCode)" :href="`#${error.sci_name}`">{{error.sci_name}} </a>
                        </h6>
                        <ul class="listing">
                            <li v-for="(field_error, field_error_index) in error.errors" :key="field_error_index">
                                <b-badge variant="danger">
                                    {{field_error}}
                                </b-badge> 
                            </li>
                        </ul>
                    </b-list-group-item>
                </b-list-group>
              </b-collapse>
          </b-card>


        <b-card v-if="sectionCErrors.length">
              <h4 class="errorSectionTitle"  @click="changeDirection('sectionCChevron')"  v-b-toggle.SectionCErrors><b-badge style="font-size:inherit; width: 100%"  variant="danger"><i ref="sectionCChevron" class="fas fa-chevron-right"></i> Section C</b-badge></h4>
              <b-collapse id="SectionCErrors">
                <b-list-group>
                    <b-list-group-item v-for="(error, error_index) in sectionCErrors" :key="`C_${error_index}`">
                        <h6>
                            <a @click="clickSectionC(error.fieldid)" :href="`#${error.fieldid}`">{{error.fieldid}} </a>
                        </h6>
                        <ul class="listing">
                            <li v-for="(field_error, field_error_index) in error.errors" :key="field_error_index">
                                <b-badge variant="danger">
                                    {{field_error}}
                                </b-badge> 
                            </li>
                        </ul>
                    </b-list-group-item>
                </b-list-group>
              </b-collapse>
          </b-card>

        <div v-if="!hasErrors">No validation errors</div>
      <!-- <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn> -->
    </b-modal>
  </div>
</template>

<script>

import {saveInstance, envelope} from '@/api';
import ecosystemsList from '@/assets/ecosystems'

export default {
  name: 'FormSubmit',
  props: ['form', 'country'],

  created() {
    this.dataset = this.form;
		this.currentCountry = this.country
  },
  data () {
    return {
        dataset: null,
        structure: {
                sectionASpecies: {
                reportID: null,
                EASINCode: null,
                common_name_national: null,
                present_in_MS: null,
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
            inspectionsPermitsReported: {
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
            inspectionsPermits: {
                reportID: null,
                row_id: null,
                parent_row_id: null,
                inspection_status: null,
                value: null,
                unit: null
            },
            sectionBSpecies: {
                reportID: null,
                EASINCode: null,
                scientific_name: null,
                common_name_national: null,
                present_in_MS: null,
                reproduction_pattern: null,
                additional_information: null,
                additional_information_measures: null,
                row_id: null
            },
            sectionBMeasures: {
                reportID: null,
                row_id: null,
                parent_row_id: null,
                measure: null
            },
            sectionC: {
                reportID: null,
                weblink_permits: null,
                action_plans: null,
                file_action_plans: null,
                surveillance_system: null,
                file_surveillance_system: null,
                official_control_system: null,
                file_official_control_system: null,
                cost_of_action: null,
                file_cost_of_action: null,
                additional_information: null,
                file_additional_information: null,
                measures_inform_public: null,
                file_measures_inform_public: null
            },
            priorityPathway: {
                reportID: null,
                row_id: null,
                pathway_code: null,
                EASINCode: null
            },
            distributionMap: {
                reportID: null,
                distributionMap_sectionA: null,
                distributionMap_sectionB: null,
                inspireMetadata_sectionA: null,
                inspireMetadata_sectionB: null
            },
        },
        currentCountry: null,
        jsonemptyinstance: {
                    "IAS": {
                        "@xmlns": "http://dd.eionet.europa.eu/namespaces/884",
                        "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
                        "@xsi:schemaLocation": "http://dd.eionet.europa.eu/namespaces/884  http://dd.eionet.europa.eu/v2/dataset/3422/schema-dst-3422.xsd",
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
      sectionAErrors: [],
      sectionBErrors: [],
      sectionCErrors: [],
      distributionMapsErrors: [],
    }
  },

  computed: {
      hasErrors(){
          return this.sectionAErrors.length || this.sectionBErrors.length || this.sectionCErrors.length || this.distributionMapsErrors.length  
      }
  },

  methods: {
    changeDirection(currentRef) {
        console.log(this.$refs)
        if(this.$refs[currentRef].classList.contains('fa-chevron-right')) {
            this.$refs[currentRef].classList.remove('fa-chevron-right')
            this.$refs[currentRef].classList.add('fa-chevron-down')
        } else {
            this.$refs[currentRef].classList.remove('fa-chevron-down')
            this.$refs[currentRef].classList.add('fa-chevron-right')
        }
    },

    openErrorModal(){
        this.validateSections()
        this.$refs.errorsModal.show()
    },
    clickSectionA(anchor){
        document.querySelector('.nav.nav-tabs li:nth-child(2) a').click()
        const title = document.querySelector(`.sectionA h4[easincode='${anchor}']`)
        const collapse = title.parentNode.querySelector('.collapse[id]')
        if(!collapse.classList.contains('show')) {
            title.click()
        }
    },
    clickSectionB(anchor) {
        document.querySelector('.nav.nav-tabs li:nth-child(3) a').click()
        const title = document.querySelector(`.sectionB h4[easincode='${anchor}']`)
        const collapse = title.parentNode.querySelector('.collapse[id]')
        if(!collapse.classList.contains('show')) {
            title.click()
        }
    },
    clickSectionC(anchor) {
        document.querySelector('.nav.nav-tabs li:nth-child(4) a').click()
    },
    validateSections(){
        this.sectionAErrors = []
        this.sectionBErrors = []
        this.sectionCErrors = []

        const sectionA = document.querySelector('.sectionA')
        const sectionASpecies = sectionA.querySelectorAll('.sectionASpecies')

        const sectionB = document.querySelector('.sectionB')
        const sectionBSpecies = sectionB.querySelectorAll('.sectionBSpecies')

        const sectionC = document.querySelector('.sectionC')
        const sectionCFields = sectionC.querySelectorAll('.sectionCField')
        
        const ias_list = document.querySelector('#ias_list')
        const ias_error = ias_list.querySelector('.badge') ? ias_list.querySelector('.badge').innerText : null

        ias_error && this.sectionBErrors.push({
                    EASINCode: 'ias_list',
                    sci_name: 'ias_list',
                    errors: ['Question regarding national list of invasive alien species field is required']})

        sectionCFields.forEach(field => {
            const errors = field.querySelectorAll('.badge.badge-danger')
            const fieldid = field.getAttribute('id')
            if(errors.length) {
                 const errorObj = {
                    fieldid: fieldid,
                    errors: []
                }
                errors.forEach(error => {
                    errorObj.errors.push(error.innerText)
                })
                this.sectionCErrors.push(errorObj)
            } 
        })



        sectionASpecies.forEach(species => {
            const errors = species.querySelectorAll('.badge.badge-danger')
            const species_header = species.querySelector('[EASINCode]')
            const easin = species_header.getAttribute('EASINCode')
            const current_form_section = this.$store.state.form.tabs.tab_1.form_fields.find(field => field.EASINCode.selected == easin)
            if(errors.length) {
                const scientific_name = species_header.getAttribute('id')
                if(current_form_section) current_form_section.validation = 'invalid'
                 const errorObj = {
                    EASINCode: easin,
                    sci_name: scientific_name,
                    errors: []
                }
                errors.forEach(error => {
                    errorObj.errors.push(error.innerText)
                })
                this.sectionAErrors.push(errorObj)
            } else {
                if(current_form_section) current_form_section.validation = null
            }
        
        })


        sectionBSpecies.forEach(species => {
            const errors = species.querySelectorAll('.badge.badge-danger')
            const species_header = species.querySelector('[EASINCode]')
            console.log(species_header)
            const easin = species_header.getAttribute('EASINCode')
            const scientific_name = species_header.getAttribute('id')
            const current_form_section = this.$store.state.form.tabs.tab_2.form_fields.find(field => field.scientific_name.selected == scientific_name)
            if(errors.length) {
                if(current_form_section) current_form_section.validation = 'invalid'
                 const errorObj = {
                    EASINCode: easin,
                    sci_name: scientific_name,
                    errors: []
                }
                errors.forEach(error => {
                    errorObj.errors.push(error.innerText)
                })
                this.sectionBErrors.push(errorObj)
            } else {
                if(current_form_section) current_form_section.validation = null
            }
        
        })


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
			emptyInstance.IAS.reporting.Row.has_national_list_MS = data.tabs.tab_2.ias_list.selected
			emptyInstance.IAS.reporting.Row.reportID = reportID
			emptyInstance.IAS.reporting.Row.StartYear = 2015
			emptyInstance.IAS.reporting.Row.EndYear = 2018
			emptyInstance.IAS.reporting.Row.CountryCode = this.currentCountry




			this.sectionASpecies(data, emptyInstance, reportID)
			this.sectionBSpecies(data, emptyInstance, reportID)
			this.sectionC(data, emptyInstance, reportID)
			this.distributionMaps(data, emptyInstance, reportID)
			console.log(emptyInstance)
			saveInstance(emptyInstance);

      this.showAlert();
    },

		distributionMaps(data, emptyInstance, reportID) {
			const structure = JSON.parse(JSON.stringify(this.structure.distributionMap))
			const section = data.tabs.tab_4.form_fields
			structure.reportID = reportID
			Object.keys(section).forEach(field => {
				if(structure.hasOwnProperty(field)) structure[field] = section[field].selected
			})
			emptyInstance.IAS.distributionMap.Row.push(structure)
		},

		sectionC(data, emptyInstance, reportID){
			const structure = JSON.parse(JSON.stringify(this.structure.sectionC))
			const section = data.tabs.tab_3.form_fields
			structure.reportID = reportID

			Object.keys(section).forEach(field => {
				if(structure.hasOwnProperty(field)) structure[field] = section[field].selected
			})


			section.priority_pathways.fields.forEach((pathway, pathway_index) => {
				pathway.EASINCode.selected.forEach((species, species_index) => {
				const priorityPathway = JSON.parse(JSON.stringify(this.structure.priorityPathway))
					priorityPathway.reportID = reportID
					priorityPathway.row_id = pathway_index
					priorityPathway.pathway_code = pathway.pathway_code.selected
					priorityPathway.EASINCode = species
					emptyInstance.IAS.priorityPathway.Row.push(priorityPathway)
				})
			})
			emptyInstance.IAS.sectionC.Row.push(structure)
			console.log('c',emptyInstance)
		},

		sectionBSpecies(data, emptyInstance, reportID){
			if(!data.tabs.tab_2.form_fields.length) return
			if(!data.tabs.tab_2.ias_list.selected) return
			data.tabs.tab_2.form_fields.forEach((section, index) => {
				const structure =  JSON.parse(JSON.stringify(this.structure.sectionBSpecies))
				structure.reportID = reportID
				structure.row_id = index
				structure.EASINCode = section.EASINCode.selected
                
                console.log('-------', structure.common_name_national, section.common_name_national.selected)
				structure.common_name_national = section.common_name_national.selected



				structure.scientific_name = section.scientific_name.selected

				structure.present_in_MS = section.present_in_MS.selected

				if(structure.present_in_MS) {
                    structure.reproduction_pattern = section.reproduction_patterns.selected
                    section.spreadPatterns.selected.forEach((pattern, pattern_index) => {
                        const spreadPattern = JSON.parse(JSON.stringify(this.structure.spreadPatterns))
                        spreadPattern.reportID = reportID
                        spreadPattern.EASINCode = section.EASINCode.selected
                        spreadPattern.row_id = pattern_index
                        spreadPattern.section = 'B'
                        spreadPattern.spread_pattern = pattern
                        spreadPattern.parent_row_id = index
                        emptyInstance.IAS.spreadPatterns.Row.push(spreadPattern)
                    })

                }
                structure.additional_information = section.additional_information.selected
                structure.additional_information_measures = section.additional_information_measures.selected
            
        
        
                Object.keys(section.sectionBMeasures).filter(measure => section.sectionBMeasures[measure].selected === true).forEach((measure, measure_index) => {
                    const sectionBMeasures = JSON.parse(JSON.stringify(this.structure.sectionBMeasures))
                    sectionBMeasures.reportID = reportID
                    sectionBMeasures.row_id = measure_index
                    sectionBMeasures.parent_row_id = index
                    sectionBMeasures.measure = measure
                    emptyInstance.IAS.sectionBMeasures.Row.push(sectionBMeasures)
                })
				
				emptyInstance.IAS.sectionBSpecies.Row.push(structure)
				console.log('b', emptyInstance)
			})

		},

		sectionASpecies(data, emptyInstance, reportID){
			data.tabs.tab_1.form_fields.forEach((section, index) => {
				const structure =  JSON.parse(JSON.stringify(this.structure.sectionASpecies))
				
				
				structure.reportID = reportID
				structure.EASINCode = section.EASINCode.selected
				structure.common_name_national = section.common_name_national.selected
				structure.present_in_MS = section.present_in_MS.selected
				structure.additional_information = section.additional_information.selected
				structure.row_id = index
				if(section.present_in_MS.selected !== true) {
					emptyInstance.IAS.sectionASpecies.Row.push(structure)
					return
				}
				
				structure.reproduction_pattern = section.reproduction_patterns.selected
				
				// spread patterns
				section.spreadPatterns.selected.forEach((pattern, pattern_index) => {
					const spreadPattern = JSON.parse(JSON.stringify(this.structure.spreadPatterns))
					spreadPattern.reportID = reportID
					spreadPattern.EASINCode = section.EASINCode.selected
					spreadPattern.row_id = pattern_index
					spreadPattern.section = 'A'
					spreadPattern.spread_pattern = pattern
					spreadPattern.parent_row_id = index
					emptyInstance.IAS.spreadPatterns.Row.push(spreadPattern)
				})

				structure.permits_issued = section.permits_issued.selected

				if(structure.permits_issued) {
						structure.additional_information_permits_issued = section.additional_information_permits.selected
						section.permitsIssuedReported.fields.forEach((permitsTableRow, permitsTableRow_index) => {
							const permitsIssuedReported = JSON.parse(JSON.stringify(this.structure.permitsIssuedReported))
							permitsIssuedReported.reportID = reportID
							permitsIssuedReported.row_id = permitsTableRow_index
							permitsIssuedReported.parent_row_id = index
							permitsIssuedReported.year = permitsTableRow.year.selected
							permitsIssuedReported.permit_purpose = permitsTableRow.permit_purpose.selected
							permitsIssuedReported.number_issued = permitsTableRow.number_issued.selected
							permitsIssuedReported.number_valid = permitsTableRow.number_valid.selected
							
							// issued
							permitsTableRow.permitedSpecimensIssued.fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = JSON.parse(JSON.stringify(this.structure.permitedSpecimens))
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = permitsTableRow_index
									permitedSpecimens.permit_type ='issued'
									permitedSpecimens.value = permitedSpecimen.value.selected
									permitedSpecimens.unit = permitedSpecimen.unit.selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})

							// valid
						permitsTableRow.permitedSpecimensValid.fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = JSON.parse(JSON.stringify(this.structure.permitedSpecimens))
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = permitsTableRow_index
									permitedSpecimens.permit_type ='valid'
									permitedSpecimens.value = permitedSpecimen.value.selected
									permitedSpecimens.unit = permitedSpecimen.unit.selected
									emptyInstance.IAS.permitedSpecimens.Row.push(permitedSpecimens)
							})
							
							emptyInstance.IAS.permitsIssuedReported.Row.push(permitsIssuedReported)

						})
					
					// inspections

						structure.no_inspections_reported = section.inspectionsPermitsReported.no_inspections_reported.selected
						structure.additional_information_inspections = section.additional_information_inspections.selected

						section.inspectionsPermitsReported.fields.forEach((inspectionsTableRow, inspectionsTableRow_index) => {
							const inspectionsPermitsReported = JSON.parse(JSON.stringify(this.structure.inspectionsPermitsReported))
							inspectionsPermitsReported.reportID = reportID
							inspectionsPermitsReported.row_id = `${index}_${inspectionsTableRow_index}`
							inspectionsPermitsReported.parent_row_id = index
							inspectionsPermitsReported.year = inspectionsTableRow.year.selected
							inspectionsPermitsReported.permit_purpose = inspectionsTableRow.permit_purpose.selected
							inspectionsPermitsReported.number_establishment = inspectionsTableRow.number_establishment.selected
							inspectionsPermitsReported.number_inspected = inspectionsTableRow.number_inspected.selected
							// TODO: CHECK width dd
							// compliant
							inspectionsTableRow.inspectionsPermitsComplient.fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = JSON.parse(JSON.stringify(this.structure.inspectionPermits))
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = inspectionsPermitsReported.row_id
									permitedSpecimens.inspection_status ='complient'
									permitedSpecimens.value = permitedSpecimen.value.selected
									permitedSpecimens.unit = permitedSpecimen.unit.selected
									emptyInstance.IAS.inspectionsPermits.Row.push(permitedSpecimens)
							})

							// non-compliant
							inspectionsTableRow.inspectionsPermitsNoncompliant.fields.forEach((permitedSpecimen, permitedSpecimen_index) => {
									const permitedSpecimens = JSON.parse(JSON.stringify(this.structure.inspectionPermits))
									permitedSpecimens.reportID = reportID
									permitedSpecimens.row_id = permitedSpecimen_index
									permitedSpecimens.parent_row_id = inspectionsPermitsReported.row_id
									permitedSpecimens.inspection_status ='noncompliant'
									permitedSpecimens.value = permitedSpecimen.value.selected
									permitedSpecimens.unit = permitedSpecimen.unit.selected
									emptyInstance.IAS.inspectionsPermits.Row.push(permitedSpecimens)
							})

							emptyInstance.IAS.inspectionsPermitsReported.Row.push(inspectionsPermitsReported)

						})
						
				}

				// eradication measures - table 2
				structure.eradication_measures = section.eradication_measures.selected
				if(structure.eradication_measures) {
					section.sectionAMeasures.fields.forEach((measure, measure_index) => {
							const sectionAMeasures = JSON.parse(JSON.stringify(this.structure.sectionAMeasures))
							sectionAMeasures.measure_type = 'eradication'
							sectionAMeasures.reportID = reportID
							sectionAMeasures.row_id = `${index}_${measure_index}_eradication`
							sectionAMeasures.parent_row_id = index
							sectionAMeasures.population_name = measure.population_name.selected
							sectionAMeasures.population_code = measure.population_code.selected
							sectionAMeasures.start_date = measure.start_date.selected
							sectionAMeasures.end_date = measure.end_date.selected
							sectionAMeasures.no_negative_impact = measure.no_negative_impact.selected
							sectionAMeasures.measure_effectiveness = measure.measure_effectiveness.selected
							sectionAMeasures.additional_information = measure.additional_information.selected

							// part of territory
							measure.partTerritory.selected.forEach((territory, territory_index) => {
									const partTerritory = JSON.parse(JSON.stringify(this.structure.partTerritory))
									partTerritory.reportID = reportID
									partTerritory.row_id = territory_index
									partTerritory.parent_row_id = sectionAMeasures.row_id
                                    partTerritory.name = this.$store.state.formData.nuts_regions.find(r => r.id === territory) ?
                                     this.$store.state.formData.nuts_regions.find(r => r.id === territory).label
                                     : measure.partTerritory.options.find(r => r.value === territory).text
									partTerritory.code = territory
									emptyInstance.IAS.partTerritory.Row.push(partTerritory)
							})

						// biogeographical regions
				    measure.biogeographicalRegion.selected.forEach((region, region_index) => {
                  const biogeographicalRegion = JSON.parse(JSON.stringify(this.structure.biogeographicalRegion))
                  biogeographicalRegion.reportID = reportID
                  biogeographicalRegion.row_id = region_index
                  biogeographicalRegion.parent_row_id = sectionAMeasures.row_id
                  biogeographicalRegion.name = measure.biogeographicalRegion.options.find(r => r.value === region).text
                  biogeographicalRegion.code = region
                  biogeographicalRegion.CountryCode = this.currentCountry
                  emptyInstance.IAS.biogeographicalRegion.Row.push(biogeographicalRegion)
              })
						
						// river basins subunit
						measure.riverBasinSubUnit.selected.forEach((river, river_index) => {
                  const riverBasinSubUnit = JSON.parse(JSON.stringify(this.structure.riverBasinSubUnit))
                  riverBasinSubUnit.reportID = reportID
                  riverBasinSubUnit.row_id = river_index
                  riverBasinSubUnit.parent_row_id = sectionAMeasures.row_id
                  riverBasinSubUnit.name = river
                  riverBasinSubUnit.CountryCode = this.currentCountry
                  emptyInstance.IAS.riverBasinSubUnit.Row.push(riverBasinSubUnit)
              })
						// marine sub-regions
						measure.marineSubRegions.selected.forEach((marine, marine_index) => {
                  const marineSubRegions = JSON.parse(JSON.stringify(this.structure.marineSubRegions))
                  marineSubRegions.reportID = reportID
                  marineSubRegions.row_id = marine_index
                  marineSubRegions.parent_row_id = sectionAMeasures.row_id
                  marineSubRegions.name = measure.marineSubRegions.options.find(r => r.value === marine).text
                  marineSubRegions.code = marine
                  marineSubRegions.CountryCode = this.currentCountry
                  emptyInstance.IAS.marineSubRegions.Row.push(marineSubRegions)
              })

						// methods used
						measure.methodsUsed.selected.forEach((method, method_index) => {
                  const methodsUsed = Object.assign({}, this.structure.methodsUsed)
                  methodsUsed.reportID = reportID
                  methodsUsed.row_id = method_index
                  methodsUsed.parent_row_id = sectionAMeasures.row_id
                  methodsUsed.methods_used = method
                  emptyInstance.IAS.methodsUsed.Row.push(methodsUsed)
              })

	
						measure.observedNegativeImpacts.fields.forEach((impact, impact_index) => {
									const observedNegativeImpacts = JSON.parse(JSON.stringify(this.structure.observedNegativeImpacts))
									observedNegativeImpacts.reportID = reportID
									observedNegativeImpacts.row_id = impact_index
									observedNegativeImpacts.parent_row_id = sectionAMeasures.row_id
									observedNegativeImpacts.non_targeted_species = impact.non_targeted_species.selected
									observedNegativeImpacts.species = impact.species.selected
                  emptyInstance.IAS.observedNegativeImpacts.Row.push(observedNegativeImpacts)
						})
						emptyInstance.IAS.sectionAMeasures.Row.push(sectionAMeasures)
					})

				}



				structure.subject_management_measures = section.subject_management_measures.selected
				if(structure.subject_management_measures) {
					section.sectionAMeasuresManagement.fields.forEach((measure, measure_index) => {
							const sectionAMeasures = JSON.parse(JSON.stringify(this.structure.sectionAMeasures))
							sectionAMeasures.measure_type = 'management'
							sectionAMeasures.reportID = reportID
							sectionAMeasures.row_id = `${index}_${measure_index}_management`
							sectionAMeasures.parent_row_id = index
							sectionAMeasures.population_name = measure.population_name.selected
							sectionAMeasures.population_code = measure.population_code.selected
							sectionAMeasures.start_date = measure.start_date.selected
							sectionAMeasures.end_date = measure.end_date.selected
							sectionAMeasures.no_negative_impact = measure.no_negative_impact.selected
							sectionAMeasures.measure_effectiveness = measure.measure_effectiveness.selected
							sectionAMeasures.additional_information = measure.additional_information.selected

							// part of territory
							measure.partTerritory.selected.forEach((territory, territory_index) => {
									const partTerritory = JSON.parse(JSON.stringify(this.structure.partTerritory))
									partTerritory.reportID = reportID
									partTerritory.row_id = territory_index
									partTerritory.parent_row_id = sectionAMeasures.row_id
									partTerritory.name = this.$store.state.formData.nuts_regions.find(r => r.id === territory).label
									partTerritory.code = territory
									emptyInstance.IAS.partTerritory.Row.push(partTerritory)
							})

						// biogeographical regions
				    measure.biogeographicalRegion.selected.forEach((region, region_index) => {
                  const biogeographicalRegion = JSON.parse(JSON.stringify(this.structure.biogeographicalRegion))
                  biogeographicalRegion.reportID = reportID
                  biogeographicalRegion.row_id = region_index
                  biogeographicalRegion.parent_row_id = sectionAMeasures.row_id
                  biogeographicalRegion.name = measure.biogeographicalRegion.options.find(r => r.value === region).text
                  biogeographicalRegion.code = region
                  biogeographicalRegion.CountryCode = this.currentCountry
                  emptyInstance.IAS.biogeographicalRegion.Row.push(biogeographicalRegion)
              })
						
						// river basins subunit
						measure.riverBasinSubUnit.selected.forEach((river, river_index) => {
                  const riverBasinSubUnit = JSON.parse(JSON.stringify(this.structure.riverBasinSubUnit))
                  riverBasinSubUnit.reportID = reportID
                  riverBasinSubUnit.row_id = river_index
                  riverBasinSubUnit.parent_row_id = sectionAMeasures.row_id
                  riverBasinSubUnit.name = river
                  riverBasinSubUnit.CountryCode = this.currentCountry
                  emptyInstance.IAS.riverBasinSubUnit.Row.push(riverBasinSubUnit)
              })
						// marine sub-regions
						measure.marineSubRegions.selected.forEach((marine, marine_index) => {
                  const marineSubRegions = JSON.parse(JSON.stringify(this.structure.marineSubRegions))
                  marineSubRegions.reportID = reportID
                  marineSubRegions.row_id = marine_index
                  marineSubRegions.parent_row_id = sectionAMeasures.row_id
                  marineSubRegions.name = measure.marineSubRegions.options.find(r => r.value === marine).text
                  marineSubRegions.code = marine
                  marineSubRegions.CountryCode = this.currentCountry
                  emptyInstance.IAS.marineSubRegions.Row.push(marineSubRegions)
              })

						// methods used
						measure.methodsUsed.selected.forEach((method, method_index) => {
                  const methodsUsed = Object.assign({}, this.structure.methodsUsed)
                  methodsUsed.reportID = reportID
                  methodsUsed.row_id = method_index
                  methodsUsed.parent_row_id = sectionAMeasures.row_id
                  methodsUsed.methods_used = method
                  emptyInstance.IAS.methodsUsed.Row.push(methodsUsed)
              })

	
						measure.observedNegativeImpacts.fields.forEach((impact, impact_index) => {
									const observedNegativeImpacts = JSON.parse(JSON.stringify(this.structure.observedNegativeImpacts))
									observedNegativeImpacts.reportID = reportID
									observedNegativeImpacts.row_id = impact_index
									observedNegativeImpacts.parent_row_id = sectionAMeasures.row_id
									observedNegativeImpacts.non_targeted_species = impact.non_targeted_species.selected
									observedNegativeImpacts.species = impact.species.selected
                  emptyInstance.IAS.observedNegativeImpacts.Row.push(observedNegativeImpacts)
						})
						emptyInstance.IAS.sectionAMeasures.Row.push(sectionAMeasures)
					})

				}


				section.infoImpactSpecies.fields.forEach((infoImpact, infoImpact_index) => {
							const infoImpactSpecies = JSON.parse(JSON.stringify(this.structure.infoImpactSpecies))
							infoImpactSpecies.reportID = reportID
							infoImpactSpecies.row_id = `${index}_${infoImpact_index}`
							infoImpactSpecies.parent_row_id = index
							infoImpactSpecies.impact = infoImpact.impact.selected

							infoImpact.protectedSpecies.selected.forEach((entry, entry_index) => {
									const protectedSpecies = JSON.parse(JSON.stringify(this.structure.protectedSpecies))
									protectedSpecies.reportID = reportID
									protectedSpecies.row_id = entry_index
									protectedSpecies.parent_row_id = infoImpactSpecies.row_id
									protectedSpecies.code = entry
									protectedSpecies.name = infoImpact.protectedSpecies.options.find(i => i.value === entry).text
									emptyInstance.IAS.protectedSpecies.Row.push(protectedSpecies)
							})

							infoImpact.protectedHabitats.selected.forEach((entry, entry_index) => {
									const protectedSpecies = JSON.parse(JSON.stringify(this.structure.protectedHabitats))
									protectedSpecies.reportID = reportID
									protectedSpecies.row_id = entry_index
									protectedSpecies.parent_row_id = infoImpactSpecies.row_id
									protectedSpecies.code = entry
									protectedSpecies.name = infoImpact.protectedHabitats.options.find(i => i.value === entry).text
									emptyInstance.IAS.protectedHabitats.Row.push(protectedSpecies)
							})
							
							infoImpact.ecosystems.selected.forEach((entry, entry_index) => {
									const protectedSpecies = JSON.parse(JSON.stringify(this.structure.ecosystems))
									protectedSpecies.reportID = reportID
									protectedSpecies.row_id = entry_index
									protectedSpecies.parent_row_id = infoImpactSpecies.row_id
									protectedSpecies.group = ecosystemsList.find(i => i.class === entry).group
									protectedSpecies.class = entry
									emptyInstance.IAS.ecosystems.Row.push(protectedSpecies)
							})

							emptyInstance.IAS.infoImpactSpecies.Row.push(infoImpactSpecies)
							
				})

				emptyInstance.IAS.sectionASpecies.Row.push(structure)
				console.log(emptyInstance.IAS)
			})
			
		},


  },
    watch: {
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

<style lang="scss" scoped>

.alert.alert-success {
  position: fixed;
  top:3rem;
  left: 20%;
  right: 20%;
}

.wrapper {
    text-align: right;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: .5rem;
    .buttons-wrapper {
        display: inline-block;
        padding: .5rem;
        background: white;
        border: 1px solid #eee;
    }
}

.errorSectionTitle {
    color: #dc3545;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
  .wrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.03);
    height: 3rem;
  }
}
</style>
