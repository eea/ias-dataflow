<template>
		<div v-if="data">
				<div v-for="(field, field_index) in data.form_fields" :key="field_index">
					{{field.label}}
					<FieldGenerator :id="field_index" :field="field"></FieldGenerator>
				</div>
		</div>
</template>

<script>
import FieldGenerator from '@/components/FieldGenerator'

export default {
	props: {
		data: null
	},
	components: {
		FieldGenerator
	},
	methods: {
		addFile(){

		},
	}
}
</script>
