//required for friends data
var friends = require('../data/friends.js');

// Routes and export
module.exports = function(app){

	// Get route to display a JSON of all possible friends
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

// Post route to /api/friends. This will handle incoming survey results and handle the friends compatibility logic.
    app.post('/api/friends', function(req, res) {
        
        
        // Take in friends result from survery and parse it.
        var userData = req.body;
        var friendName = userData.name;
        var friendPhoto = userData.photo;
        var friendScores = userData.scores;

        var friendTotalDifference = 0;

        // Create object to compare friends and hold the best match
        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };


        // Run through the loop of all friends in the array
        for (var i = 0; i< friends.length; i++) {
            console.log(friends[i].name);
            friendTotalDifference = 0;

            // Run through each friend and their scores
            for (var j = 0; j<friends[i].scores[j]; j++) {

                // Do a calculation of the difference in scores and tally them up to get the totalDifference
                friendTotalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));
            
                // If the tally of the differences is < then the differences of the current best match
                if (friendTotalDifference <= friendMatch.friendDifference){

                    // reset friend best match to the new user entry of friend
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = friendTotalDifference;
                }
            
        }
    }
        // Push the friends data to be saved. 
        friends.push(userData);
        // Return the user's Match through a JSON to be displayed by the HTML page. 
        res.json(friendMatch);

});
}