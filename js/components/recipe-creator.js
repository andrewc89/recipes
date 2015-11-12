var React = require("react");
var request = require("superagent");

var RecipeForm = require("./recipe-form");
var IngredientSearch = require("./ingredient-search");

var RecipeCreator = React.createClass({
  getInitialState: function () {
    return {
      ingredients: [],
      recipe: {
        name: "",
        ingredients: []
      }
    };
  },

  componentDidMount: function () {
    var self = this;
    request.get("/ingredients")
      .end(function (err, res) {
        self.setState({ ingredients: res.body });
      });
  },

  updateRecipeName: function (name) {
    var recipe = this.state.recipe;
    recipe.name = name;
    this.setState({ recipe: recipe });
  },

  getIngredient: function (id) {
    return this.state.ingredients.find(function (ingredient) {
      return ingredient.id === id;
    });
  },

  recipeContainsIngredient: function (ingredientId) {
    return this.state.recipe.ingredients.map(function (ingredient) {
      return ingredient.id;
    }).indexOf(ingredientId) > -1;
  },

  addIngredient: function (ingredientId) {
    var recipe = this.state.recipe;
    if (!this.recipeContainsIngredient(ingredientId)) {
      recipe.ingredients.push(this.getIngredient(ingredientId));
    }
    this.setState({ recipe: recipe });
  },

  removeIngredient: function (ingredientId) {
    var recipe = this.state.recipe;
    var ingredients = recipe.ingredients.filter(function (ingredient) {
      return ingredient.id != ingredientId;
    })
    recipe.ingredients = ingredients;
    this.setState({ recipe: recipe });
  },

  resetRecipe: function () {
    var recipe = this.state.recipe;
    recipe.name = "";
    recipe.ingredients = [];
    this.setState({
      recipe: recipe,
      recipeNameInput: ""
    });
  },

  submitRecipe: function () {
    var self = this;
    request.post("/recipes")
      .send(this.state.recipe)
      .set("Accept", "application/json")
      .end(function (err, res) {
        if (err) {
          throw new Error(error);
        }
        self.resetRecipe();
      });
  },

  render: function() {
    return (
      <div>
        <RecipeForm recipe={this.state.recipe} updateRecipeName={this.updateRecipeName} submitRecipe={this.submitRecipe} removeIngredient={this.removeIngredient} />
        <IngredientSearch ingredients={this.state.ingredients} addIngredient={this.addIngredient} />
      </div>
    );
  }
});

module.exports = RecipeCreator;
