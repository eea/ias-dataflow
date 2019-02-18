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
		],
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
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
		],
		get validation() {
			if(!this.selected) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},

	number_establishment: {
		type: 'number',
		selected: null,
		name: 'number_establishment',
		label: 'Number of establishments',
		tooltip: 'Number of establishments subjected to the inspections',
		get validation() {
			if(!this.selected || this.selected < 0) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},

	number_inspected: {
		type: 'number',
		name: 'number_inspected',
		selected: null,
		label: 'Inspected establishments non-compliant',
		tooltip: 'Inspected establishments deemed non-compliant with the conditions set out in the permits',
		get validation() {
			if(!this.selected || this.selected < 0) 
				return `${this.label} is required ${this.type === 'number' ? ', can only contain numeric characters and must be 0 or more' : ''}`
		}
	},

	get validation() {
		const messages = []
		this.inspectionsPermitsComplient.fields.forEach((field, index) => {
			if((field.value.selected && this.inspectionsPermitsNoncompliant.fields[index].value.selected) && parseFloat(field.value.selected) < parseFloat(this.inspectionsPermitsNoncompliant.fields[index].value.selected)){
				const message =  {index: index, error: `${this.inspectionsPermitsNoncompliant.label} cannot be greater than ${this.inspectionsPermitsComplient.label}`}
				messages.push(message)
			} 
		})
		return messages
	},

	inspectionsPermitsComplient: {
		name: 'inspectionsPermitsComplient',
		label: 'Permitted specimens - permits held by the inspected est.',
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
})

export default permits