var React = require('react');
var numberRange = require('../utils/numberRange');

var Year = module.exports = React.createClass({
  displayName: 'Year',

  propTypes: {
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
    this.props.onChange(parseInt(event.target.value, 10));
  },

  render () {
    var { startYear, endYear, selectedYear } = this.props;
    var options = numberRange(startYear, endYear).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    return <select
      onChange={this.handleChange}
      defaultValue={selectedYear}
    >{options}</select>;
  }
});


