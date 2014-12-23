var React = require('react');
var numberRange = require('../utils/numberRange');
var cloneWithExclusions = require('../utils/cloneWithExclusions');

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
    this.props.onChange(parseInt(event.target.value, 10));
  },

  render () {
    var { startYear, endYear, value } = this.props;
    var options = numberRange(startYear, endYear).map((year) => {
      return <option key={year} value={year}>{year}</option>;
    });
    var props = cloneWithExclusions(this.props, [
      'locale', 'onChange', 'value'
    ]);
    props.onChange = this.handleChange;
    props.value = value.getFullYear();
    return <select {...props}>{options}</select>;
  }
});

