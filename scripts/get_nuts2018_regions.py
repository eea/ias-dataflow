# nuts regions vocabulary http://dd.eionet.europa.eu/vocabulary/common/nuts/json

import json
import csv
from pprint import pprint

def firstTwo(string):
    return string[:2]

input_file = open('./data/nuts2018.csv','r')
nuts_dict = csv.DictReader(input_file)

nuts_items = []
country_codes = set()

result = {}

for item in nuts_dict:
    nuts_items.append(item)

for item in nuts_items:
    country_codes.add(firstTwo(item['Notation']))

country_codes_list = sorted(country_codes)

for item in country_codes_list:
    rows = []
    for x in nuts_items:
        if x['Notation'].startswith(item):
            rows.append({'id': x['Notation'], 'label': x['label']})
    result[item] = rows

for item in country_codes_list:
    nuts_regions_file = open('./data/nuts_regions/'+item+'_nuts_regions.json', 'w', encoding='utf-8')
    json.dump(result[item], nuts_regions_file, ensure_ascii=False)
