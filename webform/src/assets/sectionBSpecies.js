import spreadPatterns from './spreadPatterns'

const species = (currentSpecies) => ({
	expanded: false,
    EASINCode: {
        name: 'EASINCode',
        type: 'nonInput',
        selected: currentSpecies.code || null,
        label: 'EASIN identifier',
    },
    scientific_name: {
        name: 'scientific_name',
        type: 'nonInput',
        selected: currentSpecies.name || null,
        label: 'Scientific name'
    },

    common_name: {
        name: 'common_name',
        type: 'nonInput',
        selected: currentSpecies.cname || null,
        label: 'Common name of the species (english)'
    },

    common_name_national: {
        name: 'common_name_national',
        type: 'text',
        selected: currentSpecies.cname || null,
        label: 'Common name of the species (optional)'
    },

    present_in_MS: {
        name: 'present_in_MS',
        type: 'select',
        selected: null,
        label: 'Is the species present in the territory of the Member State ?',
        options: [
            {text: 'Yes', value: true},
            {text: 'No', value: false},
            {text: 'Currently unknown', value: 'unknown'}
        ],
        get validation() {
			if(this.selected === null) {
				return `${this.label} is required`
			}
		}
    },

    reproduction_patterns: {
        label: 'Reproduction patterns',
        type: 'select',
        patternType: 'reproduction',
        name: 'reproduction patterns',
        selected: null,
        options: [
            {text: 'Asexual', value: 'asexual',},
            {text: 'Not reproducing in the Member State', value: 'notReproducing',},
            {text: 'Sexual', value: 'sexual',},
            {text: 'Both (sexual and asexual)', value: 'sexualAndAsexual',},
            {text: 'Unclear (sexual or asexual)', value: 'unclear',},
            {text: 'Unknown whether the species reproduces in the Member State', value: 'unknown',}
        ]
    },

    additional_information: {
        type: 'textarea',
        selected: '',
        name: 'additional_information',
        label: "Additional information (optional)",
    },
    additional_information_measures: {
        type: 'textarea',
        selected: '',
        name: 'additional_information_measures',
        label: "Additional information (optional)",
    },

    spreadPatterns: {
        label: 'Spread patterns',
        type: 'multiselect',
        patternType: 'spread',
        name: 'spreadPatterns',
        selected: [],
		get validation() {
			console.log('here', this.selected)
			if(
				!((
				this.selected.includes('enteredNeighbourCountry') || 
				this.selected.includes('enteredUnintentional') ||
				this.selected.includes('enteredIntentional') || 
				this.selected.includes('enteredNot')
				) && (
					this.selected.includes('spreadNatural') || 
					this.selected.includes('spreadUnintentional') ||
					this.selected.includes('spreadIntentional') ||
					this.selected.includes('spreadNotMs') 
				))
			)
			return 'At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.'
		},
        options: spreadPatterns
    },


    sectionBMeasures: {
        restTransport: {
            type: 'checkbox',
            selected: false,
            name: 'restTransport',
            label: 'Restriction to intentionally transport, except in the context of eradication'
        },
        restMarket: {
            type: 'checkbox',
            selected: false,
            name: 'restMarket',
            label: 'Restriction to intentionally place on the market'
        },
        restUse: {
            type: 'checkbox',
            selected: false,
            name: 'restUse',
            label: 'Restriction to intentionally use or exchange',
        },
        restReproduce: {
            type: 'checkbox',
            selected: false,
            name: 'restReproduce',
            label: 'Restriction to intentionally permit to reproduce, grown or cultivated, including in contained holding',
        },
        restRelease: {
            type: 'checkbox',
            selected: false,
            name: 'restRelease',
            label: 'Restriction to intentionally release into the environment',
        },
        derogations: {
            type: 'checkbox',
            selected: false,
            label: 'Derogations foreseen within the permit system under Article 8',
            name: 'derogations',
        },
        actionPlans: {
            type: 'checkbox',
            selected: false,
            name: 'actionPlans',
            label: "Addressed in the action plans pursuant to Article 13 ",
        },
        survSystem: {
            type: 'checkbox',
            selected: false,
            name: 'survSystem',
            label: "Covered by the surveillance system pursuant to Article 14",
        },
        officialControls: {
            type: 'checkbox',
            selected: false,
            name: 'officialControls',
            label: "Official controls to prevent the intentional introduction",
        },
        earlyDetection: {
            type: 'checkbox',
            selected: false,
            name: 'earlyDetection',
            label: "Subject to early detection system",
        },
        rapidEradication: {
            type: "checkbox",
            name: "rapidEradication",
            label: "Subject to rapid eradication following an early detection",
            selected: false,
        },
        managMeasures: {
            type: "checkbox",
            name: "managMeasures",
            label: "Subject to management measures if widely spread",
            selected: false,
        },
        restMeasures: {
            type: 'checkbox',
            selected: false,
            name: 'restMeasures',
            label: "Restoration measures",
        },
        restBreed: {
          type: 'checkbox',
          selected: false,
          name: 'restBreed',
          label: "Restriction to intentionally breed, including in contained holding",
        },
        restBring: {
          type: 'checkbox',
          selected: false,
          name: 'restBring',
          label: "Restriction to intentionally bring into the territory",
        },
        restKeep: {
          type: 'checkbox',
          selected: false,
          name: 'restKeep',
          label: "Restriction to intentionally keep, including in contained holding",
        },
        noMeasures: {
            type: 'checkbox',
            selected: false,
            name: 'noMeasures',
            label: "The species is included in the national list but is not subject to any measures",
        },
        get validation() {
            const hasChecked = Object.keys(this).filter(field => field != 'validation' && this[field].selected)
            if(!hasChecked.length) {
                return 'At least one measure applied in the territory of the Member State in relation to the species is required'
            }
        }
    },
	validation: null,

})

export default species
