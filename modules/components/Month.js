var React = require('react');
var pad = require('../utils/pad');

var Month = module.exports = React.createClass({
  displayName: 'Month',

  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },

  handleChange (event) {
    this.props.onChange(event.target.value);
  },

  render () {
    var options = this.props.locale.months.map((monthName, index) => {
      var monthIndex = index + 1;
      return (
        <option key={monthName} value={monthIndex}>
          {pad(monthIndex)} {monthName}
        </option>
      );
    });
    return <select
      defaultValue={this.props.selectedMonth}
      onChange={this.handleChange}
    >{options}</select>;
  }
});


