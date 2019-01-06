import species from './species.js'
import speciesB from './speciesB.js'
import nuts from './nuts-regions'
import marine_subregions from './marine-subregions'



function form() {
  return new Promise(function( resolve, reject){
    Promise.all([ nuts(), marine_subregions(),species() ]).then((vals) => {
      let country = vals[0].country;
      let regions = vals[0].data;
      let msubregs = vals[1];
      let species = vals[2];

      let procspec = species.species.reduce( (acc, cur) => {
        if("undefined" === typeof acc[cur.EUNIScode]){
          acc[cur.EUNIScode] = [];
        }
        acc[cur.EUNIScode].push(cur);
        return acc;
      },{});

      species = Object.keys(procspec).map((k) => {
        return procspec[k];
      }).sort(function (a,b) {
        if(a[0].speciesNameLegi < b[0].speciesNameLegi ) return -1;
        if(a[0].speciesNameLegi > b[0].speciesNameLegi ) return 1;
        return 0;
      });


      let form = {
        country: {
          tables: {
            table_1: {
              description: 'INFORMATION SUBMITTED IN APPLICATION OF ARTICLE 24(1) OF REGULATION (EU) No 1143/2014',
              fields: [{
                name: 'partyname',
                type: 'text',
                label: 'Member State',
                selected: country,
                disabled: true,
              },
                {
                  name: 'rep_period_from',
                  type: 'text',
                  label: 'Reporting period from (year)',
                  selected: '2015-01-01',
                  disabled: true,
                },
                {
                  name: 'rep_period_to',
                  type: 'text',
                  label: 'Reporting period to (year)',
                  selected: '2018-12-31',
                  disabled: true,
                }
              ]
            }
          }
        },

        tab_0: {
          label: 'REPORTING PARTY',
          question: 'Information on the reporting party',
          tables: {
            table_1: {
              description: 'Information submitted in application of Article 24(1) of regulation (EU) No 1143/2014',
              fields: [{
                name: 'partyname',
                type: 'text',
                label: 'Member State',
                selected: country,
                disabled: true,
              },
                {
                  name: 'rep_period_from',
                  type: 'text',
                  label: 'Reporting period from (year)',
                  selected: '2015-01-01',
                  disabled: true,
                },
                {
                  name: 'rep_period_to',
                  type: 'text',
                  label: 'Reporting period to (year)',
                  selected: '2018-12-31',
                  disabled: true,
                }
              ]
            }
          }
        },
        tab_1: {
          label: 'SECTION A',
          question: 'Information to be submitted for each of the invasive alien species of Union concern and for each invasive alien species of regional concern subject to measures as provided for in Article 11(2) of Regulation (EU) No 1143/2014',
          table_label: 'Information on the species, its distribution, spread and reproductive patterns',
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
            options: [{ value: true, text: "Yes" }, { value: false, text: "No" }, { value: 'unknown', text: "Currently unknown" }],
            index: 3,
            name: 'mandatory_question',
          },
          scientific_name: {
            name: "scientific_name",
            label: 'Species scientific name ',
            options: [],
            type: 'multiselect',
            selected: []
          },
          common_name: {
            name: "common_name",
            label: 'Common name of the species (optional)',
            options: '',
            type: 'text',
            disabled: true,
            selected: []
          },
          species_code: {
            label: "EASIN identifier",
            selected: '',
            disabled: true,
            name: 'species_code',
            type: 'text',
            index: 2,
          },
          sections: []
        },
        tab_3: {
          label: 'SECTION C',
          question: 'Horizontal information',
          section: {
            fields: [{
              type: "textarea",
              name: "web_link",
              label: "Web link to information on the internet regarding the permits issued as required under Article 8(7) of Regulation (EU) No 1143/2014",
              selected: '',
            },
              {
                type: "file",
                name: "web_link_file",
                label: "File regarding the permits issued as required under Article 8(7) of Regulation (EU) No 1143/2014",
                selected: [],
              },
              {
                type: "textarea",
                name: "action_plans_art13",
                label: "Action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014  ",
                selected: '',
              },
              {
                type: "file",
                name: "action_plans_art13_file",
                label: "File regarding the action plan(s) referred to in Article 13(2) of Regulation (EU) No 1143/2014  ",
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
                    type: 'select',
                    selected: '',
                    name: 'species_covered',
                  },

                }],
              },
              {
                type: "textarea",
                name: "surveillance_system_art14",
                label: "Description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014",
                selected: '',
              },
              {
                type: "file",
                name: "surveillance_system_art14_file",
                label: "File regarding the description of the surveillance system pursuant to Article 14 of Regulation (EU) No 1143/2014",
                selected: '',
              },

              {
                type: "textarea",
                name: "official_control_system",
                label: "Description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014  ",
                selected: '',
              },
              {
                type: "file",
                name: "official_control_system_file",
                label: "File regarding the description of the official control system pursuant to Article 15 of Regulation (EU) No 1143/2014  ",
                selected: '',
              },
              {
                type: "textarea",
                name: "measures_to_inform_public",
                label: "Description of measures taken to inform the public  ",
                selected: '',
              },
              {
                type: "file",
                name: "measures_to_inform_public_file",
                label: "File regarding the description of measures taken to inform the public  ",
                selected: '',
              },
              {
                type: "text",
                name: "cost",
                label: "Cost of action undertaken to comply with the Regulation (EU) No 1143/2014 ",
                selected: '',
              },
              {
                type: "file",
                name: "cost_file",
                label: "File regarding the cost of action undertaken to comply with the Regulation (EU) No 1143/2014 ",
                selected: '',
              },
              {
                type: "textarea",
                name: "additional_info",
                label: "Additional information (optional)",
                selected: '',
              },
              {
                type: "file",
                name: "additional_info_file",
                label: "File regarding the additional information (optional)",
                selected: '',
              },

            ]
          }
        },
        tab_4: {
          label: 'DISTRIBUTION MAPS',
          question: 'Distribution maps for the Section A - IAS of Union concern and Section B – IAS of Member States concern',
          help_text: 'Upload here the required files is described in the guidelines. Please note that in addition to the file with the spatial data also Inspire conform metadata are required.',
          section: {
            fields: [
              {
                type: "file",
                name: "section_a_distribution_file",
                label: "Distribution map for SECTION A",
                selected: [],
              },{
                type: "file",
                name: "section_a_inspire",
                label: "INSPIRE Metadata for SECTION A",
                selected: [],
              },{
                type: "file",
                name: "section_b_distribution_file",
                label: "Distribution map for SECTION B",
                selected: [],
              },{
                type: "file",
                name: "section_b_inspire",
                label: "INSPIRE Metadata for SECTION B",
                selected: [],
              }
            ]
          }
        },
        jsonData: {
          species: species,
          regions: regions,
          subregions: msubregs,
        }
      };

      for (let specie of speciesB) {
        form.tab_2.scientific_name.options.push({
          text: specie.name,
          value: specie.name,
          country: specie.country
        });
      }

      resolve(form);
      //Promise.all(promises).then((r) => {resolve(form);}).catch((e) => {console.error(e); });
    });

  });
}

export default form
