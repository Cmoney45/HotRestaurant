// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    //res.sendFile(path.join(__dirname, "tables.html"));
    res.json(reserved)
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});



const reserved = [{
    name: "Yoda",
    phoneNumber: 524151468684,
    email: "ydgiahud@umn.ed",
    UniqueID: 2000
},
{
    name: "Yoda",
    phoneNumber: 5468516416516,
    email: "ydgiahud@umn.ed",
    UniqueID: 2000
},
{
    name: "Yoda",
    phoneNumber: 564856516558,
    email: "ydgiahud@umn.ed",
    UniqueID: 2000
}];

const waiting = [];

app.post("/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;
    

    console.log(newreservation);

    reserved.push(newreservation);

    res.json(newreservation);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});