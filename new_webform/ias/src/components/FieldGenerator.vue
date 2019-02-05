<template>
  <div v-if="field">
    <input v-if="['text', 'number', 'date', 'email'].includes(field.type)" :disabled="field.disabled" class="form-control" v-model="field.selected" :type="field.type">
		<b-form-file v-else-if="field.type === 'file'" v-model="field.selected"></b-form-file>
    <b-form-radio-group :id="field.name" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
    <b-form-checkbox v-else-if="field.type === 'checkbox'" v-model="field.selected"></b-form-checkbox>
		<div v-else-if="['select', 'multiselect'].includes(field.type)">
			<multiselect
				:multiple="field.type === 'select' ? false : true"
				label="text"
				trackBy="value"
				v-model="field.selected"
				:options="field.options" />
		</div>
    <textarea class="form-control" v-else-if="field.type === 'textarea'"  v-model="field.select"></textarea>
	</div>
</template>

<script>
import Multiselect from '@/components/ModifiedMultiselect'
export default {
	props: {
		field: Object
	},
	components: {
		Multiselect
	},
}
</script>
