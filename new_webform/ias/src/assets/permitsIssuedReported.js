import permitedSpecimens from './permitedSpecimens.js'

const permits = () => ({
	year: {
		type: 'select',
		label: 'Year',
		selected: null,
		options: [
			{text: 2015, value: 2015},
			{text: 2016, value: 2016},
			{text: 2017, value: 2017},
			{text: 2018, value: 2018}
		]
	},
	permit_purpose: {
		type: 'select',
		label: 'Purpose of permit',
		selected: null,
		options: [
			{text: 'Permits for research', value: 'research'},
			{text: 'Permits for ex situ conservation', value: 'exsitu'},
			{text: 'Permits for scientific production and subsequent medicinal use to advance human health', value: 'medUse'},
			{text: 'Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)', value: 'other'}
		]
	},

	number_issued: {
		type: 'number',
		selected: null,
		name: 'number_valid',
		label: 'Number of permits issued',
		tooltip: 'Number of permits issued in the calendar year'
	},

	number_valid: {
		type: 'number',
		name: 'number_valid',
		selected: null,
		label: 'Number permits valid',
		tooltip: 'Number permits valid in the calendar year'
	},

	permitedSpecimensIssued: {
		label: 'Permitted specimens - permits issued',
		type: 'issued',
		fields: [
			permitedSpecimens
		]
	},
	permitedSpecimensValid: {
		label: 'Permitted specimens - valid permits',
		type: 'valid',
		fields: [
			permitedSpecimens
		]
	}
})

export default permits