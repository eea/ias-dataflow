const species = (sci_name, com_name) => ({
    scientific_name: {
      label: 'Species scientific name',
      selected: sci_name,
      type: 'text',
      disabled: true,
      name: 'scientific_name',
      index: 1,
    },
    common_name: {
      label: "Common name of the species (optional)",
      selected: com_name,
      disabled: true,
      name: 'common_name',
      type: 'text',
      index: 2,
    },
    mandatory_item: {
      label: 'Is the species present in the territory of the Member State?',
      type: 'select',
      selected: 1,
      options: [{ value: true, text: "Yes" }, { value: false, text: "No" },
         { value: 'unknown', text: "Currently unknown" }
      ],
      index: 3,
      name: 'mandatory_question',
    },
    depending_on_mandatory: {
      label: 'A distribution map for this species has to be included in the file which will be uploaded in the \'Distribution map for SECTION B\' field available on \'DISTRIBUTION MAP\' section (optional).',
      index: 4,
      name: 'distribution_of_species',
      fields: [
        {
          label: 'Tick if yes',
          type: 'checkbox',
          name: 'distribution_maps_check',
          selected: false,
        },
      ],

      reproduction_patterns: [
        {
          label: 'Reproduction patterns',
          type: 'select',
          add: true,
          patternType: 'reproduction',
          name: 'reproduction patterns',
          multiple: false,
          selected: {
            region: null,
            pattern: null
          },
          options:[
            {
              text: 'Sexual', value: 0,
            },
            {
              text: 'Asexual', value: 1,
            },
            {
              text: 'Both (sexual and asexual)', value : 2,
            },
            {
              text: 'Unclear (sexual or asexual) ', value: 3,
            },
            {
              text: 'Not reproducing in the Member State', value: 4,
            },
            {
              text: 'Unknown whether the species reproduces in the Member State', value: 5,
            }
          ]
        }
      ],
      spread_patterns:[
        {
          label: 'Spread patterns',
          type: 'select',
          patternType: 'spread',
          name: 'spread_patterns',
          add: true,
          multiple: true,
          selected: {
            region: null,
            pattern: null
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
      ]
    },
    additional_info: {
      label: 'Additional information (optional)',
      type: 'textarea',
      index: 5,
      selected: '',
      name: 'additional_info'
    },
    section: {
      label: "Measure(s) applied in the territory of the Member State in relation to the species",
      fields: [
        {
          type: "checkbox",
          name: "restTransport",
          label: "Restriction to intentionally transport, except in the context of eradication",
          selected: false,
        },
        {
          type: "checkbox",
          name: "restMarket",
          label: "Restriction to intentionally place on the market",
          selected: false,
        },
        {
          type: "checkbox",
          name: "restUse",
          label: "Restriction to intentionally use or exchange ",
          selected: false,
        },
        {
          type: "checkbox",
          name: "restReproduce",
          label: "Restriction to intentionally permit to reproduce, grown or cultivated, including in contained holding ",
          selected: false,
        },
        {
          type: "checkbox",
          name: "restRelease",
          label: "Restriction to intentionally release into the environment",
          selected: false,
        },
        {
          type: "checkbox",
          name: "derogations",
          label: "Derogations foreseen within the permit system under Article 8  ",
          selected: false,
        },
        {
          type: "checkbox",
          name: "actionPlans",
          label: "Addressed in the action plans pursuant to Article 13 ",
          selected: false,
        },
        {
          type: "checkbox",
          name: "survSystem",
          label: "Covered by the surveillance system pursuant to Article 14",
          selected: false,
        },
        {
          type: "checkbox",
          name: "officialControls",
          label: "Official controls to prevent the intentional introduction",
          selected: false,
        },
        {
          type: "checkbox",
          name: "earlyDetection",
          label: "Subject to early detection system",
          selected: false,
        },
        {
          type: "checkbox",
          name: "rapidEradication",
          label: "Subject to rapid eradication following an early detection  ",
          selected: false,
        },
        {
          type: "checkbox",
          name: "managMeasures",
          label: "Subject to management measures if widely spread",
          selected: false,
        },
        {
          type: "checkbox",
          name: "restMeasures",
          label: "Restoration measures",
          selected: false,
        },
        {
          type: "checkbox",
          name: "noMeasures",
          label: "The species is included in the national list but is not subject to any measures",
          selected: false,
        },
        {
          type: "textarea",
          name: "additional_info",
          label: "Additional information (optional)",
          selected: '',
        },
      ]
    }
  })

  export default species