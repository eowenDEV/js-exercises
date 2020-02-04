var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

// route parameters
app.get("/r/:subredditName", function(req, res) {
    var subredditName = req.params.subredditName;
    res.send("Welcome to the " + subredditName.toUpperCase() +" subreddit");
});
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("Welcome to the comments page");
});


// catch-all route
app.get("*", function(req, res) {
    res.send("You are a STAR!");
});

// Tell Express to listen for request (start server)
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server has started!");
});