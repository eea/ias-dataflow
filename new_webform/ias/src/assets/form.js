const form = (country, formData) => ({
	tabs: {
		tab_0: {
			description: 'Information submitted in application of Article 24(1) of regulation (EU) No 1143/2014',
			form_fields: {
				CountryCode: {
					name: 'CountryCode',
					type: 'text',
					label: 'Member State',
					selected: country,
					disabled: true,
				},
				StartYear: {
					name: 'rep_period_from',
					type: 'text',
					label: 'Reporting period from (year)',
					selected: '2015-01-01',
					disabled: true,
				},
				EndYear: {
					name: 'rep_period_to',
					type: 'text',
					label: 'Reporting period to (year)',
					selected: '2018-12-31',
					disabled: true,
				}
			},
		},
		tab_1: {
			formData
		},
		tab_2: {

		},
		tab_3: {

		},
		tab_4: {

		}
	}
})

export default form