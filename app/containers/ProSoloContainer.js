var React = require('react');
var ProSolo = require('../components/ProSolo');

var ProSoloContainer = React.createClass({
  render: function() {
    return (
      <ProSolo
      header={this.props.route.header} />
    )
  }
});

module.exports = ProSoloContainer;
