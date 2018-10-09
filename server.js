// Required Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Tell node that we are creating an "express" server Application
var app = express();
// Sets an initial port. Will be used later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./app/public")); // For static files

// Routes: these routes point the server to a series of "route" files.
// These routes give our server a 'map' of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Initiate server listener to "start" our server
app.listen(PORT, function() {
    console.log('Server listening on PORT: ' + PORT + '. Go to: http://localhost:'+ PORT);
});