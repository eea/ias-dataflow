const permitedSpecimens = () => ({
	value: {
		type: 'number',
		selected: null,
		label: 'Number',
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
	},
})

export default permitedSpecimens