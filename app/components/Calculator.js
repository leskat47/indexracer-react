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
        <Selections
          cats={props.cats}
          onChangeCategory={props.onChangeCategory}
          onChangeClass={props.onChangeClass}
          showResults={props.getTime}
          classes={props.classes}
        />
      </article>
      {
        props.compare
        ? <article className="compinputs">
          <Selections
            pronoun="Competitor's"
            cats={props.cats}
            onChangeCategory={props.onChangeCompCategory}
            onChangeClass={props.onChangeCompClass}
            showResults={props.getCompTime}
            classes={props.classes2}
          />
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
      {
        props.results
        ?
        <section className="row">
          <article className="col-xs-12">
              <h2 className="result">Results</h2>
              <p id="resultComment">{props.results}</p>
          </article>
        </section>
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
  onChangeCategory: PropTypes.func.isRequired,
  cats: PropTypes.array.isRequired,
  classes: PropTypes.array,
};

module.exports = Calculator;
