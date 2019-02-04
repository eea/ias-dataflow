import pathways from './priority_pathways'

const pathway = (species) => ({
	pathway_code: {
		name: 'pathway_code',
		label: 'Priority pathways addressed',
		selected: null,
		options: pathways.map(p => ({text: `${p.code} ${p.name}`, value: p.code}))

	},
	EASINCode: {
		name: 'EASINCode',
		type: 'select',
		selected: null,
		label: 'EASIN identifier',
		options: species.map(p => ({text: p.speciesNameLegi, value: p.species_code}))
	},
})

export default pathway