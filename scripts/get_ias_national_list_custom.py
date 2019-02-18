import csv
import json

input_file = open('./data/ias_national_list_custom.csv','r')

reader = csv.DictReader(input_file)

row_no = 0
countries = set()
records = []

for row in reader:
	if row_no != 0:
	    countries.add(row['country'])
	    records.append(row)
	row_no += 1

for iso in countries:
    rows = []

    for item in records:
        if item['country'] == iso:
            rows.append({'code': item['SpeciesCode'], 'cname': item['cName'], 'name': item['entryForWebform']})
    country_national_list = open('./data/national_lists/'+iso+'_speciesB.json', 'w', encoding='utf-8')
    json.dump(rows, country_national_list, ensure_ascii=False)
