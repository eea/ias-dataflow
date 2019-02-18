# marine subregions vocabulary http://dd.eionet.europa.eu/vocabulary/msfd/regions/view

import json
from pprint import pprint

input_file = open('./data/marine_subregions.json','r')

data = json.loads(input_file.read())

country_codes = set()

result = {}

for item in data:
    iso2_list = item["countries"].split(";")
    for country in iso2_list:
        country_codes.add(country)

country_codes_list = sorted(country_codes)

for item in country_codes_list:
    rows = []
    for x in data:
        if item in x['countries']:
            rows.append({'id': x['id'], 'label': x['label']})
    result[item] = rows


for item in country_codes_list:
    marine_subregions_file = open('./data/marine_subregions/'+item+'_marine_subregions.json', 'w', encoding='utf-8')
    json.dump(result[item], marine_subregions_file, ensure_ascii=False)

