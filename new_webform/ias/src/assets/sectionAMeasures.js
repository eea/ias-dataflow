
const sectionAMeasures = ({ nuts, marine_subregions, r_b_subunits, b_regions }) => ({
	population_name: {
		type: 'text',
		selected: null,
		label: 'Population',
		get validation() {
			return []
		}
	},
	population_code: {
		type: 'text',
		selected: null,
		label: 'Population code',
		get validation() {
			return []
		}
	},
	start_date: {
		type: 'date',
		selected: null,
		label: 'Starting date',
		name: 'start_date',
		get validation() {
			return []
		}
	},
	end_date: {
		type: 'date',
		name: 'end_date',
		selected: null,
		label: 'End date',
		get validation() {
			return []
		}
	},
	no_negative_impact: {
		type: 'checkbox',
		selected: false,
		label: 'No negative impacts observed',
		name: 'no_negative_impact',
		get validation() {
			return []
		}
	},
	measure_effectiveness: {
		name: 'measure_effectiveness',
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
			return []
		}
	},
	additional_information: {
		type: 'textarea',
		selected: null,
		name: 'additional_information',
		label: 'Additional information',
		get validation() {
			return []
		}
	},
	partTerritory: {
		type: 'multiselect',
		selected: [],
		name: 'partTerritory',
		label: 'Part of the territory',
		options: nuts.map(n => ({ value: n.id, text: n.label })),
		get validation() {
			return []
		},
	},
	biogeographicalRegion: {
		type: 'multiselect',
		selected: [],
		name: 'partTerritory',
		label: 'Part of the territory',
		options: b_regions.map(n => ({ value: n.regionCode, text: n.name })),
		get validation() {
			return []
		},
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

})

export default sectionAMeasures