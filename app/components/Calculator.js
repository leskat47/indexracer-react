var React = require('react');
var PropTypes = React.PropTypes;
var Selections = require('./Selections');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Calculator(props) {
  return (
    <div>
      <section className="row">
        <article className="col-xs-12">
          <h1>SCCA RTP Calculator</h1>
          <h2>{props.header} Indices</h2>
          <Link to={props.switchLink}>
            <button type="button">Switch to {props.switchButton}</button>
          </Link>
        </article>
      </section>
      <Selections />
    </div>
  );
}

Calculator.propTypes = {
  header: PropTypes.string.isRequired,
  switchLink: PropTypes.string.isRequired,
  switchButton: PropTypes.string.isRequired,
};

module.exports = Calculator;
