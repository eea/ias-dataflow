import observedNegativeImpacts from '@/assets/observedNegativeImpacts'

const sectionAMeasures = ({ nuts, b_regions, r_b_subunits, marine_subregions }) => ({
	population_name: {
		type: 'text',
		selected: null,
		label: 'Population',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required` 
		}
	},
	population_code: {
		type: 'text',
		selected: null,
		label: 'Population code',
	},
	start_date: {
		type: 'date',
		selected: null,
		label: 'Starting date',
		name: 'start_date',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required` 
		}
	},
	end_date: {
		type: 'date',
		name: 'end_date',
		selected: null,
		label: 'End date',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required` 
		}
	},
	no_negative_impact: {
		type: 'checkbox',
		selected: false,
		label: 'No negative impacts observed',
		name: 'no_negative_impact',
	},
	
	observedNegativeImpacts: {
		label: 'Observed negative impacts of the measure on non-targeted species',
		name: 'observedNegativeImpacts',
		fields: [
			observedNegativeImpacts()
		]
	},


	measure_effectiveness: {
		name: 'measure_effectiveness',
		label: 'Effectiveness of the measure(s)',
		selected: null,
		type: 'select',
		options: [
			{ text: 'Eradicated', value: 'eradicated' },
			{ text: 'Population decreasing', value: 'decreasing' },
			{ text: 'Population stable', value: 'stable' },
			{ text: 'Population still increasing ', value: 'increasing' },
			{ text: 'Unclear population trend', value: 'unclear' }
		],
		get validation() {
			if(!this.selected) 
				return `${this.label} is required` 
		}
	},
	additional_information: {
		type: 'textarea',
		selected: null,
		name: 'additional_information',
		label: 'Additional information (optional)',
	},
	partTerritory: {
		type: 'multiselect',
		selected: [],
		name: 'partTerritory',
		label: 'Part of the territory',
		options: nuts.map(n => ({ value: n.id, text: n.label })),
	},
	biogeographicalRegion: {
		type: 'multiselect',
		selected: [],
		name: 'biogeographicalRegion',
		label: 'Biogeographical regions(s)',
		options: b_regions.map(n => ({ value: n.regionCode, text: n.name })),
	},
	marineSubRegions: {
		type: 'multiselect',
		selected: [],
		name: 'marineSubRegions',
		label: 'Marine sub-region(s)',
		options: marine_subregions.map(region => ({value: region.id, text: region.label}))
	},
	riverBasinSubUnit: {
		type: 'multiselect',
		selected: [],
		name: 'riverBasinSubUnit',
		label: 'River basin sub-unit(s)',
		options: r_b_subunits.map(r => ({value: r.name, text: r.name}))
	},
	methodsUsed: {
		type: 'multiselect',
		selected: [],
		name: 'methodsUsed',
		label: 'Method(s) used',
		options: [
			{ text: 'Mechanical/Physical', value: 'Mechanical/Physical' },
			{ text: 'Chemical', value: 'Chemical' },
			{ text: 'Biological', value: 'Biological' },
			{ text: 'Other', value: 'Other' },
		]
	},

	get validation(){
		if(this.riverBasinSubUnit.selected.length === 0 && this.marineSubRegions.selected.length === 0 && this.biogeographicalRegion.selected.length === 0) {
			return 'At least one of the fields: Biogeographical regions(s), Marine sub-region(s), River basin sub-unit(s) are required'
		}
		if(this.no_negative_impact.selected) {
			this.observedNegativeImpacts.fields.forEach(field => {
				field.non_targeted_species.validation = ''
				field.species.validation = ''
			})
		}
	}

})

export default sectionAMeasures