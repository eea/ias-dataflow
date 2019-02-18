import json

regions_file = open('./data/biogeographical_regions.json','r')
regions_list  = json.loads(regions_file.read())

countries = set()
result = {}

for row in regions_list:
    countries.add(row['country'])

for iso in countries:
    rows = []

    for row in regions_list:
        if row['country'] == iso and row['realm'] != 'marine':
            rows.append({'realm': row['realm'], 'name': row['name'], 'regionCode': row['regionCode']})
    country_regions = open('./data/biogeoghraphical_regions/'+iso+'_biogeographical_regions.json', 'w', encoding='utf-8')
    json.dump(rows, country_regions, ensure_ascii=False)
