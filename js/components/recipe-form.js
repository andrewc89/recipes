var React = require("react");

var Recipe = require("./recipe");
var RecipeNameInput = require("./recipe-name-input");

var RecipeForm = React.createClass({
  buttonDisabled: function () {
    var recipe = this.props.recipe;
    return !recipe.name || recipe.ingredients.length === 0;
  },

  render: function() {
    var disabled = this.buttonDisabled();
    return (
      <div id="recipe-form">
        <h1>New Recipe</h1>
        <RecipeNameInput handleUpdate={this.props.updateRecipeName} recipeName={this.props.recipe.name} />
        <Recipe recipe={this.props.recipe} removeIngredient={this.props.removeIngredient}/>
        <button id="submit-button" onClick={this.props.submitRecipe} disabled={disabled}>Create</button>
      </div>
    );
  }
});

module.exports = RecipeForm;
