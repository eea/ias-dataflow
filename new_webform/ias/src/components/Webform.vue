<template>
  <b-container v-if="$store.state.form" fluid class="main-layout">
    <center><h1 class="mb-3 mt-2">IAS dataflow</h1></center>
    <center><h5><span class="text-muted">Technical formats to be used by the Member States for transmitting to the Commission the information pursuant to paragraph 1 of Article 24 of Regulation (EU) No 1143/2014 on the prevention and management of the introduction of invasive alien species</span></h5></center>
		<FormSubmit :form="$store.state.form" :country="$store.state.country"></FormSubmit>
		<b-card>
			<b-tabs>
				<b-tab title="REPORTING PARTY">
					<reportingParty :data="$store.state.form.tabs.tab_0"></reportingParty>
				</b-tab>
				<b-tab title="SECTION A">
					<SectionA :data="$store.state.form.tabs.tab_1"></SectionA>
				</b-tab>
				<b-tab title="SECTION B">
					<SectionB :data="$store.state.form.tabs.tab_2"></SectionB>
				</b-tab>
				<b-tab title="SECTION C">
					<SectionC :data="$store.state.form.tabs.tab_3"></SectionC>
				</b-tab>
				<b-tab title="DISTRIBUTION MAPS">
					<DistributionMaps :data="$store.state.form.tabs.tab_4"></DistributionMaps>
				</b-tab>
			</b-tabs>
		</b-card>

		<!-- <Multiselect trackBy="value" text="text"></Multiselect> -->
  </b-container>
</template>

<script>

import Multiselect from "@/components/ModifiedMultiselect"
import reportingParty from '@/components/ReportingParty'
import SectionA from '@/components/SectionA'
import SectionB from '@/components/SectionB'
import SectionC from '@/components/SectionC'
import DistributionMaps from '@/components/DistributionMaps'
import FormSubmit from '@/components/FormSubmit'

export default {
	components: {
		Multiselect,
		reportingParty,
		SectionA,
		SectionB,
		SectionC,
		DistributionMaps,
		FormSubmit
	},

  props: {

  },

	data() {
		return {
		}
	},

	beforeCreate() {
		this.$store.dispatch('getCurrentCountry')
	},

	created(){
		// this.form = this.$store.state.form
	},

	computed: {
		country() {
			return this.$store.getters.getCurrentCountryState
		},
	},
	methods: {

	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.spinner {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
   border-top: 16px solid blue;
   border-right: 16px solid green;
   border-bottom: 16px solid red;
   border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>
