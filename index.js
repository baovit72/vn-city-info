var express = require("express");
var app = express();
var fs = require("fs");

//Get all provinces
app.get("/tinh/", function(req, res) {
  fs.readFile(__dirname + "/JsonDB/" + "tinh_new", "utf8", function(err, data) {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.end(data);
  });
});
//Get districts by province id
app.get("/tinh/:id", function(req, res) {
  fs.readFile(
    __dirname +
      "/JsonDB/QuanHuyen/" +
      (req.params.id < 10 ? "0" + req.params.id : req.params.id) +
      "_new",
    "utf8",
    function(err, data) {
      console.log(data);
      res.header("Content-Type", "application/json; charset=utf-8");
      res.end(data);
    }
  );
});
//Get wards by district id
app.get("/huyen/:id", function(req, res) {
  fs.readFile(
    __dirname +
      "/JsonDB/XaPhuong/" +
      (req.params.id < 100 ? (req.params.id < 10 ? "00" : "0") : "") +
      req.params.id +
      "_new",
    "utf8",
    function(err, data) {
      res.header("Content-Type", "application/json; charset=utf-8");
      res.end(data);
    }
  );
});
var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
