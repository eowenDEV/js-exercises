var express = require("express");
var app = express();

// ROUTES
app.get("/", function(req, res) {
    res.send("Hi, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sound = "";
    switch(animal) {
        case "pig": 
            sound = "'Oink!'";
            break;
        case "cow": 
            sound = "'Mooooo'";
            break;
        case "dog": 
            sound = "'Woof Woof!'"
            break;
    }
    res.send("The "+animal+" says "+sound);
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word.toLowerCase();
    var number = parseInt(req.params.number);
    var message = "";
    for(var i = 0; i < number; i++) {
        message =  message.concat(" ",word);
    }
    res.send(message);
});

app.get("*",function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Server started");
});