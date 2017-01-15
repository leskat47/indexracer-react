var React = require('react');
var PropTypes = React.PropTypes;

function Selections (props) {
  return (
    <div>
      <form>
        <h2>{props.pronoun} SCCA Class Category:</h2>
        <select onChange={props.onChangeCategory}>
          {props.cats.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
        </select>
        <h2>{props.pronoun}  SCCA Class:</h2>
        <select onChange={props.onChangeClass}>
          {props.classes.map((choice) => <option key={choice} value={choice}>{choice}</option>)}
        </select>
        <h2>Enter {props.pronoun} Time:</h2>
        <input type="text" value={props.time} onChange={props.showResults} />
      </form>
        <button type="button">Clear</button>
      </div>
  );
}

Selections.PropTypes = {
  pronoun: PropTypes.string,
  cats: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
};

module.exports = Selections;
