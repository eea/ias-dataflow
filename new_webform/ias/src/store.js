import Vue from 'vue'
import Vuex from 'vuex'
import { getCountry } from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		country: null,
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
			})
		},
  },
  
	mutations: {
		addCurrentCountry(state, data) {
			state.country  = data
		}
  },
})
