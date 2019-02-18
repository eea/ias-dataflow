# protected species vocabulary http://dd.eionet.europa.eu/vocabulary/art17_2018/HDspecies/view

import json
from pprint import pprint

input_file = open('./data/protected_species_export.json','r')

data = json.loads(input_file.read())

concepts = data["concepts"]

result = []

for x in concepts:
    result.append((x['@id'], x['prefLabel'][0]['@value']))

result.sort(key=lambda elem: elem[1])

output = []

for x in result:
    output.append({'id': x[0], 'label': x[1]})

output_file = open('./data/protected_species.json', 'w', encoding='utf-8')
json.dump(output, output_file, ensure_ascii=False)
