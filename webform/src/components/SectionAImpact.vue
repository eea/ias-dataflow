<template>
    <div v-if="species">
        <br>
        <h5 class="text-center">Information on the impact of this species (optional)</h5>
        <p class="ml-3">Observations on the impact of the species during the reporting period</p>

        <div class="table-wrapper">

            <table class="table table-striped">
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
                        <td v-if="cell_index === 'impact'" style="min-width: 250px;" v-for="(cell, cell_index) in row" :key="cell_index">
                            <FieldGenerator :field="cell"></FieldGenerator>
                        </td>
                        <td v-else style="width: 25%;">
                            <FieldGenerator :field="cell"></FieldGenerator>
                        </td>
                        <td style="width: 50px"><b-btn variant="danger" @click="$store.commit('removeInfoImpact', {species_index, row_index})">X</b-btn></td>
                    </tr>
                </tbody>
            </table>
            <b-btn class="btn-big" variant="primary" @click="$store.commit('addInfoImpact', {species_index})">+ add row</b-btn>

        </div>

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
