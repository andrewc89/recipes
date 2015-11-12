var React = require("react");

var Recipe = require("./recipe");

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
        <input type="text" name="recipe-name" id="recipe-name" placeholder="Recipe name" onChange={this.props.updateRecipeName} value={this.props.recipe.name}/>
        <Recipe recipe={this.props.recipe}/>
        <button id="submit-button" onClick={this.props.submitRecipe} disabled={disabled}>Create</button>
      </div>
    );
  }
});

module.exports = RecipeForm;
