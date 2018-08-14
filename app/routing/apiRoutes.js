module.exports = function(app) {
    var friendsArr = require("../data/friends.js");

    app.get("/api/friends", function(req, res) {
        return res.json(friendsArr.friends);

    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        friendsArr.friends.push(newFriend);
        res.json(friendsArr.friends);

    });

}