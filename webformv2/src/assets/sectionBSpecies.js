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
        ]
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
			if(
				!((
				this.selected.includes(3) || 
				this.selected.includes(1) ||
				this.selected.includes(2) || 
				this.selected.includes(4)
				) && (
					this.selected.includes(5) || 
					this.selected.includes(6) ||
					this.selected.includes(7) ||
					this.selected.includes(8) 
				))
			)
			return 'At least one of b/c/d/e must be chosen and at least one of f/g/h/i must be chosen.'
		},
        options:[
            {
                text: 'a) The species was already widely spread before 2015',
                index: 'a',
                value: 0,
            },

            {
                text: 'b) The species predominantly entered through natural dispersal from a neighbouring country',
                index: 'b',
                value: 1,
            },

            {
                text:'c) The species predominantly entered with unintentional human assistance',
                index: 'c',
                value : 2,
            },

            {
                text: 'd) The species predominantly entered with intentional human assistance',
                index: 'd',
                value: 3,
            },

            {
                text: 'e) There is no evidence of new entries into the Member State',
                index: 'e',
                value: 4,
            },

            {
                text: 'f) The species predominantly spread through natural dispersal',
                index: 'f',
                value: 5,
            },

            {
                text: 'g) The species predominantly spread with unintentional human assistance',
                index: 'g',
                value: 6,
            },

            {
                text: 'h) The species predominantly spread with intentional human assistance',
                index: 'h',
                value: 7,
            },

            {
                text: 'i) There is no evidence of spread within the Member State',
                index: 'i',
                value: 8,
            },

            {
                text: 'j) The species spread from the Member State into other Member State(s)',
                index: 'j',
                value: 9
            }
        ]
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
        noMeasures: {
            type: 'checkbox',
            selected: false,
            noMeasures: 'restTransport',
            label: "The species is included in the national list but is not subject to any measures",
        }
    }

})

export default species