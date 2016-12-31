var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var SoloContainer = require('../containers/SoloContainer');
var ProSoloContainer = require('../containers/ProSoloContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute header="Solo Indices" component={SoloContainer} />
      <Route path="prosolo" header="ProSolo Indices" component={ProSoloContainer} />
    </Route>
  </Router>
);

module.exports = routes;
