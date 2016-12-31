var React = require('react');
var Calculator = require('../components/Calculator');

var SoloContainer = React.createClass({
  render: function() {
    return (
      <Calculator
      header={this.props.route.header}
      switchLink="/prosolo" />
    )
  }
});

module.exports = SoloContainer;
