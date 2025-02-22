import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { name } from "ejs";

// Important Pathing stuff - if needed
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


// Createa the server
const app = express();
const port = 3000;


// adds the public/ directory needed for css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Starts the listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Serves the home page
app.get("/", (req, res) =>  {
  // for html file (uses Pathing stuff above):
  // res.sendFile(__dirname + "/public/index.html");

  // for ejs:
  let mode = "create";
  let dog = "wes";
  res.render("index.ejs", {mode, dog});
});

/* ***************************************************
^^^   BOILERPLATE CONTENTS ABOVE   ^^^
npm init
add: "type": "module" to package.json
npm i express body-parser ejs
create: /public/
          styles/
          img/
          etc/
create: /views/           // holds .ejs files  
          partials/       // holds header/footer.ejs files  etc.
****************************************************** */


// POST examples
app.post("/new", (req, res) => {
  var myObject = {}
  res.render("index.ejs", myObject);
});

app.post("/edit", (req, res) => {
  var a = req.body.variable1; 
  var b = req.body.variable2; 
  res.render("index.ejs", {a, b});
});


// GET examples
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

