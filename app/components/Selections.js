var React = require('react');

function Selections (props) {
  return (
    <form>
      <h2>{props.pronoun} SCCA Class Category: </h2>
      <select>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <h2>{props.pronoun}  SCCA Class: </h2>
      <select>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>
      <h2>Enter {props.pronoun} Time:</h2>
      <input type="text" />
      <button type="button">Clear</button>
    </form>
  );
}

module.exports = Selections;
