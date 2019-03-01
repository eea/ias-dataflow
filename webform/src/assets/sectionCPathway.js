import pathways from './priority_pathways'
import species from './species'

const pathway = () => ({
	pathway_code: {
		name: 'pathway_code',
		label: 'Priority pathways addressed',
		type: 'select',
		selected: null,
		options: pathways.map(p => ({text: `${p.text}`, value: p.value})),
		get validation() {
			if(!this.selected) 
			 return `${this.label} is required`
		}
	},
	EASINCode: {
		name: 'EASINCode',
		type: 'multiselect',
		selected: [],
		label: 'Species covered',
		options: species.map(p => ({text: p.speciesNameLegi, value: p.speciesCode})),
		get validation() {
			if(!this.selected.length) 
			 return `${this.label} is required`
		}
	},
})

export default pathway