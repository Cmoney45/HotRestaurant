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

app.listen(PORT, function() {
    console.log("Listening at PORT " + PORT);
  });

  var tableData = [
    {
      name: "Yoda",
      phone: 524151468684,
      email: "ydgiahud@umn.ed",
      uniqueID: 2000
    },
    {
      name: "Yoda",
      phone: 5468516416516,
      email: "ydgiahud@umn.ed",
      uniqueID: 2000
    },
    {
      name: "Yoda",
      phone: 564856516558,
      email: "ydgiahud@umn.ed",
      uniqueID: 2000
    }
  ];

var reservations = [];
var waitingList = [];

// Basic route that sends the user first to the AJAX Page
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.post("/tables", function(req, res) {
    // res.sendFile(path.join(__dirname, "tables.html"));
    console.log(req.body);
  });
  
  app.get("/reservedtables", function(req, res) {
    // res.sendFile(path.join(__dirname, "reservedtables.html"));
    return res.json(tableData);

  });

  app.get("/waitingList", function(req, res) {
    // res.sendFile(path.join(__dirname, "reservedtables.html"));
    return res.json(waitingList);

  });

  app.post("/reservedtables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newreservation = req.body;


    console.log(newreservation);
    if (tableData.length < 5) {
        tableData.push(newreservation);
    } else {
        waitingList.push(newreservation)
    }
});

  // Displays all characters
  app.get("/reserveform", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  