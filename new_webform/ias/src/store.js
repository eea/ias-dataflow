import Vue from 'vue'
import Vuex from 'vuex'
import { getCountry } from './api'
import getForm from '@/assets/form'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		country: null,
		form: null,
  },

	getters: {
		getCurrentCountryState: state => {
			return state.country
		}
	},
	
	actions: {
		getCurrentCountry(context) {
			getCountry().then(r => 	{
				context.commit('addCurrentCountry', r.data)
				context.commit('getForm', {country: r.data})
			})
		},
  },
  
	mutations: {
		addCurrentCountry(state, data) {
			state.country  = data
		},
		getForm(state, {country}) {
			state.form = getForm(country)
		},
  },
})
