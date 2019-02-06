

import protectedSpeciesList from '@/assets/protected_species'
import protectedHabitatsList from '@/assets/protected_habitats'
import ecosystemsList from '@/assets/ecosystems'

const impact = () => ({
    impact: {
        type: 'text',
        selected: null,
        label: 'Impact',
        name: 'impact'
    },
    protectedSpecies: {
        type: 'multiselect',
        selected: null,
        label: 'Protected species',
        name: 'protectedSpecies',
        options: protectedSpeciesList.map(sp => ({text: sp.label, value: sp.id}))
    },
    protectedHabitats: {
        type: 'multiselect',
        selected: null,
        label: 'Protected habitats',
        name: 'protectedHabitats',
        options: protectedHabitatsList.map(sp => ({text: sp.label, value: sp.id}))
    },
    ecosystems: {
        type: 'multiselect',
        selected: null,
        label: 'Ecosystem services',
        name: 'ecosystems',
        options: ecosystemsList.map(sp => ({text: `${sp.group} - ${sp.class}`, value: sp.class, group: sp.group}))
    },
})

export default impact