var React = require('react');
var numberRange = require('../utils/numberRange');
var DateFragment = require('../mixins/DateFragment');

var Year = module.exports = React.createClass({
  displayName: 'Year',

  mixins: [ DateFragment ],

  getDefaultProps () {
    var thisYear = new Date().getFullYear();
    return {
      startYear: thisYear - 10,
      endYear: thisYear + 10
    };
  },

  getOnChangeValue (event) {
    return parseInt(event.target.value, 10);
  },

  render () {
    var { startYear, endYear, value } = this.props;
    var options = numberRange(startYear, endYear).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    var props = this.propsForComponent();
    props.value = value.getFullYear();
    return <select {...props}>{options}</select>;
  }
});

