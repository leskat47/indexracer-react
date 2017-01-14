var React = require('react');
var Calculator = require('../components/Calculator');
var Indices = require('../components/Indices')

// Set starting state
function domData(props) {
  var stateObj = {}
    // Make buttons to switch type of racing
    if (props.route.header === 'ProSolo') {
      stateObj.switchLink = '/';
      stateObj.switchButton = 'Solo';
    } else {
      stateObj.switchLink = '/prosolo';
      stateObj.switchButton = 'ProSolo';
    }
    // Get data from data object
    stateObj.indices = Indices;
    stateObj.cats = Object.keys(Indices).map((index) =>
      index
    );
    stateObj.cats2 = Object.keys(Indices).map((index) =>
      index
    );
    stateObj.classes = [];
    stateObj.classes2 = [];
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
  },
  handleChangeCategory2: function(evt) {
    this.setState({classes2: Object.keys(state.indices[evt.target.value])});
    console.log("2")
    console.log(Object.keys(state.indices[evt.target.value]));
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
        onChangeCategory2={this.handleChangeCategory2}
        cats={this.state.cats}
        cats2={this.state.cats2}
        classes={this.state.classes}
        classes2={this.state.classes2}
      />
    );
  },
});

module.exports = CalculatorContainer;
