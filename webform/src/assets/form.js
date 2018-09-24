import species from './species.js'


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
                    type: 'checkbox',
                    selected: '',
                    options: [
                      {text: 'Mechanical/Physical', value: 0},
                      {text: 'Chemical', value: 1},
                      {text: 'Biological', value: 2},
                      {text: 'Other', value: 3},
                    ]
                  },
                ]
              },
              {
                label: 'Effectiveness of the measure(s)',
                fields: [{
                    label: '',
                    name: 'effectiveness_measure',
                    type: 'checkbox',
                    selected: '',
                    options: [
                      {text: 'Eradicated', value: 0},
                      {text: 'Population decreasing', value: 1},
                      {text: 'Population stable', value: 2},
                      {text: 'Population still increasing ', value: 3},
                      {text: 'Unclear population trend', value: 4}
                    ]
                  },
                ]
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
                },
                ]
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
        },
      ]
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
                    {text: 'Eradication', value: 0},
                    {text: 'Control', value: 1},
                    {text: 'Containment', value: 2},
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
                    type: 'checkbox',
                    selected: '',
                    options: [
                      {text: 'Mechanical/Physical', value: 0},
                      {text: 'Chemical', value: 1},
                      {text: 'Biological', value: 2},
                      {text: 'Other', value: 3},
                    ]
                  },
                ]
              },
              {
                label: 'Effectiveness of the measure(s)',
                fields: [{
                    label: '',
                    name: 'effectiveness_measure',
                    type: 'checkbox',
                    selected: '',
                    options: [
                      {text: 'Eradicated', value: 0},
                      {text: 'Population decreasing', value: 1},
                      {text: 'Population stable', value: 2},
                      {text: 'Population still increasing ', value: 3},
                      {text: 'Unclear population trend', value: 4}
                    ]
                  },
                ]
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
                },
                ]
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
        },
      ]
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
    label: 'Part II: Pollution preparedness and response: operational measures',
    collection_id: 303,
    parent_collection_id: 3,
    data: {
      question: '',
      table_label: 'Table II – Operational measures',
      collection_id: 304,
      parent_collection_id: 303,
      articles: [{
        article_title: 'Article 4',
        article_items: [{
            description: 'National response strategy for marine pollution incidents adopted including a policy for the use of dispersants',
            collection_id: 3026,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'Under preparation', value: 2 },
                  { text: 'Under revision', value: 3 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC Country Profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'National Contingency Plan covers:',
            collection_id: 3027,
            parent_collection_id: 304,
            items: [{
              type: 'special',
              label: 'Plans',
              info: 'Please tick all that apply',
              selected: [],
              options: [
                { text: 'Oil', value: 1 },
                { text: 'HNS (Hazardous and Noxious Substances)', value: 2 },
                { text: 'Both oil and HNS', value: 3 }
              ],
              options_description: [''],
            }]
          },
          {
            description: 'National stockpiles of pre-positioned oil and HNS spill response equipment, including naval and aerial means, established',
            collection_id: 3028,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to MEDGIS-MAR* and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Regular exercises are carried out to test the National Contingency Plan',
            collection_id: 3029,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes, provide link to the relevant part of REMPEC Country Profile and/or national data sets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local contingency plans, including port contingency plans, adopted',
            collection_id: 3030,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'Under preparation', value: 2 },
                  { text: 'Under revision', value: 3 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC country profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local plans, including port contingency plans, are integrated with the National Contingency Plan',
            collection_id: 3031,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 },
                  { text: 'In process of integration', value: 3 }
                ],
                options_description: ['If your answer is “Yes” on a voluntary basis provide website/URL link/other reference for details', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Local plans, including port contingency plans, are integrated with the industry emergency procedures',
            collection_id: 3032,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” on a voluntary basis provide website/URL link/other reference for details', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }, {
            description: 'Participation in sub-regional agreements regarding emergency situations adopted',
            collection_id: 3033,
            parent_collection_id: 304,
            items: [{
                type: 'status',
                label: 'Status',
                info: 'Please tick the box that applies',
                selected: null,
                options: [
                  { text: 'Yes', value: 1 },
                  { text: 'No', value: 4 }
                ],
                options_description: ['If your answer is “Yes” provide link to the relevant part of REMPEC country profile and/or national datasets for details (website/URL link/other reference)', 'If your answer is ”No”, please in the column difficulties/challenges, tick all that apply'],
                comments: ''
              },
              {
                type: 'difficulties',
                label: 'Difficulties/Challenges',
                info: 'Please tick all that apply',
                selected: [],
                options: [
                  { text: 'Policy framework', value: 1 },
                  { text: 'Regulatory framework', value: 2 },
                  { text: 'Financial resources', value: 3 },
                  { text: 'Administrative management', value: 4 },
                  { text: 'Technical Guidance Capabilities', value: 5 }
                ],
                options_description: ['On a voluntary basis, please briefly describe difficulties/challenges and the type of assistance that is required'],
                comments: ''
              }
            ]
          }
        ]
      }]
    }
  },
  tab_3: {
    label: 'Part III: Pollution incidents',
    collection_id: 305,
    parent_collection_id: 3,
    data: {
      question: {
        label: 'Information on Pollution Incidents provided in MEDGIS- MAR for the current biennium',
        info: 'Please, tick the box that applies',
        selected: null,
        options: [{
          value: true,
          text: 'Yes',
        }, {
          value: false,
          text: 'No',
        }],
        options_description: ['If your answer is “Yes”, no need to fill out this table', 'If your answer is “No” please fill out this Table'],
      },
      table_label: 'Table III - Pollution incidents',
      collection_id: 306,
      parent_collection_id: 305,
      articles: [
        // HERE PUSH INCIDENT.js STUFF
      ]
    }
  },
}



for (let specie of species) {
  let current_section = JSON.parse(JSON.stringify(tab_1_section))
  current_section.scientific_name.selected = specie.scientific_name
  current_section.common_name.selected = specie.common_name
  form.tab_1.sections.push(current_section)
}


export default form
