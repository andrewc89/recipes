var React = require("react");
var request = require("superagent");

var Recipes = React.createClass({
  getInitialState: function () {
    return {
      ingredients: []
    };
  },
  componentDidMount: function () {
    var self = this;
    request.get("/ingredients")
      .end(function (err, res) {
        self.setState({ ingredients: res.body });
      });
  },

  render: function () {
    console.log("render");
    return (
      <div>
      </div>
    );
  }
});

module.exports = Recipes;
