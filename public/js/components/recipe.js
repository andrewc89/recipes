var React = require("react");

var Recipe = React.createClass({

  createIngredientElement: function (ingredient) {
    return (
      <span key={ingredient.id} className="ingredient-selected">{ingredient.name}</span>
    );
  },

  render: function () {
    var ingredientElements = this.props.recipe.ingredients.map(this.createIngredientElement);
    return (
      <div>
        <h2>{this.props.recipe.name}</h2>
        {ingredientElements}
      </div>
    );
  }
});

module.exports = Recipe;
