var form = {

  country: {
    tables: [{
        name: 'partyname',
        type: 'text',
        label: 'Contracting Party',
        selected: '',
      },
      {
        name: 'rep_period_from',
        type: 'date',
        label: 'Reporting period from D/M/Y',
        selected: '',
      },
      {
        name: 'rep_period_to',
        type: 'date',
        label: 'Reporting period to D/M/Y',
        selected: '',
      },
      {
        name: 'region',
        type: 'select',
        label: 'Region',
        selected: '',
      },
    ]
  },

  content: {

    label: 'Baseline of region ',
    data: {
      table: {
        pollutants: []
      },
    }

  }

}
export default form
