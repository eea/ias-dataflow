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
                context.dispatch('getFormData', {country: r.data})
            })
        },

        getFormData(context, {country}) {
            const fieldsArray = ['biogeographical_regions', 'marine_subregions', 'nuts_regions', 'river_basins', 'speciesB']
            fieldsArray.forEach((field, index) => {
                getFormData(`${field}/${country}_${field}.json`).then((response) => {
                    context.commit('addFormData', {field, data: response.data})
                    if(index === fieldsArray.length - 1) context.commit('getForm')
                }).catch((error) => {
                    if(field === 'speciesB') {
                        getFormData(`${field}/speciesBall.json`).then((response) => {
                            context.commit('addFormData', {field, data: response.data})
                            if(index === fieldsArray.length - 1) context.commit('getForm')
                        })
                    }
                })
            })
        }
    },

    mutations: {
        addCurrentCountry(state, data) {
            state.country = data
        },
        getForm(state) {
            state.form = getForm(state.country, state.formData)
        },
        addFormData(state, {field, data}) {
            state.formData[field] = data
        }
    },
})
