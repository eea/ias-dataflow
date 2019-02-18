# protected habitats vocabulary http://dd.eionet.europa.eu/vocabulary/art17_2018/habitats/view

import json
from pprint import pprint

input_file = open('./data/protected_habitats_export.json','r')

data = json.loads(input_file.read())

concepts = data["concepts"]

result = []

for x in concepts:
    result.append({'id': x['@id'], 'label': x['prefLabel'][0]['@value']})

output_file = open('./data/protected_habitats.json', 'w', encoding='utf-8')
json.dump(result, output_file, ensure_ascii=False)
