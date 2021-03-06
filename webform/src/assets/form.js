import species from './species'
import sectionASpecies from './sectionASpecies'
import sectionBSpecies from './sectionBSpecies'
import pathway from './sectionCPathway'

const form = (country, formData) => ({
	tabs: {
		tab_0: {
			description: 'Information submitted in application of Article 24(1) of regulation (EU) No 1143/2014',
			form_fields: {
				CountryCode: {
					name: 'CountryCode',
					type: 'text',
					label: 'Member State',
					selected: country,
					disabled: true,
				},
				StartYear: {
					name: 'rep_period_from',
					type: 'text',
					label: 'Reporting period from (year)',
					selected: '2015-01-01',
					disabled: true,
				},
				EndYear: {
					name: 'rep_period_to',
					type: 'text',
					label: 'Reporting period to (year)',
					selected: '2018-12-31',
					disabled: true,
				}
			},
		},
		tab_1: {
			form_fields: species.map(sp => sectionASpecies(sp, country, formData))
		},
		tab_2: {
			ias_list: {
				type: 'select',
				selected: null,
				label: 'Has the Member State established a national list of invasive alien species of Member State concern? If yes, questions below have to be answered for each of the species on this list',
				options: [
					{text: 'Yes', value: true},
					{text: 'No', value: false},
				],
				get validation() {
					if(this.selected === null) {
						return `Question regarding national list of invasive alien species field is required`
					}
				}
			},
			form_fields: [
		
			]
		},
		tab_3: {
			form_fields: {
				weblink_permits: {
					type: 'textarea',
					name: 'weblink_permits',
					selected: null,
					label: 'Web link to information on the internet regarding the permits issued as required under Article 8(7) of Regulation (EU) No 1143/2014',
					get validation() {
						if(!this.selected) {
							return `${this.label} field is required`
						}
						if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
							return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
						}
					}
				},
				action_plans: {
					type: 'textarea',
					name: 'action_plans',
					selected: null,
					label: 'Action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014',
          skipValidation: false,
					get validation() {
					  if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
              if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
                return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
              }
            }
					}
				},
				priority_pathways: {
					fields: [pathway()]
				},
				file_action_plans: {
					type: 'file',
					selected: null,
					name: 'file_action_plans',
					label: 'File regarding the action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
          skipValidation: false,
          get validation(){
            if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
            }
          }
				},
				surveillance_system: {
					type: 'textarea',
					name: 'surveillance_system',
					selected: null,
					label: 'Description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014',
          skipValidation: false,
					get validation() {
					  if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
              if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
                return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
              }
            }
					}
				},
				file_surveillance_system: {
					type: 'file',
					selected: null,
					name: 'file_surveillance_system',
					label: 'File regarding the description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
          skipValidation: false,
          get validation(){
            if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
            }
          }
				},
				official_control_system: {
					type: 'textarea',
					name: 'official_control_system',
					selected: null,
					label: 'Description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014',
          skipValidation: false,
					get validation() {
					  if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
              if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
                return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
              }
            }
					}
				},
				file_official_control_system: {
					type: 'file',
					selected: '',
					name: 'file_official_control_system',
					label: 'File regarding the description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
          skipValidation: false,
          get validation(){
            if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
            }
          }
				},
				measures_inform_public: {
					type: 'textarea',
					name: 'measures_inform_public',
					label: 'Description of measures taken to inform the public',
          skipValidation: false,
					get validation() {
            if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
              if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
                return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
              }
            }
					}
				},
				file_measures_inform_public: {
					type: 'file',
					selected: '',
					name: 'file_measures_inform_public',
					label: 'File regarding the description of measures taken to inform the public',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
          skipValidation: false,
          get validation(){
            if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
            }
          }
				},
				cost_of_action: {
					type: 'textarea',
					name: 'cost_of_action',
					selected: null,
					label: 'Cost of action undertaken to comply with the Regulation (EU) No 1143/2014',
          skipValidation: false,
					get validation() {
					  if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
              if(this.selected && !(this.selected.includes('www.') || this.selected.includes('http://') || this.selected.includes('https://'))) {
                return `${this.label} are malformed: all web links should be given in full, including the initial ‘http://’ or ‘https://’, if applicable`
              }
            }
					}
				},
				file_cost_of_action: {
					type: 'file',
					selected: '',
					name: 'file_cost_of_action',
					label: 'File regarding the cost of action undertaken to comply with the Regulation (EU) No 1143/2014',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
          skipValidation: false,
          get validation(){
					  if (!this.skipValidation) {
              if(!this.selected) {
                return `${this.label} field is required`
              }
            }
          }
				},
				additional_information: {
					type: 'textarea',
					name: 'additional_information',
					selected: null,
					label: 'Additional information (optional)'
				},
				file_additional_information: {
					type: 'file',
					selected: '',
					name: 'file_additional_information',
					label: 'File regarding the additional information (optional)',
					extensions: ['.doc','.docx','.pdf','.zip','.dot','.docb','.dotx','.docm'],
				},
        get additionalValidation() {
				  // action plans
          if (this.action_plans.selected && !this.action_plans.validation) {
            this.file_action_plans.skipValidation = true
          } else {
            this.file_action_plans.skipValidation = false
          }
          if (this.file_action_plans.selected) {
            this.action_plans.skipValidation = true
          } else {
            this.action_plans.skipValidation = false
          }

				  // surveillance system
          if (this.surveillance_system.selected && !this.surveillance_system.validation) {
            this.file_surveillance_system.skipValidation = true
          } else {
            this.file_surveillance_system.skipValidation = false
          }
          if (this.file_surveillance_system.selected) {
            this.surveillance_system.skipValidation = true
          } else {
            this.surveillance_system.skipValidation = false
          }

          // official control system
          if (this.official_control_system.selected && !this.official_control_system.validation) {
            this.file_official_control_system.skipValidation = true
          } else {
            this.file_official_control_system.skipValidation = false
          }
          if (this.file_official_control_system.selected) {
            this.official_control_system.skipValidation = true
          } else {
            this.official_control_system.skipValidation = false
          }

				  // measures
          if (this.measures_inform_public.selected && !this.measures_inform_public.validation) {
            this.file_measures_inform_public.skipValidation = true
          } else {
            this.file_measures_inform_public.skipValidation = false
          }
          if (this.file_measures_inform_public.selected) {
            this.measures_inform_public.skipValidation = true
          } else {
            this.measures_inform_public.skipValidation = false
          }

				  // cost of action
				  if (this.cost_of_action.selected && !this.cost_of_action.validation) {
            this.file_cost_of_action.skipValidation = true
          } else {
            this.file_cost_of_action.skipValidation = false
          }
          if (this.file_cost_of_action.selected) {
            this.cost_of_action.skipValidation = true
          } else {
            this.cost_of_action.skipValidation = false
          }
        }
			},
		},
		tab_4: {
			form_fields: {
				distributionMap_sectionA: {
					type: 'file',
					selected: '',
					name: 'distributionMap_sectionA',
					label: 'Distribution map for SECTION A',
          info: 'If you wish to upload a shapefile, please create a zip archive that contains the necessary files (.dbf, .prj, .sbn, .shx, .shp, .shx)',
					extensions: ['.geojson','.gml','.zip'],
				},
				inspireMetadata_sectionA: {
					type: 'file',
					selected: '',
					name: 'inspireMetadata_sectionA',
					label: 'INSPIRE metadata for SECTION A',
					extensions: ['.zip', '.xml'],
				},
				distributionMap_sectionB: {
					type: 'file',
					selected: '',
					name: 'distributionMap_sectionB',
					label: 'Distribution map for SECTION B',
          info: 'If you wish to upload a shapefile, please create a zip archive that contains the necessary files (.dbf, .prj, .sbn, .shx, .shp, .shx)',
					extensions: ['.geojson','.gml','.zip'],
				},
				inspireMetadata_sectionB: {
					type: 'file',
					selected: '',
					name: 'inspireMetadata_sectionB',
					label: 'INSPIRE metadata for SECTION B',
					extensions: ['.zip', '.xml'],
				},
			}
		}
	}
})

export default form
