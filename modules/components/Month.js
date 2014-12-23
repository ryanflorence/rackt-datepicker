var React = require('react');
var pad = require('../utils/pad');
var cloneWithExclusions = require('../utils/cloneWithExclusions');

var Month = module.exports = React.createClass({
  displayName: 'Month',

  propTypes: {
    value: React.PropTypes.instanceOf(Date).isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    this.props.onChange(parseInt(event.target.value - 1, 10));
  },

  render () {
    var options = this.props.locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      var text = `${pad(monthIndex)} ${monthName}`;
      return <option key={monthIndex} value={monthIndex}>{text}</option>;
    });
    var props = cloneWithExclusions(this.props, [
      'locale', 'onChange', 'value'
    ]);
    props.value = this.props.value.getMonth()+1;
    props.onChange = this.handleChange;
    return <select {...props}>{options}</select>;
  }
});

