import permitedSpecimens from './permitedSpecimens.js'

const permits = () => ({
	year: {
		type: 'select',
		selected: null
	},
	permit_purpose: {
		type: 'select',
		selected: null
	},
	permitedSpecimens: [
		permitedSpecimens
	]
})

export default permits