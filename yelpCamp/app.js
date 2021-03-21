var request = require("request");
var express = require("express");
var app = express();
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var port = 8000;
var ip = "localhost";

//our pseudo database
var campgrounds = [
    {
        "name": "Salmon Creek",
        "img": "https://farm1.staticflickr.com/106/290596918_e6723f1479.jpg"
    },
    {
        "name": "Granite Hill",
        "img": "https://live.staticflickr.com/4076/4874694310_d276405537_b.jpg"
    }
]

app.get("/", function(req, res) {
    res.render("landing")
})
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
})
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
})
app.post("/campgrounds", function(req, res) {
    var newCampgroundName = req.body.newCampgroundName;
    var newCampgroundImg = req.body.newCampgroundImg;
    var newCampground = {
        "name": newCampgroundName,
        "img": newCampgroundImg
    }
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.listen(port, ip, function() {
    console.log("yelpCamp is up and running..");
})



