port = 8000;
var express = require("express");
app = express();

var animalSounds = {
    "pig": "'Oink'",
    "cow": "'Moo'", 
    "dog": "'Woof Woof'",
    "bird": "'Squawk'",
    "platypus": "'Mi chiamo Perry'"
}

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
})
app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal.toLowerCase();
    var sound = animalSounds[animal];
    var string = `The ${animal} says ${sound}`;
    res.send(string);
})
app.get("/repeat/:string/:numTimes", function(req, res) {
    var string = req.params.string;
    var numTimes = req.params.numTimes;
    var sendString = "";
    for (var i = 0; i < numTimes; i++) {
        sendString += (string + " ");
    }
    res.send(sendString.trim());
})
app.get("*", function(req, res) {
    res.send("Sorry page not found.")
})

app.listen(port, 'localhost', function() {
    console.log("Server online at port " + port);
});