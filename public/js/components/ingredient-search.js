var React = require("react");

var IngredientSearch = React.createClass({
  getInitialState: function () {
    return {
      query: ""
    };
  },

  searchUpdated: function (el) {
    this.setState({ query: el.target.value });
  },

  handleClick: function (el) {
    this.props.addIngredient(el.id);
  },

  createIngredientElement: function (ingredient) {
    return (
      <div key={ingredient.id} className="ingredient-search-result">
        <span className="ingredient-name">{ingredient.name}</span>
        <span className="ingredient-select" onClick={this.handleClick.bind(this, ingredient)}>+</span>
      </div>
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
        <input type="text" id="ingredient-search-input" placeholder="Search for ingredients" onChange={this.searchUpdated}></input>
        <div id="search-results">
          {filteredIngredients}
        </div>
      </div>
    );
  }
});

module.exports = IngredientSearch;
