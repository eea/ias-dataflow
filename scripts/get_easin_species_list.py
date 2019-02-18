#import request
import csv
import json

#species_url = "https://easin.jrc.ec.europa.eu/api/cat/term/all"

#response = requests.get(species_url)
#results = response.json()
#species = results["results"]
input_file = open('./data/EASIN.Species.Catalogue.v7.1.csv','r')

fields = ("code", "name", "terrestrial", "freshwater", "marine", "oligohaline", "status", "eu_concern")

reader = csv.DictReader(input_file, fields)
species_list = open('./data/species_list_b.json', 'w', encoding='utf-8')

row_no = 0

species_list.write('[\n')

for row in reader:
	if row_no != 0:
		json.dump(row, species_list, ensure_ascii=False)
		species_list.write(',\n')
	row_no += 1

species_list.write(']\n')