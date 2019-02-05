import permitsIssuedReported from './permitsIssuedReported'
import sectionAMeasures from './sectionAMeasures'

const species = (currentSpecies, country, formData) => ({
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

	common_name_national: {
		name: 'common_name_national',
		type: 'text',
		selected: currentSpecies[`${country}_CommonName`] || null,
		label: 'Common name of the species (national language)'
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
		name: 'eradication_measures',
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
			sectionAMeasures({
				nuts: formData.nuts_regions, 
				b_regions: formData.biogeographical_regions,
				r_b_subunits: formData.river_basins,
				marine_subregions: formData.marine_subregions
				})
		]
	},

	subject_management_measures: {
		name: 'subject_management_measures',
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