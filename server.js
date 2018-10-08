// Required Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Initiate Express Application
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParse to manage data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./app/public")); // For static files

//required for routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Initiate server listener
app.listen(PORT, function() {
    console.log('Server listening on PORT: ' + PORT + '. Go to: http://localhost:'+ PORT);
});