import permitsIssuedReported from './permitsIssuedReported'
import sectionAMeasures from './sectionAMeasures'
import sectionAMeasuresManagement from './sectionAMeasuresManagement'
import inspectionsPermitsReported from './inspectionsPermitsReported'
import infoImpactSpecies from './infoImpactSpecies'
import spreadPatterns from './spreadPatterns'

const species = (currentSpecies, country, formData) => ({
	expanded: false,
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
		label: 'Common name of the species (english)'
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
				this.selected.includes('enteredNeighbourCountry') || 
				this.selected.includes('enteredUnintentional') ||
				this.selected.includes('enteredIntentional') || 
				this.selected.includes('enteredNot')
				) && (
					this.selected.includes('spreadNatural') || 
					this.selected.includes('spreadUnintentional') ||
					this.selected.includes('spreadIntentional') ||
					this.selected.includes('spreadNotMs') 
				))
			)
			return 'At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.'
		},
        options: spreadPatterns
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
    info: 'Information on the permits issued for this species (to be completed only for invasive alien species of Union concern)',
		label: 'Have permits been issued for this species during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false}
		],
		get validation() {
			if(this.selected === null) {
				return `${this.label} is required`
			}
		}
	},
	eradication_measures: {
		name: 'eradication_measures',
		type: 'select',
		selected: null,
    info: 'Information on rapid eradication measure(s) taken for this species (Article 17 of Regulation (EU) No 1143/2014)',
		label: 'Has the species been subject to rapid eradication measures during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false}
		],
		get validation() {
			if(this.selected === null) {
				return `${this.label} is required`
			}
		}
	},

	sectionAMeasures: {
		fields: [
			sectionAMeasures({
				nuts: formData.nuts_regions, 
				b_regions: formData.biogeographical_regions,
				r_b_subunits: formData.river_basins,
				marine_subregions: formData.marine_subregions,
				population: 'Population #1'
			})
		]
	},

	sectionAMeasuresManagement: {
		fields: [
			sectionAMeasuresManagement({
				nuts: formData.nuts_regions, 
				b_regions: formData.biogeographical_regions,
				r_b_subunits: formData.river_basins,
				marine_subregions: formData.marine_subregions,
				population: 'Population #1'
			})
		]
	},

	subject_management_measures: {
		name: 'subject_management_measures',
		type: 'select',
		selected: null,
    info: 'Information on management measure(s) taken for this species (Article 19 of Regulation (EU) No 1143/2014)',
		label: 'Has the species been subject to management measures during the reporting period?',
		options: [
			{text: 'Yes', value: true},
			{text: 'No', value: false}
		],
		get validation() {
			if(this.selected === null) {
				return `${this.label} is required`
			}
		}
	},
	infoImpactSpecies : {
		fields: [
			infoImpactSpecies()
		]
	},

	validation: null,
})

export default species
