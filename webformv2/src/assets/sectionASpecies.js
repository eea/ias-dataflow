import permitsIssuedReported from './permitsIssuedReported'
import sectionAMeasures from './sectionAMeasures'
import inspectionsPermitsReported from './inspectionsPermitsReported'
import infoImpactSpecies from './infoImpactSpecies'

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
		selected: currentSpecies[`${country}_CommonName`],
		label: 'Common name of the species (national language)',
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
		],
		get validation() {
			if(this.selected === null) {
				return `${this.label} is required`
			}
		}
	},
	spreadPatterns: {
        label: 'Spread patterns',
        type: 'multiselect',
        patternType: 'spread',
        name: 'spreadPatterns',
		selected: [],
		get validation() {
			if(
				!((
				this.selected.includes(3) || 
				this.selected.includes(1) ||
				this.selected.includes(2) || 
				this.selected.includes(4)
				) && (
					this.selected.includes(5) || 
					this.selected.includes(6) ||
					this.selected.includes(7) ||
					this.selected.includes(8) 
				))
			)
			return 'At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.'
		},
        options:[
            {
                text: 'a) The species was already widely spread before 2015',
                index: 'a',
                value: 0,
            },

            {
                text: 'b) The species predominantly entered through natural dispersal from a neighbouring country',
                index: 'b',
                value: 1,
            },

            {
                text:'c) The species predominantly entered with unintentional human assistance',
                index: 'c',
                value : 2,
            },

            {
                text: 'd) The species predominantly entered with intentional human assistance',
                index: 'd',
                value: 3,
            },

            {
                text: 'e) There is no evidence of new entries into the Member State',
                index: 'e',
                value: 4,
            },

            {
                text: 'f) The species predominantly spread through natural dispersal',
                index: 'f',
                value: 5,
            },

            {
                text: 'g) The species predominantly spread with unintentional human assistance',
                index: 'g',
                value: 6,
            },

            {
                text: 'h) The species predominantly spread with intentional human assistance',
                index: 'h',
                value: 7,
            },

            {
                text: 'i) There is no evidence of spread within the Member State',
                index: 'i',
                value: 8,
            },

            {
                text: 'j) The species spread from the Member State into other Member State(s)',
                index: 'j',
                value: 9
            }
        ]
    },

    reproduction_patterns: {
        label: 'Reproduction patterns',
        type: 'select',
        patternType: 'reproduction',
        name: 'reproduction_patterns',
        selected: null,
        options: [
            {text: 'Asexual', value: 'asexual',},
            {text: 'Not reproducing in the Member State', value: 'notReproducing',},
            {text: 'Sexual', value: 'sexual',},
            {text: 'Both (sexual and asexual)', value: 'sexualAndAsexual',},
            {text: 'Unclear (sexual or asexual)', value: 'unclear',},
            {text: 'Unknown whether the species reproduces in the Member State', value: 'unknown',}
        ]
    },
// depending on present_in_MS value
	permitsIssuedReported: {
		fields: [
			permitsIssuedReported()
		]
	},

	inspectionsPermitsReported: {
		no_inspections_reported: {
			type: 'checkbox',
			selected: false,
			label: 'No inspections carried out over the reporting period'
		},
		fields: [
			inspectionsPermitsReported()
		]
	},
	additional_information: {
		type: 'textarea',
		selected: '',
		label: 'Additional information (optional)'
	},

	additional_information_permits: {
		type: 'textarea',
		selected: '',
		label: 'Additional information (optional)'
	},

	additional_information_inspections: {
		type: 'textarea',
		selected: '',
		label: 'Additional information (optional)'
	},


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

	sectionAMeasures: {
		fields: [
			sectionAMeasures({
				nuts: formData.nuts_regions, 
				b_regions: formData.biogeographical_regions,
				r_b_subunits: formData.river_basins,
				marine_subregions: formData.marine_subregions
				})
		]
	},

	sectionAMeasuresManagement: {
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
	},
	infoImpactSpecies : {
		fields: [
			infoImpactSpecies()
		]
	}
})

export default species