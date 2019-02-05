import species from './species'
import sectionASpecies from './sectionASpecies'
import sectionBSpecies from './sectionBSpecies'
import pathway from './sectionBPathway'

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
			get form_fields() {
				const allSp = []
				species.forEach(sp => {
					allSp.push(sectionASpecies(sp, country, formData))
				})
				return allSp
			}
		},
		tab_2: {
			form_fields: [
				sectionBSpecies
			]
		},
		tab_3: {
			form_fields: {
				weblink_permits: {
					type: 'textarea',
					name: 'weblink_permits',
					label: 'Web link to information on the internet regarding the permits issued as required under Article 8(7) of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				action_plans: {
					type: 'textarea',
					name: 'action_plans',
					label: 'Action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				file_action_plans: {
					type: 'file',
					selected: '',
					name: 'file_action_plans',
					label: 'File regarding the action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				surveillance_system: {
					type: 'textarea',
					name: 'surveillance_system',
					selected: '',
					label: 'Description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				file_surveillance_system: {
					type: 'file',
					selected: '',
					name: 'file_surveillance_system',
					label: 'File regarding the description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				official_control_system: {
					type: 'textarea',
					name: 'official_control_system',
					label: 'Description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				file_official_control_system: {
					type: 'file',
					selected: '',
					name: 'file_official_control_system',
					label: 'File regarding the description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				measures_inform_public: {
					type: 'textarea',
					name: 'measures_inform_public',
					label: 'Description of measures taken to inform the public',
					get validation() {
						return []
					}
				},
				file_measures_inform_public: {
					type: 'file',
					selected: '',
					name: 'file_measures_inform_public',
					label: 'File regarding the description of measures taken to inform the public',
					get validation() {
						return []
					}
				},
				cost_of_action: {
					type: 'input',
					name: 'cost_of_action',
					label: 'Cost of action undertaken to comply with the Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				priority_pathways: [
					pathway
				],
				file_cost_of_action: {
					type: 'file',
					selected: '',
					name: 'file_cost_of_action',
					label: 'File regarding the cost of action undertaken to comply with the Regulation (EU) No 1143/2014',
					get validation() {
						return []
					}
				},
				additional_information: {
					type: 'textarea',
					name: 'additional_information',
					label: 'Additional information (optional)',
					get validation() {
						return []
					}
				},
				file_additional_information: {
					type: 'file',
					selected: '',
					name: 'file_additional_information',
					label: 'File regarding the additional information (optional)',
					get validation() {
						return []
					}
				},
			}

		},
		tab_4: {
			form_fields: {
				distributionMap_sectionA: {
					type: 'file',
					selected: '',
					name: 'distributionMap_sectionA',
					label: 'Distribution map for SECTION A',
					get validation() {
						return []
					}
				},
				inspireMetadata_sectionA: {
					type: 'file',
					selected: '',
					name: 'inspireMetadata_sectionA',
					label: 'Inspire metadata for SECTION A',
					get validation() {
						return []
					}
				},
				distributionMap_sectionB: {
					type: 'file',
					selected: '',
					name: 'distributionMap_sectionB',
					label: 'Distribution map for SECTION B',
					get validation() {
						return []
					}
				},
				inspireMetadata_sectionB: {
					type: 'file',
					selected: '',
					name: 'inspireMetadata_sectionB',
					label: 'Inspire metadata for SECTION B',
					get validation() {
						return []
					}
				},
			}
		}
	}
})

export default form