var React = require("react");

var RecipeIngredient = require("./recipe-ingredient");

var Recipe = React.createClass({
  createIngredientElement: function (ingredient) {
    return (
      <RecipeIngredient ingredient={ingredient} key={ingredient.id} removeIngredient={this.props.removeIngredient} />
    );
  },

  render: function () {
    var ingredientElements = this.props.recipe.ingredients.map(this.createIngredientElement);
    return (
      <div id="recipe">
        <h2>{this.props.recipe.name}</h2>
        {ingredientElements}
      </div>
    );
  }
});

module.exports = Recipe;
