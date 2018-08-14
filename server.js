// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create instance of express app
var app = express();

// Routes - points the server toi a series of route files
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// Sets Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// process.env.PORT lets the port be set by Heroku
// also establishes the intial port to use...
var PORT = process.env.PORT || 3000;

apiRoutes(app);
htmlRoutes(app);

// Listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});