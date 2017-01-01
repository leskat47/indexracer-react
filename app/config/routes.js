var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var CalculatorContainer = require('../containers/CalculatorContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute header="Solo" component={CalculatorContainer} />
      <Route path="prosolo" header="ProSolo" component={CalculatorContainer} />
    </Route>
  </Router>
);

module.exports = routes;
