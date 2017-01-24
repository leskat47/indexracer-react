var React = require('react');
var PropTypes = React.PropTypes;
var Selections = require('./Selections');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Calculator(props) {
  return (
    <div>
      <main className="main col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
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
            time={props.time}
            onClearEntries={props.onClearEntries}
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
              time={props.time2}
            />
          </article>
          : null
        }
        {!props.compare
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
      </main>
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
  onChangeCompCategory: PropTypes.func.isRequired,
  cats: PropTypes.array.isRequired,
  onChangeClass: PropTypes.func.isRequired,
  onChangeCompClass: PropTypes.func.isRequired,
  classes: PropTypes.array,
  classes2: PropTypes.array,
  getTime: PropTypes.func.isRequired,
  getCompTime: PropTypes.func.isRequired,
  time: PropTypes.string,
  time2: PropTypes.string,
  results: PropTypes.string,
  clearEntries: PropTypes.func.isRequired,
};

module.exports = Calculator;
