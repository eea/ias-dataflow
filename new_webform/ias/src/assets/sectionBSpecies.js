import permitsIssuedReported from './permitsIssuedReported'

const species = (currentSpecies, country) => ({
	EASINCode: {
		name: 'EASINCode',
		type: 'nonInput',
		selected: currentSpecies.speciesCode || null,
		label: 'EASIN identifier',
	},
	scientific_name: {
		name: 'scientific_name',
		type: 'nonInput',
		selected: currentSpecies.speciesNameLegi || null,
		label: 'Scientific name'
	},

	common_name: {
		name: 'common_name',
		type: 'nonInput',
		selected: currentSpecies.speciesCNameEN || null,
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

	reproduction_pattern: {},

	spreadPatterns: {},

	sectionBMeasures: {
		restTransport: {
			type: checkbox,
			selected: false,
			name: 'restTransport',
		}

	}

})

export default species