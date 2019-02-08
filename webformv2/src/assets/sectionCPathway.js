import pathways from './priority_pathways'
import species from './species'

const pathway = () => ({
	pathway_code: {
		name: 'pathway_code',
		label: 'Priority pathways addressed',
		type: 'select',
		selected: null,
		options: pathways.map(p => ({text: `${p.code} ${p.name}`, value: p.code}))

	},
	EASINCode: {
		name: 'EASINCode',
		type: 'multiselect',
		selected: [],
		label: 'Species covered',
		options: species.map(p => ({text: p.speciesNameLegi, value: p.speciesCode}))
	},
})

export default pathway