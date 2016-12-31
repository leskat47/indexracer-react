var React = require('react');

var Solo = React.createClass({
  render: function () {
    return (
      <div>
        <section className="row">
          <article className="col-xs-12">
            <h1>SCCA RTP Calculator</h1>
          </article>
        </section>
        <form>
          <select>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </form>
      </div>
    );
  },
});

module.exports = Solo;
