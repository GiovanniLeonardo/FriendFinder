// Dependencies
// var express = require("express");
var path = require("path");


//  ROUTING
module.exports = function(app) {
// GET route to /survey to display the survey page 

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.hmtl"))
// });

app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// If no match Default catch-all route that leads to home page
//app.get('*', function(req, res) {
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});
};
//export routes
// module.exports = app
