var React = require('react');
var Selections = require('./Selections');

var Solo = React.createClass({
  render: function () {
    return (
      <div>
        <section className="row">
          <article className="col-xs-12">
            <h1>SCCA RTP Calculator</h1>
            <h2>{this.props.header}</h2>
          </article>
        </section>
        <Selections pronoun="Your"/>
      </div>
    );
  },
});

module.exports = Solo;
