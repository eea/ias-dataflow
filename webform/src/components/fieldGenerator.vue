<template>
	<div v-if="field">
		<div  v-if="field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type ==='email'" >
			<b-form-input :disabled="disabled" :name="field.name" v-model="field.selected" :type="field.type"></b-form-input>
		</div>
		<b-form-radio-group :disabled="disabled" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
		<b-form-checkbox-group :disabled="disabled" v-else-if="field.type === 'checkbox'" v-model="field.selected" :options="field.options"></b-form-checkbox-group>
		<b-form-select :disabled="disabled" v-else-if="field.type === 'select'" v-model="field.selected" :options="field.options"></b-form-select>
		<textarea v-else-if="field.type === 'textarea'" v-model="field.selected"></textarea>
	</div>
</template>

<script>
export default {

  name: 'fieldGenerator',
  props: {field: Object, disabled: false},

  created(){

  },

  methods: {

  },

  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>