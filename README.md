# node-server-setup
Very basic node structure and initialization of express, body-parser, and ejs

Structure for the project is:

your_directory/
	index.js
	public/
		styles/
	`		style.css
	views/
		index.ejs
		about.ejs
		contact.ejs
		partials/
			header.ejs
			footer.ejs


				

USAGE:
Create a local directory and run: 
  % git init <enter>
  % git pull https://github.com/5voltfx/node-server-setup.git <enter>

Review the nodeSetup.csh file and make sure it has the packages you want.
To initialize npm and install the packages.  run:
  % ./nodeSetup.csh <enter>

That script also calls jsonAdd.py which inserts the 
  'type': 'module'
line into the json.

You can then run 

  % nodemon index.js <enter>

to start the server on localhost:3000 


