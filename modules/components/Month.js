var React = require('react');
var pad = require('../utils/pad');

var Month = module.exports = React.createClass({
  displayName: 'Month',

  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    this.props.onChange(parseInt(event.target.value, 10));
  },

  render () {
    var options = this.props.locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      var text = `${pad(monthIndex)} ${monthName}`;
      return <option key={monthIndex} value={monthIndex}>{text}</option>;
    });
    return <select
      defaultValue={this.props.selectedMonth}
      onChange={this.handleChange}
    >{options}</select>;
  }
});


