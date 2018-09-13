var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
  res.cookie("myFirstCookie", "looks Good");
  res.end("wow");
});

app.get("/removeCookie", function(req, res) {
  res.clearCookie("myFirstCookie");
  res.end("wow");
});
app.listen(1337, function() {
  console.log("on");
});
