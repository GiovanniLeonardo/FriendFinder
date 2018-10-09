//required for friends data source
var friends = require('../data/friends.js');

// Routes and export
module.exports = function(app){

	// Get route to display a JSON of all possible friends
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

// Post route to /api/friends. This will handle incoming survey results and handle the friends compatibility logic.
    app.post('/api/friends', function(req, res) {
        
        // Create object to compare friends and hold the best match
        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 100 // To track the difference between user answers
        };
        //console.log(req.body);//display result in terminal

        // Take in friends result data from survery and parse it.
        var userData = req.body;
        var friendName = userData.name;
        var friendPhoto = userData.photo;
        var friendScores = userData.scores; // Take the score from user Data
        
        // Calculate difference between friends
        var userTotalDifference = 0;

        
        // For loop through friends array for each friend
        for (var i = 0; i< friends.length; i++) {
            // console.log(friends[i].name);
            
            userTotalDifference = 0;

            // For loop through each 'friend' and their scores
            for (var j = 0; j<friends[i].scores[j]; j++) {

                // Do a calculation of the difference in scores and tally them up to get the total Difference between friends
                userTotalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));
            
                // If the tally of the differences is < then the differences of the current best match
                if (userTotalDifference <= friendMatch.friendDifference){

                    // reset friend best match to the new user entry of friend
                    friendMatch.name = friends[i].name;
                    // Match friends photo if match
                    friendMatch.photo = friends[i].photo;
                    //total difference 
                    friendMatch.friendDifference = userTotalDifference;
                }
            
        }
    }
        // Push the friends data to be saved. 
        friends.push(userData);
        // Return the user's Match through a JSON to be displayed back to the App. 
        res.json(friendMatch);

});
}