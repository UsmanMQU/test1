var http = require("http");
var path = require("path");
var express = require("express");

var app = express();
var router = express.Router();

app.get("/", function(req, res) {
  res.end("hey there");
});

app.listen(1337, function() {
  console.log("I am listening....");
});
