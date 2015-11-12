var React = require("react");

var RecipeIngredient = React.createClass({
  handleClick: function (ingredientId) {
    this.props.removeIngredient(ingredientId);
  },

  render: function () {
    return (
      <div className="recipe-ingredient">
        <span className="ingredient-deselect" onClick={this.handleClick.bind(this, this.props.ingredient.id)}>-</span>
        <span key={this.props.ingredient.id} className="ingredient-selected test">{this.props.ingredient.name}</span>
      </div>
    );
  }
});

module.exports = RecipeIngredient;
