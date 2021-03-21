var ip = "localhost", port = 8000;
var request = require("request");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
})

app.get("/results", function(req, res) {
    var search = req.query.search;
    request(`http://www.omdbapi.com/?s=${search}&plot=full&apikey=thewdb`, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            data = data["Search"];
            res.render("results", {data:data});
        }
    })
})

app.listen(port, ip, function() {
    console.log("Movie App up and running...");
});