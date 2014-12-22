var React = require('react');
var numberRange = require('../utils/numberRange');

var Year = module.exports = React.createClass({
  displayName: 'Year',

  propTypes: {
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  getDefaultProps () {
    var thisYear = new Date().getFullYear();
    return {
      startYear: thisYear - 10,
      endYear: thisYear + 10
    };
  },

  handleChange (event) {
    var { value } = this.props;
    var newDate = new Date(
      parseInt(event.target.value, 10),
      value.getMonth(),
      value.getDate()
    );
    this.props.onChange(newDate);
  },


  render () {
    var { startYear, endYear, value } = this.props;
    var options = numberRange(startYear, endYear).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    return <select
      onChange={this.handleChange}
      value={value.getFullYear()}
    >{options}</select>;
  }
});


