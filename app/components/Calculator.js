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
          <h3>{props.header} Indices</h3>
          <Link to={props.switchLink}>
            <div className="center">
              <button type="button">Switch to {props.switchButton}</button>
            </div>
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
