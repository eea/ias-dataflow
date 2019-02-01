const inspPermits = () => ({
    "label": "Permits for research",
    "fields": [
    {
        "label": "Year",
        "tooltip": "Calendar year",
        "name": "year",
        "type": "select",
        "selected": "",
        "options": [
        {
            "text": "2015",
            "value": 2015
        },
        {
            "text": "2016",
            "value": 2016
        },
        {
            "text": "2017",
            "value": 2017
        },
        {
            "text": "2018",
            "value": 2018
        }]
    },
    {
        "label": "Purpose of permit",
        "tooltip": "Purpose of permit",
        "type": "select",
        "options": [
        {
            "text": "Permits for research",
            "value": 0
        },
        {
            "text": "Permits for ex situ conservation",
            "value": 1
        },
        {
            "text": "Permits for scientific production and subsequent medicinal use to advance human health",
            "value": 2
        },
        {
            "text": "Permits for other activities after authorisation by the Commission (Article 9 of Regulation (EU) No 1143/2014)",
            "value": 3
        }],
        "selected": "",
        "name": "purpose_of_permit"
    },
    {
        "label": "Number of establishments",
        "tooltip": "Number of establishments subjected to the inspections",
        "name": "number_establishments_inspections_main",
        "type": "add",
        "fields": [
        {
            "name": "subfield",
            "fields": [
            {
                "label": "Number or volume of establishments corresponding to the permits held by the inspected establishments",
                "name": "number_establishments_inspections",
                "type": "number",
                "selected": "",
                "required": "required",
                "validation": "required"
            }]
        }]
    },
    {
        "label": "Permitted specimens - permits held by the inspected est.",
        "tooltip": "Number or volume of permitted specimens corresponding to the permits held by the inspected establishments",
        "name": "number_permitted_specimens_main",
        "type": "add",
        "fields": [
        {
            "name": "subfield",
            "fields": [
            {
                "label": "Number or volume of permitted specimens corresponding to the permits held by the inspected establishments",
                "name": "number_permitted_specimens",
                "type": "number",
                "selected": "",
                "required": "required",
                "validation": "required"
            },
            {
                "label": "Unit of measurement",
                "name": "number_permitted_specimens_measurement",
                "type": "select",
                "selected": "",
                "options": [
                {
                    "text": "Kg of seeds",
                    "value": "kg"
                },
                {
                    "text": "Number of specimen",
                    "value": "pcs"
                }]
            }]
        }]
    },
    {
        "label": "Inspected establishments non-compliant",
        "tooltip": "Number of inspected establishments deemed non-compliant with the conditions set out in the permits",
        "name": "establishments_non_compliant_main",
        "type": "add",
        "fields": [
        {
            "name": "subfield",
            "fields": [
            {
                "label": "Number of inspected establishments deemed non-compliant with the conditions set out in the permits",
                "name": "establishments_non_compliant",
                "type": "number",
                "selected": "",
                "required": "required",
                "validation": "required"
            }]
        }]
    },
    {
        "name": "number_speciments_held_by_non_compliant_establishments_main",
        "type": "add",
        "selected": "",
        "fields": [
        {
            "name": "subfield",
            "fields": [
            {
                "label": "Permitted specimens - permits held by the inspected est. non-compliant",
                "tooltip": "Number or volume of permitted specimens corresponding to the permits held by the inspected establishments deemed non-compliant with the conditions set out in the permits",
                "name": "number_speciments_held_by_non_compliant_establishments",
                "type": "number",
                "selected": "",
                "required": "required",
                "validation": "required"
            },
            {
                "label": "Unit of measurement",
                "name": "measurement_noncompliant",
                "type": "select",
                "selected": "",
                "options": [
                {
                    "text": "Kg of seeds",
                    "value": "kg"
                },
                {
                    "text": "Number of specimen",
                    "value": "pcs"
                }]
            }]
        }]
    }]
})

export default inspPermits