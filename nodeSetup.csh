#!/usr/bin/env csh


echo "Setting up Node Server"

echo "Initializing npm"
npm init -y

# Add whatever you need here
echo "Installing packages: express body-parser ejs"
npm i express body-parser ejs


echo "Modifying the package.json file"
./jsonAdd.py


echo "Complete."
