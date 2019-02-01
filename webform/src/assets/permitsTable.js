const permitsTable = () => ({
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
    "label": "Number of permits issued",
    "tooltip": "Number of permits issued in the calendar year",
    "name": "permits_number_main",
    "type": "add",
    "fields": [
    {
      "name": "subfield",
      "fields": [
      {
        "label": "Number of permits issued in the calendar year",
        "name": "permits_number",
        "type": "number",
        "selected": "",
        "required": "required"
      }]
    }]
  },
  {
    "label": "Number permits valid",
    "tooltip": "Number of permits valid in the calendar year",
    "name": "valid_permits_number_main",
    "type": "add",
    "fields": [
    {
      "name": "subfield",
      "fields": [
      {
        "label": "Number of permits valid in the calendar year",
        "name": "valid_permits_number",
        "type": "number",
        "selected": "",
        "required": "required"
      }]
    }]
  },
  {
    "label": "Permitted specimens - permits issued",
    "tooltip": "Total number or volume of permitted specimens corresponding to the permits issued in the calendar year",
    "name": "total_permited_speciments_main",
    "type": "add",
    "fields": [
    {
      "name": "subfield",
      "fields": [
      {
        "label": "Total number or volume of permitted specimens corresponding to the permits issued in the calendar year",
        "name": "total_permited_speciments",
        "type": "number",
        "selected": "",
        "required": "required",
        "validation": "required"
      },
      {
        "label": "Unit of measurement",
        "name": "total_permited_speciments_measurement",
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
    "label": "Permitted specimens - valid permits",
    "tooltip": "Total number or volume of permitted specimens corresponding to the valid permits",
    "name": "valid_total_permited_speciments_main",
    "type": "add",
    "fields": [
    {
      "name": "subfield",
      "fields": [
      {
        "label": "Total number or volume of permitted specimens corresponding to the permits issued in the calendar year",
        "name": "valid_total_permited_speciments",
        "type": "number",
        "selected": "",
        "required": "required",
        "validation": "required"
      },
      {
        "label": "Unit of measurement",
        "name": "valid_total_permited_speciments_measurement",
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

export default permitsTable
