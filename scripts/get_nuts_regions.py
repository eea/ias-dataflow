# nuts regions vocabulary http://dd.eionet.europa.eu/vocabulary/common/nuts/json

import json
from pprint import pprint

def firstTwo(string):
    return string[:2]

input_file = open('./data/nuts_regions.json','r')

data = json.loads(input_file.read())

concepts = data["concepts"]
country_codes = set()

result = {}

for item in concepts:
    country_codes.add(firstTwo(item['@id']))

country_codes_list = sorted(country_codes)

for item in country_codes_list:
    rows = []
    for x in concepts:
        if x['@id'].startswith(item):

            rows.append({'id': x['@id'], 'label': x['prefLabel'][0]['@value']})
    result[item] = rows


for item in country_codes_list:
    nuts_regions_file = open('./data/nuts_regions/'+item+'_nuts_regions.json', 'w', encoding='utf-8')
    json.dump(result[item], nuts_regions_file, ensure_ascii=False)

#nuts_regions_file = open('./data/nuts_regions_small.json', 'w', encoding='utf-8')

#json.dump(result, nuts_regions_file, ensure_ascii=False)
