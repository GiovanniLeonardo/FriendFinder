// // // Dependencies
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");
// var routes = express.Router();
// var friends = require("../data/friends");



// // // create bodyParse to parse data from browser
// routes.use(bodyParser.urlencoded({ extended: true }));
// routes.use(bodyParser.json());

// module.exports = function(app) {
// // // Get route to display a JSON of all possible friends
// app.get('/api/friends', function(req, res){
//      res.json(friends);
// });

// // // Post route to /api/friends. This will handle incoming survey results and handle the friends compatibility logic.
// app.post('/api/friends', function(req, res){
//     var newFriend = req.body;

//     friends.push(newFriend);

//     res.json(newFriend)
// })
// // Export routes
// module.exports = routes


var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // user input

    var myMatch = {
        name: "",
        photo: "",
        difference: 0
      };
    var userData = req.body;
    var userResponse = userData.scores;
    var totalDifference = 1000;
    // calculate friend match
     

        for ( var i = 0; i <friends.length; i++) {

        var totalDifference = 0;
        for ( var j = 0; j < userResponse.length; j++) {
            totalDifference += Math.abs(friends[i].scores[j] - userResponse[j]);
        console.log('difference = ' + difference);
        if (totalDifference <= myMatch.difference) {
            
            myMatch.name = friends[i].name;
            myMatch.photo = friends[i].photo;
            myMatch.difference = totalDifference;
            }

        }
    }
    friends.push(userData);
    res.json(myMatch);
  });
}


    // var myMatch = {
    //   name: "",
    //   photo: "",
    //   difference: 1000
    // };

    //console.log(req.body); //Results of submit form
    // var userData = req.body;
    //var userName = userData.name;
    // var userScore = userData.score;
    // var totalDifference = 0;
    
    //console.log(userScore);

    //loop thru list of friends
    // for (i = 0; i < friends.length; i++) {
              
      //for reach friend, calculate totalDifference
    //   for (j = 0; j < userScore.length; j++) {
        //calculate absolute difference between what's in friends array from data submitted form
        // totalDifference += Math.abs(userScore[j] - friends[i].score[j]);
        
        //if there is best match then friend array match gets put into myMatch array
//         if (totalDifference <= myMatch.difference) {
//           myMatch.name = friends[i].name;
//           myMatch.photo = friends[i].photo;
//         }
//       }
//     }

//     friends.push(userData); //Add to friends array
//     console.log(myMatch); //Console log to screen
//     res.json(myMatch);  //Output to htmp by calling modal
//   });

// };