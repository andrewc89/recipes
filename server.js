var express = require("express");
var livereload = require("livereload");
var ingredients = [
  { id: "0", name: "Nelson Sauvin" },
  { id: "1", name: "Cascade" },
  { id: "2", name: "Simcoe" },
  { id: "3", name: "Crystal Malt" },
  { id: "4", name: "Pale Malt" }
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
