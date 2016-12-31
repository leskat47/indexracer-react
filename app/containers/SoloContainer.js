var React = require('react');
var Solo = require('../components/Solo');

var SoloContainer = React.createClass({
  render: function() {
    return (
      <Solo
      header={this.props.route.header} />
    )
  }
});

module.exports = SoloContainer;
