var React = require('react');
var PropTypes = React.PropTypes;
var Selections = require('./Selections');

var ProSolo = React.createClass({

  render: function () {
    return (
      <div>
        <section className="row">
          <article className="col-xs-12">
            <h1>SCCA RTP Calculator</h1>
            <h2>{this.props.header}</h2>
          </article>
        </section>
        <Selections />
      </div>
    );
  },
});

ProSolo.propTypes = {
  header: PropTypes.string.isRequired,
};

module.exports = ProSolo;
