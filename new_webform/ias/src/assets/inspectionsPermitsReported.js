import permitedSpecimens from './permitedSpecimens'

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

	number_establishment: {
		type: 'number',
		selected: null,
		name: 'number_establishment',
		label: 'Number of establishments',
		tooltip: 'Number of establishments subjected to the inspections'
	},

	number_inspected: {
		type: 'number',
		name: 'number_inspected',
		selected: null,
		label: 'Inspected establishments non-compliant',
		tooltip: 'Inspected establishments deemed non-compliant with the conditions set out in the permits'
	},

	inspectionsPermitsComplient: {
		name: 'inspectionsPermitsComplient',
		label: 'Permitted specimens - permits held by the inspected est.	',
		type: 'complient',
		fields: [
			permitedSpecimens()
		]
	},
	inspectionsPermitsNoncompliant: {
		name: 'inspectionsPermitsNoncompliant',
		label: 'Permitted specimens - permits held by the inspected est. non-compliant',
		type: 'noncompliant',
		fields: [
			permitedSpecimens()
		]
	},
	get validation() {
		return {
			name: 'validation'
		}
	}
})

export default permits