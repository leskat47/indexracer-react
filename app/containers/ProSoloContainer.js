var React = require('react');
var Calculator = require('../components/Calculator');

var ProSoloContainer = React.createClass({
  render: function() {
    return (
      <Calculator
      header={this.props.route.header}
      switchLink="/" />
    )
  }
});

module.exports = ProSoloContainer;
