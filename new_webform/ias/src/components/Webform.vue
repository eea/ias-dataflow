<template>
  <div class="hello">
		<div><b-btn variant="danger">{{country}}</b-btn></div>
		<!-- <Multiselect trackBy="value" text="text"></Multiselect> -->
  </div>
</template>


<script>
import Multiselect from "./ModifiedMultiselect.vue"

export default {
	components: {
		Multiselect
	},

  props: {

  },

	data() {
		return {
		}
	},

	beforeCreate() {
	},

	created(){
		this.$store.dispatch('getCurrentCountry')
	},

	computed: {
		country() {
			return this.$store.getters.getCurrentCountryState
		}
	},
	methods: {

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
