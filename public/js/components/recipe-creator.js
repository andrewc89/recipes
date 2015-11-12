var React = require("react");
var request = require("superagent");

var IngredientSearch = require("./ingredient-search");
var Recipe = require("./recipe");

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

  updateName: function (el) {
    var recipe = this.state.recipe;
    recipe.name = el.target.value;
    this.setState({ recipe: recipe });
  },

  addIngredient: function (id) {
    var recipe = this.state.recipe;
    if (recipe.ingredients.map(function (ingredient) {
        return ingredient.id;
      }).indexOf(id) === -1) {
      recipe.ingredients.push(this.state.ingredients.find(function (ingredient) {
        return ingredient.id === id;
      }));
    }
    this.setState({ recipe: recipe });
  },

  render: function() {
    return (
      <div>
        <IngredientSearch ingredients={this.state.ingredients} addIngredient={this.addIngredient} />
        <label htmlFor="recipe-name">Recipe Name:</label>
        <input type="text" name="recipe-name" id="recipe-name" onChange={this.updateName}></input>
        <Recipe recipe={this.state.recipe}/>
      </div>
    );
  }
});

module.exports = RecipeCreator;
