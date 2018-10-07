// Required Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
// var apiRoutes = require("./app/routing")
// Initiate Express Application
var app = express();
var PORT = process.env.PORT || 8080;

// BodyParse to manage data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./app/public"));

//use require to manage static routes
// app.use(require('./app/routing/apiRoutes'));
// app.use(require('./app/routing/htmlRoutes'));
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// Error handler
// app.use(function(reg, res, next) {
//     var error = new Error('System Error..');
//     error.status =404;
//     next(error);
    
// })

// Initiate server listener
app.listen(PORT, function() {
    console.log('Server listening on PORT: ' + PORT + '. Go to: http://localhost:'+ PORT);
});
