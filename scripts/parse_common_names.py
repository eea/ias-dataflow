import csv
import json

species_file = open('./data/union_list.json','r')
species_list  = json.loads(species_file.read())

country_codes = [
    "BG",
    "HR",
    "CZ",
    "DK",
    "NL",
    "UK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "MT",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE"
]

result = []
delimiter = ";"

for iso in country_codes:
    iso_input = open('./data/common_names_inputs/'+iso+'_common_names.csv','r')
    common_names_dict = csv.DictReader(iso_input)
    common_names = []

    for item in common_names_dict:
        common_names.append(item)

    for row in species_list:
        tmp_names = set()
        for item in common_names:
           if item['eu_name'].startswith(row['speciesName']):
                tmp_names.add(item['common_name'])
        row[iso+'_CommonName'] = delimiter.join(tmp_names)
        result.append(row)

print(result)

species_list_section_A = open('./data/species_list_a.json', 'w', encoding='utf-8')
json.dump(species_list, species_list_section_A, ensure_ascii=False)

#for item in country_codes:
#    common_names_lang_file = open('./data/common_names_outputs/'+item+'_common_names.json', 'w', encoding='utf-8')
#    json.dump(result[item], nuts_regions_file, ensure_ascii=False)

