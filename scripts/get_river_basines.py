import csv
import json

input_file = open('./data/river_basins.csv','r')

fields = ("country", "name")
reader = csv.DictReader(input_file, fields)

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
            rows.append({'name': item['name']})
    country_rivers = open('./data/river_basins/'+iso+'_river_basins.json', 'w', encoding='utf-8')
    json.dump(rows, country_rivers, ensure_ascii=False)
