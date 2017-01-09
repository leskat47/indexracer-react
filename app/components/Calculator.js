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
      <article className="userinputs">
        <Selections cats={props.cats}/>
      </article>
      {
        props.compare
        ? <article className="compinputs">
          <Selections pronoun="Competitor's" cats={props.cats}/>
          </article>
        : null
      }
      { !props.compare
        ?
        <article className="col-xs-12">
          <button type="button" onClick={props.onShowCompare}>Compare to Another Racer</button>
        </article>
        : null
      }
    </div>
  );
}

Calculator.propTypes = {
  header: PropTypes.string.isRequired,
  switchLink: PropTypes.string.isRequired,
  switchButton: PropTypes.string.isRequired,
  onShowCompare: PropTypes.func.isRequired,
  compare: PropTypes.bool.isRequired,
};

module.exports = Calculator;
