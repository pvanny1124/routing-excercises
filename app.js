var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to the routing excercise!");
});

//"/r" is the root path
app.get("/r/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        dog: "Woof woof",
        cow: "Moo",
        pig: "Oink",
        cat: "I hate you"
    };
    
    res.send("The " + animal + " says '" + sounds[animal] + "'");
});

app.get("/r/repeat/:word/:count", function(req, res){
    var countString = req.params.count; // convert to int because route params are strings by default
    var countInt = parseInt(countString, 10); //second parameter for radix, meaning, what base you want the integer to be represented
    var word = req.params.word;
    var outputString = word;
    for(var i = 1; i < countInt; i++) outputString += " " + word;
    res.send(outputString);
});

//universal route. Place after every other route.
app.get("*", function(req, res){
   res.send("PAGE NOT FOUND"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("NOW SERVING APP");
});
