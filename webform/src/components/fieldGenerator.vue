<template>
	<div v-if="field">
		<div  v-if="field.type === 'text' || field.type === 'number' || field.type === 'date' || field.type ==='email'" >
			<b-form-input :disabled="disabled" :name="field.name" v-model="field.selected" :type="field.type"></b-form-input>
		</div>
		<b-form-radio-group :disabled="disabled" v-else-if="field.type === 'radio'" v-model="field.selected" :options="field.options"></b-form-radio-group>
		<b-form-checkbox-group :disabled="disabled" v-else-if="field.type === 'checkbox'" v-model="field.selected" :options="field.options"></b-form-checkbox-group>
		<b-form-select :disabled="disabled" v-else-if="field.type === 'select'" v-model="field.selected" :options="field.options"></b-form-select>
		<textarea v-else-if="field.type === 'textarea'" v-model="field.selected"></textarea>
    <div v-else-if="field.type ==='file'">
        <b-input-group class="mb-2" prepend="Shapefile,Geojson or GML file">
          <b-form-file  v-model="field.selected"></b-form-file>
        </b-input-group>
        <b-input-group prepend="comments">
          <b-form-input v-model="field.comments"></b-form-input>
        </b-input-group>
    </div>
    <multiselect  :close-on-select="false" :clear-on-select="false" :hide-selected="true" :preserve-search="true" multiple="true" track-by="text" label="text" v-else-if="field.type ==='multiselect'" v-model="field.selected" :options="field.options"></multiselect>
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