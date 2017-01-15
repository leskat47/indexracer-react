var React = require('react');
var Calculator = require('../components/Calculator');
var Indices = require('../components/Indices')

// Build starting state
function domData(props) {
  var stateObj = {}
    // Make data for buttons that switch type of racing
    if (props.route.header === 'ProSolo') {
      stateObj.switchLink = '/';
      stateObj.switchButton = 'Solo';
    } else {
      stateObj.switchLink = '/prosolo';
      stateObj.switchButton = 'ProSolo';
    }
    // Get category data from data object as arrays for two selections
    stateObj.cats = Object.keys(Indices).map((index) =>
      index
    );
    stateObj.classes = [];
    stateObj.classes2 = [];
  return stateObj;
}

// React calculator container
var CalculatorContainer = React.createClass({
  getInitialState: function () {
    state = domData(this.props);
    state.compare = false; // Show or hide competitor comparison
    state.results = false; // Show or hide results box
    return state;
  },
  componentWillReceiveProps: function () {
    this.setState(domData(this.props));
  },
  handleShowCompare: function() {
    this.setState({compare: true});
  },
  handleChangeCategory: function(evt) {
    this.setState({classes: Object.keys(Indices[evt.target.value])});
  },
  handleChangeCompCategory: function(evt) {
    this.setState({classes2: Object.keys(Indices[evt.target.value])});
  },
  handleShowResults: function(evt) {
    console.log(this.state.time)
    if (this.state.classes && evt.target.value){
      console.log("IF")
      this.setState({results: "FIXME: Calc and show result here"});
    }
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
        onChangeCompCategory={this.handleChangeCompCategory}
        showResults={this.handleShowResults}
        cats={this.state.cats}
        classes={this.state.classes}
        classes2={this.state.classes2}
        results={this.state.results}
      />
    );
  },
});

module.exports = CalculatorContainer;
