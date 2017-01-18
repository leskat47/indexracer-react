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

function calcResults(stt) {
  if (stt.time && stt.time2) {
    var idxTime = Indices[stt.category][stt.class];
    var idxTime2 = Indices[stt.category2][stt.class2];
    if (idxTime > idxTime2) {
      return 'You won by ' + (idxTime - idxTime2).toFixed(3);
    } else if (idxTime2 > idxTime) {
      return 'Sorry, you lost by ' + (idxTime2 - idxTime).toFixed(3);
    } else {
      return "It's a tie!";
    }
  } else if (stt.time && stt.class2) {
    return "Your competitor will need greater than " + (stt.time/Indices[stt.category2][stt.class2]).toFixed(3) + " to win.";
  } else if (stt.time2 && stt.class) {
    return "You will need greater than " + (stt.time2/Indices[stt.category][stt.class]).toFixed(3) + " to win.";
  } else {
    return "";
  }
}
// React calculator container
var CalculatorContainer = React.createClass({
  getInitialState: function () {
    var state = domData(this.props);
    state.compare = false; // Show or hide competitor comparison
    state.results = ""; // Show or hide results box
    state.time = "";
    state.time2 = "";
    return state;
  },
  componentWillReceiveProps: function () {
    this.setState(domData(this.props));
  },
  handleShowCompare: function() {
    this.setState({compare: true});
  },
  handleChangeCategory: function(evt) {
    this.setState({category: evt.target.value});
    this.setState({classes: Object.keys(Indices[evt.target.value])});
  },
  handleChangeCompCategory: function(evt) {
    this.setState({category2: evt.target.value});
    this.setState({classes2: Object.keys(Indices[evt.target.value])});
  },
  handleChangeClass: function(evt) {
    this.setState({class: evt.target.value}, function(){
      this.setState({ results: calcResults(this.state) })
    });
  },
  handleChangeCompClass: function(evt) {
    this.setState({class2: evt.target.value}, function(){
      this.setState({ results: calcResults(this.state) })
    });
  },
  handleGetTime: function (evt) {
    this.setState({time: evt.target.value}, function(){
      var results = calcResults(this.state);
      this.setState({ results: results });
    });
    var userIndex = Indices[this.state.category][this.state.class] * this.state.time
  },
  handleGetCompTime: function (evt) {
    this.setState({time2: evt.target.value}, function(){
      this.setState({ results: calcResults(this.state) })
    });
  },
  render: function() {
    return (
      <div>
        <Calculator
          header={this.props.route.header}
          switchLink={this.state.switchLink}
          switchButton={this.state.switchButton}
          compare={this.state.compare}
          onShowCompare={this.handleShowCompare}
          onChangeCategory={this.handleChangeCategory}
          onChangeCompCategory={this.handleChangeCompCategory}
          onChangeClass={this.handleChangeClass}
          onChangeCompClass={this.handleChangeCompClass}
          getTime={this.handleGetTime}
          getCompTime={this.handleGetCompTime}
          cats={this.state.cats}
          classes={this.state.classes}
          classes2={this.state.classes2}
          time={this.state.time}
          time2={this.state.time2}
          results={this.state.results}
        />
        <main className="main2 col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">
          <h2>Time Equivalents</h2>
          <div className="row">
            <div className="col-xs-12 col-md-6">
            {Object.keys(Indices).map((category) => <p><b>{category}</b></p>)}

            </div>
          </div>
        </main>
      </div>
    );
  },
});

module.exports = CalculatorContainer;
