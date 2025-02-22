#!/usr/bin/env python3

import json

ADD_ME = '"type": "modules",'

with open('package.json', 'r') as openfile:
    # Reading from json file
    json_object = json.load(openfile)


tmpDict = {}

for key in json_object:
	tmpDict[key] = json_object[key]
    # Add the 'type': 'module' to the json
	if key == 'main':
		tmpDict['type'] = 'module'


with open("package.json", 'w') as file:
    json.dump(tmpDict, file, indent=4)


