<template>
	<div v-if="species">
			{{species.additional_information_permits.label}}
			<fieldGenerator :field="species.additional_information_permits"></fieldGenerator>
			
			{{species.additional_information_inspections.label}}
			<fieldGenerator :field="species.additional_information_inspections"></fieldGenerator>
	</div>
</template>
<script>
import FieldGenerator from '@/components/FieldGenerator'
import Multiselect from '@/components/ModifiedMultiselect'
export default {
	props: {
		species: null,
		species_index: null,
	},
	components: {
		FieldGenerator,
		Multiselect
	},
	methods: {

	},
}
</script>
