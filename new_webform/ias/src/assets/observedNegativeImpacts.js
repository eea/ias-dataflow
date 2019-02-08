const observedNegativeImpacts = () => ({
	non_targeted_species: {
		type: 'text',
		name: 'non_targeted_species',
		selected: null,
		label: 'Impacted non-targeted species',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
	species: {
		type: 'text',
		selected: null,
		label: 'Impact per species',
		name: 'species',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
})

export default observedNegativeImpacts