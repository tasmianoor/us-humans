var express = require("express");
var engines = require("consolidate");
var app = express();

app.engine ("html", engines.mustache);
app.set("view engine", "html");

app.use(express.static("public"));

app.get("/", function(req, res){
        res.render("index");
        });

app.get("/events", function(req, res){
        res.render("events");
        });

app.get("/about", function(req, res){
        res.render("about");
        });


app.get("*", function(req,res){
    res.send("Nonexistent route!")
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Serving");
    
})