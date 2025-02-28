import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import fs from "fs";
import { name } from "ejs";


// Feb 28, 2025
//  # add import axios and example


// Important Pathing stuff - if needed for static html, etc
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


// Createa the server
const app = express();
const port = 3000;

// API location for use with axios
const API_URL = "https://my.api-server.com";
// API auth (header style)
const yourBearerToken = "r4nd0m-T3xT-4nd-Numb3rz";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// adds the public/ directory needed for css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Starts the listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Serves the home page
app.get("/", (req, res) =>  {
  // for static html file (uses Pathing stuff above):
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

// POST using axios hitting an API

app.post("/edit", async (req, res) => {
  // assuming /edit/23 or some such ID was ther referring page
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/ENDPOINT_HERE/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

  res.render("index.ejs", {a, b});
});


// GET examples
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// GET hitting an API endpoint with axios
app.get("/", (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

