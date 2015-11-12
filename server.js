var express = require("express");
var livereload = require("livereload");
var ingredients = [
  { id: "0", name: "Nelson Sauvin" },
  { id: "0", name: "Cascade" },
  { id: "0", name: "Simcoe" },
  { id: "0", name: "Crystal Malt" },
  { id: "0", name: "Pale Malt" }
];

module.exports = {
  start: function() {
    livereload.createServer().watch("public/dev.js");
    var app = express();
    app.use(express.static("public"));
    app.get("/ingredients", function (req, res) {
      res.send(ingredients);
    });
    app.post("/recipes", function (req, res) {
      res.send("Recipe saved! (not really)");
    });
    app.listen("9000");
  }
};
