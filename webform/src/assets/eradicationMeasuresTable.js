const table = () => ({
  "name": "National Population #1",
  "table_sections": [
  {
    "label": "",
    "table_fields":
    {
      "header": "",
      "fields": [
      {
        "label": "Measure(s)",
        "fields": [
        {
          "label": "Starting date",
          "name": "starting_date",
          "type": "date",
          "selected": "",
          "required": "required"
        },
        {
          "label": "End date",
          "name": "duration_or_end",
          "type": "date",
          "selected": "",
          "required": "required"
        },
        {
          "label": "Part of the territory",
          "name": "part_territory",
          "type": "multiselect",
          "options": [
          {
            "text": "FR - FRANCE",
            "value": "FR"
          },
          {
            "text": "FR1 - ÎLE DE FRANCE",
            "value": "FR1"
          },
          {
            "text": "FR10 - Île de France",
            "value": "FR10"
          },
          {
            "text": "FR101 - Paris",
            "value": "FR101"
          },
          {
            "text": "FR102 - Seine-et-Marne",
            "value": "FR102"
          },
          {
            "text": "FR103 - Yvelines",
            "value": "FR103"
          },
          {
            "text": "FR104 - Essonne",
            "value": "FR104"
          },
          {
            "text": "FR105 - Hauts-de-Seine",
            "value": "FR105"
          },
          {
            "text": "FR106 - Seine-Saint-Denis",
            "value": "FR106"
          },
          {
            "text": "FR107 - Val-de-Marne",
            "value": "FR107"
          },
          {
            "text": "FR108 - Val-d'Oise",
            "value": "FR108"
          },
          {
            "text": "FR2 - BASSIN PARISIEN",
            "value": "FR2"
          },
          {
            "text": "FR21 - Champagne-Ardenne",
            "value": "FR21"
          },
          {
            "text": "FR211 - Ardennes",
            "value": "FR211"
          },
          {
            "text": "FR212 - Aube",
            "value": "FR212"
          },
          {
            "text": "FR213 - Marne",
            "value": "FR213"
          },
          {
            "text": "FR214 - Haute-Marne",
            "value": "FR214"
          },
          {
            "text": "FR22 - Picardie",
            "value": "FR22"
          },
          {
            "text": "FR221 - Aisne",
            "value": "FR221"
          },
          {
            "text": "FR222 - Oise",
            "value": "FR222"
          },
          {
            "text": "FR223 - Somme",
            "value": "FR223"
          },
          {
            "text": "FR23 - Haute-Normandie",
            "value": "FR23"
          },
          {
            "text": "FR231 - Eure",
            "value": "FR231"
          },
          {
            "text": "FR232 - Seine-Maritime",
            "value": "FR232"
          },
          {
            "text": "FR24 - Centre",
            "value": "FR24"
          },
          {
            "text": "FR241 - Cher",
            "value": "FR241"
          },
          {
            "text": "FR242 - Eure-et-Loir",
            "value": "FR242"
          },
          {
            "text": "FR243 - Indre",
            "value": "FR243"
          },
          {
            "text": "FR244 - Indre-et-Loire",
            "value": "FR244"
          },
          {
            "text": "FR245 - Loir-et-Cher",
            "value": "FR245"
          },
          {
            "text": "FR246 - Loiret",
            "value": "FR246"
          },
          {
            "text": "FR25 - Basse-Normandie",
            "value": "FR25"
          },
          {
            "text": "FR251 - Calvados",
            "value": "FR251"
          },
          {
            "text": "FR252 - Manche",
            "value": "FR252"
          },
          {
            "text": "FR253 - Orne",
            "value": "FR253"
          },
          {
            "text": "FR26 - Bourgogne",
            "value": "FR26"
          },
          {
            "text": "FR261 - Côte-d'Or",
            "value": "FR261"
          },
          {
            "text": "FR262 - Nièvre",
            "value": "FR262"
          },
          {
            "text": "FR263 - Saône-et-Loire",
            "value": "FR263"
          },
          {
            "text": "FR264 - Yonne",
            "value": "FR264"
          },
          {
            "text": "FR3 - NORD - PAS-DE-CALAIS",
            "value": "FR3"
          },
          {
            "text": "FR30 - Nord - Pas-de-Calais",
            "value": "FR30"
          },
          {
            "text": "FR301 - Nord",
            "value": "FR301"
          },
          {
            "text": "FR302 - Pas-de-Calais",
            "value": "FR302"
          },
          {
            "text": "FR4 - EST",
            "value": "FR4"
          },
          {
            "text": "FR41 - Lorraine",
            "value": "FR41"
          },
          {
            "text": "FR411 - Meurthe-et-Moselle",
            "value": "FR411"
          },
          {
            "text": "FR412 - Meuse",
            "value": "FR412"
          },
          {
            "text": "FR413 - Moselle",
            "value": "FR413"
          },
          {
            "text": "FR414 - Vosges",
            "value": "FR414"
          },
          {
            "text": "FR42 - Alsace",
            "value": "FR42"
          },
          {
            "text": "FR421 - Bas-Rhin",
            "value": "FR421"
          },
          {
            "text": "FR422 - Haut-Rhin",
            "value": "FR422"
          },
          {
            "text": "FR43 - Franche-Comté",
            "value": "FR43"
          },
          {
            "text": "FR431 - Doubs",
            "value": "FR431"
          },
          {
            "text": "FR432 - Jura",
            "value": "FR432"
          },
          {
            "text": "FR433 - Haute-Saône",
            "value": "FR433"
          },
          {
            "text": "FR434 - Territoire de Belfort",
            "value": "FR434"
          },
          {
            "text": "FR5 - OUEST",
            "value": "FR5"
          },
          {
            "text": "FR51 - Pays de la Loire",
            "value": "FR51"
          },
          {
            "text": "FR511 - Loire-Atlantique",
            "value": "FR511"
          },
          {
            "text": "FR512 - Maine-et-Loire",
            "value": "FR512"
          },
          {
            "text": "FR513 - Mayenne",
            "value": "FR513"
          },
          {
            "text": "FR514 - Sarthe",
            "value": "FR514"
          },
          {
            "text": "FR515 - Vendée",
            "value": "FR515"
          },
          {
            "text": "FR52 - Bretagne",
            "value": "FR52"
          },
          {
            "text": "FR521 - Côtes-d'Armor",
            "value": "FR521"
          },
          {
            "text": "FR522 - Finistère",
            "value": "FR522"
          },
          {
            "text": "FR523 - Ille-et-Vilaine",
            "value": "FR523"
          },
          {
            "text": "FR524 - Morbihan",
            "value": "FR524"
          },
          {
            "text": "FR53 - Poitou-Charentes",
            "value": "FR53"
          },
          {
            "text": "FR531 - Charente",
            "value": "FR531"
          },
          {
            "text": "FR532 - Charente-Maritime",
            "value": "FR532"
          },
          {
            "text": "FR533 - Deux-Sèvres",
            "value": "FR533"
          },
          {
            "text": "FR534 - Vienne",
            "value": "FR534"
          },
          {
            "text": "FR6 - SUD-OUEST",
            "value": "FR6"
          },
          {
            "text": "FR61 - Aquitaine",
            "value": "FR61"
          },
          {
            "text": "FR611 - Dordogne",
            "value": "FR611"
          },
          {
            "text": "FR612 - Gironde",
            "value": "FR612"
          },
          {
            "text": "FR613 - Landes",
            "value": "FR613"
          },
          {
            "text": "FR614 - Lot-et-Garonne",
            "value": "FR614"
          },
          {
            "text": "FR615 - Pyrénées-Atlantiques",
            "value": "FR615"
          },
          {
            "text": "FR62 - Midi-Pyrénées",
            "value": "FR62"
          },
          {
            "text": "FR621 - Ariège",
            "value": "FR621"
          },
          {
            "text": "FR622 - Aveyron",
            "value": "FR622"
          },
          {
            "text": "FR623 - Haute-Garonne",
            "value": "FR623"
          },
          {
            "text": "FR624 - Gers",
            "value": "FR624"
          },
          {
            "text": "FR625 - Lot",
            "value": "FR625"
          },
          {
            "text": "FR626 - Hautes-Pyrénées",
            "value": "FR626"
          },
          {
            "text": "FR627 - Tarn",
            "value": "FR627"
          },
          {
            "text": "FR628 - Tarn-et-Garonne",
            "value": "FR628"
          },
          {
            "text": "FR63 - Limousin",
            "value": "FR63"
          },
          {
            "text": "FR631 - Corrèze",
            "value": "FR631"
          },
          {
            "text": "FR632 - Creuse",
            "value": "FR632"
          },
          {
            "text": "FR633 - Haute-Vienne",
            "value": "FR633"
          },
          {
            "text": "FR7 - CENTRE-EST",
            "value": "FR7"
          },
          {
            "text": "FR71 - Rhône-Alpes",
            "value": "FR71"
          },
          {
            "text": "FR711 - Ain",
            "value": "FR711"
          },
          {
            "text": "FR712 - Ardèche",
            "value": "FR712"
          },
          {
            "text": "FR713 - Drôme",
            "value": "FR713"
          },
          {
            "text": "FR714 - Isère",
            "value": "FR714"
          },
          {
            "text": "FR715 - Loire",
            "value": "FR715"
          },
          {
            "text": "FR716 - Rhône",
            "value": "FR716"
          },
          {
            "text": "FR717 - Savoie",
            "value": "FR717"
          },
          {
            "text": "FR718 - Haute-Savoie",
            "value": "FR718"
          },
          {
            "text": "FR72 - Auvergne",
            "value": "FR72"
          },
          {
            "text": "FR721 - Allier",
            "value": "FR721"
          },
          {
            "text": "FR722 - Cantal",
            "value": "FR722"
          },
          {
            "text": "FR723 - Haute-Loire",
            "value": "FR723"
          },
          {
            "text": "FR724 - Puy-de-Dôme",
            "value": "FR724"
          },
          {
            "text": "FR8 - MÉDITERRANÉE",
            "value": "FR8"
          },
          {
            "text": "FR81 - Languedoc-Roussillon",
            "value": "FR81"
          },
          {
            "text": "FR811 - Aude",
            "value": "FR811"
          },
          {
            "text": "FR812 - Gard",
            "value": "FR812"
          },
          {
            "text": "FR813 - Hérault",
            "value": "FR813"
          },
          {
            "text": "FR814 - Lozère",
            "value": "FR814"
          },
          {
            "text": "FR815 - Pyrénées-Orientales",
            "value": "FR815"
          },
          {
            "text": "FR82 - Provence-Alpes-Côte d'Azur",
            "value": "FR82"
          },
          {
            "text": "FR821 - Alpes-de-Haute-Provence",
            "value": "FR821"
          },
          {
            "text": "FR822 - Hautes-Alpes",
            "value": "FR822"
          },
          {
            "text": "FR823 - Alpes-Maritimes",
            "value": "FR823"
          },
          {
            "text": "FR824 - Bouches-du-Rhône",
            "value": "FR824"
          },
          {
            "text": "FR825 - Var",
            "value": "FR825"
          },
          {
            "text": "FR826 - Vaucluse",
            "value": "FR826"
          },
          {
            "text": "FR83 - Corse",
            "value": "FR83"
          },
          {
            "text": "FR831 - Corse-du-Sud",
            "value": "FR831"
          },
          {
            "text": "FR832 - Haute-Corse",
            "value": "FR832"
          },
          {
            "text": "FRA - DÉPARTEMENTS D'OUTRE-MER",
            "value": "FRA"
          },
          {
            "text": "FRA1 - Guadeloupe",
            "value": "FRA1"
          },
          {
            "text": "FRA10 - Guadeloupe",
            "value": "FRA10"
          },
          {
            "text": "FRA2 - Martinique",
            "value": "FRA2"
          },
          {
            "text": "FRA20 - Martinique",
            "value": "FRA20"
          },
          {
            "text": "FRA3 - Guyane",
            "value": "FRA3"
          },
          {
            "text": "FRA30 - Guyane",
            "value": "FRA30"
          },
          {
            "text": "FRA4 - La Réunion",
            "value": "FRA4"
          },
          {
            "text": "FRA40 - La Réunion",
            "value": "FRA40"
          },
          {
            "text": "FRA5 - Mayotte",
            "value": "FRA5"
          },
          {
            "text": "FRA50 - Mayotte",
            "value": "FRA50"
          },
          {
            "text": "FRZ - EXTRA-REGIO NUTS 1",
            "value": "FRZ"
          },
          {
            "text": "FRZZ - Extra-Regio NUTS 2",
            "value": "FRZZ"
          },
          {
            "text": "FRZZZ - Extra-Regio NUTS 3",
            "value": "FRZZZ"
          }],
          "selected": [],
          "comments": "",
          "addoption": true
        },
        {
          "label": "Biogeographical region(s)",
          "name": "biogeographical_region",
          "type": "multiselect",
          "selected": [],
          "options": [
          {
            "text": "Alpine",
            "value": "ALP"
          },
          {
            "text": "Atlantic",
            "value": "ATL"
          },
          {
            "text": "Continental",
            "value": "CON"
          },
          {
            "text": "Mediterranean",
            "value": "MED"
          }]
        },
        {
          "label": "River basin sub-unit(s)",
          "name": "river_basin_subunits",
          "type": "multiselect",
          "selected": [],
          "options": [
          {
            "text": "L'Escaut, la Somme et les cours d'eau côtiers de la Manche et de la mer du Nord",
            "value": "L'Escaut, la Somme et les cours d'eau côtiers de la Manche et de la mer du Nord"
          },
          {
            "text": "La Meuse",
            "value": "La Meuse"
          },
          {
            "text": "La Sambre",
            "value": "La Sambre"
          },
          {
            "text": "Le Rhin",
            "value": "Le Rhin"
          },
          {
            "text": "Le Rhône et les cours d'eau côtiers méditerranéens",
            "value": "Le Rhône et les cours d'eau côtiers méditerranéens"
          },
          {
            "text": "Les cours d'eau de la Corse",
            "value": "Les cours d'eau de la Corse"
          },
          {
            "text": "L'Adour, la Garonne, la Dordogne, la Charente et les cours d'eau côtiers charentais et aquitains",
            "value": "L'Adour, la Garonne, la Dordogne, la Charente et les cours d'eau côtiers charentais et aquitains"
          },
          {
            "text": "La Loire, les cours d'eau côtiers vendéens et bretons",
            "value": "La Loire, les cours d'eau côtiers vendéens et bretons"
          },
          {
            "text": "La Seine et les cours d'eau côtiers normands",
            "value": "La Seine et les cours d'eau côtiers normands"
          }]
        },
        {
          "label": "Marine sub-region(s)",
          "name": "marine_sub_regions",
          "type": "multiselect",
          "selected": [],
          "options": [
          {
            "text": "Bay of Biscay and Iberian Coast",
            "value": "ABI"
          },
          {
            "text": "Celtic Seas",
            "value": "ACS"
          },
          {
            "text": "Greater North Sea",
            "value": "ANS"
          },
          {
            "text": "North East Atlantic",
            "value": "ATL"
          },
          {
            "text": "Mediterranean Sea",
            "value": "MED"
          },
          {
            "text": "Western Mediterranean Sea",
            "value": "MWE"
          },
          {
            "text": "White Sea",
            "value": "WHI"
          }]
        },
        {
          "label": "Method(s) used",
          "name": "methods_used",
          "type": "multiselect",
          "selected": [],
          "required": "required",
          "options": [
          {
            "text": "Mechanical/Physical",
            "value": 0
          },
          {
            "text": "Chemical",
            "value": 1
          },
          {
            "text": "Biological",
            "value": 2
          },
          {
            "text": "Other",
            "value": 3
          }]
        }]
      },
      {
        "label": "Effectiveness of the measure(s)",
        "fields": [
        {
          "label": "",
          "name": "effectiveness_measure",
          "type": "select",
          "selected": [],
          "options": [
          {
            "text": "Eradicated",
            "value": 0
          },
          {
            "text": "Population decreasing",
            "value": 1
          },
          {
            "text": "Population stable",
            "value": 2
          },
          {
            "text": "Population still increasing ",
            "value": 3
          },
          {
            "text": "Unclear population trend",
            "value": 4
          }]
        }]
      },
      {
        "label": "Impacted non-targeted species",
        "type": "add",
        "name": "impacted_nontargeted_species_main",
        "main_header": "Observed negative impacts of the measure on non-targeted species",
        "description": "Provide the scientific name(s) of non-targeted species impacted negatively by the measure(s)",
        "fields": [
        {
          "label": "Impacted non-targeted species",
          "type": "text",
          "selected": [],
          "validation": "required",
          "name": "impacted_nontargeted_species",
          "inner_field":
          {
            "label": "Impact per species",
            "type": "text",
            "selected": "",
            "name": "impact_per_species",
            "validation": "required"
          }
        }]
      },
      {
        "label": "",
        "type": "checkbox",
        "name": "noimpacts",
        "selected": [],
        "options": [
        {
          "text": "No negative impacts observed",
          "value": true
        }],
        "fields": []
      }]
    },
    "additional_info":
    {
      "label": "Additional information (optional)",
      "name": "additional_info",
      "selected": "",
      "index": 13,
      "type": "textarea"
    }
  }]
}
)

export default table