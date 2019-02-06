<template>
    <div v-if="species">
        <h6 class="text-center">Information on the impact of this species (optional)</h6>
        <p>Observations on the impact of the species during the reporting period</p>
        <table>
            <thead>
                <tr>
                    <th v-for="(header, header_index) in species.infoImpactSpecies.fields[0]" :key="header_index">
                        {{header.label}}
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, row_index) in species.infoImpactSpecies.fields" :key="row_index">
                    <td v-for="(cell, cell_index) in row" :key="cell_index">
                        <FieldGenerator :field="cell"></FieldGenerator>
                    </td>
                    <td><b-btn variant="danger" @click="$store.commit('removeInfoImpact', {species_index, row_index})">Remove</b-btn></td>
                </tr>
            </tbody>
            <tfoot>
                <b-btn variant="primary" @click="$store.commit('addInfoImpact', {species_index})">+ add row</b-btn>
            </tfoot>
        </table>
    </div>
</template>
<script>
import FieldGenerator from '@/components/FieldGenerator'
export default {
    props: {
	    species: null,
        species_index: null,
    },
	components: {
		FieldGenerator,
	},
}
</script>
