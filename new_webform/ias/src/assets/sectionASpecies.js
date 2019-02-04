import permitsIssuedReported from './permitsIssuedReported'
import sectionAMeasures from './sectionAMeasures'

const species = (currentSpecies, country) => ({
	EASINCode: {
		name: 'EASINCode',
		type: 'nonInput',
		selected: currentSpecies.speciesCode,
		label: 'EASIN identifier',
	},
	scientific_name: {
		name: 'scientific_name',
		type: 'nonInput',
		selected: currentSpecies.speciesNameLegi,
		label: 'Scientific name'
	},

	common_name: {
		name: 'common_name',
		type: 'nonInput',
		selected: currentSpecies.speciesCNameEN,
		label: 'Common name of the species (english) : Egyptian goose'
	},

	common_name_naltional: {
		name: 'common_name_naltional',
		type: 'text',
		selected: currentSpecies[`${country}_CommonName`] || null,
		label: 'Scientific name'
	},

	present_in_MS: {
		name: 'present_in_MS',
		type: 'select',
		selected: null,
		label: 'Is the species present in the territory of the Member State ?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false},
			{text: 'Currently unknown', value: 'unknown'}
		]
	},

// depending on present_in_MS value
	permitsIssuedReported: [
		permitsIssuedReported()
	],

	// additional_information_

	permits_issued: {
		name: 'permits_issued',
		type: 'select',
		selected: null,
		label: 'Have permits been issued for this species during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false},
			{text: 'Currently unknown', value: 'unknown'}
		]
	},
	eradication_measures: {
		name: 'permits_issued',
		type: 'select',
		selected: null,
		label: 'Has the species been subject to rapid eradication measures during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false},
			{text: 'Currently unknown', value: 'unknown'}
		]
	},

	sectioAMeasures: {
		fields: [
			sectionAMeasures(nuts)
		]
	},

	subject_management_measures: {
		name: 'permits_issued',
		type: 'select',
		selected: null,
		label: 'Has the species been subject to management measures during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false},
			{text: 'Currently unknown', value: 'unknown'}
		]
	}
})

export default species