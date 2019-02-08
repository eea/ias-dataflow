const permitedSpecimens = () => ({
	value: {
		type: 'number',
		selected: null,
		label: 'Number',
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
	unit: {
		type: 'select',
		selected: null,
		label: 'Unit',
		options: [
			{text: 'KG of seeds', value: 'kgSeeds'},
			{text: 'kg of specimen', value: 'kgSpecimens'},
			{text: 'Number of specimens', value: 'number'}
		],
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
})

export default permitedSpecimens