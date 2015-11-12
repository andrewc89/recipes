var express = require("express");
var ingredients = ["Nelson Sauvin", "Cascade", "Simcoe", "Crystal Malt", "Pale Malt"];


module.exports = {
  start: function() {
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
