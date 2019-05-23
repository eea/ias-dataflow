const permitedSpecimens = () => ({
	value: {
		type: 'number',
		selected: null,
    disabled: false,
		label: 'Number',
		get validation() {
      if(this.disabled === true) return
			if(!this.selected || this.selected < 0) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
	unit: {
		type: 'select',
		selected: null,
		label: 'Unit',
    disabled: false,
		options: [
			{text: 'kg of seeds', value: 'kgSeeds'},
			{text: 'kg of specimen', value: 'kgSpecimens'},
			{text: 'specimens', value: 'number'},
      {text: 'square decimeter', value: 'dm2'}
		],
		get validation() {
      if(this.disabled === true) return
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},
})

export default permitedSpecimens
