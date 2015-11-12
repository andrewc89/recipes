var React = require("react");

var RecipeNameInput = React.createClass({
  inputChanged: function (el) {
    this.props.handleUpdate(el.target.value);
  },
  render: function () {
    return (
      <input type="text" name="recipe-name" id="recipe-name" placeholder="Recipe name" onChange={this.inputChanged} value={this.props.recipeName}/>
    );
  }
});

module.exports = RecipeNameInput;
