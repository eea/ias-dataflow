import Vue from 'vue'
import Vuex from 'vuex'
import {getCountry, getFormData} from './api'
import getForm from '@/assets/form'

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
                context.dispatch('getCurrentFormData', {country: r.data}).then(() => {
									context.commit('initiateForm')
								})
            })
        },

        getCurrentFormData(context, {country}) {
					return new Promise((resolve, reject) => {
						const fieldsArray = ['biogeographical_regions', 'marine_subregions', 'nuts_regions', 'river_basins', 'speciesB']
		
						const promiseList = fieldsArray.map((field, index) => {return getFormData(`${field}/${country}_${field}.json`)})

						return Promise.all(promiseList).then(function(values) {
							fieldsArray.forEach((field, index) => {
								context.state.formData[field] = values[index].data
							})
							resolve()
						});
					});
        }
    },

    mutations: {
        addCurrentCountry(state, data) {
            state.country = data
        },
        initiateForm(state) {
            state.form = getForm(state.country, state.formData)
        },
        addFormData(state, {field, data}) {
            state.formData[field] = data
        }
    },
})
