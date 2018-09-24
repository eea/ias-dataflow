import species from './species.js'
import speciesB from './speciesB.js'




let tab_1_section = {
  scientific_name: {
    label: 'Species scientific name',
    selected: '',
    type: 'text',
    disabled: true,
    name: 'scientific_name',
    index: 1,
  },
  common_name: {
    label: "Common name of the species (optional)",
    selected: '',
    disabled: true,
    name: 'common_name',
    type: 'text',
    index: 2,
  },
  mandatory_item: {
    label: 'Is the species present in the territory of the Member State?',
    type: 'select',
    selected: 1,
    options: [{ value: true, text: "yes" }, { value: false, text: "no" }, { value: 'unknown', text: "Currently unknown" }],
    index: 3,
    name: 'mandatory_question',
  },
  depending_on_manadatory: {
    label: 'Distribution of the species, including information on its spread and reproductive patterns (to be completed only if the answer to question 3 above is ‘Yes’',
    selected: '',
    type: 'textarea',
    index: 4,
    name: 'distribution_of_species'
  },
  additional_info: {
    label: 'Additional information (optional)',
    type: 'textarea',
    index: 5,
    selected: '',
    name: 'additional_info'
  },
  tables: {
    table_1: {
      label: 'Information on the permits issued for this species To be completed only for invasive alien species of Union concern',
      question: {
        label: 'Have permits been issued for this species during the reporting period? ',
        type: 'select',
        index: 6,
        options: [{ value: true, text: "yes" }, { value: false, text: "no" }],
      },
      table_sections: [{
          label: '',
          field: {
            label: 'Calendar year concerned',
            name: 'year',
            type: 'number',
            selected: '',
            name: 'calendar_year',
            index: 7,
          },
          table_fields: {
            header: 'Purpose of permit',
            fields: [{
                label: 'Permits for research',
                fields: [{
                    label: 'Number of permits issued',
                    name: 'permits_number',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Total number or volume of permitted specimens corresponding to the permits issued',
                    name: 'total_permited_spciments',
                    type: 'number',
                    selected: '',
                  }
                ]
              },
              {
                label: 'Permits for ex situ conservation',
                fields: [{
                    label: 'Number of permits issued',
                    name: 'permits_number',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Total number or volume of permitted specimens corresponding to the permits issued',
                    name: 'total_permited_spciments',
                    type: 'number',
                    selected: '',
                  }
                ]
              },
              {
                label: 'Permits for scientific production and subsequent medicinal use to advance human health',
                fields: [{
                    label: 'Number of permits issued',
                    name: 'permits_number',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Total number or volume of permitted specimens corresponding to the permits issued',
                    name: 'total_permited_spciments',
                    type: 'number',
                    selected: '',
                  }
                ]
              },
              {
                label: 'Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)',
                fields: [{
                    label: 'Number of permits issued',
                    name: 'permits_number',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Total number or volume of permitted specimens corresponding to the permits issued',
                    name: 'total_permited_spciments',
                    type: 'number',
                    selected: '',
                  }
                ]
              },
            ]
          },
          additional_info: {
            label: 'Additional information (optional)',
            name: 'additional_info',
            selected: '',
            type: 'textarea'
          },
        },
        {
          label: 'Information on inspections To be completed only for invasive alien species of Union concern and if the answer to question 6 above is ‘Yes’',
          field: {
            label: 'Calendar year concerned',
            name: 'year',
            type: 'number',
            selected: '',
            name: 'calendar_year',
            index: 9,
          },
          table_fields: {
            header: 'Purpose of permit',
            fields: [{
                label: 'Permits for research',
                fields: [{
                    label: 'Number of establishments subjected to the inspections',
                    name: 'number_establishments_inspctions',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                    name: 'total_permited_spciments_held',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'establishments_non_compliant',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'number_speciments_held_by_non_compliant_establishments',
                    type: 'number',
                    selected: '',
                  },
                ]
              },
              {
                label: 'Permits for ex situ conservation',
                fields: [{
                    label: 'Number of establishments subjected to the inspections',
                    name: 'number_establishments_inspctions',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                    name: 'total_permited_spciments_held',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'establishments_non_compliant',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'number_speciments_held_by_non_compliant_establishments',
                    type: 'number',
                    selected: '',
                  },
                ]
              },
              {
                label: 'Permits for scientific production and subsequent medicinal use to advance human health',
                fields: [{
                    label: 'Number of establishments subjected to the inspections',
                    name: 'number_establishments_inspctions',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                    name: 'total_permited_spciments_held',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'establishments_non_compliant',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'number_speciments_held_by_non_compliant_establishments',
                    type: 'number',
                    selected: '',
                  },
                ]
              },
              {
                label: 'Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)',
                fields: [{
                    label: 'Number of establishments subjected to the inspections',
                    name: 'number_establishments_inspctions',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments',
                    name: 'total_permited_spciments_held',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number of inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'establishments_non_compliant',
                    type: 'number',
                    selected: '',
                  },
                  {
                    label: 'Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits',
                    name: 'number_speciments_held_by_non_compliant_establishments',
                    type: 'number',
                    selected: '',
                  },
                ]
              },
            ]
          },
          additional_info: {
            label: 'Additional information (optional)',
            name: 'additional_info',
            selected: '',
            type: 'textarea',
            index: 10,
          },
        },
      ]
    },
    table_2: {
      label: 'Information on rapid eradication measure(s) taken for this species (Article 17 of Regulation (EU) No 1143/2014)',
      question: {
        label: 'Has the species been subject to rapid eradication measures during the reporting period?',
        type: 'select',
        index: 11,
        options: [{ value: true, text: "yes" }, { value: false, text: "no" }],
      },
      table_sections: [{
        label: '',
        table_fields: {
          header: '',
          fields: [{
              label: 'Measure(s)',
              fields: [{
                  label: 'Starting date',
                  name: 'starting_date',
                  type: 'date',
                  selected: '',
                },
                {
                  label: 'Estimated duration or end date of application of measure(s)',
                  name: 'duration_or_end',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Part of the territory',
                  name: 'part_territory',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Biogeographical region(s)',
                  name: 'biogeographical_region',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'River basin sub-unit(s)',
                  name: 'river_basin_subunits',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Marine sub-region(s)',
                  name: 'river_basin_subunits',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Method(s) used',
                  name: 'methods_used',
                  type: 'select',
                  selected: '',
                  options: [
                    { text: 'Mechanical/Physical', value: 0 },
                    { text: 'Chemical', value: 1 },
                    { text: 'Biological', value: 2 },
                    { text: 'Other', value: 3 },
                  ]
                },
              ]
            },
            {
              label: 'Effectiveness of the measure(s)',
              fields: [{
                label: '',
                name: 'effectiveness_measure',
                type: 'select',
                selected: '',
                options: [
                  { text: 'Eradicated', value: 0 },
                  { text: 'Population decreasing', value: 1 },
                  { text: 'Population stable', value: 2 },
                  { text: 'Population still increasing ', value: 3 },
                  { text: 'Unclear population trend', value: 4 }
                ]
              }, ]
            },
            {
              label: 'Impacted non-targeted species',
              type: 'add',
              fields: [{
                label: 'Impacted non-targeted species',
                type: 'text',
                selected: '',
                name: 'impacted_nontargeted_species',
                inner_field: {
                  label: 'Impact per species',
                  type: 'text',
                  selected: '',
                  name: 'impact_per_species',
                }
              }, ]
            },
          ]
        },
        additional_info: {
          label: 'Additional information (optional)',
          name: 'additional_info',
          selected: '',
          index: 13,
          type: 'textarea'
        },
      }, ]
    },
    table_3: {
      label: 'Information on management measure(s) taken for this species (Article 19 of Regulation (EU) No 1143/2014)',
      question: {
        label: 'Has the species been subject to management measures during the reporting period?',
        type: 'select',
        index: 14,
        options: [{ value: true, text: "yes" }, { value: false, text: "no" }],
      },
      table_sections: [{
        label: '',
        index: 15,
        table_fields: {
          header: '',
          fields: [{
              label: 'Measure(s)',
              fields: [{
                  label: 'Starting date',
                  name: 'starting_date',
                  type: 'date',
                  selected: '',
                },
                {
                  label: 'Estimated duration or end date of application of measure(s)',
                  name: 'duration_or_end',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Objective of the measure(s) ',
                  name: 'measures_objective',
                  type: 'select',
                  selected: '',
                  options: [
                    { text: 'Eradication', value: 0 },
                    { text: 'Control', value: 1 },
                    { text: 'Containment', value: 2 },
                  ]
                },
                {
                  label: 'Part of the territory',
                  name: 'part_territory',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Biogeographical region(s)',
                  name: 'biogeographical_region',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'River basin sub-unit(s)',
                  name: 'river_basin_subunits',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Marine sub-region(s)',
                  name: 'river_basin_subunits',
                  type: 'text',
                  selected: '',
                },
                {
                  label: 'Method(s) used',
                  name: 'methods_used',
                  type: 'select',
                  selected: '',
                  options: [
                    { text: 'Mechanical/Physical', value: 0 },
                    { text: 'Chemical', value: 1 },
                    { text: 'Biological', value: 2 },
                    { text: 'Other', value: 3 },
                  ]
                },
              ]
            },
            {
              label: 'Effectiveness of the measure(s)',
              fields: [{
                label: '',
                name: 'effectiveness_measure',
                type: 'select',
                selected: '',
                options: [
                  { text: 'Eradicated', value: 0 },
                  { text: 'Population decreasing', value: 1 },
                  { text: 'Population stable', value: 2 },
                  { text: 'Population still increasing ', value: 3 },
                  { text: 'Unclear population trend', value: 4 }
                ]
              }, ]
            },
            {
              label: 'Impacted non-targeted species',
              type: 'add',
              fields: [{
                label: 'Impacted non-targeted species',
                type: 'text',
                selected: '',
                name: 'impacted_nontargeted_species',
                inner_field: {
                  label: 'Impact per species',
                  type: 'text',
                  selected: '',
                  name: 'impact_per_species',
                }
              }, ]
            },
          ]
        },
        additional_info: {
          label: 'Additional information (optional)',
          name: 'additional_info',
          selected: '',
          index: 16,
          type: 'textarea'
        },
      }, ]
    }

  }
}

var form = {
    country: {
      tables: {
        table_1: {
          description: 'INFORMATION SUBMITTED IN APPLICATION OF ARTICLE 24(1) OF REGULATION (EU) No 1143/2014',
          fields: [{
              name: 'partyname',
              type: 'text',
              label: 'Member State',
              selected: '',
            },
            {
              name: 'rep_period_from',
              type: 'number',
              label: 'Reporting period from (year)',
              selected: '',
            },
            {
              name: 'rep_period_to',
              type: 'number',
              label: 'Reporting period to (year)',
              selected: '',
            }
          ]
        }
      }
    },

    tab_1: {
      label: 'SECTION A',
      question: 'Information to be submitted for each of the invasive alien species of Union concern and for each invasive alien species of regional concern subject to measures as provided for in Article 11(2) of Regulation (EU) No 1143/2014',
      table_label: 'Information on the species, its distribution, spread and reproductive patterns ',
      sections: []
    },
    tab_2: {
      label: 'SECTION B',
      question: 'Information to be submitted for each of the invasive alien species of Member State concern',
      table_label: '',
      mandatory_item: {
        label: 'Has the Member State established a national list of invasive alien species of Member State concern? If yes, questions 2 to 5 below have to be answered for each of the species on this list',
        type: 'select',
        selected: true,
        options: [{ value: true, text: "yes" }, { value: false, text: "no" }, { value: 'unknown', text: "Currently unknown" }],
        index: 3,
        name: 'mandatory_question',
      },
      scientific_name: {
        name: "scientific_name",
        label: 'Species scientific name ',
        options: [],
        type: 'select',
        selected: ''
      },
      common_name: {
        name: "common_name",
        label: 'Common name of the species (optional)',
        options: '',
        type: 'text',
        disabled: true,
        selected: ''
      },
      sections: []
    },
    tab_3: {
      label: 'SECTION C',
      question: 'Horizontal information',
      section: {
        fields: [{
            type: "text",
            name: "web_link",
            label: "Web link to information on the internet regarding the permits issued as required under Article 8(7) of Regulation (EU) No 1143/2014",
            selected: '',
          },
          {
            type: "textarea",
            name: "action_plans_art13",
            label: "Action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014  ",
            selected: '',
          },
          {
            type: "add",
            name: "priority_pathways",
            fields: [{
                label: 'Priority pathways addressed ',
                type: 'text',
                selected: '',
                name: 'priority_pathways_addressed',
                inner_field: {
                  label: 'Species covered  ',
                  type: 'text',
                  selected: '',
                  name: 'species_covered',
                }
              }],
            },
            {
              type: "textarea",
              name: "surveillance_system_art14",
              label: "Description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014",
              selected: '',
            },
            {
              type: "textarea",
              name: "official_control_system",
              label: "Description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014  ",
              selected: '',
            },
            {
              type: "textarea",
              name: "measures_to_inform_public",
              label: "Description of measures taken to inform the public  ",
              selected: '',
            },
            {
              type: "text",
              name: "cost",
              label: "Cost of action undertaken to comply with the Regulation (EU) No 1143/2014 ",
              selected: '',
            },
            {
              type: "textarea",
              name: "additional_info",
              label: "Additional information (optional)",
              selected: '',
            },
          ]
        }
      },
    }

    for (let specie of speciesB) {
      form.tab_2.scientific_name.options.push({ text: specie.scientific_name, value: specie.scientific_name })
    }


    for (let specie of species) {
      let current_section = JSON.parse(JSON.stringify(tab_1_section))
      current_section.scientific_name.selected = specie.scientific_name
      current_section.common_name.selected = specie.common_name
      form.tab_1.sections.push(current_section)
    }


    export default form
