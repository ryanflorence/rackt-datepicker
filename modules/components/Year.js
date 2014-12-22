var React = require('react');
var numberRange = require('../utils/numberRange');

var Year = module.exports = React.createClass({
  displayName: 'Year',

  getDefaultProps () {
    var thisYear = new Date().getFullYear();
    return {
      startYear: thisYear - 10,
      endYear: thisYear + 10
    };
  },

  render () {
    var { startYear, endYear, selectedYear } = this.props;
    var options = numberRange(startYear, endYear).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    return <select
      defaultValue={selectedYear}
    >{options}</select>;
  }
});


