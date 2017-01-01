var React = require('react');
var Calculator = require('../components/Calculator');

function domData(props) {
  var stateObj = {}
    if (props.route.header === 'ProSolo') {
      stateObj.switchLink = '/';
      stateObj.switchButton = 'Solo';
    } else {
      stateObj.switchLink = '/prosolo';
      stateObj.switchButton = 'ProSolo';
    }
  return stateObj;
}

var CalculatorContainer = React.createClass({
  getInitialState: function () {
    return (domData(this.props));
  },
  componentWillReceiveProps: function () {
    this.state = domData(this.props);
  },
  render: function() {
    return (
      <Calculator
        header={this.props.route.header}
        switchLink={this.state.switchLink}
        switchButton={this.state.switchButton}
      />
    );
  },
});

module.exports = CalculatorContainer;
