var React = require("react");

var IngredientSearchInput = React.createClass({
  render: function () {
    return (
      <input type="text" id="ingredient-search-input" placeholder="Search for ingredients" onChange={this.props.searchUpdated}></input>
    );
  }
});

module.exports = IngredientSearchInput;
