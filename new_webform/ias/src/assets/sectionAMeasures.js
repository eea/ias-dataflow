const sectionAMeasures = (nuts) => ({
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
		options: nuts.map(n => ({value: n.id, text: n.label})),
		get validation() {
			return []
		},
	}
})