import Vue from 'vue'
import Vuex from 'vuex'
import { getCountry, getFormData } from './api'
import getForm from '@/assets/form'
import permitedSpecimens from '@/assets/permitedSpecimens'
import permitsIssuedReported from '@/assets/permitsIssuedReported'
import inspectionsPermitsReported from '@/assets/inspectionsPermitsReported'
import sectionAMeasures from '@/assets/sectionAMeasures'
import observedNegativeImpacts from '@/assets/observedNegativeImpacts'
import infoImpactSpecies from '@/assets/infoImpactSpecies'
import sectionBSpecies from '@/assets/sectionBSpecies'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		country: null,
		form: null,
		formData: {}
	},

	getters: {
		getCurrentCountryState: state => {
			return state.country
		}
	},

	actions: {
		getCurrentCountry(context) {
			getCountry().then(r => {
				context.commit('addCurrentCountry', r.data)
				context.dispatch('getCurrentFormData', { country: r.data }).then((formData) => {
					context.commit('initiateForm', formData)
				})
			})
		},

		getCurrentFormData(context, { country }) {
			return new Promise((resolve, reject) => {
				const fieldsArray = ['biogeographical_regions', 'marine_subregions', 'nuts_regions', 'river_basins', 'speciesB']

				const promiseList = fieldsArray.map((field, index) => { return getFormData(`${field}/${country}_${field}.json`) })

				return Promise.all(promiseList).then(function (values) {
					fieldsArray.forEach((field, index) => {
						context.state.formData[field] = values[index].data
					})
					resolve(context.state.formData)
				});
			});
		}
	},

	mutations: {
		addCurrentCountry(state, data) {
			state.country = data
		},
		initiateForm(state, data) {
			state.form = getForm(state.country, data)
		},
		addFormData(state, { field, data }) {
			state.formData[field] = data
		},
		AddPermittedSpecimen(state, { section_type, species_index, row_index, type }) {
			state.form.tabs.tab_1.form_fields[species_index][section_type][row_index][type].fields.push(permitedSpecimens())
		},
		RemovePermittedSpecimen(state, { section_type, species_index, row_index, type, field_index }) {
			state.form.tabs.tab_1.form_fields[species_index][section_type][row_index][type].fields.splice(field_index, 1)
		},
		AddPermitsRow(state, { section_type, species_index }) {
			console.log(section_type)
			const row = section_type === 'permitsIssuedReported' ? permitsIssuedReported() : inspectionsPermitsReported()
			state.form.tabs.tab_1.form_fields[species_index][section_type].push(row)
		},
		RemovePermitsRow(state, { section_type, species_index, row_index }) {
			state.form.tabs.tab_1.form_fields[species_index][section_type].splice(row_index, 1)
		},
		AddPopulation(state, { species_index, type }) {
			state.form.tabs.tab_1.form_fields[species_index][type].fields.push(sectionAMeasures({
				nuts: state.formData.nuts_regions,
				b_regions: state.formData.biogeographical_regions,
				r_b_subunits: state.formData.river_basins,
				marine_subregions: state.formData.marine_subregions
			}))
		},
		addImpact(state, { species_index, measure_index, type }) {
			state.form.tabs.tab_1.form_fields[species_index][type].fields[measure_index].observedNegativeImpacts.fields.push(observedNegativeImpacts())
		},
		removeImpact(state, { species_index, measure_index, impact_index, type }) {
			state.form.tabs.tab_1.form_fields[species_index][type].fields[measure_index].observedNegativeImpacts.fields.splice(impact_index, 1)
		},
		addInfoImpact(state, {species_index}){
			state.form.tabs.tab_1.form_fields[species_index].infoImpactSpecies.fields.push(infoImpactSpecies())
		},
		removeInfoImpact(state, {species_index, row_index}){
			state.form.tabs.tab_1.form_fields[species_index].infoImpactSpecies.fields.splice(row_index, 1)
		},
		addSectionBSpecies(state, {selected_species, species_common_name}) {
			if(!Array.isArray(selected_species))
				selected_species = [selected_species]

			selected_species.forEach(species => {
				const speciesData = state.formData.speciesB.find(s => s.code === species) || {}
				state.form.tabs.tab_2.form_fields.push(
					sectionBSpecies({
						code: species,
						name: speciesData.name || species,
						cname: speciesData.cname || species_common_name
					}, state.country)
				)
			})
		},
	},
})
