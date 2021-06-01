import json
from itertools import combinations

recipes = {}

with open('recipes.json') as json_file:
    json_data = json.load(json_file)
    temp = [];

    for item in json_data:
        for re in item['recipes']:
            re = list(map(int, re))
            re.sort();
            key = "".join(list(map((lambda x: chr(96+x)),re)))
            for i in range(1,9):
                keys = list(map(lambda x: "".join(x), list(combinations(key, i))))

                for k in keys:
                    if k in recipes:
                        recipes[k].add(int(item["ID"]))
                    else:
                        recipes[k] = set([int(item["ID"])])

for k, v in recipes.items():
    recipes[k] = sorted(list(map(int, list(v))))

with open('newRecipes.json', 'w') as outfile:
    json.dump(recipes, outfile, indent=4)