var React = require("react");

var IngredientSearchResult = React.createClass({
  handleClick: function (ingredient) {
    this.props.handleClick(ingredient);
  },

  render: function () {
    return (
      <div className="ingredient-search-result">
        <span className="ingredient-select" onClick={this.handleClick.bind(this, this.props.ingredient.id)}>+</span>
        <span className="ingredient-name">{this.props.ingredient.name}</span>
      </div>
    );
  }
});

module.exports = IngredientSearchResult;
