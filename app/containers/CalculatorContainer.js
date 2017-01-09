var React = require('react');
var Calculator = require('../components/Calculator');
var Indices = require('../components/Indices')

function domData(props) {
  var stateObj = {}
    if (props.route.header === 'ProSolo') {
      stateObj.switchLink = '/';
      stateObj.switchButton = 'Solo';
    } else {
      stateObj.switchLink = '/prosolo';
      stateObj.switchButton = 'ProSolo';
    }
    stateObj.indices = Indices;
    stateObj.cats = Object.keys(Indices).map((index) =>
      index
    );
    stateObj.classes = [];
  return stateObj;
}

var CalculatorContainer = React.createClass({
  getInitialState: function () {
    state = domData(this.props);
    state.compare = false;
    return state;
  },
  componentWillReceiveProps: function () {
    this.setState(domData(this.props));
  },
  handleShowCompare: function() {
    this.setState({compare: true});
  },
  handleChangeCategory: function(evt) {
    this.setState({classes: Object.keys(state.indices[evt.target.value])});
    console.log(Object.keys(this.state.indices[evt.target.value]));
  },
  render: function() {
    return (
      <Calculator
        header={this.props.route.header}
        switchLink={this.state.switchLink}
        switchButton={this.state.switchButton}
        compare={this.state.compare}
        onShowCompare={this.handleShowCompare}
        onChangeCategory={this.handleChangeCategory}
        cats={this.state.cats}
        classes={this.state.classes}
      />
    );
  },
});

module.exports = CalculatorContainer;
