var React = require("react");
var request = require("superagent");

var Recipes = React.createClass({
  getInitialState: function () {
    return {
      ingredients: [],
      query: ""
    };
  },
  componentDidMount: function () {
    var self = this;
    request.get("/ingredients")
      .end(function (err, res) {
        self.setState({ ingredients: res.body });
      });
  },

  searchUpdated: function (el) {
    this.setState({ query: el.target.value });
  },

  createIngredientElement: function (ingredient) {
    return (
      <span key={ingredient.id} className="ingredient">{ingredient.name}</span>
    );
  },

  getFilteredIngredients: function () {
    var query = this.state.query.toLowerCase();
    if (!query) {
      return this.state.ingredients;
    }
    return this.state.ingredients.filter(function (ingredient) {
      return ingredient.name.toLowerCase().search(query) != -1;
    });
  },

  render: function () {
    console.log("render");
    var filteredIngredients = this.getFilteredIngredients().map(this.createIngredientElement);
    return (
      <div>
        <input type="text" id="ingredient-search" onChange={this.searchUpdated}></input>
        <div id="search-results">
          {filteredIngredients}
        </div>
      </div>
    );
  }
});

module.exports = Recipes;
