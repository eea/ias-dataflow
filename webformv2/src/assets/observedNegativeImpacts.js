const observedNegativeImpacts = () => ({
	non_targeted_species: {
		type: 'text',
		name: 'non_targeted_species',
		selected: null,
		label: 'Impacted non-targeted species',
		validation: null,
		setValidation: function(val) {
			if(val === 'asd') {
				if (this.selected)  {
					this.validation = null
				} else {
					this.validation = `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
				}
			} 
			if(val !== 'asd')
				this.validation = null
		},
	},
	species: {
		type: 'text',
		selected: null,
		label: 'Impact per species',
		name: 'species',
		validation: null,
		setValidation: function(val) {
			if(val === 'asd') {
				if (this.selected)  {
					this.validation = null
				} else {
					this.validation = `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
				}
			} 
			if(val !== 'asd')
				this.validation = null
		},
	},
})

export default observedNegativeImpacts