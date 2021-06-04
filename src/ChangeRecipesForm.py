import json

recipes = {};

with open('recipes.json') as json_file:
    json_data = json.load(json_file)

    for i in json_data:
        recipes[i["ID"]] = {
            "name": i["Item"].strip(),
            "recipes": i["recipes"]
        }

with open('recipes_v2.json', 'w') as outfile:
    json.dump(recipes, outfile, indent=4)
