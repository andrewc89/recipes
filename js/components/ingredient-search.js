var React = require("react");

var IngredientSearchInput = require("./ingredient-search-input");
var IngredientSearchResult = require("./ingredient-search-result");

var IngredientSearch = React.createClass({
  getInitialState: function () {
    return {
      query: ""
    };
  },

  searchUpdated: function (el) {
    this.setState({ query: el.target.value });
  },

  createIngredientElement: function (ingredient) {
    return (
      <IngredientSearchResult ingredient={ingredient} handleClick={this.props.addIngredient} key={ingredient.id} />
    );
  },

  getFilteredIngredients: function () {
    var query = this.state.query.toLowerCase();
    if (!query) {
      return this.props.ingredients;
    }
    return this.props.ingredients.filter(function (ingredient) {
      return ingredient.name.toLowerCase().search(query) != -1;
    });
  },

  render: function () {
    var filteredIngredients = this.getFilteredIngredients().map(this.createIngredientElement);
    return (
      <div id="ingredient-search">
        <h3>Ingredients:</h3>
        <IngredientSearchInput searchUpdated={this.searchUpdated} />
        <div id="search-results">
          {filteredIngredients}
        </div>
      </div>
    );
  }
});

module.exports = IngredientSearch;
